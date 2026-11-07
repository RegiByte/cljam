---
{
  "type": "divergence",
  "name": "Seqs are not chunked",
  "summary": "Lazy seqs realize one element at a time, where the JVM realizes 32 at a time from chunked sources.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/lazy.ts"]
}
---
Values are identical, but side-effect counts differ. `(let [n (atom 0)] (first (map (fn [x] (swap! n inc) x) (range 100))) @n)`
is `32` on the JVM and `1` here.

Absent vars: `chunk`, `chunk-append`, `chunk-buffer`, `chunk-cons`, `chunk-first`, `chunk-next`, `chunk-rest`, `chunked-seq?`.
