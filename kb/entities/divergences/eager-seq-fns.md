---
{
  "type": "divergence",
  "name": "Some lazy functions are eager",
  "summary": "Several functions that are lazy on the JVM realize their whole input, so they hang on infinite seqs.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L531-L549", "cljam/packages/cljam/src/clojure/core.clj#L1393-L1418", "cljam/packages/cljam/src/clojure/core.clj#L1454-L1460", "cljam/packages/cljam/src/clojure/core.clj#L1472-L1485"]
}
---
`(first (partition 3 (range)))` is `(0 1 2)` on the JVM and hangs here. So do `(first (distinct (range)))`,
`(first (reductions + (range)))`, `(first (split-at 2 (range)))` and `(first (split-with #(< % 3) (range)))`.

`partition-all`, `partition-by`, `map`, `filter`, `mapcat`, `take-nth`, `keep`, `interleave`, `interpose`, `dedupe`,
`concat` and `drop-while` stay lazy.
