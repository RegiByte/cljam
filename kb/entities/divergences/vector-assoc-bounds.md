---
{
  "type": "divergence",
  "name": "assoc on a vector skips bounds checks",
  "summary": "`assoc` with a negative or fractional index corrupts the vector, where the JVM throws.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/maps-sets.ts#assocImpl"]
}
---
`(assoc [1 2 3] -1 :x)` throws `IndexOutOfBoundsException` on the JVM. Here it prints as `[1 2 3]`, and the backing array holds
a stray `"-1"` property. `(assoc [1 2 3] 1.5 :x)` throws `Key must be integer` there and prints `[1 2 3]` here. Past the end,
`(assoc [1 2 3] 5 :x)` does throw.
