import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { afterEach, describe, expect, it } from 'vitest'
import { printString } from '@regibyte/cljam'
import {
  discoverMain,
  discoverSourceRoots,
  parseMainSpec,
  SessionManager,
} from './session-manager'

const tempDirs: string[] = []

function makeWorkspace(): string {
  const dir = mkdtempSync(join(tmpdir(), 'cljam-mcp-workspace-'))
  tempDirs.push(dir)
  return dir
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

describe('discoverSourceRoots', () => {
  it('reads cljam.sourceRoots from package.json', () => {
    const root = makeWorkspace()
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { sourceRoots: ['src/clojure', 'dev'] } })
    )

    expect(discoverSourceRoots(root)).toEqual([
      join(root, 'src/clojure'),
      join(root, 'dev'),
    ])
  })

  it('falls back to the workspace root', () => {
    const root = makeWorkspace()

    expect(discoverSourceRoots(root)).toEqual([root])
  })
})

describe('discoverMain', () => {
  it('reads cljam.main from package.json', () => {
    const root = makeWorkspace()
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { main: 'workspace.demo' } })
    )

    expect(discoverMain(root)).toBe('workspace.demo')
  })

  it('returns undefined when no package.json', () => {
    const root = makeWorkspace()
    expect(discoverMain(root)).toBeUndefined()
  })

  it('returns undefined when cljam.main is missing', () => {
    const root = makeWorkspace()
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { sourceRoots: ['src'] } })
    )
    expect(discoverMain(root)).toBeUndefined()
  })

  it('returns undefined for a non-string main field', () => {
    const root = makeWorkspace()
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { main: ['workspace.demo'] } })
    )
    expect(discoverMain(root)).toBeUndefined()
  })
})

describe('parseMainSpec', () => {
  it('parses a bare namespace', () => {
    expect(parseMainSpec('workspace.demo')).toEqual({ ns: 'workspace.demo' })
  })

  it('parses ns + fn separated by colon', () => {
    expect(parseMainSpec('workspace.demo:bootstrap')).toEqual({
      ns: 'workspace.demo',
      fn: 'bootstrap',
    })
  })

  it('trims whitespace around segments', () => {
    expect(parseMainSpec('  workspace.demo : bootstrap-fn  ')).toEqual({
      ns: 'workspace.demo',
      fn: 'bootstrap-fn',
    })
  })

  it('rejects an empty string', () => {
    expect(() => parseMainSpec('')).toThrow(/empty/i)
  })

  it('rejects a missing namespace before the colon', () => {
    expect(() => parseMainSpec(':bootstrap')).toThrow(/missing namespace/i)
  })

  it('rejects a dangling colon with no fn', () => {
    expect(() => parseMainSpec('workspace.demo:')).toThrow(/missing function/i)
  })
})

describe('SessionManager', () => {
  it('uses the default root dir for new sessions', async () => {
    const root = makeWorkspace()
    const src = join(root, 'src')
    mkdirSync(join(src, 'demo'), { recursive: true })
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { sourceRoots: ['src'] } })
    )
    writeFileSync(
      join(src, 'demo', 'core.clj'),
      '(ns demo.core)\n(defn greet [name] (str "hello " name))\n'
    )

    const manager = new SessionManager(root)
    const record = await manager.create()

    await record.session.evaluateAsync("(require '[demo.core :as demo])")
    const result = await record.session.evaluateAsync('(demo/greet "workspace")')

    expect(record.rootDir).toBe(root)
    expect(record.sourceRoots).toEqual([src])
    expect(printString(result)).toBe('"hello workspace"')
  })

  it('lets an explicit root dir override the default', async () => {
    const defaultRoot = makeWorkspace()
    const overrideRoot = makeWorkspace()
    const manager = new SessionManager(defaultRoot)

    const record = await manager.create({ rootDir: overrideRoot })

    expect(record.rootDir).toBe(overrideRoot)
    expect(record.sourceRoots).toEqual([overrideRoot])
  })

  it('creates Node-capable agent sessions', async () => {
    const manager = new SessionManager()
    const record = await manager.create()

    const result = await record.session.evaluateAsync(`
      (ns user
        (:require ["node:path" :as path]))
      (js/call (js/get path "basename") "/tmp/cljam.txt")
    `)

    expect(record.preset).toBe('agent')
    expect(record.session.capabilities.allowDynamicImport).toBe(true)
    expect(record.session.capabilities.allowedHostModules).toBe('all')
    expect(printString(result)).toBe('"cljam.txt"')
  })

  it('auto-requires the main namespace and switches into it', async () => {
    const root = makeWorkspace()
    const src = join(root, 'src')
    mkdirSync(join(src, 'workspace'), { recursive: true })
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { sourceRoots: ['src'], main: 'workspace.demo' } })
    )
    writeFileSync(
      join(src, 'workspace', 'demo.clj'),
      '(ns workspace.demo)\n(defn greet [name] (str "hello " name))\n'
    )

    const manager = new SessionManager(root)
    const record = await manager.create({ main: 'workspace.demo' })

    expect(record.main).toBe('workspace.demo')
    expect(record.mainLoadError).toBeUndefined()
    expect(record.session.currentNs).toBe('workspace.demo')

    // greet is callable unqualified because we're inside the ns now
    const result = await record.session.evaluateAsync('(greet "Regi")')
    expect(printString(result)).toBe('"hello Regi"')
  })

  it('runs the bootstrap fn after requiring the main namespace', async () => {
    const root = makeWorkspace()
    const src = join(root, 'src')
    mkdirSync(join(src, 'workspace'), { recursive: true })
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { sourceRoots: ['src'] } })
    )
    writeFileSync(
      join(src, 'workspace', 'demo.clj'),
      [
        '(ns workspace.demo)',
        '(def state (atom []))',
        '(defn bootstrap [] (swap! state conj :booted))',
      ].join('\n')
    )

    const manager = new SessionManager(root)
    const record = await manager.create({ main: 'workspace.demo:bootstrap' })

    expect(record.main).toBe('workspace.demo:bootstrap')
    expect(record.mainLoadError).toBeUndefined()
    expect(record.session.currentNs).toBe('workspace.demo')

    // bootstrap pushed :booted onto state
    const result = await record.session.evaluateAsync('@state')
    expect(printString(result)).toBe('[:booted]')
  })

  it('keeps the session alive when main bootstrap fails', async () => {
    const root = makeWorkspace()
    writeFileSync(
      join(root, 'package.json'),
      JSON.stringify({ cljam: { sourceRoots: ['src'] } })
    )

    const manager = new SessionManager(root)
    const record = await manager.create({ main: 'workspace.does-not-exist' })

    expect(record.main).toBe('workspace.does-not-exist')
    expect(record.mainLoadError).toBeDefined()

    // session is still usable
    const result = await record.session.evaluateAsync('(+ 1 2)')
    expect(printString(result)).toBe('3')
    expect(record.session.currentNs).toBe('user')
  })

  it('records a parse error from a malformed main spec', async () => {
    const manager = new SessionManager()
    const record = await manager.create({ main: ':bootstrap' })

    expect(record.mainLoadError).toMatch(/missing namespace/i)
    expect(record.session.currentNs).toBe('user')
  })
})
