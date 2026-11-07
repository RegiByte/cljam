---
{
  "type": "divergence",
  "name": "last, reverse and rest reject some seqables",
  "summary": "`last` and `reverse` accept only lists and vectors, and `rest` and `next` reject sets, so they fail on lazy seqs and ranges.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#lastImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#reverseImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#restImpl"]
}
---
`(reverse (range 3))` is `(2 1 0)` on the JVM and throws `reverse expects a list or vector` here. `(last (range 3))`,
`(last (map inc [1]))`, `(reverse (map inc [1]))`, `(reverse (seq [1]))`, `(last #{1})` and `(reverse {:a 1})` all fail the
same way. A vector or a realized list works.

`(rest #{1 2})`, `(next #{1})` and `(second #{1})` throw `rest expects a collection or string`.
