import { cljBoolean, cljList, cljNil, cljSymbol, cljVector } from './factories'
import { getTokenValue } from './tokenizer'
import { valueKeywords, tokenKeywords, type Token } from './types'
import type { CljValue, TokenKinds } from './types'

export function makeTokenScanner(input: Token[], currentNs: string = 'user') {
  let offset = 0

  const api = {
    peek: (ahead: number = 0) => {
      const idx = offset + ahead
      if (idx >= input.length) return null
      return input[idx]
    },
    advance: () => {
      if (offset >= input.length) return null
      const token = input[offset]
      offset++
      return token
    },
    isAtEnd: () => {
      return offset >= input.length
    },
    position: () => {
      return {
        offset,
      }
    },
    consumeWhile(predicate: (token: Token) => boolean) {
      const buffer: Token[] = []
      while (!api.isAtEnd() && predicate(api.peek()!)) {
        buffer.push(api.advance()!)
      }
      return buffer
    },
    consumeN(n: number) {
      for (let i = 0; i < n; i++) {
        api.advance()
      }
    },
    namespace: () => currentNs,
  }

  return api
}

export type TokenScanner = ReturnType<typeof makeTokenScanner>

export class ParserError extends Error {
  context: any
  constructor(message: string, context: any) {
    super(message)
    this.name = 'ParserError'
    this.context = context
  }
}

function parseAtom(scanner: TokenScanner): CljValue {
  const token = scanner.peek()
  if (!token) {
    throw new ParserError('Unexpected end of input', scanner.position())
  }
  switch (token.kind) {
    case tokenKeywords.Symbol:
      return parseSymbol(scanner)
    case tokenKeywords.String:
      scanner.advance() // consume the string token
      return { kind: 'string', value: token.value }
    case tokenKeywords.Number:
      scanner.advance() // consume the number token
      return { kind: 'number', value: token.value }
    case tokenKeywords.Keyword: {
      scanner.advance() // consume the keyword token
      const kwName = token.value
      if (kwName.startsWith('::')) {
        const rest = kwName.slice(2)
        if (rest.includes('/')) {
          throw new ParserError(
            '::alias/keyword syntax is not yet supported',
            token
          )
        }
        return { kind: 'keyword', name: `:${scanner.namespace()}/${rest}` }
      }
      return { kind: 'keyword', name: kwName }
    }
  }
  throw new ParserError(`Unexpected token: ${token.kind}`, token)
}

const parseQuote = (scanner: TokenScanner) => {
  const token = scanner.peek()
  if (!token) {
    throw new ParserError(
      'Unexpected end of input while parsing quote',
      scanner.position()
    )
  }
  scanner.advance() // consume the quote token
  // quote returns a list with the quote symbol and the quoted value, which is the next form
  const value = parseForm(scanner)
  if (!value) {
    throw new ParserError(`Unexpected token: ${getTokenValue(token)}`, token)
  }
  return { kind: valueKeywords.list, value: [cljSymbol('quote'), value] }
}

const parseQuasiquote = (scanner: TokenScanner) => {
  const token = scanner.peek()
  if (!token) {
    throw new ParserError(
      'Unexpected end of input while parsing quasiquote',
      scanner.position()
    )
  }
  scanner.advance() // consume the quasiquote token
  const value = parseForm(scanner)
  if (!value) {
    throw new ParserError(`Unexpected token: ${getTokenValue(token)}`, token)
  }
  return { kind: valueKeywords.list, value: [cljSymbol('quasiquote'), value] }
}

const parseUnquote = (scanner: TokenScanner) => {
  const token = scanner.peek()
  if (!token) {
    throw new ParserError(
      'Unexpected end of input while parsing unquote',
      scanner.position()
    )
  }
  scanner.advance() // consume the unquote token
  const value = parseForm(scanner)
  if (!value) {
    throw new ParserError(`Unexpected token: ${getTokenValue(token)}`, token)
  }
  return { kind: valueKeywords.list, value: [cljSymbol('unquote'), value] }
}

const parseUnquoteSplicing = (scanner: TokenScanner) => {
  const token = scanner.peek()
  if (!token) {
    throw new ParserError(
      'Unexpected end of input while parsing unquote splicing',
      scanner.position()
    )
  }
  scanner.advance() // consume the unquote splicing token
  const value = parseForm(scanner)
  if (!value) {
    throw new ParserError(`Unexpected token: ${getTokenValue(token)}`, token)
  }
  return {
    kind: valueKeywords.list,
    value: [cljSymbol('unquote-splicing'), value],
  }
}

const isClosingToken = (token: Token) => {
  return (
    [
      tokenKeywords.RParen,
      tokenKeywords.RBracket,
      tokenKeywords.RBrace,
    ] as TokenKinds[]
  ).includes(token.kind)
}

