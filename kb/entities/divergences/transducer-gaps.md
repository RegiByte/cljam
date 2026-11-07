---
{
  "type": "divergence",
  "name": "Transducer gaps",
  "summary": "Several transducers and transducer contexts are absent.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L531-L549"]
}
---
`(into [] cat [[1] [2]])` is `[1 2]` on the JVM and `Symbol cat not found` here. `(into [] (distinct) [1 1 2])` fails because
[`distinct`](ref:cljam/packages/cljam/src/clojure/core.clj#L531-L549) has no transducer arity.

Absent vars: `cat`, `eduction`, `halt-when`, `random-sample`, `iteration`, `seque`, `stream-into!`, `stream-reduce!`, `stream-seq!`,
`stream-transduce!`.
