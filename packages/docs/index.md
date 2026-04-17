---
layout: home

hero:
  name: cljam
  text: Clojure for JavaScript
  tagline: A Clojure interpreter that lives inside JavaScript. Embed it, REPL into it, give it to your LLM.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Try it in the browser
      link: /playground
    - theme: alt
      text: View on GitHub
      link: https://github.com/RegiByte/cljam

features:
  - icon: 🧩
    title: Embeddable
    details: One createSession() call gives you a sandboxed Clojure runtime in any JS/TS project. Inject host capabilities, evaluate strings.

  - icon: 🤖
    title: LLM-native
    details: cljam-mcp gives Claude (and friends) a persistent, stateful Clojure environment as MCP tool calls, not stateless one-shots.

  - icon: 🔌
    title: nREPL compatible
    details: A real TCP nREPL server. Calva, CIDER, and Cursive connect out of the box. Pair-program with an LLM in the same live runtime.

  - icon: 📦
    title: Library ecosystem
    details: cljam-schema, cljam-date, cljam-integrant. All installable from npm. Build and publish your own with cljam gen-lib-source.
---

<div class="home-stats">
  <span><strong>~70 KB</strong> gzipped</span>
  <span class="home-stats__sep">·</span>
  <span><strong>0</strong> runtime deps</span>
  <span class="home-stats__sep">·</span>
  <span><strong>3,500+</strong> tests</span>
  <span class="home-stats__sep">·</span>
  <span>Node · Bun · Browser</span>
</div>

<div class="home-section">

## Run Clojure right now

The snippet below is evaluated by cljam **in your browser** when you press Run. Edit it, re-run it, break it. It's the same interpreter that ships on npm.

<MiniRepl :code="`(->> (range 1 11)
     (filter odd?)
     (map #(* % %))
     (reduce +))`" />

Try editing the [Playground](/playground) for a full Monaco-powered REPL with multi-form evaluation, persistent state, and sample files.

</div>

<div class="home-section">

## Embed it in JavaScript

Drop a Clojure runtime into any JS/TS project. `createSession()` returns a plain object. Evaluate strings, hand the same session to an editor, give it to a tool call.

```typescript
import { createSession, printString, nodePreset } from '@regibyte/cljam'

const session = createSession({ ...nodePreset() })

const result = session.evaluate('(map inc [1 2 3])')
console.log(printString(result))
// => (2 3 4)
```

Inject your own host APIs through `hostBindings` and Clojure code can call straight into your TypeScript world. See the [Embedding guide](/guide/embedding) for the full surface.

</div>

<div class="home-section">

## Or open a REPL and connect your editor

cljam ships a real nREPL server, the same protocol Clojure tooling speaks officially. Install once, run once, and Calva / CIDER / Cursive will treat your Node or Bun process like any other Clojure runtime.

```bash
npm install -g @regibyte/cljam
cljam nrepl-server --port 7889 --root-dir .
```

Now evaluate forms straight from your editor against a live JavaScript process. Pair this with cljam-mcp and an LLM gets the same view of the same session you do.

</div>

<div class="home-section">

## A small but growing library ecosystem

```clojure
(require '[cljam.schema.core   :as s]
         '[cljam.date          :as date]
         '[cljam.integrant     :as ig])

(s/validate [:map [:name :string] [:age :int]]
            {:name "John Doe" :age 36})
;; => {:ok true :value {:name "John Doe" :age 36}}

(date/format (date/now) "de-DE" {:year "numeric" :month "long" :day "numeric"})
;; => "17. April 2026" (formatted date string)
```

Each library is a regular npm package under the [`@regibyte` scope](https://www.npmjs.com/~regibyte). Build your own with `cljam gen-lib-source`. See the [Building Libraries guide](/guide/libraries).

</div>

<div class="home-section home-section--story">

## Where this came from

> *"In February 2026, I had a question that had been sitting in my mind for a long while: how does an interpreter actually work? Not just the theory."*

cljam started as a learning project, one that taught me many things. I hope it may be useful or interesting enough for you to give it a try. If you're curious about the architecture, the bugs uncovered along the way, or why a Clojure dialect in TypeScript is even a thing, [read the build journey](/blog/building-cljam).

</div>

<style>
.home-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  gap: 0.4rem 1.2rem;
  padding: 1.6rem 1rem 1.4rem;
  margin: 0 auto;
  max-width: 960px;
  font-size: 0.92rem;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-divider);
}
.home-stats strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.home-stats__sep {
  color: var(--vp-c-text-3);
  opacity: 0.6;
}

.home-section {
  max-width: 960px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
}

.home-section h2 {
  border-top: none;
  padding-top: 0;
  margin-top: 0;
  font-size: 1.55rem;
  letter-spacing: -0.01em;
}

.home-section--story {
  margin-bottom: 3rem;
}

.home-section--story blockquote {
  border-left: 3px solid var(--vp-c-brand-1);
  padding: 0.25rem 0 0.25rem 1rem;
  font-style: italic;
  color: var(--vp-c-text-2);
  margin: 1rem 0 1.25rem;
}
</style>
