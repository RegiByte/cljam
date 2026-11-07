---
{
  "type": "divergence",
  "name": "iterate calls its fn too early",
  "summary": "`iterate` computes the next element before it is needed, so its fn runs one extra time.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L1279-L1283"]
}
---
`(let [n (atom 0)] (first (iterate (fn [x] (swap! n inc) x) 0)) @n)` is `0` on the JVM and `1` here. Taking two elements
gives `1` and `2`. The fn runs even for the element nobody asks for, which matters when it has side effects or throws.
