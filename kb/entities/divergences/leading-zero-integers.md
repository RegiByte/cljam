---
{
  "type": "divergence",
  "name": "Leading zeros are not octal",
  "summary": "An integer with a leading zero reads as decimal, where the JVM reads it as octal.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/tokenizer.ts#parseNumber"]
}
---
`017` is `15` on the JVM and `17` here. `-017` is `-15` and `-17`. `08` is a read error on the JVM and `8` here.
