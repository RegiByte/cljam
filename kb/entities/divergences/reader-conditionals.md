---
{
  "type": "divergence",
  "name": "Reader conditionals are not implemented",
  "summary": "The reader rejects `#?` and `#?@`, and `.cljc` files are not loaded.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/tokenizer.ts#parseDispatch"]
}
---
`#?(:default 3)` is `3` on the JVM and `Unknown dispatch character: #?` here. `[#?@(:default [1 2])]` fails the same way.
The JVM also takes `(read-string {:read-cond :allow} "#?(:clj 1)")`, covered by [[read-string-contract]].

Implementing it follows [[reader-features]]. `reader-conditional` and `reader-conditional?` are absent.
