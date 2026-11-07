---
{
  "type": "divergence",
  "name": "conj on a map only takes pairs",
  "summary": "`conj` on a map rejects maps and nil, and `merge` rejects pair vectors.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#conjImpl"]
}
---
`(conj {:a 1} {:b 2})` is `{:a 1, :b 2}` on the JVM and throws here. `(conj {} {})` and `(conj {:a 1} nil)` throw too, and
`(into {} [{:a 1} {:b 2}])` fails with them. `(merge {:a 1} [:b 2])` also throws. `(conj {:a 1} [:b 2])` works.
