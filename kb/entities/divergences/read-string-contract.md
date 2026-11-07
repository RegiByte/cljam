---
{
  "type": "divergence",
  "name": "read-string takes no options and accepts empty input",
  "summary": "`read-string` has only the one-argument arity, and empty input returns nil instead of an EOF error.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/utils.ts#readStringImpl"]
}
---
`(read-string "")` is an `EOF while reading` error on the JVM and `nil` here. `(read-string {:eof :x} "")` is `:x` there
and throws `read-string expects a string` here. `^"x" []` is valid metadata on the JVM (`{:tag "x"}`) and a read error
here.
