---
{
  "type": "divergence",
  "name": "class, type and instance? have no class model",
  "summary": "There are no class objects, so `class` returns strings, `type` returns keywords and `instance?` is always false.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/bootstrap.ts#L264-L289", "cljam/packages/cljam/src/core/modules/core/stdlib/utils.ts#typeImpl"]
}
---
| Form | JVM | cljam |
|---|---|---|
| `(class 1)` | `java.lang.Long` | `"conjure.number"` |
| `(class nil)` | `nil` | `"conjure.nil"` |
| `(type "s")` | `java.lang.String` | `:string` |
| `(type nil)` | `nil` | `:nil` |
| `(type (with-meta [] {:type :x}))` | `:x` | `:vector` |
| `(instance? String "a")` | `true` | `false` |
| `(isa? Long Number)` | `true` | `false` |

[`instance?`](ref:cljam/packages/cljam/src/core/bootstrap.ts#L264-L272) ignores its arguments and returns `false`, and the
`conjure.` prefix is a leftover of an old project name. `defrecord` defines no class symbol: `P` does not resolve after
`(defrecord P [x])`, where `(instance? P (->P 1))` is `true` on the JVM. `(defmulti f class)` with `String` as a dispatch
value finds no method. `class?`, `parents` and `ancestors` on classes return `false` or `nil`. Open until the class
model is redesigned together with the errors.
