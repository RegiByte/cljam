---
{
  "type": "decision",
  "name": "Numbers follow JVM semantics, boxed first",
  "summary": "cljam distinguishes longs from doubles as on the JVM, on boxed values first, with raw integers as a later and gated step.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "accepted",
  "date": "2026-11-07",
  "supersedes": "unboxed-values-transition",
  "refs": ["cljam/packages/cljam/src/core/types.ts#CljNumber", "cljam/packages/cljam/src/core/vm/cache.ts"]
}
---
**Context.** Numbers were one boxed double. The plan was to unbox them, which would make `1` and `1.0` the same value,
so the distinction was thought to trade against speed. A benchmark over 19 workloads compared the models on the VM,
with the same VM path fixes applied to each: boxed one-double 0.826 of today's time, boxed long/double 0.809, unboxed
one-double 0.774, raw integers with boxed doubles 0.773. On the walker the models tie.

**Decision.** JVM number semantics stay the goal. Longs and doubles are distinct, with overflow errors, exact longs,
ratios, bigints and bigdecimals. The work ships on boxes first, as separate kinds. Raw integers are a later step, opened
when retained memory or a faster engine pays for that migration.

The order: fix the VM's arithmetic call path; route every number read and write in `src/core` through one module; split
the reader and printer so `1.0` is a double; add overflow, big longs and 64-bit bit operators; add ratio, bigint and
bigdecimal; then, gated, record child positions on the parent collection and move integers to raw numbers.

**Alternatives considered.** Unboxed one double: 4% faster than boxed long/double on the VM, but raw integers match that
speed, and one double cannot express `(= 1 1.0)`, overflow, exact longs, or `/` returning ratios for integers. Raw
integers now: reaches the speed and the semantics in one migration, but does the riskiest step first. A tag field on the
box: the same semantics with 8 more bytes per number.

**Consequences.** The public `CljNumber` API holds until the gated step. The gated step is not a mechanical migration:
reading `.kind` on a raw number yields `undefined` rather than throwing, and `0` is falsy at `if (!value)` sites, so
breakage alone does not find every site. It needs `tsc`, a truthiness lint and a test-only recording getter. Whole
numbers arriving from JavaScript need a stated rule at the interop boundary, and the bytecode cache key must tell `1`
from `1.0`. Measured costs left out ratio, bigint and bigdecimal, so that work needs its own measurement.
