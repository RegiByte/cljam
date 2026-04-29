import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve, join } from 'node:path'
import { extractNsName } from '../vite-plugin-cljam/namespace-utils'
import { resolveSessionProfile, type SessionProfile, type SessionPresetName } from '../presets'

// ---------------------------------------------------------------------------
// cljam.main discovery + parsing
// ---------------------------------------------------------------------------

export type MainSpec = {
  ns: string
  fn?: string
}

/**
 * Read `cljam.main` from `<rootDir>/package.json`. No upward walk — the
 * entrypoint is workspace-specific and must live at the project root.
 */
export function discoverMain(rootDir: string): string | undefined {
  const pkgPath = join(resolve(rootDir), 'package.json')
  if (!existsSync(pkgPath)) return undefined
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8')) as Record<string, unknown>
    const cljam = pkg?.cljam as Record<string, unknown> | undefined
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
 * Format: "my.ns" or "my.ns:bootstrap-fn".
 */
export function parseMainSpec(spec: string): MainSpec {
  const trimmed = spec.trim()
  if (trimmed.length === 0) throw new Error('Empty main spec')
  const idx = trimmed.indexOf(':')
  if (idx < 0) return { ns: trimmed }
  const ns = trimmed.slice(0, idx).trim()
  const fn = trimmed.slice(idx + 1).trim()
  if (ns.length === 0) throw new Error(`Invalid main spec '${spec}': missing namespace`)
  if (fn.length === 0) throw new Error(`Invalid main spec '${spec}': missing function name after ':'`)
  return { ns, fn }
}

/**
 * Given an absolute file path and the source it contains, infer the source
 * root directory by stripping the namespace-derived suffix from the path.
 *
 * Example:
 *   filePath = "/home/user/project/src/my/app.clj"
 *   ns       = "my.app"
 *   → "/home/user/project/src"
 */
export function inferSourceRoot(filePath: string, source: string): string | null {
  const nsName = extractNsName(source)
  if (!nsName) return null

  const normalizedPath = filePath.replace(/\\/g, '/')
  const nsSuffix = `/${nsName.replace(/\./g, '/')}.clj`
  if (!normalizedPath.endsWith(nsSuffix)) {
    return null
  }

  return normalizedPath.slice(0, -nsSuffix.length) || '/'
}

/**
 * Read the session profile from `<rootDir>/package.json` under the `cljam` key.
 * Applies the named preset and any additive host bindings, module gates, and
 * package gates declared there.
 *
 * Falls back to the `'node'` preset (safe Node.js scripting environment) when
 * no config is present — Math, JSON, Promise, console, Buffer, and timers,
 * with no network or platform access.
 *
 * Example package.json:
 *   {
 *     "cljam": {
 *       "preset": "node",
 *       "hostBindings": ["fetch", "crypto"],
 *       "allowedHostModules": ["node:path", "node:url", "node:fs"]
 *     }
 *   }
 */
export function discoverSessionProfile(rootDir: string): SessionProfile {
  const pkgPath = join(resolve(rootDir), 'package.json')
  if (!existsSync(pkgPath)) return resolveSessionProfile()
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8')) as Record<string, unknown>
    const cljam = pkg?.cljam as Record<string, unknown> | undefined
    if (!cljam) return resolveSessionProfile()

    const preset = (typeof cljam.preset === 'string' ? cljam.preset : 'node') as SessionPresetName
    const extraBindings = Array.isArray(cljam.hostBindings)
      ? cljam.hostBindings.filter((x): x is string => typeof x === 'string')
      : []
    const allowedHostModules =
      cljam.allowedHostModules === 'all' || Array.isArray(cljam.allowedHostModules)
        ? (cljam.allowedHostModules as string[] | 'all')
        : 'all'
    const allowedPackages =
      cljam.allowedPackages === 'all' || Array.isArray(cljam.allowedPackages)
        ? (cljam.allowedPackages as string[] | 'all')
        : 'all'

    return resolveSessionProfile(preset, extraBindings, allowedHostModules, allowedPackages)
  } catch {
    return resolveSessionProfile()
  }
}

/**
 * Walk upward from `startDir` looking for a `package.json` with a `"cljam"` key.
 * If found, resolve `cljam.sourceRoots` to absolute paths relative to the
 * package.json location and return them.
 *
 * Falls back to `[startDir]` if no config is found.
 */
export function discoverSourceRoots(startDir: string): string[] {
  let dir = resolve(startDir)
  const root = resolve('/')

  while (true) {
    const pkgPath = join(dir, 'package.json')
    if (existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
        if (pkg.cljam && Array.isArray(pkg.cljam.sourceRoots)) {
          const roots = (pkg.cljam.sourceRoots as string[]).map((r) =>
            resolve(dir, r)
          )
          return roots.length > 0 ? roots : [startDir]
        }
      } catch {
        // Malformed JSON — skip and keep walking
      }
    }

    if (dir === root) break
    dir = dirname(dir)
  }

  return [startDir]
}
