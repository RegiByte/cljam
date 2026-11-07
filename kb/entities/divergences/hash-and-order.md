---
{
  "type": "divergence",
  "name": "Hashes and hash order differ",
  "summary": "`hash` returns different values, and maps and sets iterate in insertion order where the JVM uses hash order.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/arithmetic.ts#hashImpl", "cljam/packages/cljam/src/core/persistent/"]
}
---
`(hash "a")` is `1455541201` on the JVM and `-533258471` here; `(hash 1)` is `1392991556` and `1`. Equal values still hash equally.

Order follows from it. `(seq #{:a :b :c})` is `(:c :b :a)` on the JVM and `(:a :b :c)` here, and a map past eight entries such as
`(zipmap (range 12) (range 12))` iterates in hash order there and insertion order here. Small map literals keep insertion
order on both.

Absent vars: `hash-combine`, `hash-ordered-coll`, `hash-unordered-coll`, `mix-collection-hash`.
