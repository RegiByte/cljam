#!/usr/bin/env node
/**
 * Generates src/clojure/core-source.ts from src/clojure/core.clj.
 *
 * Run manually whenever core.clj changes:
 *   npm run gen:core-source
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const cljPath = resolve(root, 'src/clojure/core.clj')
const tsPath = resolve(root, 'src/clojure/core-source.ts')

const source = readFileSync(cljPath, 'utf-8')

// Escape characters that would break a TypeScript template literal
const escaped = source
  .replaceAll('\\', '\\\\')  // backslashes first
  .replaceAll('`', '\\`')    // backtick (quasiquote in Clojure)
  .replaceAll('${', '\\${')  // template interpolation syntax

const output = [
  '// Auto-generated from src/clojure/core.clj — do not edit directly.',
  '// Re-generate with: npm run gen:core-source',
  'export const coreSource = `\\',
  escaped + '`',
].join('\n') + '\n'

writeFileSync(tsPath, output, 'utf-8')
console.log(`Generated ${tsPath}`)
