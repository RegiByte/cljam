#!/usr/bin/env node
/**
 * Build the public @regibyte/cljam library API to runnable ESM for Node.
 *
 * Output: dist/index.mjs — the "." package export for plain Node.
 * Bun and bundler-oriented development can still consume src/core/index.ts
 * through the bun/default conditions in package.json.
 *
 * Run with: node scripts/build-npm-library.mjs
 */

import { build } from 'esbuild'
import { mkdirSync } from 'node:fs'

mkdirSync('dist', { recursive: true })

await build({
  entryPoints: ['src/core/index.ts'],
  bundle: true,
  outfile: 'dist/index.mjs',
  platform: 'node',
  format: 'esm',
  target: ['node18'],
})

console.log('Built dist/index.mjs')
