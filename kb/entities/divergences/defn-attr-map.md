---
{
  "type": "divergence",
  "name": "defn rejects attribute maps",
  "summary": "`defn`, `defn-` and `defmacro` fail on the attribute map the JVM accepts after the name or docstring and after the last arity.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L116-L130"]
}
---
`(defn f {:a 1} [x] x)` and `(defn f "d" {:a 1} [x] x)` define `f` on the JVM, with `:a` on the var. Here both throw `first
expects a collection or string`, though the `defn` docstring says it accepts an attribute map. `(defn f ([x] x) {:a 1})`
throws `Unsupported binding form: :a`, and `(defmacro m {:a 1} [x] x)` throws `fn/defmacro expects a parameter vector or
arity clauses`. Metadata on the name, `(defn ^:foo f [x] x)`, works.
