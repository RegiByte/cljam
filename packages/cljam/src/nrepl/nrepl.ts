import * as net from 'net'
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { BDecoderStream, BEncoderStream } from './bencode'
import {
  createSession,
  createSessionFromSnapshot,
  cljNil,
  printString,
  readString,
  snapshotSession,
  withPrintContext,
  derefValue,
  resolveSessionProfile,
  type CljValue,
  type Session,
  type SessionSnapshot,
  type SessionProfile,
} from '@regibyte/cljam'
import { inferSourceRoot } from './nrepl-utils'
export { discoverSessionProfile } from './nrepl-utils'
export type { SessionProfile, SessionPresetName } from '@regibyte/cljam'
import {
  resolveSymbol as resolveSymbolShared,
  extractMeta as extractMetaShared,
} from './nrepl-symbol'
import { VERSION } from '../cli/version'
export { makeNodeHostModule } from '../host/node-host-module'
import { makeNodeHostModule } from '../host/node-host-module'

const CONJURE_VERSION = VERSION

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type NreplMessage = Record<string, unknown>

/** Streaming output chunk forwarded from a remote eval. */
type RemoteStreamChunk =
  | { type: 'out'; text: string }
  | { type: 'err'; text: string }

/** Minimal interface satisfied by MeshNode (structural — no import from the mesh experiment). */
export type RemoteEvalNode = {
  evalAt(
    targetId: string,
    source: string,
    ns?: string,
    timeoutMs?: number,
    onChunk?: (chunk: RemoteStreamChunk) => void
  ): Promise<{ value?: string; error?: string }>
}

type ManagedSession = {
  id: string
  session: Session
  /** Mutable: updated to the current eval message id before each eval call */
  currentMsgId: string
  /** Tracks which file each namespace was loaded from, for go-to-definition */
  nsToFile: Map<string, string>
}

// ---------------------------------------------------------------------------
// Session helpers
// ---------------------------------------------------------------------------

function makeSessionId(): string {
  return crypto.randomUUID()
}

function createManagedSession(
  id: string,
  snapshot: SessionSnapshot,
  encoder: BEncoderStream,
  sourceRoots?: string[],
  onOutput?: (text: string) => void,
  importModule?: (specifier: string) => unknown | Promise<unknown>,
  profile?: SessionProfile
): ManagedSession {
  let currentMsgId = ''

  const session = createSessionFromSnapshot(snapshot, {
    output: (text) => {
      send(encoder, { id: currentMsgId, session: id, out: text })
      onOutput?.(text)
    },
    readFile: (filePath) => readFileSync(filePath, 'utf8'),
    sourceRoots,
    importModule,
    ...(profile ? {
      hostBindings: profile.hostBindings,
      allowedHostModules: profile.allowedHostModules,
      allowedPackages: profile.allowedPackages,
    } : {}),
  })

  session.runtime.installModules([makeNodeHostModule(session)])

  return {
    id,
    session,
    get currentMsgId() {
      return currentMsgId
    },
    set currentMsgId(v) {
      currentMsgId = v
    },
    nsToFile: new Map(),
  }
}

// ---------------------------------------------------------------------------
// Protocol helpers
// ---------------------------------------------------------------------------

function send(encoder: BEncoderStream, msg: NreplMessage) {
  encoder.write(msg)
}

function done(
  encoder: BEncoderStream,
  id: string,
  sessionId: string | undefined,
  extra: NreplMessage = {}
) {
  // If the caller already sets status (e.g. ['eval-error', 'done']), preserve it.
  send(encoder, {
    id,
    ...(sessionId ? { session: sessionId } : {}),
    status: ['done'],
    ...extra,
  })
}

// ---------------------------------------------------------------------------
// Op handlers
// ---------------------------------------------------------------------------

function handleClone(
  msg: NreplMessage,
  serverSessions: Map<string, ManagedSession>,
  connectionSessionIds: Set<string>,
  snapshot: SessionSnapshot,
  encoder: BEncoderStream,
  sourceRoots?: string[],
  onOutput?: (text: string) => void,
  importModule?: (specifier: string) => unknown | Promise<unknown>,
  profile?: SessionProfile
) {
  const id = (msg['id'] as string) ?? ''
  const newId = makeSessionId()
  const managed = createManagedSession(newId, snapshot, encoder, sourceRoots, onOutput, importModule, profile)
  // Register in the server-wide map (visible to all connections via ls-sessions)
  // and in the per-connection set (for cleanup on socket close)
  serverSessions.set(newId, managed)
  connectionSessionIds.add(newId)
  process.stderr.write(`[nREPL] New session: ${newId}\n`)
  done(encoder, id, undefined, { 'new-session': newId })
}

