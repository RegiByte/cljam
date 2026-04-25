import {
  createSession,
  type Session,
  type CljamLibrary,
} from '@regibyte/cljam'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve, isAbsolute } from 'node:path'
import { randomUUID } from 'node:crypto'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Preset = 'agent'

/**
 * Parsed `cljam.main` value. The colon separator avoids ambiguity with the
 * Clojure `/` symbol separator that already lives inside the namespace name.
 *   "workspace.demo"           → { ns: "workspace.demo" }
 *   "workspace.demo:bootstrap" → { ns: "workspace.demo", fn: "bootstrap" }
 */
export type MainSpec = {
  ns: string
  fn?: string
}

export type SessionRecord = {
  id: string
  session: Session
  preset: Preset
  rootDir?: string
  sourceRoots: string[]
  /** IDs of libraries installed into this session (for display). */
  libraryIds: string[]
  /** The verbatim `cljam.main` (or CLI override) used to bootstrap this session, if any. */
  main?: string
  /** Error message captured if main bootstrap failed. The session itself stays alive. */
  mainLoadError?: string
  createdAt: Date
  /** Mutable buffer — the session's output callback appends here. Reset before each eval. */
  outputBuffer: string[]
}

export type CreateSessionOptions = {
  rootDir?: string
  libraries?: CljamLibrary[]
  /** Bootstrap entrypoint: bare ns ("workspace.demo") or ns + fn ("workspace.demo:bootstrap"). */
  main?: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Walk upward from `startDir` looking for a `package.json` with
 * `cljam.sourceRoots`, mirroring the CLI/nREPL workspace behavior.
 */
export function discoverSourceRoots(startDir: string): string[] {
  let dir = resolve(startDir)
  const root = resolve('/')

  while (true) {
    const pkgPath = join(dir, 'package.json')
    if (existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8')) as Record<string, unknown>
        const cljam = pkg.cljam as Record<string, unknown> | undefined
        const configuredRoots = cljam?.sourceRoots
        if (Array.isArray(configuredRoots)) {
          const roots = configuredRoots
            .filter((r): r is string => typeof r === 'string')
            .map((r) => resolve(dir, r))
          return roots.length > 0 ? roots : [resolve(startDir)]
        }
      } catch {
        // Malformed package.json — keep walking and fall back if needed.
      }
    }

    if (dir === root) break
    dir = dirname(dir)
  }

  return [resolve(startDir)]
}

/**
 * Read `cljam.main` from `<rootDir>/package.json`. Direct read — no upward walk —
 * because the entrypoint is workspace-specific and should live with the project root.
 */
export function discoverMain(rootDir: string): string | undefined {
  try {
    const pkgPath = join(resolve(rootDir), 'package.json')
    if (!existsSync(pkgPath)) return undefined
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8')) as Record<string, unknown>
    const cljam = pkg.cljam as Record<string, unknown> | undefined
    const main = cljam?.main
    if (typeof main !== 'string') return undefined
    const trimmed = main.trim()
    return trimmed.length > 0 ? trimmed : undefined
  } catch {
    return undefined
  }
}

/**
 * Split a `cljam.main` string into namespace + optional bootstrap fn.
 * Throws if the spec is malformed (missing ns, dangling colon, etc).
 */
export function parseMainSpec(spec: string): MainSpec {
  const trimmed = spec.trim()
  if (trimmed.length === 0) {
    throw new Error('Empty main spec')
  }
  const idx = trimmed.indexOf(':')
  if (idx < 0) return { ns: trimmed }

  const ns = trimmed.slice(0, idx).trim()
  const fn = trimmed.slice(idx + 1).trim()
  if (ns.length === 0) throw new Error(`Invalid main spec '${spec}': missing namespace`)
  if (fn.length === 0) throw new Error(`Invalid main spec '${spec}': missing function name after ':'`)
  return { ns, fn }
}

function makeReadFile(rootDir?: string) {
  if (!rootDir) return undefined
  return (filePath: string) => {
    const abs = isAbsolute(filePath) ? filePath : resolve(rootDir, filePath)
    return readFileSync(abs, 'utf-8')
  }
}

function makeSessionOptions(
  rootDir: string | undefined,
  sourceRoots: string[],
  outputBuffer: string[],
  libraries?: CljamLibrary[]
) {
  return {
    output: (text: string) => outputBuffer.push(text),
    stderr: (text: string) => outputBuffer.push(`[stderr] ${text}`),
    importModule: (specifier: string) => import(specifier),
    hostBindings: {
      Math,
      console,
      process,
      Buffer,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
      fetch: globalThis.fetch,
    },
    allowedPackages: 'all' as const,
    allowedHostModules: 'all' as const,
    ...(rootDir
      ? {
          readFile: makeReadFile(rootDir),
          sourceRoots,
        }
      : {}),
    ...(libraries && libraries.length > 0 ? { libraries } : {}),
  }
}

/**
 * Run the bootstrap sequence for a session given a parsed main spec:
 *   1. (require '[ns])
 *   2. session.setNs(ns)
 *   3. if fn given: (ns/fn)
 * Errors are surfaced — the caller decides whether to swallow them as session metadata.
 */
async function applyMain(record: SessionRecord, parsed: MainSpec): Promise<void> {
  await record.session.evaluateAsync(`(require '[${parsed.ns}])`)
  record.session.setNs(parsed.ns)
  if (parsed.fn) {
    await record.session.evaluateAsync(`(${parsed.ns}/${parsed.fn})`)
  }
}

// ---------------------------------------------------------------------------
// SessionManager
// ---------------------------------------------------------------------------

export class SessionManager {
  private sessions = new Map<string, SessionRecord>()
  private readonly defaultRootDir?: string

  constructor(defaultRootDir?: string) {
    this.defaultRootDir = defaultRootDir ? resolve(defaultRootDir) : undefined
  }

  async create(opts: CreateSessionOptions = {}): Promise<SessionRecord> {
    const { rootDir, libraries, main } = opts
    const id = randomUUID()
    const effectiveRootDir = rootDir ? resolve(rootDir) : this.defaultRootDir
    const sourceRoots = effectiveRootDir ? discoverSourceRoots(effectiveRootDir) : []
    const outputBuffer: string[] = []
    const session = createSession(
      makeSessionOptions(effectiveRootDir, sourceRoots, outputBuffer, libraries)
    )

    const record: SessionRecord = {
      id,
      session,
      preset: 'agent',
      rootDir: effectiveRootDir,
      sourceRoots,
      libraryIds: (libraries ?? []).map((l) => l.id),
      createdAt: new Date(),
      outputBuffer,
    }

    if (main) {
      record.main = main
      try {
        const parsed = parseMainSpec(main)
        await applyMain(record, parsed)
      } catch (e) {
        record.mainLoadError = e instanceof Error ? e.message : String(e)
      }
    }

    this.sessions.set(id, record)
    return record
  }

  get(id: string): SessionRecord | undefined {
    return this.sessions.get(id)
  }

  delete(id: string): boolean {
    return this.sessions.delete(id)
  }

  list(): SessionRecord[] {
    return [...this.sessions.values()]
  }
}
