---
{
  "type": "divergence",
  "name": "Everyday macros are absent",
  "summary": "Common control and definition macros are missing, with no host reason.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing"
}
---
Absent: `if-not`, `doto`, `defonce`, `assert`, `lazy-cat`, `with-open`, `definline`. `doto` and `with-open` would need host calls, the
others are plain Clojure. `(if-not false 1)` fails with `Symbol if-not not found`.
