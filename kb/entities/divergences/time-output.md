---
{
  "type": "divergence",
  "name": "time prints without quotes",
  "summary": "`time` prints a bare line, where the JVM prints a quoted string.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "printing",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/utils.ts#timeImpl"]
}
---
`(time 1)` prints `"Elapsed time: 0.003 msecs"` with quotes on the JVM and `Elapsed time: 0.196 msecs` without them here.
