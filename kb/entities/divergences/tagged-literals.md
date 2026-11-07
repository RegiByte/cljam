---
{
  "type": "divergence",
  "name": "#inst and #uuid do not read in code",
  "summary": "Tagged literals are read only by `clojure.edn`, and the inst and uuid API is absent.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/reader.ts#readTaggedLiteral"]
}
---
`#inst "2020-01-01"` and `#uuid "..."` evaluate on the JVM. Here they fail with
`Reader tags (#inst) are only supported in EDN mode`, as does `(read-string "#inst \"2020-01-01\"")`.
`clojure.edn/read-string` accepts them, but the result prints without its tag: `(pr-str (edn/read-string "#inst \"2020-01-01\""))`
is `2020-01-01T00:00:00.000Z`, not `#inst "..."`.

Absent vars: `tagged-literal`, `tagged-literal?`, `default-data-readers`, `*default-data-reader-fn*`, `random-uuid`,
`parse-uuid`, `uuid?`, `inst?`, `inst-ms`, `inst-ms*`, `Inst`. `#=` is `Unknown dispatch character`.
