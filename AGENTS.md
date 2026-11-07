# cljam

A Clojure interpreter in TypeScript. Source is read, macro-expanded and analyzed into a resolved AST; an AST walker is
the reference engine and a bytecode VM runs function bodies by default.

## The goal

The existing semantics of Clojure behave as on JVM Clojure 1.12. cljam adapts to its JavaScript host, so not everything
is identical, but every difference carries a stated reason. A difference with no reason is a bug.

Before calling behaviour correct, check it against JVM Clojure, not against this repo's tests: the suite proves the
engines agree with each other, and some tests record current behaviour that differs from the JVM.

## Layout

- `packages/cljam`: the interpreter, CLI, nREPL server and Vite plugin. `src/core` is the runtime and
  `src/clojure/*.clj` the standard library.
- `packages/cljam-{schema,date,integrant,ring,mcp}`: libraries built on cljam.
- `packages/docs`: the public docs. `packages/playground`: the browser REPL.
- `experiments/`: benchmarks, diagnostics and integration spikes.

## Knowledge base

`kb/` is the project's working theory: its parts, decisions, terms and every known divergence from JVM Clojure, each
backed by refs into the code (schema: `.claude/skills/kb/SCHEMA.md`). Before changing a part, read its entity:
`node .claude/skills/kb/tool/kb.mjs tree`, then `kb/entities/**/<id>.md`.

A change that alters what an entity claims updates it in the same commit, sets its `reviewed` date, and re-renders
(`kb.mjs render`). Fixing a divergence deletes its entity. Finding one adds an entity, `open` until it is fixed or
carries a reason and becomes `justified`. `/kb verify` runs a full check; `/kb build` documents something new.

The known divergences in `packages/docs/guide/conformance.md` are generated from the divergence entities, and CI fails
when the page is out of date.
## JVM oracle

`packages/cljam/src/core/__tests__/jvm_oracle/` checks cljam against JVM Clojure in the normal test run, with no JVM
needed: `oracle.spec.ts` compares each case with goldens generated on the JVM.

- Add a case as one line in `cases/<area>.txt`: Clojure source, read by each runtime's own reader. It is one form, or
  setup forms followed by the form under test; each is evaluated as a real top-level form, and the last value is
  compared. Start the line with `!throws ` when the JVM throwing is the behaviour under test; the generator refuses any
  other JVM throw.
- Cases must be deterministic on the JVM (the generator refuses hangs, printed object addresses and order-dependent
  results) and must not depend on hash order: wrap unordered results in `sort`.
- Regenerate with `bun run gen:jvm-goldens` in `packages/cljam`, then commit the goldens. Only this needs a JVM.
- A case that differs goes in `divergences.txt` as `<kb divergence id> <case source>`, and the spec fails unless the id
  names an existing entity. When a listed case starts agreeing the spec fails until the line is deleted.
- `goldens/coverage.md` tracks public-var coverage per `clojure.*` namespace. When it changes, review it and update it
  with `bunx vitest run src/core/__tests__/jvm_oracle -u`.

## Commands

Run with bun, from `packages/cljam` unless noted:

- `bun install` (repo root) installs dependencies.
- `bunx vitest run` runs the tests; `bun run test` starts watch mode locally.
- `bun run typecheck` typechecks.
- `bun run gen:core-source` regenerates `src/clojure/generated/` after a change to `src/clojure/*.clj`.
- `node .claude/skills/kb/tool/kb.mjs verify` (repo root) checks the knowledge base.
- `node packages/docs/scripts/gen-conformance.mjs` (repo root) regenerates the conformance page after a divergence changes.
