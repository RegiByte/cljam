# Compiler Implementation Guide

> This document is the **concrete, grounded companion** to `docs/runtime-compilation.md` (the abstract spec) and `docs/core-language.md` (the compilation target). Read those first for the "what". This document explains the **why and how** — mechanically, with references to the actual source files.

---

## Why the Interpreter Is Slow

The evaluator pipeline for `(+ a b)`:

```
evaluateWithContext(list, env, ctx)           ← evaluate.ts:27 — switch on 'list'
  → evaluateList(list, env, ctx)              ← dispatch.ts:40
      → ctx.evaluate(+, env)                  ← back to switch on 'symbol'
          → lookup("+", env)                  ← env.ts:39 — hash + Map traversal
      → ctx.evaluate(a, env)                  ← back to switch on 'symbol'
          → lookup("a", env)                  ← env.ts:39 — hash + Map traversal
      → ctx.evaluate(b, env)                  ← back to switch on 'symbol'
          → lookup("b", env)                  ← env.ts:39 — hash + Map traversal
      → is.callable(+)?                       ← type check
      → ctx.applyCallable(+, [a, b], env)
```

That is **5 recursive round-trips through the switch** for a single function call. In a hot loop called a million times, this structural overhead repeats a million times.

The switch (`evaluate.ts:27–83`) dispatches on `expr.kind`. The list branch dispatches again. The symbol branches call `lookup`. All of this logic is known from the AST structure — it doesn't depend on runtime values. That's the waste.

---

## What a Compiled Closure Is

A compiled closure is a JavaScript function that **pre-selects the evaluation path** for a specific AST node. The switch dispatch happens once at compile time, not once per evaluation.

```typescript
type CompiledExpr = (env: Env, ctx: EvaluationContext) => CljValue
```

`compile((+ a b))` produces:

```typescript
// This function is created ONCE:
(env, ctx) => {
  const op = lookup("+", env)   // no switch, just lookup
  const a  = lookup("a", env)   // no switch, just lookup
  const b  = lookup("b", env)   // no switch, just lookup
  return ctx.applyCallable(op, [a, b], env)
}
```

The dispatch is gone. The recursion is gone. On every call, only the runtime work remains: `lookup` + `applyCallable`.

**The compiled closure still calls the same runtime functions.** It still returns `CljValue`. It doesn't change the value representation — it changes the structural overhead.

---

## The Fallback Contract

`compile(node)` returns `null` if the node can't be compiled yet. The caller falls back to the interpreter:

```typescript
// evaluate.ts — top of evaluateWithContext:
const compiled = compile(expr)
if (compiled !== null) return compiled(env, ctx)
// ... original switch as fallback
```

This makes the compiler incrementally addable. Each new form added to `compile` speeds up programs that use it; everything else is unchanged. All 2332 tests pass with the fallback in place.

---

## Literals — Constant Closures

Self-evaluating forms compile to closures that ignore `env` and `ctx`:

```typescript
case 'number':
case 'string':
case 'keyword':
case 'nil':
case 'boolean':
case 'regex':
  return () => node   // env and ctx unused — value is constant
```

The compiled closure returns the same node every time. No switch, no lookup, no allocation. The node object is captured in the JS closure at compile time.

---

## Symbols — Runtime Lookup, Compile-Time Name

For unqualified symbols:

```typescript
case 'symbol':
  const symbolName = node.name   // captured at compile time
  return (env) => lookup(symbolName, env)  // called at runtime
```

The **name string** is captured at compile time. The **value** is resolved at runtime from the env passed to the closure. This is what makes REPL compatibility work:

```typescript
const compiled = compile(v.symbol('x'))
const env1 = extend(['x'], [v.number(10)], makeEnv())
const env2 = extend(['x'], [v.number(99)], makeEnv())

compiled(env1, null)  // → 10
compiled(env2, null)  // → 99 — same closure, different env, different result
```

If `x` is `(def x 10)` then `(def x 20)`, `lookup("x", env)` calls `derefValue(var)` which reads the current `.value` of the var object. The compiled closure picks up the new value automatically.

For **qualified symbols** (`ns/sym`), the compiler currently returns `null` — alias resolution requires `ctx.resolveNs` and is non-trivial. The interpreter handles it.

---

## `if` — Phase 2

```clojure
(if test then else?)
```

`if` compiles by recursively compiling all three sub-expressions:

```typescript
const compiledTest = compile(list.value[1])
const compiledThen = compile(list.value[2])
const compiledElse = list.value[3] ? compile(list.value[3]) : null
if (!compiledTest || !compiledThen) return null  // partial fallback

return (env, ctx) =>
  isTruthy(compiledTest(env, ctx))
    ? compiledThen(env, ctx)
    : (compiledElse ? compiledElse(env, ctx) : v.nil())
```

Short-circuit evaluation is preserved: only one branch is called at runtime.

**Why this first:** `when`, `cond`, `and`, `or` all macro-expand to `if`. Compiling `if` unlocks compilation of almost all control flow.

---

## `do` — Phase 2

```clojure
(do e1 e2 ... eN)
```

```typescript
const compiledForms = list.value.slice(1).map(compile)
if (compiledForms.some(c => c === null)) return null

return (env, ctx) => {
  let result: CljValue = v.nil()
  for (const c of compiledForms) result = c!(env, ctx)
  return result
}
```

Sequential evaluation, returns last. Critical for `let*` and `fn*` body compilation which are `do`-like.

---

## Function Calls — Phase 3

```clojure
(f arg1 arg2)   ; where f is not a special form
```

