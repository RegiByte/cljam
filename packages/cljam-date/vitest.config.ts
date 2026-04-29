import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    // Vitest (Node env) would resolve @regibyte/cljam to dist/index.mjs via the
    // "node" export condition. Tests must run against the live source so changes
    // are visible immediately without a rebuild step.
    alias: {
      '@regibyte/cljam': resolve('../cljam/src/core/index.ts'),
    },
  },
})
