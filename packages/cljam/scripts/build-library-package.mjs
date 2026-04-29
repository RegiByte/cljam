#!/usr/bin/env node
/**
 * Bundle a @regibyte/cljam-* satellite library to dist/library.mjs for plain Node dynamic import().
 * Keeps `@regibyte/cljam` external (peer): Node resolves it to JS via package exports (`node` -> dist/index.mjs).
 *
 * Run from the library package directory, e.g.:
 *   node ../cljam/scripts/build-library-package.mjs --entry schema.ts
 */
import { build } from 'esbuild'
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'

const entryIndex = process.argv.indexOf('--entry')
if (entryIndex === -1 || !process.argv[entryIndex + 1]) {
  console.error('Usage: build-library-package.mjs --entry <file.ts>')
  process.exit(1)
}

const entry = process.argv[entryIndex + 1]
const entryBase = entry.replace(/\.tsx?$/, '')
const requireFromPackage = createRequire(pathToFileURL(resolve(process.cwd(), 'package.json')))
const tscBin = requireFromPackage.resolve('typescript/bin/tsc')

mkdirSync('dist', { recursive: true })

await build({
  entryPoints: [entry],
  bundle: true,
  outfile: 'dist/library.mjs',
  platform: 'node',
  format: 'esm',
  target: ['node18'],
  external: ['@regibyte/cljam'],
})

execFileSync(process.execPath, [
  tscBin,
  '-p',
  'tsconfig.json',
  '--emitDeclarationOnly',
  '--declaration',
  '--declarationMap',
  'false',
  '--outDir',
  'dist',
  '--noEmit',
  'false',
  '--noUnusedLocals',
  'false',
  '--noUnusedParameters',
  'false',
], { stdio: 'inherit' })

console.error(`Built dist/library.mjs and dist/${entryBase}.d.ts`)
