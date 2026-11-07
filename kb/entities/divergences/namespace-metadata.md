---
{
  "type": "divergence",
  "name": "Namespaces have no metadata",
  "summary": "`meta` on a namespace is always nil, so `ns` docstrings, attribute maps and metadata are not visible.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/types.ts#CljNamespace", "cljam/packages/cljam/src/core/modules/core/stdlib/meta.ts#metaImpl"]
}
---
`(meta (find-ns 'clojure.core))` is `{:doc "Fundamental library of the Clojure language", :author "Rich Hickey"}` on the
JVM and `nil` here. `(ns foo "doc") (meta *ns*)` is `{:doc "doc"}` there, and `(ns ^:a foo) (meta *ns*)` is `{:a true}`.
Both are `nil` here.