const parseCollection = (
  scanner: TokenScanner,
  valueType: 'list' | 'vector',
  closeToken: string
) => {
  const startToken = scanner.peek()
  if (!startToken) {
    throw new ParserError(
      'Unexpected end of input while parsing collection',
      scanner.position()
    )
  }
  scanner.advance() // consume the opening token
  const values: CljValue[] = []
  let pairMatched = false
  while (!scanner.isAtEnd()) {
    const token = scanner.peek()
    if (!token) {
      break
    }
    if (isClosingToken(token) && token.kind !== closeToken) {
      throw new ParserError(
        `Expected '${closeToken}' to close ${valueType} started at line ${startToken.start.line} column ${startToken.start.col}, but got '${getTokenValue(token)}' at line ${token.start.line} column ${token.start.col}`,
        token
      )
    }
    if (token.kind === closeToken) {
      scanner.advance() // consume the closing token
      pairMatched = true
      break
    }
    const value = parseForm(scanner)
    values.push(value)
  }
  if (!pairMatched) {
    throw new ParserError(
      `Unmatched ${valueType} started at line ${startToken.start.line} column ${startToken.start.col}`,
      scanner.peek()
    )
  }
  return { kind: valueType, value: values }
}

const parseList = (scanner: TokenScanner) => {
  return parseCollection(scanner, valueKeywords.list, tokenKeywords.RParen)
}

const parseVector = (scanner: TokenScanner) => {
  return parseCollection(scanner, valueKeywords.vector, tokenKeywords.RBracket)
}

const parseSymbol = (scanner: TokenScanner) => {
  const token = scanner.peek()
  if (!token) {
    throw new ParserError('Unexpected end of input', scanner.position())
  }
  if (token.kind !== tokenKeywords.Symbol) {
    throw new ParserError(`Unexpected token: ${getTokenValue(token)}`, token)
  }
  scanner.advance()
  switch (token.value) {
    case 'true':
    case 'false':
      return cljBoolean(token.value === 'true')
    case 'nil':
      return cljNil()
    default:
      return cljSymbol(token.value)
  }
}

const parseMap = (scanner: TokenScanner) => {
  const startToken = scanner.peek()
  if (!startToken) {
    throw new ParserError(
      'Unexpected end of input while parsing map',
      scanner.position()
    )
  }
  let pairMatched = false
  scanner.advance() // consume the opening brace
  const entries: [CljValue, CljValue][] = []
  while (!scanner.isAtEnd()) {
    const token = scanner.peek()
    if (!token) {
      break
    }
    if (isClosingToken(token) && token.kind !== tokenKeywords.RBrace) {
      throw new ParserError(
        `Expected '}' to close map started at line ${startToken.start.line} column ${startToken.start.col}, but got '${token.kind}' at line ${token.start.line} column ${token.start.col}`,
        token
      )
    }
    if (token.kind === tokenKeywords.RBrace) {
      scanner.advance() // consume the closing brace
      pairMatched = true
      break
    }
    const key = parseForm(scanner)
    const nextToken = scanner.peek()
    if (!nextToken) {
      throw new ParserError(
        `Expected value in map started at line ${startToken.start.line} column ${startToken.start.col}, but got end of input`,
        scanner.position()
      )
    }
    if (nextToken.kind === tokenKeywords.RBrace) {
      throw new ParserError(
        `Map started at line ${startToken.start.line} column ${startToken.start.col} has key ${key.kind} but no value`,
        scanner.position()
      )
    }
    const value = parseForm(scanner)
    if (!value) {
      break
    }
    entries.push([key, value])
  }
  if (!pairMatched) {
    throw new ParserError(
      `Unmatched map started at line ${startToken.start.line} column ${startToken.start.col}`,
      scanner.peek()
    )
  }
  return { kind: valueKeywords.map, entries }
}

type AnonFnParams = { maxIndex: number; hasRest: boolean }

// Walks the AST and collects which % params are referenced.
function collectAnonFnParams(forms: CljValue[]): AnonFnParams {
  let maxIndex = 0
  let hasRest = false

  function walk(form: CljValue): void {
    switch (form.kind) {
      case 'symbol': {
        const name = form.name
        if (name === '%' || name === '%1') {
          maxIndex = Math.max(maxIndex, 1)
        } else if (/^%[2-9]$/.test(name)) {
          maxIndex = Math.max(maxIndex, parseInt(name[1]))
        } else if (name === '%&') {
          hasRest = true
        }
        break
      }
      case 'list':
      case 'vector':
        for (const child of form.value) walk(child)
        break
      case 'map':
        for (const [k, v] of form.entries) {
          walk(k)
          walk(v)
        }
        break
      default:
        break
    }
  }

  for (const form of forms) walk(form)
  return { maxIndex, hasRest }
}

