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

## Commands

Run with bun, from `packages/cljam` unless noted:

- `bun install` (repo root) installs dependencies.
- `bunx vitest run` runs the tests; `bun run test` starts watch mode locally.
- `bun run typecheck` typechecks.
- `bun run gen:core-source` regenerates `src/clojure/generated/` after a change to `src/clojure/*.clj`.
- `node .claude/skills/kb/tool/kb.mjs verify` (repo root) checks the knowledge base.
