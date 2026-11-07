---
{
  "type": "divergence",
  "name": "Regexes use the JavaScript dialect",
  "summary": "Regex literals run on the host RegExp engine, so Java-only syntax fails or matches differently.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/regex.ts#extractInlineFlags", "cljam/packages/cljam/src/core/reader.ts#readRegex"]
}
---
`(re-find #"\Aa\z" "a")`, `(re-find #"\p{Alpha}" "a")`, `(re-find #"\Qa.b\E" "a.b")` and `(re-find #"[a&&[^b]]" "a")` match on the
JVM and return `nil` here. `(re-find #"a++" "aa")` and `(?x)` are errors here.

The host engine is a fixed constraint: a regex is a host RegExp, as in ClojureScript, so a Java engine is not the goal. That does
not cover the silent `nil`. `\A`, `\z` and `\Q...\E` can be translated to RegExp syntax, and syntax with no translation can be
rejected at read time, as `(?x)` already is. Named groups, `(?i)`, `(?s)` and `(?m)` behave the same.
