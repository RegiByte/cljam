---
{
  "type": "divergence",
  "name": "Most numeric literal forms do not read",
  "summary": "The tokenizer reads decimal numbers only, so hex, radix, ratio, bigint, bigdec and symbolic literals fail.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/tokenizer.ts#parseNumber", "cljam/packages/cljam/src/core/tokenizer.ts#parseDispatch"]
}
---
`0xFF`, `2r101`, `36rZZ`, `1/2`, `1N` and `1.5M` read on the JVM. Here the
[number scanner](ref:cljam/packages/cljam/src/core/tokenizer.ts#parseNumber) stops at the first letter, so `0xFF` fails with
`Symbol xFF not found` and `1/2` with `Symbol /2 not found`.

`##Inf`, `##-Inf` and `##NaN` fail with `Unknown dispatch character: ##`, `1.` is `Invalid number format`, and `+1` is
`Symbol +1 not found`. Which of these can exist follows from [[one-number-type]].
