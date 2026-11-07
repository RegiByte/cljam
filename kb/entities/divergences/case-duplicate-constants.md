---
{
  "type": "divergence",
  "name": "case accepts duplicate constants",
  "summary": "`case` takes the first of two equal test constants, where the JVM refuses to compile the form.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L1677-L1690"]
}
---
`(case 1 1 :a 1 :b)` throws `Duplicate case test constant: 1` on the JVM and returns `:a` here. `(case :a :a 1 :a 2)`
behaves the same. The list groups in [[case-constants]] fail for a different reason.
