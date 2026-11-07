---
{
  "type": "divergence",
  "name": "clojure.core carries non-Clojure names",
  "summary": "Internal helpers, cljam extensions and IDE stubs are visible as public names in `clojure.core` and `all-ns`.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/bootstrap.ts#L438-L448"]
}
---
`make-record!`, `str-reverse*`, `hierarchy-isa?*` and `case-emit` resolve as `clojure.core` vars here, and so do cljam's own
`describe`, `js->clj`, `clj->js`, `pprint`, `doc` and `then`. Each shadows nothing on the JVM, so a user definition with one
of these names collides here.

`Math`, `String` and the other [class stubs](ref:cljam/packages/cljam/src/core/bootstrap.ts#L452-L484) evaluate to keywords.
`(all-ns)` lists `clojure.reflect` and `cursive.repl.runtime`, stub namespaces for editor integrations.
