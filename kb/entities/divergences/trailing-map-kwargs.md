---
{
  "type": "divergence",
  "name": "Trailing map in kwargs calls fails",
  "summary": "Passing a map after keyword arguments, allowed since Clojure 1.11, throws.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L1884-L1898"]
}
---
With `(defn kw [& {:keys [a]}] a)`, `(kw {:a 1})` is `1` on the JVM and throws `hash-map expects an even number of arguments`
here. `(kw :a 1)` works. A mix also fails: with `(defn kw [& {:as m}] m)`, `(kw :a 1 {:b 2})` is `{:a 1, :b 2}` on the JVM.
