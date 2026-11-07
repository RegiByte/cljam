---
{
  "type": "divergence",
  "name": "Seq functions return vectors",
  "summary": "Many functions that return seqs on the JVM return vectors, so `seq?` is false and results print with brackets.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L625-L640", "cljam/packages/cljam/src/core/modules/core/stdlib/maps-sets.ts#keysImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/maps-sets.ts#valsImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#restImpl", "cljam/packages/cljam/src/clojure/core.clj#L988-L1018", "cljam/packages/cljam/src/clojure/core.clj#L1393-L1418"]
}
---
`(sort [2 1])` is `(1 2)` on the JVM and `[1 2]` here, `(seq? (sort [1]))` is `false`, `(vector? (sort [1]))` is `true`.

The same holds for `sort-by`, `keys`, `vals`, `flatten`, `rest` and `nthrest` on a vector, `cons` onto a vector, `distinct`,
`drop-last`, `reductions`, `list*`, both parts of `split-at` and `split-with`, and `partition`, which returns a vector of
vectors. `partition-all` and `partition-by` return a seq of vectors, so `(partition-by even? [1 1 2])` is `([1 1] [2])`.

Related differences in the same family: `(keys {})` and `(vals {})` are `[]` here and `nil` on the JVM, `(sort nil)` is `[]`
where the JVM gives `()`, `(empty (map inc [1]))` is `nil`, not `()`, `(list? (rest '(1 2)))` is `false` where the JVM says
`true`, and `(list? (cons 1 '(2)))` is `true` where the JVM says `false`.
