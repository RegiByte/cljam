---
{
  "type": "divergence",
  "name": "One ns form per file or evaluation",
  "summary": "A file or a single evaluation may hold one `ns` form, and in an evaluation it must come first.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/session.ts#L363-L372", "cljam/packages/cljam/src/core/loader/ns-descriptor.ts#L151"]
}
---
A file with `(ns one) (def x 1) (ns two)` loads on the JVM. The CLI rejects it with
`A file may declare at most one namespace`, and `session.evaluate` rejects the same source with
`ns form must be the first form in an evaluation`. Each `ns` needs its own file or evaluation.
