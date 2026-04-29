import type { CljValue, Pos, StackFrame } from './types'

export class TokenizerError extends Error {
  context: unknown
  constructor(message: string, context: unknown) {
    super(message)
    this.name = 'TokenizerError'
    this.context = context
  }
}

export class ReaderError extends Error {
  context: unknown
  pos?: Pos
  constructor(message: string, context: unknown, pos?: Pos) {
    super(message)
    this.name = 'ReaderError'
    this.context = context
    this.pos = pos
  }
}

// Global symbol — shared across all module instances regardless of how many
// copies of @regibyte/cljam are loaded. Use isEvaluationError() instead of
// instanceof when the error may cross a module boundary (e.g. from a library).
const EVALUATION_ERROR_BRAND = Symbol.for('@regibyte/cljam/EvaluationError')

export class EvaluationError extends Error {
  readonly [EVALUATION_ERROR_BRAND] = true
  context: unknown
  pos?: Pos
  data?: Record<string, unknown>
  frames?: StackFrame[]
  /**
   * Machine-readable error code for programmatic handling.
   * Known codes:
   *   'namespace/access-denied' — namespace blocked by allowedPackages
   *   'namespace/not-found'     — namespace does not exist anywhere
   */
  code?: string
  constructor(message: string, context: unknown, pos?: Pos) {
    super(message)
    this.name = 'EvaluationError'
    this.context = context
    this.pos = pos
  }

  /** Convenience factory: create an error that points at a specific argument. */
  static atArg(message: string, context: unknown, argIndex: number): EvaluationError {
    const err = new EvaluationError(message, context)
    err.data = { argIndex }
    return err
  }
}

/**
 * Cross-module-boundary check for EvaluationError.
 * Use this instead of `instanceof EvaluationError` whenever the error may
 * originate from a different module instance of @regibyte/cljam (e.g. a
 * library loaded via dynamic import with its own nested node_modules copy).
 *
 * Primary check: Symbol.for brand (set on all instances from this version onward).
 * Fallback: name string (covers instances from older compiled copies without the brand).
 */
export function isEvaluationError(e: unknown): e is EvaluationError {
  if (!(e instanceof Error)) return false
  const brand = (e as unknown as Record<symbol, unknown>)[EVALUATION_ERROR_BRAND]
  return brand === true || e.name === 'EvaluationError'
}

export class CljThrownSignal {
  value: CljValue
  constructor(value: CljValue) {
    this.value = value
  }
}

