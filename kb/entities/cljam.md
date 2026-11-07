---
{
  "type": "project",
  "name": "cljam",
  "summary": "A Clojure interpreter in TypeScript that embeds in any JavaScript host and aims to match the semantics of JVM Clojure.",
  "reviewed": "2026-11-07",
  "refs": ["cljam/packages/cljam/package.json", "cljam/packages/cljam/src/core/session.ts", "cljam/packages/docs/guide/conformance.md"]
}
---
cljam reads Clojure source, macro-expands it and analyzes it into a resolved AST. An AST walker is the reference
engine, and a bytecode VM runs function bodies by default. A differential harness keeps the two engines in agreement.

**The goal.** The existing semantics of Clojure behave as they do on JVM Clojure. cljam adapts to its host, so not
everything is identical, but every place that differs says why. A difference with no stated reason is a bug.

Each difference is a `divergence` entity (see the Divergences page). `open` means it is unexplained or waiting to be fixed;
`justified` means the body states why it stays. An entity is deleted once the difference is gone.
