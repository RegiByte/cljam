import { EvaluationError } from './errors'
import { v } from './factories'
import type { CljList, CljValue, Pos, StackFrame } from './types'

export function setPos(val: CljValue, pos: Pos): void {
  Object.defineProperty(val, '_pos', {
    value: pos,
    enumerable: false,
    writable: true,
    configurable: true,
  })
}

export function getPos(val: CljValue): Pos | undefined {
  return (val as unknown as { _pos?: Pos })._pos
}

export function getLineCol(
  source: string,
  offset: number
): { line: number; col: number; lineText: string } {
  const lines = source.split('\n')
  let pos = 0
  for (let i = 0; i < lines.length; i++) {
    const lineEnd = pos + lines[i].length
    if (offset <= lineEnd) {
      return { line: i + 1, col: offset - pos, lineText: lines[i] }
    }
    pos = lineEnd + 1 // +1 for the consumed '\n'
  }
  const last = lines[lines.length - 1]
  return { line: lines.length, col: last.length, lineText: last }
}

export function formatErrorContext(
  source: string,
  pos: Pos,
  opts?: { lineOffset?: number; colOffset?: number }
): string {
  const effectiveSource = pos.source ?? source
  const effectiveLineOffset = pos.lineOffset ?? opts?.lineOffset ?? 0
  const effectiveColOffset = pos.colOffset ?? opts?.colOffset ?? 0
  const { line, col, lineText } = getLineCol(effectiveSource, pos.start)
  const absLine = line + effectiveLineOffset
  const absCol = line === 1 ? col + effectiveColOffset : col
  const span = Math.max(1, pos.end - pos.start)
  // Caret uses raw col so it aligns with the displayed lineText snippet.
  const caret = ' '.repeat(col) + '^'.repeat(span)
  return `\n  at line ${absLine}, col ${absCol + 1}:\n  ${lineText}\n  ${caret}`
}

/**
 * Converts a StackFrame array to a Clojure vector of maps.
 * Each frame map has :fn (string or nil), :line, :col, :source.
 * Caller is responsible for ordering (innermost-first convention).
 * Pass source to compute line/col lazily from pos when not precomputed.
 */
export function framesToClj(frames: StackFrame[], source?: string): CljValue {
  return v.vector(
    frames.map((frame) => {
      let line = frame.line
      let col = frame.col
      if ((line === null || col === null) && frame.pos) {
        const frameSource = frame.pos.source ?? source
        if (frameSource) {
          const lc = getLineCol(frameSource, frame.pos.start)
          const lineOffset = frame.pos.lineOffset ?? 0
          const colOffset = frame.pos.colOffset ?? 0
          line = lc.line + lineOffset
          col = lc.line === 1 ? lc.col + 1 + colOffset : lc.col + 1
        }
      }
      return v.map([
        [v.keyword(':fn'), frame.fnName !== null ? v.string(frame.fnName) : v.nil()],
        [v.keyword(':line'), line !== null ? v.number(line) : v.nil()],
        [v.keyword(':col'), col !== null ? v.number(col) : v.nil()],
        [v.keyword(':source'), frame.source !== null ? v.string(frame.source) : v.nil()],
      ])
    })
  )
}

/**
 * Formats a call stack for display in error messages.
 * Computes line/col lazily from frame.pos — no cost on the happy path.
 */
export function formatFrames(
  frames: StackFrame[],
  source: string,
  opts?: { lineOffset?: number; colOffset?: number }
): string {
  if (frames.length === 0) return ''
  const MAX_SHOW = 20
  const shown = frames.slice(0, MAX_SHOW)
  const rest = frames.length - shown.length
  const lines: string[] = []
  for (const frame of shown) {
    const name = frame.fnName ?? '<anonymous>'
    const frameSource = frame.pos?.source ?? source
    if (frame.pos && frameSource) {
      const { line, col } = getLineCol(frameSource, frame.pos.start)
      const lineOffset = frame.pos.lineOffset ?? opts?.lineOffset ?? 0
      const colOffset = frame.pos.colOffset ?? opts?.colOffset ?? 0
      const absLine = line + lineOffset
      const absCol = line === 1 ? col + colOffset : col
      lines.push(`  at ${name} (line ${absLine}, col ${absCol + 1})`)
    } else {
      lines.push(`  at ${name}`)
    }
  }
  if (rest > 0) lines.push(`  ... ${rest} more frames`)
  return '\n' + lines.join('\n')
}

/**
 * Mutable function to hydrate the inner position of an EvaluationError
 * If the error has an argIndex in its data and no position,
 * if it already has a position stamped, do nothing.
 */
export function maybeHydrateErrorPos(error: unknown, list: CljList) {
  if (
    error instanceof EvaluationError &&
    error.data?.argIndex !== undefined &&
    !error.pos
  ) {
    const argForm = list.value[(error.data.argIndex as number) + 1]
    if (argForm) {
      const pos = getPos(argForm)
      if (pos) error.pos = pos
    }
  }
}
