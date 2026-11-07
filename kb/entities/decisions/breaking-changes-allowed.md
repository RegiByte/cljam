---
{
  "type": "decision",
  "name": "Conformance fixes may break behaviour",
  "summary": "A fix that moves cljam toward JVM semantics ships as a breaking 0.x minor release, with no compatibility layer.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "accepted",
  "date": "2026-11-07"
}
---
**Context.** Conformance work changes observable behaviour: seqs where vectors are returned today, chars from strings,
the error model. The satellite packages declare `>= 0.1.0`.

**Decision.** Each breaking change goes in a 0.x minor release. Satellites are updated alongside and pin a compatible
range. Old behaviour is not preserved behind flags or shims.

**Alternatives considered.** Compatibility flags: they keep two behaviours alive, against the goal of one set of
semantics, and the project is a personal learning project with no known external users of the satellites.

**Consequences.** Tests that record a divergence are rewritten as part of its fix.
