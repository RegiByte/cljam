---
{
  "type": "divergence",
  "name": "Numeric tower API is absent",
  "summary": "Coercions, ratio and bigint functions, unchecked math and extra bit operations do not exist.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/types.ts#CljNumber"]
}
---
`(== 1 1.0)`, `(double 1)` and `(long 1.9)` are `Symbol not found` here, while `int` exists.

Absent vars: `==`, `*'`, `+'`, `-'`, `inc'`, `dec'`, `num`, `double`, `float`, `long`, `short`, `byte`, `bigdec`, `bigint`, `biginteger`,
`decimal?`, `ratio?`, `rational?`, `rationalize`, `numerator`, `denominator`, `with-precision`, `bit-and-not`, `bit-clear`, `bit-flip`,
`bit-set`, `bit-test`, and the `unchecked-*` family. What each means follows from [[one-number-type]].
