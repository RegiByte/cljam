---
{
  "type": "divergence",
  "name": "No Java interop",
  "summary": "Java interop forms and JVM-only vars do not exist, because there is no JVM.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "justified",
  "failure": "missing",
  "refs": ["cljam/packages/cljam/src/core/modules/js/index.ts"]
}
---
`(.toUpperCase "a")`, `(String. "a")`, `(new String "a")`, `Long/MAX_VALUE`, `(Math/floor 1.5)`, `(System/currentTimeMillis)` and
`(import java.util.Date)` fail here. In `(ns foo (:import java.util.Date))` the import has no effect.

**Reason.** The host is JavaScript, so Java classes do not exist. Host access goes through the [`js` module](ref:cljam/packages/cljam/src/core/modules/js/index.ts).

Absent because they describe JVM classes, bytecode or compilation: `..`, `memfn`, `import`, `bean`, `bases`, `supers`, `cast`, `compile`,
`definterface`, `gen-class`, `gen-interface`, `proxy`, `construct-proxy`, `get-proxy-class`, `init-proxy`, `update-proxy`,
`proxy-call-with-super`, `proxy-mappings`, `proxy-name`, `proxy-super`, `add-classpath`, `enumeration-seq`, `iterator-seq`, `resultset-seq`,
`PrintWriter-on`, `StackTraceElement->vec`, `Throwable->map`, `method-sig`, `uri?`, `primitives-classnames`, `with-loading-context`,
`->ArrayChunk`, `->Eduction`, `->Vec`, `->VecNode`, `->VecSeq`, `EMPTY-NODE`, `-cache-protocol-fn`, `-reset-methods`, `find-protocol-impl`,
`find-protocol-method`, `seq-to-map-for-destructuring`, `*allow-unresolved-vars*`, `*compile-files*`, `*compile-path*`, `*fn-loader*`,
`*reader-resolver*`, `*source-path*`, `*suppress-read*`, `*use-context-classloader*`, `*verbose-defrecords*`, `*warn-on-reflection*`.
