---
{
  "type": "divergence",
  "name": ":pre and :post conditions are not supported",
  "summary": "A `:pre`/`:post` map in a function body is an ordinary expression, so preconditions never run and `%` in a postcondition does not resolve.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/analyzer/resolve.ts#L1062-L1063"]
}
---
`(defn f [x] {:pre [(pos? x)]} x)` then `(f -1)` throws `AssertionError` on the JVM and returns `-1` here, and `fn` behaves
the same. The condition map is evaluated and discarded, so `(pos? x)` has no effect. `(defn f [x] {:post [(pos? %)]} x)`
throws `Symbol % not found` here on every call, even when the JVM's condition holds.
