---
{
  "type": "divergence",
  "name": "identical? is false for equal keywords and numbers",
  "summary": "`identical?` compares boxed objects, so two occurrences of the same keyword, number or string differ.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/predicates.ts#identicalPredImpl"]
}
---
`(identical? :a :a)` and `(identical? :a (keyword "a"))` are `true` on the JVM and `false` here. So are `(identical? 1 1)` and
`(identical? "a" "a")`, which are `true` there through caching and interning. `=` works. Every keyword is a fresh box;
[[unboxed-values-transition]] bears on this.
