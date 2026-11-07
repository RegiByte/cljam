---
{
  "type": "divergence",
  "name": "Standard namespaces are partial",
  "summary": "`clojure.math`, `clojure.test`, `clojure.walk` and `clojure.edn` lack some public vars, and core return shapes differ.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/clojure/math.clj", "cljam/packages/cljam/src/clojure/test.clj", "cljam/packages/cljam/src/clojure/walk.clj", "cljam/packages/cljam/src/clojure/edn.clj"]
}
---
- `clojure.math`, 17 of 45 absent: `IEEE-remainder`, `add-exact`, `copy-sign`, `decrement-exact`, `expm1`, `get-exponent`, `increment-exact`,
  `log1p`, `multiply-exact`, `negate-exact`, `next-after`, `next-down`, `next-up`, `random`, `scalb`, `subtract-exact`, `ulp`.
- `clojure.test`, 24 of 39 absent, including `test-ns`, `test-var`, `test-vars`, `run-all-tests`, `run-test-var`, `with-test`, `try-expr`,
  `do-report`, `assert-expr` and `deftest-`. `run-tests` returns no `:type :summary`.
- `clojure.walk` lacks `macroexpand-all`, `postwalk-demo` and `prewalk-demo`. `clojure.edn` lacks `read`.

`clojure.string` and `clojure.set` are complete.
