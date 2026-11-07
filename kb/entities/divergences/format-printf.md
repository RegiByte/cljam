---
{
  "type": "divergence",
  "name": "format and printing extension are absent",
  "summary": "`format`, `printf` and the `print-method` extension point do not exist.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing"
}
---
`(format "%d %s" 1 "a")` is `"1 a"` on the JVM and `Symbol format not found` here. On the JVM `format` delegates to `java.util.Formatter`,
so its directives need a host-side definition.

Absent vars: `format`, `printf`, `flush`, `print-method`, `print-dup`, `print-simple`, `print-ctor`, `char-escape-string`, `char-name-string`.
