---
{
  "type": "divergence",
  "name": "Multimethod API is absent",
  "summary": "Methods cannot be listed, removed or preferred.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/multimethods.ts"]
}
---
`prefer-method`, `prefers`, `methods`, `get-method`, `remove-method` and `remove-all-methods` are `Symbol not found`, so an
ambiguous dispatch cannot be resolved with a preference.
