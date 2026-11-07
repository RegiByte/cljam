---
{
  "type": "divergence",
  "name": "Records are not maps",
  "summary": "Records fail `map?` and `associative?`, reject metadata and cannot be map-destructured, where JVM records are maps.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/predicates.ts#mapPredImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/meta.ts#withMetaImpl", "cljam/packages/cljam/src/clojure/core.clj#L1890-L1900"]
}
---
With `(defrecord R [x])`:

| Form | JVM | cljam |
|---|---|---|
| `(map? (->R 1))` | `true` | `false` |
| `(associative? (->R 1))` | `true` | `false` |
| `(meta (with-meta (->R 1) {:a 1}))` | `{:a 1}` | `with-meta does not support record` |
| `(let [{:keys [x]} (->R 1)] x)` | `1` | `Cannot destructure` |
| `((fn [{:keys [x]}] x) (->R 1))` | `1` | `Cannot destructure` |

The predicates answer wrongly with no error, so code that branches on `map?` takes the wrong path, and
[`destructure`](ref:cljam/packages/cljam/src/clojure/core.clj#L1890-L1900) is one such branch. `get`, `assoc`, `merge`
and keyword lookup work on records.
