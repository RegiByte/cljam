---
{
  "type": "divergence",
  "name": "Map destructuring treats vectors as kwargs",
  "summary": "A map pattern applied to a vector reads the vector as a key-value sequence instead of calling `get` on it.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L1884-L1898"]
}
---
`(let [{a 0} [10 20]] a)` is `10` on the JVM and `nil` here. `(let [{:keys [a]} [:a 1]] a)` is `nil` there and `1` here.

The JVM turns only seqs into a map. cljam [applies `hash-map`](ref:cljam/packages/cljam/src/clojure/core.clj#L1884-L1898) to any
sequential value, so `(let [{:keys [a]} [:a 1 :b]] a)` fails with a `hash-map` error.
