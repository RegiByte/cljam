---
{
  "type": "divergence",
  "name": "One double-precision number type",
  "summary": "Every number is an IEEE-754 double, so integers and floats are indistinguishable and integers lose exactness past 2^53.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/types.ts#CljNumber"]
}
---
| Form | JVM | cljam |
|---|---|---|
| `(= 1 1.0)` | `false` | `true` |
| `(count {1 :a 1.0 :b})` | `2` | `1` |
| `(str 1.0)`, `1e3` | `"1.0"`, `1000.0` | `"1"`, `1000` |
| `(integer? 1.0)`, `(float? 1.0)` | `false`, `true` | `true`, `false` |
| `(/ 1 2)` | `1/2` | `0.5` |
| `9007199254740993` | exact | `9007199254740992` |
| `(+ 9223372036854775807 1)` | throws `long overflow` | `9223372036854776000` |
| `(pr-str 1e21)` | `"1.0E21"` | `"1e+21"` |
| `(pr-str -0.0)` | `"-0.0"` | `"0"` |

`int?` and `double?` answer `true` for every whole number, so `(double? 1)` is `true`. All of these are in
[`CljNumber`](ref:cljam/packages/cljam/src/core/types.ts#CljNumber), and they get fixed: see [[number-model]].
