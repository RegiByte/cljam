---
{
  "type": "divergence",
  "name": "print and str crash on indexed seqs",
  "summary": "`print`, `println` and `str` throw on the seq a vector, map or set produces, though `pr-str` handles it.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/transformations.ts#valueToString"]
}
---
`(with-out-str (println (seq [1 2])))` is `"(1 2)\n"` on the JVM and throws `unhandled value type: indexed-seq` here. So do `(str (seq [1 2]))`,
`(print (next [1 2 3]))`, `(println (seq "hi"))`, `(println (seq {:a 1}))` and `(println (seq #{1}))`. `pr-str` and `prn` work.

[`valueToString`](ref:cljam/packages/cljam/src/core/transformations.ts#valueToString) has no case for that value kind.
