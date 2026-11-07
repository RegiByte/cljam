---
{
  "type": "divergence",
  "name": "Var and binding API is partial",
  "summary": "The functions that query vars and manage thread bindings are absent.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/vars.ts"]
}
---
`(bound? #'v)` and `(thread-bound? #'v)` work on the JVM and are `Symbol not found` here.

Absent vars: `bound?`, `thread-bound?`, `bound-fn`, `bound-fn*`, `var-set`, `with-local-vars`, `with-bindings`,
`with-bindings*`, `with-redefs-fn`, `get-thread-bindings`, `push-thread-bindings`, `pop-thread-bindings`, `test`.
