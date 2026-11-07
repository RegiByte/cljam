---
{
  "type": "divergence",
  "name": "Private vars are not enforced",
  "summary": "Vars marked private can be read and called from any namespace.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/env.ts#lookupVar"]
}
---
After `(ns a) (defn- hidden [] 2)`, calling `(a/hidden)` from another namespace is an error on the JVM
(`var: #'a/hidden is not public`) and returns `2` here. `:refer [hidden]` also succeeds. `(:private (meta #'hidden))` is
`true`, so the marker is recorded but unchecked.
