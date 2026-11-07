---
{
  "type": "divergence",
  "name": "get and friends miss some collection types",
  "summary": "`get` on a set returns nil, and `find` and `contains?` reject types the JVM accepts.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#getImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/maps-sets.ts#findImpl"]
}
---
`(get #{1} 1)` is `1` on the JVM and `nil` here, though `(#{1} 1)` works. `(find [1] 0)` is `[0 1]` there and throws here, and
`(contains? "a" 0)` is `true` there and throws here.