// Recursively substitutes % param symbols with their generated names.
function substituteAnonFnParams(form: CljValue): CljValue {
  switch (form.kind) {
    case 'symbol': {
      const name = form.name
      if (name === '%' || name === '%1') return cljSymbol('p1')
      if (/^%[2-9]$/.test(name)) return cljSymbol(`p${name[1]}`)
      if (name === '%&') return cljSymbol('rest')
      return form
    }
    case 'list':
      return { ...form, value: form.value.map(substituteAnonFnParams) }
    case 'vector':
      return { ...form, value: form.value.map(substituteAnonFnParams) }
    case 'map':
      return {
        ...form,
        entries: form.entries.map(
          ([k, v]) =>
            [substituteAnonFnParams(k), substituteAnonFnParams(v)] as [
              CljValue,
              CljValue,
            ]
        ),
      }
    default:
      return form
  }
}

const parseAnonFn = (scanner: TokenScanner) => {
  const startToken = scanner.peek()
  if (!startToken) {
    throw new ParserError(
      'Unexpected end of input while parsing anonymous function',
      scanner.position()
    )
  }
  scanner.advance() // consume AnonFnStart

  const bodyForms: CljValue[] = []
  let pairMatched = false
  while (!scanner.isAtEnd()) {
    const token = scanner.peek()
    if (!token) break
    if (isClosingToken(token) && token.kind !== tokenKeywords.RParen) {
      throw new ParserError(
        `Expected ')' to close anonymous function started at line ${startToken.start.line} column ${startToken.start.col}, but got '${getTokenValue(token)}' at line ${token.start.line} column ${token.start.col}`,
        token
      )
    }
    if (token.kind === tokenKeywords.RParen) {
      scanner.advance() // consume closing ')'
      pairMatched = true
      break
    }
    if (token.kind === tokenKeywords.AnonFnStart) {
      throw new ParserError(
        'Nested anonymous functions (#(...)) are not allowed',
        token
      )
    }
    bodyForms.push(parseForm(scanner))
  }
  if (!pairMatched) {
    throw new ParserError(
      `Unmatched anonymous function started at line ${startToken.start.line} column ${startToken.start.col}`,
      scanner.peek()
    )
  }

  // The entire body content is a single implicit list — #(* 2 %) ≡ (fn [p1] (* 2 p1))
  const bodyList: CljValue = { kind: 'list', value: bodyForms }

  const { maxIndex, hasRest } = collectAnonFnParams([bodyList])

  const paramSymbols: CljValue[] = []
  for (let i = 1; i <= maxIndex; i++) {
    paramSymbols.push(cljSymbol(`p${i}`))
  }
  if (hasRest) {
    paramSymbols.push(cljSymbol('&'))
    paramSymbols.push(cljSymbol('rest'))
  }

  const substitutedBody = substituteAnonFnParams(bodyList)

  return cljList([cljSymbol('fn'), cljVector(paramSymbols), substitutedBody])
}

function parseForm(scanner: TokenScanner): CljValue {
  const token = scanner.peek()
  if (!token) {
    throw new ParserError('Unexpected end of input', scanner.position())
  }
  switch (token.kind) {
    case tokenKeywords.String:
    case tokenKeywords.Number:
    case tokenKeywords.Keyword:
    case tokenKeywords.Symbol:
      return parseAtom(scanner)
    case tokenKeywords.LParen:
      return parseList(scanner)
    case tokenKeywords.LBrace:
      return parseMap(scanner)
    case tokenKeywords.LBracket:
      return parseVector(scanner)
    case tokenKeywords.Quote:
      return parseQuote(scanner)
    case tokenKeywords.Quasiquote:
      return parseQuasiquote(scanner)
    case tokenKeywords.Unquote:
      return parseUnquote(scanner)
    case tokenKeywords.UnquoteSplicing:
      return parseUnquoteSplicing(scanner)
    case tokenKeywords.AnonFnStart:
      return parseAnonFn(scanner)
    default:
      throw new ParserError(
        `Unexpected token: ${getTokenValue(token)} at line ${token.start.line} column ${token.start.col}`,
        token
      )
  }
}

// initializes the scanner and parses the forms, returning a tree of values
export function parseForms(input: Token[], currentNs: string = 'user'): CljValue[] {
  const withoutComments = input.filter((t) => t.kind !== tokenKeywords.Comment)
  const scanner = makeTokenScanner(withoutComments, currentNs)
  const values: CljValue[] = []
  while (!scanner.isAtEnd()) {
    values.push(parseForm(scanner))
  }
  return values
}