function handleDescribe(msg: NreplMessage, encoder: BEncoderStream) {
  const id = (msg['id'] as string) ?? ''
  const sessionId = msg['session'] as string | undefined
  done(encoder, id, sessionId, {
    ops: {
      eval: {},
      clone: {},
      close: {},
      complete: {},
      describe: {},
      eldoc: {},
      info: {},
      lookup: {},
      'load-file': {},
      'ls-sessions': {},
    },
    versions: {
      conjure: { 'version-string': CONJURE_VERSION },
    },
  })
}

async function handleEval(
  msg: NreplMessage,
  managed: ManagedSession,
  encoder: BEncoderStream,
  meshNode?: RemoteEvalNode
): Promise<void> {
  const id = (msg['id'] as string) ?? ''
  const code = (msg['code'] as string) ?? ''

  managed.currentMsgId = id

  // Calva sends 1-based :line and :column for the start of the evaluated form
  // in the original file. Convert to 0-based offsets so evaluateDef can add
  // them to the relative positions the reader computes from the snippet.
  const lineOffset =
    typeof msg['line'] === 'number' ? (msg['line'] as number) - 1 : 0
  const colOffset =
    typeof msg['column'] === 'number' ? (msg['column'] as number) - 1 : 0

  // Mesh routing: if mesh/*eval-target* is set and a meshNode is provided, route remotely.
  // *eval-target* stores a CljString (set by set-target!) or CljNil (cleared).
  //
  // IMPORTANT: set-target! must ALWAYS run locally, regardless of the current target.
  // If routed, (mesh/set-target! nil) would run on the remote node and clear ITS var,
  // leaving the local target set — the user would be permanently stuck until reconnect.
  //
  // We detect "is this a set-target! call?" by resolving the head symbol in the local
  // environment, not by regex. This correctly handles namespace aliases (:as m → m/set-target!),
  // refers, and user renames — without any string matching on code.
  // Vars that must always evaluate locally — reading or calling them on a
  // remote node would return that node's state, not the local connection's.
  const MESH_LOCAL_ONLY = new Set(['set-target!', '*eval-target*'])
  const isMeshControl = (() => {
    try {
      const first = readString(code.trim())
      // Direct symbol read: mesh/*eval-target*
      if (first.kind === 'symbol') {
        const resolved = resolveSymbol(first.name, managed)
        return resolved?.resolvedNs === 'mesh' && MESH_LOCAL_ONLY.has(resolved.localName)
      }
      // Function call: (set-target! ...) or (mesh/set-target! ...)
      if (first.kind !== 'list' || first.value.length === 0) return false
      const head = first.value[0]
      if (head.kind !== 'symbol') return false
      const resolved = resolveSymbol(head.name, managed)
      return resolved?.resolvedNs === 'mesh' && MESH_LOCAL_ONLY.has(resolved?.localName ?? '')
    } catch {
      return false
    }
  })()

  if (!isMeshControl && meshNode) {
    const meshNs = managed.session.getNs('mesh')
    const evalTargetVar = meshNs?.vars.get('*eval-target*')
    const targetVal = evalTargetVar?.value
    if (targetVal?.kind === 'string' && targetVal.value) {
      const targetId = targetVal.value
      try {
        const result = await meshNode.evalAt(
          targetId,
          code,
          managed.session.currentNs,
          undefined,
          (chunk) => {
            // Stream each chunk back to the editor immediately as it arrives —
            // no buffering, works for million-line outputs and long-running evals.
            if (chunk.type === 'out')
              send(encoder, { id, session: managed.id, out: chunk.text })
            else send(encoder, { id, session: managed.id, err: chunk.text })
          }
        )
        if (result.error) {
          done(encoder, id, managed.id, {
            ex: result.error,
            err: result.error + '\n',
            ns: managed.session.currentNs,
            status: ['eval-error', 'done'],
          })
        } else {
          done(encoder, id, managed.id, {
            value: result.value ?? 'nil',
            ns: managed.session.currentNs,
          })
        }
      } catch (e) {
        const msg2 = e instanceof Error ? e.message : String(e)
        const isUnreachable =
          msg2.includes('not registered') || msg2.includes('Timeout')
        if (isUnreachable) {
          // Clear *eval-target* so the user isn't stuck on subsequent evals.
          // Do NOT fall through to local eval — the code was intended for the
          // remote node; running it locally could be dangerous or wrong.
          const meshNsClear = managed.session.getNs('mesh')
          const evalTargetVarClear = meshNsClear?.vars.get('*eval-target*')
          if (evalTargetVarClear) evalTargetVarClear.value = cljNil()

          const errMsg = `Node '${targetId}' unreachable — *eval-target* cleared. Eval dropped. Re-send to try on this node or try another node.\n`
          done(encoder, id, managed.id, {
            ex: errMsg,
            err: errMsg,
            ns: managed.session.currentNs,
            status: ['eval-error', 'done'],
          })
        } else {
          done(encoder, id, managed.id, {
            ex: msg2,
            err: msg2 + '\n',
            ns: managed.session.currentNs,
            status: ['eval-error', 'done'],
          })
        }
      }
      return
    }
  }

  try {
    // evaluateAsync awaits any CljPending result before returning, so async
    // forms, mesh/set-target!, mesh/list-nodes, etc. all resolve correctly
    // before the nREPL response is sent. Sync evals are unaffected.
    const result = await managed.session.evaluateAsync(code, {
      lineOffset,
      colOffset,
    })
    // Resolve *print-length* / *print-level* via the registry (same rationale
    // as emitToOut in core-module.ts: session.getNs goes through the runtime
    // registry so we always get the session's own freshly-cloned var, not a
    // stale one from a snapshot closure env).
    const coreNs = managed.session.getNs('clojure.core')
    const lenVar = coreNs?.vars.get('*print-length*')
    const lvlVar = coreNs?.vars.get('*print-level*')
    const printLen = lenVar ? derefValue(lenVar) : undefined
    const printLvl = lvlVar ? derefValue(lvlVar) : undefined
    const resultStr = withPrintContext(
      {
        printLength: printLen?.kind === 'number' ? printLen.value : null,
        printLevel: printLvl?.kind === 'number' ? printLvl.value : null,
      },
      () => printString(result)
    )
    done(encoder, id, managed.id, {
      value: resultStr,
      ns: managed.session.currentNs,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    done(encoder, id, managed.id, {
      ex: message,
      err: message + '\n',
      ns: managed.session.currentNs,
      status: ['eval-error', 'done'],
    })
  }
}

async function handleLoadFile(
  msg: NreplMessage,
  managed: ManagedSession,
  encoder: BEncoderStream
): Promise<void> {
  const id = (msg['id'] as string) ?? ''
  const source = (msg['file'] as string) ?? ''
  const fileName = (msg['file-name'] as string) ?? ''
  const filePath = (msg['file-path'] as string) ?? ''

  managed.currentMsgId = id

  try {
    // Dynamically infer source root from the file path + ns declaration.
    // This is the zero-config path: Calva sends the absolute path, and we
    // derive the root so sibling namespaces resolve via require.
    if (filePath) {
      const inferred = inferSourceRoot(filePath, source)
      if (inferred) {
        managed.session.addSourceRoot(inferred)
      }
    }

    const nsHint =
      fileName.replace(/\.clj$/, '').replace(/\//g, '.') || undefined

    // loadFileAsync handles both sync and string (:require ["pkg" :as X]) forms.
    // It falls back to the sync path internally if no async requires are present.
    const loadedNs = await managed.session.loadFileAsync(
      source,
      nsHint,
      filePath || undefined
    )

    // Track the file path for this namespace so info/lookup can return :file
    // for go-to-definition support.
    if (filePath && loadedNs) {
      managed.nsToFile.set(loadedNs, filePath)
    }

    // Switch the session's active namespace to the one declared in the loaded
    // file. Without this, subsequent eval ops land in the wrong namespace and
    // can't see the defs that were just loaded.
    managed.session.setNs(loadedNs)

    done(encoder, id, managed.id, {
      value: 'nil',
      ns: managed.session.currentNs,
    })
  } catch (error) {
    done(encoder, id, managed.id, {
      ex: error instanceof Error ? error.message : String(error),
      ns: managed.session.currentNs,
      status: ['eval-error', 'done'],
    })
  }
}

function handleComplete(
  msg: NreplMessage,
  managed: ManagedSession,
  encoder: BEncoderStream
) {
  const id = (msg['id'] as string) ?? ''
  const prefix = (msg['prefix'] as string) ?? ''
  const nsName = msg['ns'] as string | undefined

  const names = managed.session.getCompletions(prefix, nsName)
  const completions = names.map((c) => ({
    candidate: c,
    type: 'var',
    ns: managed.session.currentNs,
  }))

  done(encoder, id, managed.id, { completions })
}

function handleClose(
  msg: NreplMessage,
  sessions: Map<string, ManagedSession>,
  encoder: BEncoderStream
) {
  // cider sends a close message with an id
  const id = (msg['id'] as string) ?? ''
  const sessionId = (msg['session'] as string) ?? ''
  sessions.delete(sessionId)
  send(encoder, { id, session: sessionId, status: ['done'] })
}

function resolveSymbol(
  sym: string,
  managed: ManagedSession,
  contextNs?: string
) {
  return resolveSymbolShared(sym, managed.session, contextNs)
}

function extractMeta(resolved: {
  value: CljValue
  varObj?: import('./nrepl-symbol').ResolvedSymbol['varObj']
}) {
  return extractMetaShared(resolved.value, resolved.varObj?.meta)
}

function handleInfo(
  msg: NreplMessage,
  managed: ManagedSession,
  encoder: BEncoderStream
) {
  const id = (msg['id'] as string) ?? ''
  const sym = msg['sym'] as string | undefined
  const nsOverride = msg['ns'] as string | undefined

  if (!sym) {
    done(encoder, id, managed.id, { status: ['no-info', 'done'] })
    return
  }

  const resolved = resolveSymbol(sym, managed, nsOverride)
  if (!resolved) {
    // Check if sym is itself a namespace name (e.g. navigating to demo.math)
    const nsFile = managed.nsToFile.get(sym)
    if (nsFile) {
      done(encoder, id, managed.id, {
        ns: sym,
        name: sym,
        type: 'namespace',
        file: nsFile,
      })
      return
    }
    done(encoder, id, managed.id, { status: ['no-info', 'done'] })
    return
  }

  const meta = extractMeta(resolved)
  const file = managed.nsToFile.get(resolved.resolvedNs)

  // Extract :line/:column/:file from var meta if present (stamped by evaluateDef).
  let varLine: number | undefined
  let varColumn: number | undefined
  let varFile: string | undefined
  const varMetaEntries = resolved.varObj?.meta?.entries ?? []
  for (const [k, v] of varMetaEntries) {
    if (k.kind !== 'keyword') continue
    if (k.name === ':line' && v.kind === 'number') varLine = v.value
    if (k.name === ':column' && v.kind === 'number') varColumn = v.value
    if (k.name === ':file' && v.kind === 'string') varFile = v.value
  }

  done(encoder, id, managed.id, {
    ns: resolved.resolvedNs,
    name: resolved.localName,
    doc: meta.doc,
    'arglists-str': meta.arglistsStr,
    type: meta.type,
    ...((varFile ?? file) ? { file: varFile ?? file } : {}),
    ...(varLine !== undefined ? { line: varLine } : {}),
    ...(varColumn !== undefined ? { column: varColumn } : {}),
  })
}

function handleLookup(
  msg: NreplMessage,
  managed: ManagedSession,
  encoder: BEncoderStream
) {
  handleInfo(msg, managed, encoder)
}

function handleEldoc(
  msg: NreplMessage,
  managed: ManagedSession,
  encoder: BEncoderStream
) {
  const id = (msg['id'] as string) ?? ''
  const sym = msg['sym'] as string | undefined
  const nsOverride = msg['ns'] as string | undefined

  if (!sym) {
    done(encoder, id, managed.id, { status: ['no-eldoc', 'done'] })
    return
  }

  const resolved = resolveSymbol(sym, managed, nsOverride)
  if (!resolved) {
    done(encoder, id, managed.id, { status: ['no-eldoc', 'done'] })
    return
  }

  const meta = extractMeta(resolved)
  if (!meta.eldocArgs) {
    done(encoder, id, managed.id, { status: ['no-eldoc', 'done'] })
    return
  }

  done(encoder, id, managed.id, {
    name: resolved.localName,
    ns: resolved.resolvedNs,
    type: meta.type,
    eldoc: meta.eldocArgs,
  })
}

function handleLsSessions(
  msg: NreplMessage,
  serverSessions: Map<string, ManagedSession>,
  encoder: BEncoderStream
) {
  const id = (msg['id'] as string) ?? ''
  const sessionId = msg['session'] as string | undefined
  const ids: string[] = []
  const namespaces: string[] = []
  for (const [sid, m] of serverSessions) {
    ids.push(sid)
    namespaces.push(m.session.currentNs)
  }
  done(encoder, id, sessionId, {
    'session-ids': ids,
    'session-namespaces': namespaces,
  })
}

function handleUnknown(msg: NreplMessage, encoder: BEncoderStream) {
  const id = (msg['id'] as string) ?? ''
  send(encoder, { id, status: ['unknown-op', 'done'] })
}

// ---------------------------------------------------------------------------
// Per-connection dispatcher
// ---------------------------------------------------------------------------

function handleMessage(
  msg: NreplMessage,
  serverSessions: Map<string, ManagedSession>,
  connectionSessionIds: Set<string>,
  snapshot: SessionSnapshot,
  encoder: BEncoderStream,
  defaultSession: ManagedSession,
  sourceRoots?: string[],
  meshNode?: RemoteEvalNode,
  onOutput?: (text: string) => void,
  importModule?: (specifier: string) => unknown | Promise<unknown>,
  profile?: SessionProfile
) {
  const op = msg['op'] as string
  const sessionId = msg['session'] as string | undefined
  const managed = sessionId
    ? (serverSessions.get(sessionId) ?? defaultSession)
    : defaultSession

  switch (op) {
    case 'clone':
      handleClone(msg, serverSessions, connectionSessionIds, snapshot, encoder, sourceRoots, onOutput, importModule, profile)
      break
    case 'describe':
      handleDescribe(msg, encoder)
      break
    case 'eval':
      void handleEval(msg, managed, encoder, meshNode).catch((e) => {
        const m = e instanceof Error ? e.message : String(e)
        done(encoder, (msg['id'] as string) ?? '', managed.id, {
          ex: m,
          err: m + '\n',
          ns: managed.session.currentNs,
          status: ['eval-error', 'done'],
        })
      })
      break
    case 'load-file':
      void handleLoadFile(msg, managed, encoder).catch((e) => {
        const m = e instanceof Error ? e.message : String(e)
        done(encoder, (msg['id'] as string) ?? '', managed.id, {
          ex: m,
          err: m + '\n',
          ns: managed.session.currentNs,
          status: ['eval-error', 'done'],
        })
      })
      break
    case 'complete':
      handleComplete(msg, managed, encoder)
      break
    case 'close':
      handleClose(msg, serverSessions, encoder)
      break
    case 'ls-sessions':
      handleLsSessions(msg, serverSessions, encoder)
      break
    case 'info':
      handleInfo(msg, managed, encoder)
      break
    case 'lookup':
      handleLookup(msg, managed, encoder)
      break
    case 'eldoc':
      handleEldoc(msg, managed, encoder)
      break
    default:
      handleUnknown(msg, encoder)
  }
}

// ---------------------------------------------------------------------------
// Server startup
// ---------------------------------------------------------------------------

export type NreplServerOptions = {
  port?: number
  host?: string
  sourceRoots?: string[]
  /** Pre-created session (with modules already installed). Will be snapshotted internally. */
  session?: Session
  /** Or pass a pre-taken snapshot directly. Takes precedence over `session`. */
  snapshot?: SessionSnapshot
  /** Optional mesh node for routing eval ops when mesh/*eval-target* is set. */
  meshNode?: RemoteEvalNode
  /** Write .nrepl-port to cwd on listen. Default: true. Set false for embedded/server use. */
  writePortFile?: boolean
  /**
   * Called for every stdout chunk from any managed session (i.e. local evals from the editor).
   * Use this to echo output to the server terminal alongside the Calva encoder stream.
   * Example: onOutput: (t) => process.stdout.write(t)
   */
  onOutput?: (text: string) => void
  /**
   * Called when (:require ["specifier" :as Alias]) is encountered in an eval.
   * Forwarded to every managed session cloned from the snapshot.
   * Example: importModule: (s) => import(s)
   */
  importModule?: (specifier: string) => unknown | Promise<unknown>
  /**
   * Session capability profile — controls which JS globals are available as `js/<name>`,
   * which Node.js modules may be imported, and which Clojure library packages are allowed.
   *
   * Read from the workspace `package.json` via `discoverSessionProfile(rootDir)` when
   * using the CLI. Can also be passed directly for programmatic embedding.
   *
   * Defaults to the `'node'` preset when omitted: Math, JSON, Promise, console, Buffer,
   * and timers — no network (fetch) or platform (process) access.
   */
  profile?: SessionProfile
}

export function startNreplServer(options: NreplServerOptions = {}): net.Server {
  const port = options.port ?? 7888
  const host = options.host ?? '127.0.0.1'

  // Resolve profile: explicit option wins, then fall back to 'node' preset.
  // The profile is applied to every session clone — host bindings, module gates, etc.
  const profile: SessionProfile = options.profile ?? resolveSessionProfile('node')

  // Build a warm snapshot once — all clones skip the core bootstrap.
  // Callers may provide a pre-created session (with extra modules installed) or snapshot.
  // When building from scratch, apply the profile so the snapshot already has the
  // right host bindings baked in (clones inherit these via createSessionFromSnapshot).
  const snapshot: SessionSnapshot =
    options.snapshot ??
    (options.session
      ? snapshotSession(options.session)
      : snapshotSession(
          createSession({
            sourceRoots: options.sourceRoots,
            readFile: (filePath) => readFileSync(filePath, 'utf8'),
            hostBindings: profile.hostBindings,
            allowedHostModules: profile.allowedHostModules,
            allowedPackages: profile.allowedPackages,
            importModule: options.importModule,
          })
        ))

  const { meshNode, onOutput, importModule } = options

  // Server-wide session registry — visible to all connections via ls-sessions.
  // Moving this outside the per-socket callback is what makes cross-client
  // session discovery possible (e.g. listing Calva's session from cljam-mcp).
  const serverSessions = new Map<string, ManagedSession>()

  const server = net.createServer((socket) => {
    const encoder = new BEncoderStream()
    const decoder = new BDecoderStream()

    encoder.pipe(socket)
    socket.pipe(decoder)

    // Track which sessions belong to THIS connection so we can clean them up
    // when the socket closes without touching other connections' sessions.
    const connectionSessionIds = new Set<string>()

    // A default session for session-less messages (e.g. Calva's initial eval)
    const defaultId = makeSessionId()
    const defaultSession = createManagedSession(
      defaultId,
      snapshot,
      encoder,
      options.sourceRoots,
      onOutput,
      importModule,
      profile
    )
    serverSessions.set(defaultId, defaultSession)
    connectionSessionIds.add(defaultId)

    decoder.on('data', (msg: NreplMessage) => {
      handleMessage(
        msg,
        serverSessions,
        connectionSessionIds,
        snapshot,
        encoder,
        defaultSession,
        options.sourceRoots,
        meshNode,
        onOutput,
        importModule,
        profile
      )
    })

    socket.on('error', () => {
      // Connection dropped — nothing to clean up beyond GC
    })

    socket.on('close', () => {
      // Remove only this connection's sessions from the shared registry
      for (const id of connectionSessionIds) {
        serverSessions.delete(id)
      }
      connectionSessionIds.clear()
    })
  })

  const portFile = join(process.cwd(), '.nrepl-port')
  const writePortFile = options.writePortFile ?? true

  const cleanup = () => {
    if (existsSync(portFile)) unlinkSync(portFile)
  }

  if (writePortFile) {
    // CLI / standalone use: surface bind failures with a clear message and
    // exit non-zero so the parent (shell, Calva jack-in) doesn't hang waiting
    // for a banner that will never come.
    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        process.stderr.write(
          `\n✗ nREPL server failed to start: port ${port} on host ${host} is already in use.\n` +
            `  Another nREPL server is likely already running. Stop it with:\n` +
            `      lsof -i :${port}    # find the PID\n` +
            `      kill <pid>          # then re-run\n` +
            `  Or pass a different { port } to startNreplServer.\n\n`
        )
      } else if (err.code === 'EACCES') {
        process.stderr.write(
          `\n✗ nREPL server failed to start: permission denied for port ${port} on host ${host}.\n` +
            `  Use a port >= 1024 or run with elevated privileges.\n\n`
        )
      } else {
        process.stderr.write(
          `\n✗ nREPL server failed to start: ${err.message} (code: ${err.code ?? 'unknown'})\n\n`
        )
      }
      process.exit(1)
    })
    server.listen(port, host, () => {
      writeFileSync(portFile, String(port), 'utf8')
      process.stdout.write(
        `nREPL server started on port ${port} on host ${host} - nrepl://${host}:${port} (cljam v${VERSION})\n`
      )
    })
    server.on('close', cleanup)
    process.on('exit', cleanup)
    process.on('SIGINT', () => {
      cleanup()
      process.exit(0)
    })
    process.on('SIGTERM', () => {
      cleanup()
      process.exit(0)
    })
  } else {
    // Embedded use: emit 'error' as normal so the caller can attach their
    // own listener (`server.on('error', ...)`) and react however they like.
    server.listen(port, host)
  }

  return server
}
