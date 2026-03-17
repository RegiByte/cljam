import { is } from '../assertions'
import { lookup } from '../env'
import { EvaluationError } from '../errors'
import { v } from '../factories'
import { maybeHydrateErrorPos } from '../positions'
import { printString } from '../printer'
import {
  valueKeywords,
  type CljList,
  type CljValue,
  type CompiledExpr,
  type CompileEnv,
  type SlotRef,
} from '../types'
import { dispatchMultiMethod } from './dispatch'

import { specialFormKeywords } from './keywords.ts'
import { assertRecurInTailPosition } from './recur-check.ts'

function findSlot(
  symbolName: string,
  compileEnv: CompileEnv | null
): SlotRef | null {
  let current: CompileEnv | null = compileEnv
  while (current) {
    const slot = current.bindings.get(symbolName)
    if (slot !== undefined) return slot
    current = current.outer
  }
  return null
}

function findLoopTarget(compileEnv: CompileEnv | null) {
  if (compileEnv === null) return null
  let current: CompileEnv | null = compileEnv
  while (current) {
    if (current.loop) return current.loop
    current = current.outer
  }
  return null
}

export function compileIf(
  node: CljList,
  compileEnv: CompileEnv | null = null
): CompiledExpr | null {
  const cTest = compile(node.value[1], compileEnv)
  const cThen = compile(node.value[2], compileEnv)
  const hasElse = node.value.length > 3
  const cElse = hasElse ? compile(node.value[3], compileEnv) : null
  if (cTest === null || cThen === null || (hasElse && cElse === null)) {
    return null
  }

  return (env, ctx) => {
    if (is.truthy(cTest(env, ctx))) {
      return cThen(env, ctx)
    } else {
      return cElse ? cElse(env, ctx) : v.nil()
    }
  }
}

export function compileDo(
  node: CljValue[],
  compileEnv: CompileEnv | null = null
): CompiledExpr | null {
  const compiledForms: CompiledExpr[] = []
  for (const form of node) {
    const compiled = compile(form, compileEnv)
    // Can't compile a form, so bail out
    if (compiled === null) return null
    compiledForms.push(compiled)
  }

  return (env, ctx) => {
    let result: CljValue = v.nil()
    for (const compiled of compiledForms) {
      result = compiled(env, ctx)
    }
    return result
  }
}

export function compileLet(
  node: CljList,
  compileEnv: CompileEnv | null = null
): CompiledExpr | null {
  const bindings = node.value[1]
  // must be a vector with an even number of elements, else bail out
  if (!is.vector(bindings) || bindings.value.length % 2 !== 0) return null

  let currentCompileEnv = compileEnv
  const slotInits: Array<[SlotRef, CompiledExpr]> = []

  for (let i = 0; i < bindings.value.length; i += 2) {
    const pattern = bindings.value[i]
    // destructuring pattern not supported yet
    if (!is.symbol(pattern)) return null
    const slot: SlotRef = { value: null }

    const compiledInit = compile(bindings.value[i + 1], currentCompileEnv)
    // unsupported init form, bail out
    if (compiledInit === null) return null
    slotInits.push([slot, compiledInit])

    currentCompileEnv = {
      bindings: new Map([[pattern.name, slot]]),
      outer: currentCompileEnv,
    }
  }

  // compile the body with full env (all bindings in scope)
  const body = node.value.slice(2)
  const compiledBody = compileDo(body, currentCompileEnv)
  // unsupported body form, bail out
  if (compiledBody === null) return null

  return (env, ctx) => {
    // save all previous slot values (handles recursive/nested lets)
    const prevSlotValues = slotInits.map(([slot]) => slot.value)

    // evaluate inits sequentially, writing. into slots
    for (const [slot, compiledInit] of slotInits) {
      slot.value = compiledInit(env, ctx)
    }

    const result = compiledBody(env, ctx)

    // restore prev slot values
    slotInits.forEach(([slot], index) => {
      slot.value = prevSlotValues[index]
    })

    return result
  }
}

