---
{
  "type": "divergence",
  "name": "Transients are absent",
  "summary": "There are no transient collections.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing"
}
---
Absent vars: `transient`, `persistent!`, `conj!`, `assoc!`, `dissoc!`, `pop!`, `disj!`. Code written for speed with
`(persistent! (reduce conj! (transient []) xs))` fails with `Symbol transient not found`.
