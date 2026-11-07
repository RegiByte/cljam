---
{
  "type": "divergence",
  "name": "Macro expansions have a different shape",
  "summary": "Core macros expand to different forms than on the JVM, which shows in code that inspects expansions.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L204-L209"]
}
---
| Form | JVM | cljam |
|---|---|---|
| `(macroexpand-1 '(when a b))` | `(if a (do b))` | `(if a (do b) nil)` |
| `(macroexpand-1 '(-> a b))` | `(b a)` | `(clojure.core/-> (b a))` |
| `(macroexpand-1 '(defn f [] 1))` | `(def f (clojure.core/fn ([] 1)))` | `(def f (clojure.core/fn f [] 1))` |
| `'#(+ %)` | `(fn* [p1__N#] (+ p1__N#))` | `(fn [p1] (+ p1))` |
| `'@a` | `(clojure.core/deref a)` | `(deref a)` |
| `'~a` | `(clojure.core/unquote a)` | `(unquote a)` |

Results of running the code are the same. Generated names differ too: `` `foo# `` is `foo__35`, not `foo__391__auto__`.
`(destructure '[[a] b])` expands to a different binding vector.
