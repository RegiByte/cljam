---
{
  "type": "divergence",
  "name": "case rejects lists and symbols as constants",
  "summary": "`case` evaluates its test constants, so list groups and symbol constants fail.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L1665-L1686"]
}
---
`(case :a (:a :b) 1)` is `1` on the JVM and throws `No matching clause: :a` here. `(case 'a a 1)` is `1` there and
`Symbol a not found` here. Keywords, numbers, strings and vectors work.
