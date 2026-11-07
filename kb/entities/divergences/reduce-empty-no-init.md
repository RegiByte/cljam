---
{
  "type": "divergence",
  "name": "reduce on an empty coll does not call f",
  "summary": "Without an init value, `reduce` on an empty collection throws instead of calling f with no arguments.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/hof.ts#reduce"]
}
---
`(reduce + [])` is `0` on the JVM and `(reduce * [])` is `1`. Here both throw `reduce called on empty collection with no
initial value`. So does `(reduce + nil)`, and the same with an empty list, map or lazy seq. `(apply + [])` works.
