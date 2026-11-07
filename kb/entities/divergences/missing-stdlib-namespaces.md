---
{
  "type": "divergence",
  "name": "Standard namespaces are absent",
  "summary": "Most `clojure.*` namespaces beyond string, set, walk, edn, math and test do not exist.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/registry.ts#L603"]
}
---
`(require '[clojure.zip :as z])` fails with `Namespace 'clojure.zip' not found`. The same for `clojure.pprint`, `clojure.repl`, `clojure.data`,
`clojure.template`, `clojure.stacktrace`, `clojure.java.io`, `clojure.java.shell`, `clojure.spec.alpha`, `clojure.instant`, `clojure.xml`,
`clojure.main`, `clojure.core.protocols`, `clojure.core.reducers`, `clojure.datafy`, `clojure.uuid` and `clojure.inspector`.

`pprint` and `doc` exist in `clojure.core` instead; see [[extra-core-vars]].
