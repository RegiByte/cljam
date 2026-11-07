---
{
  "type": "divergence",
  "name": "Missing arities",
  "summary": "Some core functions lack arities the JVM has.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L531-L549"]
}
---
`(doall 2 (range 5))` and `(dorun 2 (range 5))` throw `No matching arity`. The zero-argument `distinct` is in [[transducer-gaps]], and
the options arity of `read-string` is in [[read-string-contract]].
