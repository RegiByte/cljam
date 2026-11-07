---
{
  "type": "divergence",
  "name": "Opaque values print in cljam formats",
  "summary": "Atoms, functions, namespaces and errors print in cljam-specific forms, where the JVM prints `#object[...]` or `#error`.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/core/printer.ts#printString"]
}
---
| Form | JVM | cljam |
|---|---|---|
| `(pr-str (atom 1))` | `#object[clojure.lang.Atom 0x... {:status :ready, :val 1}]` | `#<Atom 1>` |
| `(pr-str (delay 1))` | `#object[clojure.lang.Delay 0x... {...}]` | `#<Delay pending>` |
| `(pr-str inc)` | `#object[clojure.core$inc 0x... "..."]` | `(native-fn inc)` |
| `(pr-str (fn []))` | `#object[...$fn__N 0x... "..."]` | `#function[user/eval174/fn--779]` |
| `(pr-str *ns*)` | `#object[clojure.lang.Namespace 0x... "user"]` | `#namespace[user]` |
| `(pr-str (ex-info "x" {}))` | `#error {...}` | `{:message "x" :data {}}` |

The JVM forms name JVM classes and identity hashes, so what they become depends on [[class-model]].
