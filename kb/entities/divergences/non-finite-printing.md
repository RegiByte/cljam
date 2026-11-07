---
{
  "type": "divergence",
  "name": "NaN and infinities print in JavaScript form",
  "summary": "`pr-str` prints `NaN` and `Infinity`, which do not read back, where the JVM prints `##NaN` and `##Inf`.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/core/printer.ts#printString"]
}
---
With `clojure.math` as `m`, `(pr-str (m/sqrt -1))` is `"##NaN"` on the JVM and `"NaN"` here. `(pr-str (m/pow 10 400))` is `"##Inf"` and
`"Infinity"`, and the negative case is `"##-Inf"` and `"-Infinity"`. `str` is `"NaN"` on both.
