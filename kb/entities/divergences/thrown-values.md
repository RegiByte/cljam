---
{
  "type": "divergence",
  "name": "Thrown values are not exceptions",
  "summary": "Any value can be thrown and errors are plain maps, where the JVM throws Throwable instances with their own messages.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/errors.ts", "cljam/packages/cljam/src/core/session.ts#extractExMessage"]
}
---
`(throw 1)` is an error on the JVM (`Long` cannot be cast to `Throwable`). Here it throws `1`, and
`(try (throw 1) (catch :default e e))` returns `1`.

A caught error is a map: `(map? e)` is `true` and `(:message e)` works, where the JVM gives `false` and `nil`. Host error
text differs too: `(/ 1 0)` reports `division by zero` instead of `Divide by zero`, and `(ex-message e)` for
`(nth [1] 5)` is a sentence where the JVM's is `nil`. `Throwable->map` is absent. Open until the error model is
redesigned; see [[catch-class-names]].
