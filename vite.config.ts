import { defineConfig } from 'vite'
import { cljPlugin } from './src/vite-plugin-clj/index'
import { monaco } from '@bithero/monaco-editor-vite-plugin'

export default defineConfig({
  base: '/conjure-js/',
  plugins: [
    cljPlugin({ sourceRoots: ['src/clojure'] }),
    monaco({
      features: 'all',
      languages: ['clojure'], // Only include Clojure language support
      globalAPI: false,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
