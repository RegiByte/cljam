---
{
  "type": "divergence",
  "name": "Vars are not values you can deref or resolve to",
  "summary": "A var cannot be dereferenced, `resolve` returns the value instead of the var, and unbound vars do not exist.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/atoms.ts#deref", "cljam/packages/cljam/src/core/bootstrap.ts#L381-L395"]
}
---
`(def v 1) @#'v` is `1` on the JVM and fails here with `deref expects an atom, volatile, reduced, or delay value, got var`.
`(deref (var v))` fails the same way; `var-get` works.

[`resolve`](ref:cljam/packages/cljam/src/core/bootstrap.ts#L381-L395) returns the value, so `(var? (resolve 'v))` is `false`
and `(resolve 'clojure.core/map)` is the function.

`(def x) x` is an unbound-var object on the JVM and `Symbol x not found` here, and `(declare x) #'x` fails with
`Unable to resolve var`. A var declared this way works once it is defined.
