---
{
  "type": "divergence",
  "name": "Uncaught ex-info prints [object Object]",
  "summary": "An uncaught `ex-info` at the CLI prints `[object Object]`, with no message, data or position.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/cli/cli.ts#L208-L211"]
}
---
`(throw (ex-info "boom" {:a 1}))` in a file run by the CLI writes `[object Object]`. The JVM reports `Execution error (ExceptionInfo)
at user/eval (a.clj:2).`, the message, and a full report. The [handler](ref:cljam/packages/cljam/src/cli/cli.ts#L208-L211) stringifies a
thrown value that is not an `Error`.
