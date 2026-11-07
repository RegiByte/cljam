---
{
  "type": "divergence",
  "name": "Some reader errors report 0-based positions",
  "summary": "Tokenizer errors count lines and columns from 0, while the parser and the JVM count from 1.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/core/tokenizer.ts#L203", "cljam/packages/cljam/src/core/reader.ts#fmtLoc"]
}
---
`\o101` on the first line reports `at line 0 column 0`, `1.` the same, and an unterminated string reports a raw offset.
Parser errors [add 1](ref:cljam/packages/cljam/src/core/reader.ts#fmtLoc), so `(read-string "(")` says `line 1 column 1`.
