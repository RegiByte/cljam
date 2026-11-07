---
{
  "type": "divergence",
  "name": "Protocols cannot extend classes",
  "summary": "Protocols extend keyword type tags, so `extend-type` and `extend-protocol` reject class names and record names.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/clojure/core.clj#L2064", "cljam/packages/cljam/src/core/modules/core/stdlib/protocols.ts"]
}
---
`(extend-protocol P String (p [_] :s))` works on the JVM. Here it
[throws](ref:cljam/packages/cljam/src/clojure/core.clj#L2064) `expected a keyword type tag or nil, got: String`, and the
same goes for `Object`, `Number`, `clojure.lang.Keyword` and a record name. The accepted form is
`(extend-protocol P :string ...)`, with the tags that `type` returns.

`(defrecord R [x] Object (toString [_] "hi"))` also fails, and `:extend-via-metadata` is not supported. `extend` and
`extends?` are in [[deftype-reify]]. Open with [[class-model]]: what dispatch means depends on the class redesign.
