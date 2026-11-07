---
{
  "type": "divergence",
  "name": "Recursion has a fixed frame budget",
  "summary": "Non-tail recursion runs on heap-allocated VM frames up to a fixed 100k budget, then throws a catchable error.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "justified",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/vm/vm.ts#DEFAULT_VM_FRAME_LIMIT", "cljam/packages/cljam/src/core/vm/ir-compiler.ts#L281"]
}
---
With `(defn f [n] (if (= n 0) 0 (inc (f (dec n)))))`, `(f 50000)` overflows a default JVM stack and returns `50000` here.
`(f 150000)` overflows both, here as `Stack overflow: exceeded 100000 VM call frames`. Both are catchable.

Self tail calls [reuse the frame](ref:cljam/packages/cljam/src/core/vm/ir-compiler.ts#L281), so
`(defn f [n] (if (= n 0) :done (f (dec n))))` finishes for any `n` and a self tail call with no base case runs forever, where the
JVM overflows.

**Reason.** The JavaScript call stack is small and differs per engine. A VM budget gives one limit on every host, deeper than the
JVM default.
