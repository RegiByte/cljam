---
{
  "type": "divergence",
  "name": "special-symbol? answers from cljam's own list",
  "summary": "`special-symbol?` reports cljam's special forms, so it is true for core macros and false for several JVM special forms.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/bootstrap.ts#L320-L330", "cljam/packages/cljam/src/core/keywords.ts#specialFormKeywords"]
}
---
| Form | JVM | cljam |
|---|---|---|
| `(special-symbol? 'defmacro)` | `false` | `true` |
| `(special-symbol? 'binding)` | `false` | `true` |
| `(special-symbol? 'ns)` | `false` | `true` |
| `(special-symbol? 'async)` | `false` | `true` |
| `(special-symbol? 'new)` | `true` | `false` |
| `(special-symbol? 'throw)` | `true` | `false` |
| `(special-symbol? 'catch)` | `true` | `false` |
| `(special-symbol? '&)` | `true` | `false` |

`defmacro`, `binding` and `ns` are special forms here and vars on the JVM, which is also why `ns-publics` omits them.
