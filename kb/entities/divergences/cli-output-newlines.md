---
{
  "type": "divergence",
  "name": "The Node output sink adds a newline per write",
  "summary": "Under `nodePreset` each write to stdout gets its own newline, so `print` breaks lines and `println` emits two.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/presets.ts#nodePreset"]
}
---
A file holding `(print "a") (print "b") (println "c")` writes `abc` and one newline on the JVM. The CLI writes `a`, `b`, `c` on separate
lines with a blank line after, and `pr` and `prn` do the same. The sink appends a newline to text that already carries its own.

`with-out-str` is unaffected and matches the JVM byte for byte.
