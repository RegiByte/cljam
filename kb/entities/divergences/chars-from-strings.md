---
{
  "type": "divergence",
  "name": "Strings traverse as strings, not chars",
  "summary": "Sequence operations over a string yield one-character strings, where JVM Clojure yields chars.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/transformations.ts#toSeq"]
}
---
`(= \a (first "a"))` is `true` on the JVM and `false` here, and `(seq "ab")` gives `("a" "b")` instead of `(\a \b)`.

cljam has a char type and `char?`, but [`toSeq`](ref:cljam/packages/cljam/src/core/transformations.ts#toSeq) maps a
string's characters to strings. No host constraint forces this. It stays open until traversal yields chars.
