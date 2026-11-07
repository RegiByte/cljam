---
{
  "type": "divergence",
  "name": "Some invalid arguments return a value",
  "summary": "A few functions answer for arguments the JVM rejects.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/utils.ts#subsImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/predicates.ts", "cljam/packages/cljam/src/core/analyzer/resolve.ts#analyzeQuote"]
}
---
`(subs "abc" 5)` throws `StringIndexOutOfBoundsException` on the JVM and returns `""` here. `(even? 1.5)` and `(odd? 1.5)` throw
`Argument must be an integer` there and return `false` and `true` here. `(derive :a :b)` fails an assertion there, since
the global hierarchy needs namespaced tags, and returns a hierarchy here. `(quote)` and `(quote 1 2)` throw `Wrong number of
args` there and return `nil` and `1` here.
