import { cljMap, cljVector } from '../factories'
import type { CljMap, CljValue, CljVector, EvaluationContext } from '../types'
import type { Env } from '../types'

export function evaluateVector(
  vector: CljVector,
  env: Env,
  ctx: EvaluationContext
): CljValue {
  const evaluated = vector.value.map((v) => ctx.evaluate(v, env))
  if (vector.meta) return { kind: 'vector' as const, value: evaluated, meta: vector.meta }
  return cljVector(evaluated)
}

export function evaluateMap(
  map: CljMap,
  env: Env,
  ctx: EvaluationContext
): CljValue {
  let entries: [CljValue, CljValue][] = []
  for (const [key, value] of map.entries) {
    const evaluatedKey = ctx.evaluate(key, env)
    const evaluatedValue = ctx.evaluate(value, env)
    entries.push([evaluatedKey, evaluatedValue])
  }
  if (map.meta) return { kind: 'map' as const, entries, meta: map.meta }
  return cljMap(entries)
}
