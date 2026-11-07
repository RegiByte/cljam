---
{
  "type": "divergence",
  "name": "Unresolved symbols fail at run time",
  "summary": "A symbol that resolves to nothing is accepted at analysis and throws only when evaluated.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/analyzer/resolve.ts"]
}
---
`(fn [] undefined-sym)` and `(defn g [] (undefined-fn 1))` are compile errors on the JVM. Here both are accepted and fail only
when called. `(if false undefined-sym 1)` is a compile error there and `1` here. A typo in a fn body stays hidden until
that line runs.
