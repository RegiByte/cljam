---
{
  "type": "divergence",
  "name": "Strings traverse as strings, not chars",
  "summary": "Sequence operations over a string yield one-character strings, where JVM Clojure yields chars.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/transformations.ts#toSeq", "cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#getImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#nthImpl"]
}
---
`(= \a (first "a"))` is `true` on the JVM and `false` here, and `(seq "ab")` gives `("a" "b")` instead of `(\a \b)`. `vec`, `set`, `map`,
`filter`, `reduce`, `frequencies`, `sort`, `zipmap` and `into` see the same strings, so `(filter #(= % \a) "aba")` is `()` here.

Indexing is missing too: `(get "abc" 1)` is `\b` on the JVM and `nil` here, `(nth "abc" 1)` throws, and `(let [[a b] "hi"] [a b])` throws
`Cannot destructure`. `(reverse "ab")` is in [[seq-fns-reject-seqs]].

cljam has a char type and `char?`, but [`toSeq`](ref:cljam/packages/cljam/src/core/transformations.ts#toSeq) maps a
string's characters to strings. No host constraint forces this. It also walks code points where the JVM walks UTF-16 units, so
`(seq "😀")` has one element here and two there, while `(count "😀")` is `2` on both. It stays open until traversal yields chars.
