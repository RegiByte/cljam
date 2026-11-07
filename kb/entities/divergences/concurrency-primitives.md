---
{
  "type": "divergence",
  "name": "Concurrency primitives are absent",
  "summary": "Futures, promises, agents, refs and the parallel helpers do not exist, and what they mean on one thread is undecided.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing"
}
---
`@(future 1)`, `(ref 1)` and `(agent 1)` are `Symbol not found`. Deref cannot block outside [[async-boundary]], so `future` needs a decision,
while `promise` and `ref` look direct to port.

Absent vars: `future`, `future-call`, `future-cancel`, `future-cancelled?`, `future-done?`, `future?`, `promise`, `deliver`, `ref`, `ref-set`,
`ref-history-count`, `ref-max-history`, `ref-min-history`, `alter`, `commute`, `ensure`, `dosync`, `sync`, `io!`, `locking`, `agent`,
`*agent*`, `agent-error`, `agent-errors`, `clear-agent-errors`, `restart-agent`, `error-handler`, `error-mode`, `set-error-handler!`,
`set-error-mode!`, `send`, `send-off`, `send-via`, `set-agent-send-executor!`, `set-agent-send-off-executor!`, `release-pending-sends`,
`shutdown-agents`, `await`, `await-for`, `await1`, `pmap`, `pcalls`, `pvalues`.
