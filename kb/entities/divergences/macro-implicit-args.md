---
{
  "type": "divergence",
  "name": "&form and &env are not bound in macros",
  "summary": "Macro bodies have no `&form` or `&env`, so macros cannot read their call form or the locals in scope.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/analyzer/resolve.ts#analyzeDefmacro"]
}
---
`(defmacro fm [] (list 'quote (some? &form))) (fm)` is `true` on the JVM and `Symbol &form not found` here. Macros that read
`(:line (meta &form))` or `(keys &env)` fail the same way.
