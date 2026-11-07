---
{
  "type": "divergence",
  "name": "compare handles few types",
  "summary": "`compare` rejects vectors, symbols and booleans, so `sort` fails on them.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/arithmetic.ts#compareImpl"]
}
---
`(compare [1 2] [1 3])` is `-1` on the JVM, `(compare 'a 'b)` is `-1` and `(compare true false)` is `1`. Here all three throw
`compare: cannot compare`. `(sort [[3] [1 2]])`, `(sort ['b 'a])` and `(sort [true false])` fail with them. Numbers, strings,
keywords, chars and nil compare.
