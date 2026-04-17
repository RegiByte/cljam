import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Playground from './Playground.vue'
import MiniRepl from './MiniRepl.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Playground', Playground)
    app.component('MiniRepl', MiniRepl)
  },
} satisfies Theme
