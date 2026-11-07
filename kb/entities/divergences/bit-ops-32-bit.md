---
{
  "type": "divergence",
  "name": "Bit operators are 32-bit",
  "summary": "Bit operators use JavaScript 32-bit integer operators, so anything past 32 bits wraps or truncates.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/modules/core/stdlib/arithmetic.ts#bitAndImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/arithmetic.ts#bitShiftLeftImpl", "cljam/packages/cljam/src/core/modules/core/stdlib/arithmetic.ts#unsignedBitShiftRightImpl"]
}
---
| Form | JVM | cljam |
|---|---|---|
| `(bit-shift-left 1 40)` | `1099511627776` | `256` |
| `(bit-shift-left 1 31)` | `2147483648` | `-2147483648` |
| `(bit-and 4294967296 4294967296)` | `4294967296` | `0` |
| `(bit-or 4294967296 1)` | `4294967297` | `1` |
| `(bit-not 4294967296)` | `-4294967297` | `-1` |
| `(unsigned-bit-shift-right -1 1)` | `9223372036854775807` | `2147483647` |

The host's operators are 32-bit, but the number model does not bound them to 32, so this is wrong under any outcome of
[[one-number-type]]. `bit-and-not`, `bit-test` and friends are in [[numeric-tower-vars]].
