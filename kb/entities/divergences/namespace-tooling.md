---
{
  "type": "divergence",
  "name": "Namespace tooling is partial",
  "summary": "The functions that inspect and change namespaces at run time are mostly absent, and require has no bare-symbol form.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/registry.ts#L543", "cljam/packages/cljam/src/core/registry.ts#L638", "cljam/packages/cljam/src/core/registry.ts#L665"]
}
---
`(require 'clojure.string)`, `(require '(clojure string))` and `(ns foo (:require clojure.string))` work on the JVM. Here they
[throw](ref:cljam/packages/cljam/src/core/registry.ts#L543) `require spec must be a vector`; only `(require '[clojure.string])`
works. `:refer :all` and `:rename` are rejected too, and `(ns foo "doc" {:a 1})` drops its metadata.

Absent vars: `alias`, `ns-resolve`, `requiring-resolve`, `use`, `refer`, `refer-clojure`, `create-ns`, `remove-ns`,
`ns-unmap`, `ns-unalias`, `find-var`, `intern`, `load`, `load-file`, `load-reader`, `load-string`, `munge`,
`namespace-munge`. `ns-refers` returns `{}`, and `(str *ns*)` is `"#namespace[user]"`, not `"user"`.
