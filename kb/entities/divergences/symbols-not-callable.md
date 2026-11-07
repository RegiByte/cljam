---
{
  "type": "divergence",
  "name": "Symbols cannot be called",
  "summary": "A symbol is not a function here, so symbol lookup in a map fails.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/predicates.ts#ifnPredImpl"]
}
---
`('a {'a 1})` is `1` on the JVM and `('a {} :d)` is `:d`. Here both throw `(quote a) is not callable`, and `(ifn? 'a)` is `false`.
Keywords, maps, sets and vectors are callable.
