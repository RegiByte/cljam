---
{
  "type": "divergence",
  "name": "File and stream IO is absent",
  "summary": "There is no reading or writing of files and streams from Clojure code.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/host/node-host-module.ts"]
}
---
`(slurp "/etc/hosts")` and `(spit "x" "a")` are `Symbol not found`, also under `nodePreset`. A browser host has no file system, so these need
a host capability, not a browser polyfill.

Absent vars: `slurp`, `spit`, `read`, `read+string`, `read-line`, `line-seq`, `file-seq`, `with-in-str`, `*in*`.
