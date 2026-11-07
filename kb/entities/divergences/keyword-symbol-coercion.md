---
{
  "type": "divergence",
  "name": "keyword and symbol accept only strings",
  "summary": "The one-argument `keyword` and `symbol` reject the keywords, symbols, vars and nil the JVM accepts.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/utils.ts#keywordImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/utils.ts#symbolImpl"]
}
---
`(keyword 'a)` and `(keyword :a)` are `:a` on the JVM, `(keyword nil)` is `nil` and `(keyword 1)` is `nil`. `(symbol :a)` is `a`
and `(symbol #'map)` is `clojure.core/map`. Here each throws `expects a string`, except `(symbol 'a)`.
