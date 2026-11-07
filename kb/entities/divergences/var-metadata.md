---
{
  "type": "divergence",
  "name": "Var metadata is incomplete",
  "summary": "Var metadata lacks `:name`, `:ns`, `:macro` and more, and `:arglists` is a vector instead of a quoted list.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/analyzer/resolve.ts#analyzeDefmacro"]
}
---
After `(defn f [] 1)`, `(:name (meta #'f))` is `f` on the JVM and `nil` here, `(:ns (meta #'f))` is the namespace and `nil`
here, and `(:arglists (meta #'f))` is `([])` and `[[]]` here. `(:macro (meta #'when))` is `true` there and `nil` here, and
core vars have no `:added`. Core docstrings are cljam's own text. `(ns foo "doc" {:a 1})` records no namespace metadata.
