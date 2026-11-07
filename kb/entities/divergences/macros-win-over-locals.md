---
{
  "type": "divergence",
  "name": "Macros win over local bindings",
  "summary": "A local binding with the same name as a macro does not shadow it, so the macro expands anyway.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/analyzer/resolve.ts#lookupMacro"]
}
---
`(let [when (fn [& _] :local)] (when false 1))` is `:local` on the JVM and `nil` here. `(let [and ...] (and 1 2))`,
`letfn` and fn parameters behave the same way.

[`lookupMacro`](ref:cljam/packages/cljam/src/core/analyzer/resolve.ts#lookupMacro) looks the head symbol up without checking
the locals in scope.
