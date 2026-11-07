---
{
  "type": "divergence",
  "name": "Regexes use the JavaScript dialect",
  "summary": "Regex literals run on the host RegExp engine, so Java-only syntax fails or matches differently.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "justified",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/regex.ts#extractInlineFlags", "cljam/packages/cljam/src/core/reader.ts#readRegex"]
}
---
`(re-find #"\Aa\z" "a")`, `(re-find #"\p{Alpha}" "a")`, `(re-find #"\Qa.b\E" "a.b")` and `(re-find #"[a&&[^b]]" "a")` match on the
JVM and return `nil` here. `(re-find #"a++" "aa")` and `(?x)` are errors here.

**Reason.** A regex is a host value, as in ClojureScript, and shipping a Java regex engine to match this syntax costs more than
it gains. Named groups, `(?i)`, `(?s)` and `(?m)` behave the same.
