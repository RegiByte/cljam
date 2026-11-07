---
{
  "type": "divergence",
  "name": "Records can be called as functions",
  "summary": "Records are callable like maps, where JVM records do not implement IFn.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/predicates.ts#ifnPredImpl"]
}
---
With `(defrecord R [x y])`, `((->R 5 6) :x)` throws on the JVM and returns `5` here. `((->R 5 6) :w)` throws there and returns
`nil` here. `(ifn? (->R 5 6))` is `false` and `true`.
