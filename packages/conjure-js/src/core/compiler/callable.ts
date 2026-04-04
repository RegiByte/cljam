import { is } from '../assertions.ts'
import { EvaluationError } from '../errors.ts'
import { dispatchMultiMethod } from '../evaluator/dispatch.ts'
import { getLineCol, getPos, maybeHydrateErrorPos } from '../positions.ts'
import { printString } from '../printer.ts'
import type { CljList, CompiledExpr, CompileEnv, CompileFn, StackFrame } from '../types.ts'

export function compileCall(
  node: CljList,
  compileEnv: CompileEnv | null,
  compile: CompileFn
): CompiledExpr | null {
  const head = node.value[0]
  const compiledOp = compile(head, compileEnv)
  if (compiledOp === null) return null
  const compiledArgs: CompiledExpr[] = []
  for (const arg of node.value.slice(1)) {
    const compiled = compile(arg, compileEnv)
    // Uncompilable argument, bail out
    if (compiled === null) return null
    compiledArgs.push(compiled)
  }
  return (env, ctx) => {
    const op = compiledOp(env, ctx)
    if (is.multiMethod(op)) {
      const args = compiledArgs.map((c) => c!(env, ctx))
      return dispatchMultiMethod(op, args, ctx, env, node)
    }
    if (!is.callable(op)) {
      const name = is.symbol(head) ? head.name : printString(head)
      throw new EvaluationError(`${name} is not callable`, { list: node, env }, getPos(node))
    }
    const args = compiledArgs.map((carg) => carg!(env, ctx))
    const rawPos = getPos(node)
    let line = null as null | number
    let col = null as null | number
    if (rawPos && ctx.currentSource) {
      const lc = getLineCol(ctx.currentSource, rawPos.start)
      line = lc.line
      col = lc.col + 1  // 1-indexed
    }
    const frame: StackFrame = {
      fnName: is.symbol(head) ? head.name : null,
      line,
      col,
      source: ctx.currentFile ?? null,
      pos: rawPos ?? null,
    }
    ctx.frameStack.push(frame)
    try {
      return ctx.applyCallable(op, args, env)
    } catch (ex) {
      maybeHydrateErrorPos(ex, node)
      if (ex instanceof EvaluationError && !ex.frames) {
        ex.frames = [...ctx.frameStack].reverse()
      }
      throw ex
    } finally {
      ctx.frameStack.pop()
    }
  }
}
