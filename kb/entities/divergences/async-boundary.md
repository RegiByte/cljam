---
{
  "type": "divergence",
  "name": "async is a lexical boundary",
  "summary": "cljam adds `(async ...)`, where `@` on a pending value awaits, and that context ends at any nested fn.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "justified",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/analyzer/resolve.ts#L1049-L1082", "cljam/packages/cljam/src/core/modules/core/stdlib/atoms.ts#L60-L70"]
}
---
`(async 1)` has no JVM counterpart. `@(async 1)` outside `async` throws `@ on a pending value requires an (async ...) context`,
where a JVM deref of a pending value blocks. A nested fn does not inherit the context:
`(async (let [f (fn [] @(async 1))] (f)))` rejects with the same error.

**Reason.** JavaScript has one thread and cannot block on a pending value, so `@` can only suspend inside an `async` body. As in
JavaScript, a closure is not `async` because the code around it is: it needs its own `(async ...)`.
