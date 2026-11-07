---
{
  "type": "divergence",
  "name": "Regex matcher API is absent",
  "summary": "`re-matcher` and `re-groups` do not exist.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/regex.ts"]
}
---
`(let [m (re-matcher #"a" "a")] (re-find m) (re-groups m))` is `"a"` on the JVM and `Symbol re-matcher not found` here. `re-find`,
`re-matches` and `re-seq` work on strings.
