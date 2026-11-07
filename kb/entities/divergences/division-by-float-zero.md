---
{
  "type": "divergence",
  "name": "Float division by zero throws",
  "summary": "Dividing a float by zero throws, where the JVM returns an infinity or NaN.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/arithmetic.ts#divide"]
}
---
`(/ 1.0 0.0)` is `##Inf` on the JVM, `(/ 0.0 0.0)` is `##NaN` and `(/ 1 0.0)` is `##Inf`. Here all three throw
`division by zero`. Follows from [[one-number-type]]: `(/ 1 0)` must throw, and with one number type `1` and `1.0` look
the same to [`/`](ref:cljam/packages/cljam/src/core/modules/core/stdlib/arithmetic.ts#divide).
