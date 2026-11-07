---
{
  "type": "divergence",
  "name": "Some empty seq results are nil",
  "summary": "`(concat)` and `empty` on a seq return nil, where the JVM returns an empty seq.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L1254-L1259", "cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#emptyImpl"]
}
---
`(concat)`, `(empty (map inc [1]))`, `(empty (range 3))`, `(empty (filter odd? [1]))` and `(empty (seq [1]))` are all `()` on
the JVM and `nil` here. `(concat nil)` and `(concat [] [])` already return `()`. `(empty (rest [1]))` is `[]` here, as in
[[seq-fns-return-vectors]].