export function compileLoop(
  node: CljList,
  compileEnv: CompileEnv | null = null
): CompiledExpr | null {
  const bindings = node.value[1]
  if (!is.vector(bindings) || bindings.value.length % 2 !== 0) return null
  assertRecurInTailPosition(node.value.slice(2))

  let currentCompileEnv = compileEnv
  const slotInits: Array<[SlotRef, CompiledExpr]> = []
  const namedSlots: Array<[string, SlotRef]> = []

  for (let i = 0; i < bindings.value.length; i += 2) {
    const pattern = bindings.value[i]
    // destructuring pattern not supported yet
    if (!is.symbol(pattern)) return null
    const compiledInit = compile(bindings.value[i + 1], currentCompileEnv)
    // unsuported init, bail out
    if (compiledInit === null) return null
    const slot: SlotRef = { value: null }
    slotInits.push([slot, compiledInit])
    namedSlots.push([pattern.name, slot])

    currentCompileEnv = {
      bindings: new Map([[pattern.name, slot]]),
      outer: currentCompileEnv,
    }
  }
  const slots = slotInits.map((entry) => entry[0])
  const recurTarget: { args: CljValue[] | null } = { args: null }
  // map of ALL slots, outer: compileEnv, loop: { slots, recurTarget }
  const loopCompileEnv = {
    bindings: new Map(namedSlots),
    outer: compileEnv,
    loop: {
      slots,
      recurTarget,
    },
  }
  const compiledBody = compileDo(node.value.slice(2), loopCompileEnv)
  if (compiledBody === null) return null

  return (env, ctx) => {
    for (const [slot, compiledInit] of slotInits) {
      slot.value = compiledInit(env, ctx)
    }

    while (true) {
      recurTarget.args = null
      const result = compiledBody(env, ctx)
      if (recurTarget.args !== null) {
        // rebind!
        for (let i = 0; i < slots.length; i++) {
          slots[i].value = recurTarget.args[i]
        }
      } else {
        return result
      }
    }
  }
}

export function compileRecur(
  node: CljList,
  compileEnv: CompileEnv | null = null
): CompiledExpr | null {
  const loopInfo = findLoopTarget(compileEnv)
  // no compiler loop in scope, bail out
  // this will fallback to a thrown CljSignal in the interpreter
  if (loopInfo === null) return null
  const { recurTarget, slots } = loopInfo
  const argForms = node.value.slice(1)
  // Arity mismatch, bail out
  if (argForms.length !== slots.length) return null

  const compiledArgs: CompiledExpr[] = []
  for (const arg of argForms) {
    const compiled = compile(arg, compileEnv)
    if (compiled === null) return null
    compiledArgs.push(compiled)
  }
  return (env, ctx) => {
    // important: evaluate ALL new values before writting ANY slot
    const newArgs = compiledArgs.map((compiledArg) => compiledArg(env, ctx))
    recurTarget.args = newArgs
    // return value ignored, loop checks recurTarget.args
    return v.nil()
  }
}

export function compileCall(
  node: CljList,
  compileEnv: CompileEnv | null = null
): CompiledExpr | null {
  const head = node.value[0]
  const compiledOp = compile(head, compileEnv)
  if (compiledOp === null) return null
  const compiledArgs: CompiledExpr[] = []
  for (const arg of node.value.slice(1)) {
    const compiled = compile(arg, compileEnv)
    if (compiled === null) return null
    compiledArgs.push(compiled)
  }
  return (env, ctx) => {
    const op = compiledOp(env, ctx)
    if (is.multiMethod(op)) {
      const args = compiledArgs.map((c) => c!(env, ctx))
      return dispatchMultiMethod(op, args, ctx, env)
    }
    if (!is.callable(op)) {
      const name = is.symbol(head) ? head.name : printString(head)
      throw new EvaluationError(`${name} is not callable`, { list: node, env })
    }
    const args = compiledArgs.map((c) => c!(env, ctx))
    try {
      return ctx.applyCallable(op, args, env)
    } catch (e) {
      maybeHydrateErrorPos(e, node)
      throw e
    }
  }
}

/**
 * A pure function that compiles a node to a compiled expression.
 * The goal is to remove the overhead of interpreting the AST structure.
 * Non-supported nodes return null and fallback to the evaluator.
 */
export function compile(
  node: CljValue,
  compileEnv: CompileEnv | null = null
): CompiledExpr | null {
  switch (node.kind) {
    case valueKeywords.number:
    case valueKeywords.string:
    case valueKeywords.keyword:
    case valueKeywords.nil:
    case valueKeywords.boolean:
    case valueKeywords.regex:
      return () => node
    case valueKeywords.symbol: {
      const symbolName = node.name
      const slashIdx = symbolName.indexOf('/')
      if (slashIdx > 0 && slashIdx < symbolName.length - 1) {
        // qualified symbol not supported yet
        return null
      }
      const slot = findSlot(symbolName, compileEnv)
      if (slot !== null) {
        return (_env, _ctx) => slot.value! // direct slot access, no lookup
      }
      return (env, _ctx) => lookup(symbolName, env)
    }
    case valueKeywords.list: {
      if (node.value.length === 0) return () => node
      const head = node.value[0]
      if (is.symbol(head)) {
        if (head.name === specialFormKeywords.if) {
          return compileIf(node, compileEnv)
        }
        if (head.name === specialFormKeywords.do) {
          return compileDo(node.value.slice(1), compileEnv)
        }
        if (head.name === specialFormKeywords.let) {
          return compileLet(node, compileEnv)
        }
        if (head.name === specialFormKeywords.loop) {
          return compileLoop(node, compileEnv)
        }
        if (head.name === specialFormKeywords.recur) {
          return compileRecur(node, compileEnv)
        }
      }

      if (!is.specialForm(head)) {
        return compileCall(node, compileEnv)
      }
    }
  }
  return null
}
