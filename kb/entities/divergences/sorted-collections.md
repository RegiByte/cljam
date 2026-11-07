---
{
  "type": "divergence",
  "name": "Sorted collections are absent",
  "summary": "There are no sorted maps or sets, and no reversible seq API.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing"
}
---
Absent vars: `sorted-map`, `sorted-map-by`, `sorted-set`, `sorted-set-by`, `sorted?`, `subseq`, `rsubseq`, `rseq`, `reversible?`.
`rseq` is absent for vectors too: `(rseq [1 2 3])` is `(3 2 1)` on the JVM.
