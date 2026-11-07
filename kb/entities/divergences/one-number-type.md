---
{
  "type": "divergence",
  "name": "One double-precision number type",
  "summary": "Every number is an IEEE-754 double, so integers and floats are indistinguishable and integers lose exactness past 2^53.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/types.ts#CljNumber"]
}
---
On the JVM, `(= 1 1.0)` is `false`, `{1 :a 1.0 :b}` has two entries, `(str 1.0)` is `"1.0"`, longs overflow with an
error and `9007199254740993` reads exactly. Here `(= 1 1.0)` is `true`, the map has one entry, `(str 1.0)` is `"1"`,
overflow returns a double, and large literals lose precision when read.

Open pending a decision on the number model. The body records the reason once one is made.
