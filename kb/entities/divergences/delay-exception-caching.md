---
{
  "type": "divergence",
  "name": "delay does not cache a thrown exception",
  "summary": "A delay whose body throws runs the body again on every deref, where the JVM caches the exception.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/transformations.ts#realizeDelay"]
}
---
```clojure
(let [n (atom 0)
      d (delay (swap! n inc) (throw (ex-info "x" {})))]
  (try @d (catch :default e nil))
  (try @d (catch :default e nil))
  @n)
```

The JVM counts `1`, cljam counts `2`.
