---
{
  "type": "divergence",
  "name": "str on a collection drops string quotes",
  "summary": "`str` on a collection renders nested strings without quotes, where the JVM uses readable form.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/utils.ts#strImpl", "cljam/packages/cljam/src/core/transformations.ts#valueToString"]
}
---
`(str ["a"])` is `"[\"a\"]"` on the JVM and `"[a]"` here. `(str {:a "b"})`, `(str '("a"))` and `(str #{"a"})` behave the same.

`(str (map inc [1]))` is `"clojure.lang.LazySeq@21"` on the JVM and `"(2)"` here, and `(str (fn []))` is a class name there and
`"(fn [] )"` here.
