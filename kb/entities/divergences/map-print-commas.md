---
{
  "type": "divergence",
  "name": "Maps print without commas",
  "summary": "Maps print with spaces only, where the JVM separates entries with a comma.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/core/printer.ts#printString"]
}
---
`(pr-str {:a 1 :b 2})` is `"{:a 1, :b 2}"` on the JVM and `"{:a 1 :b 2}"` here. `str` and `print` do the same, and so do namespaced
maps: `#:a{:b 1, :c 2}` against `#:a{:b 1 :c 2}`. Both read back as equal values.
