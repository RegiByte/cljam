---
{
  "type": "divergence",
  "name": "String and char escapes are incomplete",
  "summary": "String literals handle only five escapes and pass anything else through, and octal char literals do not read.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/tokenizer.ts#L102-L123"]
}
---
`"\101"` is `"A"` on the JVM and `"101"` here. `"\b\f"` is a backspace and a form feed there and `"bf"` here. The
[string scanner](ref:cljam/packages/cljam/src/core/tokenizer.ts#L102-L123) handles `\"`, `\\`, `\n`, `\r` and `\t`, then
keeps the next character for anything else, where the JVM reads every other unknown escape as an error.

`\o101` is `\A` on the JVM and `Unknown character literal` here.
