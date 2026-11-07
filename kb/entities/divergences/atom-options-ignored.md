---
{
  "type": "divergence",
  "name": "atom options are ignored",
  "summary": "`atom` takes one argument, so `:validator` and `:meta` have no effect.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/atoms.ts#atom"]
}
---
`(reset! (atom 0 :validator pos?) -1)` throws on the JVM and returns `-1` here. `(meta (atom 0 :meta {:x 1}))` is `{:x 1}` there
and `nil` here. `set-validator!` works, but does not check the current value: `(set-validator! (atom 0) pos?)` throws on the JVM.
`get-validator` and `reset-meta!` are absent.
