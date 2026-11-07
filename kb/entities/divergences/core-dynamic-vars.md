---
{
  "type": "divergence",
  "name": "Core dynamic vars are absent",
  "summary": "Most of the dynamic vars in `clojure.core` do not exist, so binding them fails.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/printer.ts#buildPrintContext"]
}
---
`(binding [*print-meta* true] ...)` fails with `No var found for symbol`, and so does `*print-readably*`. `*out*` and `*err*`
exist but are `nil`, and `(clojure-version)` is `"1.12.0"`.

Absent vars: `*1`, `*2`, `*3`, `*e`, `*assert*`, `*clojure-version*`, `*command-line-args*`, `*file*`, `*flush-on-newline*`,
`*in*`, `*math-context*`, `*print-dup*`, `*print-meta*`, `*print-namespace-maps*`, `*print-readably*`, `*read-eval*`,
`*repl*`, `*unchecked-math*`.
