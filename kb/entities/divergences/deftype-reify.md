---
{
  "type": "divergence",
  "name": "deftype, reify and extend are absent",
  "summary": "Records are the only way to define a type, and protocols cannot be extended with `extend`.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L2055-L2064"]
}
---
`(deftype T [x])`, `(reify P (f [_] :ok))`, `(extend String P {...})` and `(extends? P String)` are `Symbol not found`. Absent vars: `deftype`, `reify`, `extend`, `extends?`. `defprotocol`,
`defrecord`, `extend-type` and `extend-protocol` exist; see [[protocol-class-dispatch]].
