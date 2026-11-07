---
{
  "type": "divergence",
  "name": "Top-level do is not form-by-form",
  "summary": "A top-level `do` is analyzed as one form, so a macro or `ns` inside it does not affect the forms after it.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "loud",
  "refs": ["cljam/packages/cljam/src/core/session.ts#L355-L372"]
}
---
`(do (defmacro m [] 1) (m))` is `1` on the JVM and `m is not callable` here. `(do (ns foo) *ns*)` is `foo` there and `user`
here.
