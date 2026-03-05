import { isList, isMap, isMacro, isSymbol, isVector } from '../assertions'
import { lookup } from '../env'
import { cljList, cljMap, cljVector } from '../factories'
import type { CljValue, Env, EvaluationContext } from '../types'

/**
 * Fully expands all macros in `form` recursively.
 *
 * Rules:
 * - Atoms and symbols are returned as-is.
 * - Vectors and maps: each element/entry is expanded (handles let binding values, etc.).
 * - `quote` / `quasiquote`: expansion stops — template literals must not be touched.
 * - List with a macro as head: apply the macro, then recursively expand the result.
 * - Everything else (special forms, function calls, unknown symbols): expand sub-forms.
 *
 * `fn` and `loop` bodies are expanded in-place — they are not boundaries.
 * The recur tail-position check in evaluateFn/evaluateLoop operates on the already-expanded body.
 */
export function macroExpandAllWithContext(
  form: CljValue,
  env: Env,
  ctx: EvaluationContext
): CljValue {
  // Vectors: expand each element (covers [x (some-macro ...)] in let bindings etc.)
  if (isVector(form)) {
    return cljVector(
      form.value.map((sub) => macroExpandAllWithContext(sub, env, ctx))
    )
  }

  // Maps: expand each key and value
  if (isMap(form)) {
    return cljMap(
      form.entries.map(
        ([k, v]) =>
          [
            macroExpandAllWithContext(k, env, ctx),
            macroExpandAllWithContext(v, env, ctx),
          ] as [CljValue, CljValue]
      )
    )
  }

  // Atoms (number, string, boolean, keyword, nil, symbol, regex, functions, etc.)
  if (!isList(form)) return form

  // Empty list
  if (form.value.length === 0) return form

  const first = form.value[0]

  // Non-symbol head (e.g. anonymous fn call `((fn [x] x) 5)`): expand all sub-forms
  if (!isSymbol(first)) {
    return cljList(
      form.value.map((sub) => macroExpandAllWithContext(sub, env, ctx))
    )
  }

  const name = first.name

  // Stop at quote / quasiquote — do not expand inside template literals
  if (name === 'quote' || name === 'quasiquote') return form

  // Check whether the head resolves to a macro in the current env
  try {
    const macroOrUnknown = lookup(name, env)
    if (isMacro(macroOrUnknown)) {
      const expanded = ctx.applyMacro(macroOrUnknown, form.value.slice(1))
      // Keep expanding until no more macros at the top level
      return macroExpandAllWithContext(expanded, env, ctx)
    }
  } catch {
    // Symbol not found in env — treat as non-macro (forward refs, fn params, etc.)
  }

  // Special forms and function calls: expand all sub-forms
  return cljList(
    form.value.map((sub) => macroExpandAllWithContext(sub, env, ctx))
  )
}