```typescript
const compiledOp   = compile(list.value[0])
const compiledArgs = list.value.slice(1).map(compile)
if (!compiledOp || compiledArgs.some(c => c === null)) return null

return (env, ctx) => {
  const op   = compiledOp(env, ctx)
  const args = compiledArgs.map(c => c!(env, ctx))
  return ctx.applyCallable(op, args, env)
}
```

This is the unlock for user-defined function calls. `(+ a b)` finally pays zero AST dispatch overhead.

---

## `let*` and Slot Indexing — Phase 3

The current `lookup` function (`env.ts:39`):

```typescript
export function lookup(name: string, env: Env): CljValue {
  let current: Env | null = env
  while (current) {
    const raw = current.bindings.get(name)  // Map lookup: hash "name" → find in bucket
    if (raw !== undefined) return raw
    current = current.outer                 // walk up the chain
  }
}
```

For `(let* [n 1000000] ... n ...)` in a hot loop, every iteration calls `lookup("n", env)` — a string hash + Map lookup.

Slot indexing replaces the `Map<string, CljValue>` with `CljValue[]`. At compile time, `n` is assigned slot 0. At runtime:

```typescript
// Instead of: lookup("n", env) → hash "n", traverse chain, find value
// We get:     slots[0]         → direct array index, no hashing
```

The compile-time env (`CompileEnv`) tracks which names are in which slots in the current lexical scope:

```typescript
type CompileEnv = {
  slots: Map<string, number>   // name → slot index
  outer: CompileEnv | null
}
```

When compiling `(let* [n val] body)`:
1. Assign slot 0 to `n`
2. Compile `val` (doesn't know about `n`)
3. Compile `body` with `compileEnv` extended with `n → 0`
4. In `body`, any compiled symbol `n` emits `slots[0]` instead of `lookup("n", env)`

This is the key performance unlock for tight loops.

---

## `loop*`/`recur` — Phase 5

### How it works today

`evaluateRecur` (`special-forms.ts:464`):
```typescript
throw new RecurSignal(args)   // throw on every iteration
```

`evaluateLoop` (`special-forms.ts:431`) has a `while(true)` loop but catches `RecurSignal` on every iteration:
```typescript
try {
  return ctx.evaluateForms(loopBody, loopEnv)
} catch (e) {
  if (e instanceof RecurSignal) {
    currentValues = e.args
    continue
  }
}
```

A million-iteration loop: **a million exception allocations + JS stack unwinds**. That's the 10-second cost.

### How compiled loop/recur works

The compiler knows at compile time:
- Which variables are loop bindings (e.g., `n`)
- That `recur` in tail position means "update bindings and restart"

It generates:

```typescript
// compile((loop* [n 1000000] (if (zero? n) :done (recur (dec n)))))
(env, ctx) => {
  let slot0 = 1000000       // init n — compiled literal, no eval
  while (true) {
    // compiled (if (zero? n) :done (recur (dec n))):
    if (slot0 === 0) return kw_done   // compiled base case
    slot0 = slot0 - 1                 // compiled (dec n) → recur update
    // while(true) continues — no throw, no catch, no allocation
  }
}
```

No `RecurSignal`. No exception. No env rebuild. No `evaluateForms` dispatch. Just a `while` loop with slot mutation.

`recur` in a compiled context isn't a thrown signal — it's a `continue` statement baked into the compiled closure by the compiler.

---

## `fn*` and Compile-Once Caching — Phase 4

Today, `applyFunctionWithContext` (`apply.ts:29`) calls `ctx.evaluateForms(arity.body, localEnv)` on every function invocation. The body AST is walked fresh every call.

With `fn*` compilation, the `Arity` type gains an optional `compiledBody`:

```typescript
type Arity = {
  params: DestructurePattern[]
  restParam: DestructurePattern | null
  body: CljValue[]
  compiledBody?: CompiledExpr   // added in Phase 4
}
```

When `evaluateFn` runs (at `def`/`defn` time), it compiles the body:
```typescript
arity.compiledBody = compile(wrapInDo(arity.body))
```

`applyFunctionWithContext` checks:
```typescript
if (arity.compiledBody) {
  return arity.compiledBody(localEnv, ctx)   // fast path — no AST walk
}
return ctx.evaluateForms(arity.body, localEnv)  // fallback
```

This is the **compile-once** strategy. Every `defn` compiles its body once at definition time. Every subsequent call pays only the runtime cost.

---

## Value Representation — What Doesn't Change

**Compiled closures still return `CljValue`.** The optimization is structural (dispatch elimination), not representational (value boxing). `CljNumber`, `CljString`, etc. remain.

Box elimination (unboxing) is a separate, harder optimization:
- Requires type inference: "does this variable always hold a JS number?"
- Requires specialized variants of functions like `+`
- Is not part of Phase 1–5

Do not conflate "compiled closures" with "unboxed values". They are independent. Compiled closures are fast because they skip AST dispatch, not because they skip value wrapping.

---

## Phase Reference

| Phase | What's compiled | Key benefit |
|-------|----------------|-------------|
| 1 | Literals, unqualified symbols | Infrastructure in place; fallback contract proven |
| 2 | `if`, `do` | Control flow; unlocks `when`, `cond`, `and`, `or` |
| 3 | Function calls, `let*`, slot indexing | Hot loop var lookups become array index; user fn calls compiled |
| 4 | `fn*` + compile-once caching | Every `defn` compiles once; calls never walk body AST |
| 5 | `loop*`/`recur` | Exception-as-control-flow eliminated; tight loops become native `while` |
