import { defineConfig } from 'vite'
import { monaco } from '@bithero/monaco-editor-vite-plugin'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

// Alias @regibyte/cljam to TypeScript source directly, bypassing package.json
// exports resolution. Rollup's [commonjs--resolver] fails on the exports field
// in CI; the alias plugin runs first and short-circuits before it is reached.
const cljamEntry = resolve(fileURLToPath(new URL('.', import.meta.url)), '../cljam/src/core/index.ts')

export default defineConfig({
  base: '/cljam/playground/',
  plugins: [
    monaco({
      features: 'all',
      languages: ['clojure'],
      globalAPI: false,
    }),
  ],
  resolve: {
    alias: {
      '@regibyte/cljam': cljamEntry,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
