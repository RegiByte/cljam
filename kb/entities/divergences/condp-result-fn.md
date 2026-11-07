---
{
  "type": "divergence",
  "name": "condp has no :>> form",
  "summary": "`condp` treats `:>>` as an ordinary result expression, so it returns the keyword and never calls the result function.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L1640-L1661"]
}
---
`(condp some [1] #{1} :>> inc)` is `2` on the JVM, which passes the predicate's result to `inc`. Here it is `:>>`, and the
form after it is read as the next clause.
