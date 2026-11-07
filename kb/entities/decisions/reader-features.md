---
{
  "type": "decision",
  "name": "Reader conditionals match :cljam and :default",
  "summary": "cljam is its own platform for reader conditionals, so `#?` matches `:cljam` and `:default` only.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "accepted",
  "date": "2026-11-07"
}
---
**Context.** Portable `.cljc` code selects a branch by platform key, and cross-dialect test suites depend on it. cljam
has no reader conditionals yet, so the first implementation sets the contract.

**Decision.** `#?` matches `:cljam`, then `:default`.

**Alternatives considered.** Also matching `:cljs`: cljam shares a JavaScript host with ClojureScript, but `:cljs`
branches assume ClojureScript's compiler and interop, which cljam does not have, so most would be wrong. Matching
`:clj`: wrong for the same reason, against JVM interop.

**Consequences.** A library must add a `:cljam` branch or a `:default` to run here. Which branches of a cross-dialect
suite apply to cljam is settled by this rule, not case by case.
