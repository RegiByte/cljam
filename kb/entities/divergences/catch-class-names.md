---
{
  "type": "divergence",
  "name": "catch does not test classes",
  "summary": "A class name in `catch` either never matches or catches everything, depending on whether the symbol happens to resolve.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/evaluator/form-parsers.ts#matchesDiscriminatorValue", "cljam/packages/cljam/src/core/walker/walk.ts#catchClauseMatches", "cljam/packages/cljam/src/core/bootstrap.ts#L452-L484"]
}
---
`(try (throw (ex-info "x" {})) (catch Exception e :caught))` is `:caught` on the JVM. Here the exception escapes, and
`(try (/ 1 0) (catch Throwable e :caught))` escapes too.

Core defines `Exception`, `Throwable` and a few other names as [keyword stubs](ref:cljam/packages/cljam/src/core/bootstrap.ts#L452-L484),
and a keyword only matches a thrown map's `:type`. A name that does not resolve is
[a catch-all](ref:cljam/packages/cljam/src/core/walker/walk.ts#catchClauseMatches), so
`(try (throw (ex-info "x" {})) (catch ArithmeticException e :caught))` returns `:caught` where the JVM rethrows.
`(catch :default e ...)` catches everything. Open until the error and class model is redesigned; see [[thrown-values]].
