---
{
  "type": "divergence",
  "name": "Records print with a slash tag",
  "summary": "A record prints as `#ns/Name{...}`, which `read-string` cannot read back.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/core/printer.ts#printString"]
}
---
`(pr-str (->P 1))` is `"#user.P{:x 1}"` on the JVM and `"#user/P{:x 1}"` here. On the JVM `read-string` returns the record. Here it throws
`Reader tags (#user/P) are only supported in EDN mode`. `(str (->P 1))` also prints the fields, where the JVM prints `user.P@hash`.
