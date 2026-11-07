---
{
  "type": "decision",
  "name": "Transition to unboxed values",
  "summary": "A proposed path off boxed values: positions move out of values into the IR, and checks go through converters that accept both forms until boxed values are removed.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "proposed",
  "date": "unknown",
  "refs": ["cljam/packages/cljam/src/core/types.ts#CljNumber", "cljam/packages/cljam/src/core/assertions.ts#is"]
}
---
**Context.** Every value is a tagged object such as `{ kind: 'number', value }`, and literals carry a source position
in `_pos`. The cost is paid on every operation. The plan waited for the two engines to stabilize under a shared IR,
which they now do through the analyzer.

**Decision.** Proposed, in order. First, positions stop being stamped on values: the IR returns that information
directly, so values can flow in any representation. Second, the current type checks are replaced by helper converters
that accept boxed and unboxed values alike. Third, everything migrates and support for boxed values is removed.
Whatever breaks during the migration is a map of the code not respecting the conversion rules.

**Alternatives considered.** Keeping boxes and carrying an integer/double tag: it gives closer number semantics, at
the cost of the performance this transition exists to gain. See [[one-number-type]].

**Consequences.** If numbers unbox to JS numbers, integers and doubles become indistinguishable by construction, and
`one-number-type` becomes justified by this decision.
