---
{
  "type": "divergence",
  "name": "flatten only descends into lists and vectors",
  "summary": "`flatten` leaves lazy seqs and other seq types nested.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L551-L562"]
}
---
`(flatten (list (range 2)))` is `(0 1)` on the JVM and `[(0 1)]` here, and `(flatten (list (list 1) (seq [2])))` is `(1 2)`
there and `[1 (2)]` here. [`flatten-step`](ref:cljam/packages/cljam/src/clojure/core.clj#L551-L562) tests `list?` and `vector?`,
where the JVM tests `sequential?`. It also returns a vector; see [[seq-fns-return-vectors]].
