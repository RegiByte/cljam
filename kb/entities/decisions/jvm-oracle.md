---
{
  "type": "decision",
  "name": "Conformance is measured against JVM goldens",
  "summary": "cljam is compared with results generated on JVM Clojure and committed to the repo, so every test run measures conformance with no JVM present.",
  "in": "cljam",
  "status": "accepted",
  "date": "2026-11-07",
  "reviewed": "2026-11-07",
  "refs": [
    "cljam/packages/cljam/src/core/__tests__/jvm_oracle/oracle.ts#compareOutcome",
    "cljam/packages/cljam/src/core/__tests__/jvm_oracle/oracle.spec.ts",
    "cljam/packages/cljam/src/core/__tests__/jvm_oracle/generate.clj",
    "cljam/packages/cljam/src/core/__tests__/jvm_oracle/case-pool.ts#runCases"
  ]
}
---
**Problem.** The rest of the test suite proves the AST walker and the VM agree with each other, and some of its tests
pin behaviour that differs from the JVM. Nothing compared cljam with Clojure itself.

**How.** Cases are lines of source text, so each runtime's own reader reads them; a shared reader would hide reader
divergences. [`generate.clj`](ref:cljam/packages/cljam/src/core/__tests__/jvm_oracle/generate.clj) evaluates them on JVM
Clojure and writes goldens. [`oracle.spec.ts`](ref:cljam/packages/cljam/src/core/__tests__/jvm_oracle/oracle.spec.ts)
evaluates them on cljam during the normal test run.

A case is evaluated as real top-level forms, because wrapping one in `do` or `let` changes macro behaviour. A line may
carry setup forms before the form under test. Each case gets a clone of a bootstrapped session on a worker thread:
cljam evaluates synchronously, so terminating the thread is the only way to stop a hang, and it costs that one case.
The JVM side resets `user`, namespaces the case created and the global hierarchy between cases, and runs the cases in
both orders so that leaked state fails as non-determinism.

**Agreement** is defined by [`compareOutcome`](ref:cljam/packages/cljam/src/core/__tests__/jvm_oracle/oracle.ts#compareOutcome):
equal `pr-str` output and equal text written to `*out*`. `pr-str` is what programs and REPLs observe, and each runtime
uses its own printer, with `*print-length*` bound so infinite seqs terminate. Both throwing agrees only on a case marked
`!throws`, and the generator refuses any other JVM throw; class and message are not compared because they are
host-specific. A cljam throw for a missing var never agrees with a JVM throw for another reason, since that is an absent
feature rather than the same behaviour.

**Known differences** are listed in `divergences.txt`, and each line must name an existing kb divergence entity, so an
unexplained difference cannot be recorded. The suite stays green, and a listed case that starts agreeing fails until its
line is deleted, so the list cannot rot.

**Public-var coverage** compares the JVM's `ns-publics` with cljam's, plus cljam's special forms: names like `defmacro`,
`binding` and `ns` are vars on the JVM and special forms here, so `ns-publics` omits them. `(fn [] sym)` proves nothing,
because analysis does not resolve symbols. The report is a vitest file snapshot, so any change to the number shows in
review.

**Alternatives.** Running a JVM in CI would make every contributor and CI run depend on one, and goldens cost only a
regeneration step. Sharing one session across cases would let one case poison the next. Comparing with `=` needs both
values in one runtime, which means one reader and one value model, the things under test. Sorting printed sets and maps
would hide sorted-collection bugs, so cases wrap unordered results in `sort` instead.

**Impact.** A conformance change shows up as a test result. Fixing a divergence fails the suite until its line is
deleted; a new divergence fails it until fixed or listed.
