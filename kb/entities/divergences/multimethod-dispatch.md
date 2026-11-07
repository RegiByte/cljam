---
{
  "type": "divergence",
  "name": "Multimethod dispatch is incomplete",
  "summary": "Dispatch ignores `:hierarchy`, has no dominance rule, and does not apply `isa?` inside vectors.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/multimethods.ts#makeMultimethodImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/hierarchy.ts"]
}
---
`(defmulti hm identity :hierarchy (atom (derive (make-hierarchy) :a :b)))` dispatches through that hierarchy on the JVM. Here the
option is [ignored](ref:cljam/packages/cljam/src/core/modules/core/stdlib/multimethods.ts#makeMultimethodImpl), so `(hm :a)` finds no
method.

With `(derive ::sub ::mid) (derive ::mid ::top)` and methods on both `::mid` and `::top`, `(d ::sub)` picks `::mid` on the JVM
and throws `Multiple methods` here.

`(derive ::a ::b) (isa? [::a] [::b])` is `true` there and `false` here, so a method on `[::b ::b]` is not found for `[::a ::a]`.
Deriving a tag from an ancestor it already has throws on the JVM and succeeds here.
