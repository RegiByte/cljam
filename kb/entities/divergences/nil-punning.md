---
{
  "type": "divergence",
  "name": "Many functions reject nil",
  "summary": "Functions that treat nil as an empty collection on the JVM throw here or return a different value.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/seq.ts#conjImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/maps-sets.ts#dissocImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/vectors.ts#popImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/maps-sets.ts#keysImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/maps-sets.ts#disjImpl"]
}
---
| Form | JVM | cljam |
|---|---|---|
| `(conj nil 1)` | `(1)` | throws |
| `(into nil [1])` | `(1)` | throws |
| `(dissoc nil :a)` | `nil` | throws |
| `(pop nil)` | `nil` | throws |
| `(keys nil)`, `(vals nil)` | `nil` | throws |
| `(nth nil 0)` | `nil` | throws |
| `(last nil)` | `nil` | throws |
| `(reverse nil)` | `()` | throws |
| `(zipmap nil nil)` | `{}` | throws |
| `(reduce-kv + 0 nil)` | `0` | throws |
| `(disj nil 1)` | `nil` | `#{}` |
| `(seqable? nil)` | `true` | `false` |

`first`, `rest`, `seq`, `count`, `get`, `assoc`, `merge` and `map` are nil-safe.
