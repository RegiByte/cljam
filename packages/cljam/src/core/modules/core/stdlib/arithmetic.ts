import { is } from '../../../assertions'
import { EvaluationError } from '../../../errors'
import { DocGroups, docMeta, v } from '../../../factories'
import { printString } from '../../../printer'
import { toSeq } from '../../../transformations'
import type { CljList, CljNumber, CljValue, CljVector } from '../../../types'

export const arithmeticFunctions: Record<string, CljValue> = {
  '+': v
    .nativeFn('+', function add(...nums: CljValue[]) {
      if (nums.length === 0) return v.number(0)
      if (nums.length === 2) {
        if (!is.number(nums[0]))
          throw EvaluationError.atArg(
            '+ expects all arguments to be numbers',
            { args: nums },
            0
          )
        if (!is.number(nums[1]))
          throw EvaluationError.atArg(
            '+ expects all arguments to be numbers',
            { args: nums },
            1
          )
        return v.number(nums[0].value + nums[1].value)
      }
      let result = 0
      for (let i = 0; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            '+ expects all arguments to be numbers',
            { args: nums },
            i
          )
        result += (nums[i] as CljNumber).value
      }
      return v.number(result)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the sum of the arguments. Throws on non-number arguments.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.arithmetic,
        extra: {
          // TODO: remove these
          someNum: 42,
          someBool: true,
          someString: 'hello',
          someSymbol: v.symbol('hello'),
          someKeyword: v.keyword(':hello'),
          someVector: v.vector([v.number(1), v.number(2), v.number(3)]),
          someMap: v.map([
            [v.keyword(':a'), v.number(1)],
            [v.keyword(':b'), v.number(2)],
            [v.keyword(':c'), v.number(3)],
          ]),
          someSet: v.set([v.number(1), v.number(2), v.number(3)]),
          someList: v.list([v.number(1), v.number(2), v.number(3)]),
          someAtom: v.atom(v.number(1)),
        },
      }),
    ]),

  '-': v
    .nativeFn('-', function subtract(...nums: CljValue[]) {
      if (nums.length === 0)
        throw new EvaluationError('- expects at least one argument', {
          args: nums,
        })
      if (nums[0].kind !== 'number')
        throw EvaluationError.atArg(
          '- expects all arguments to be numbers',
          { args: nums },
          0
        )
      if (nums.length === 1) return v.number(-(nums[0] as CljNumber).value)
      if (nums.length === 2) {
        if (nums[1].kind !== 'number')
          throw EvaluationError.atArg(
            '- expects all arguments to be numbers',
            { args: nums },
            1
          )
        return v.number(
          (nums[0] as CljNumber).value - (nums[1] as CljNumber).value
        )
      }
      let result = (nums[0] as CljNumber).value
      for (let i = 1; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            '- expects all arguments to be numbers',
            { args: nums },
            i
          )
        result -= (nums[i] as CljNumber).value
      }
      return v.number(result)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the difference of the arguments. Throws on non-number arguments.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  '*': v
    .nativeFn('*', function multiply(...nums: CljValue[]) {
      if (nums.length === 0) return v.number(1)
      if (nums.length === 2) {
        if (nums[0].kind !== 'number')
          throw EvaluationError.atArg(
            '* expects all arguments to be numbers',
            { args: nums },
            0
          )
        if (nums[1].kind !== 'number')
          throw EvaluationError.atArg(
            '* expects all arguments to be numbers',
            { args: nums },
            1
          )
        return v.number(
          (nums[0] as CljNumber).value * (nums[1] as CljNumber).value
        )
      }
      let result = 1
      for (let i = 0; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            '* expects all arguments to be numbers',
            { args: nums },
            i
          )
        result *= (nums[i] as CljNumber).value
      }
      return v.number(result)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the product of the arguments. Throws on non-number arguments.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  '/': v
    .nativeFn('/', function divide(...nums: CljValue[]) {
      if (nums.length === 0)
        throw new EvaluationError('/ expects at least one argument', {
          args: nums,
        })
      if (nums[0].kind !== 'number')
        throw EvaluationError.atArg(
          '/ expects all arguments to be numbers',
          { args: nums },
          0
        )
      if (nums.length === 2) {
        if (nums[1].kind !== 'number')
          throw EvaluationError.atArg(
            '/ expects all arguments to be numbers',
            { args: nums },
            1
          )
        if ((nums[1] as CljNumber).value === 0)
          throw EvaluationError.atArg('division by zero', { args: nums }, 1)
        return v.number(
          (nums[0] as CljNumber).value / (nums[1] as CljNumber).value
        )
      }
      let result = (nums[0] as CljNumber).value
      for (let i = 1; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            '/ expects all arguments to be numbers',
            { args: nums },
            i
          )
        if ((nums[i] as CljNumber).value === 0) {
          const err = new EvaluationError('division by zero', { args: nums })
          err.data = { argIndex: i }
          throw err
        }
        result /= (nums[i] as CljNumber).value
      }
      return v.number(result)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the quotient of the arguments. Throws on non-number arguments or division by zero.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  '>': v
    .nativeFn('>', function greaterThan(...nums: CljValue[]) {
      if (nums.length < 2)
        throw new EvaluationError('> expects at least two arguments', {
          args: nums,
        })
      if (nums.length === 2) {
        if (nums[0].kind !== 'number')
          throw EvaluationError.atArg(
            '> expects all arguments to be numbers',
            { args: nums },
            0
          )
        if (nums[1].kind !== 'number')
          throw EvaluationError.atArg(
            '> expects all arguments to be numbers',
            { args: nums },
            1
          )
        return v.boolean(
          (nums[0] as CljNumber).value > (nums[1] as CljNumber).value
        )
      }
      if (nums[0].kind !== 'number')
        throw EvaluationError.atArg(
          '> expects all arguments to be numbers',
          { args: nums },
          0
        )
      for (let i = 1; i < nums.length; i++) {
        if (nums[i].kind !== 'number') {
          throw EvaluationError.atArg(
            '> expects all arguments to be numbers',
            { args: nums },
            i
          )
        }
        if ((nums[i] as CljNumber).value >= (nums[i - 1] as CljNumber).value) {
          return v.boolean(false)
        }
      }
      return v.boolean(true)
    })
    .withMeta([
      ...docMeta({
        doc: 'Compares adjacent arguments left to right, returns true if all values are in descending order, false otherwise.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.comparison,
      }),
    ]),

  '<': v
    .nativeFn('<', function lessThan(...nums: CljValue[]) {
      if (nums.length < 2)
        throw new EvaluationError('< expects at least two arguments', {
          args: nums,
        })
      if (nums.length === 2) {
        if (nums[0].kind !== 'number')
          throw EvaluationError.atArg(
            '< expects all arguments to be numbers',
            { args: nums },
            0
          )
        if (nums[1].kind !== 'number')
          throw EvaluationError.atArg(
            '< expects all arguments to be numbers',
            { args: nums },
            1
          )
        return v.boolean(
          (nums[0] as CljNumber).value < (nums[1] as CljNumber).value
        )
      }
      for (let i = 0; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            '< expects all arguments to be numbers',
            { args: nums },
            i
          )
      }
      for (let i = 1; i < nums.length; i++) {
        if ((nums[i] as CljNumber).value <= (nums[i - 1] as CljNumber).value)
          return v.boolean(false)
      }
      return v.boolean(true)
    })
    .withMeta([
      ...docMeta({
        doc: 'Compares adjacent arguments left to right, returns true if all values are in ascending order, false otherwise.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.comparison,
      }),
    ]),

  '>=': v
    .nativeFn('>=', function greaterThanOrEqual(...nums: CljValue[]) {
      if (nums.length < 2)
        throw new EvaluationError('>= expects at least two arguments', {
          args: nums,
        })
      if (nums.length === 2) {
        if (nums[0].kind !== 'number')
          throw EvaluationError.atArg(
            '>= expects all arguments to be numbers',
            { args: nums },
            0
          )
        if (nums[1].kind !== 'number')
          throw EvaluationError.atArg(
            '>= expects all arguments to be numbers',
            { args: nums },
            1
          )
        return v.boolean(
          (nums[0] as CljNumber).value >= (nums[1] as CljNumber).value
        )
      }
      for (let i = 0; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            '>= expects all arguments to be numbers',
            { args: nums },
            i
          )
      }
      for (let i = 1; i < nums.length; i++) {
        if ((nums[i] as CljNumber).value > (nums[i - 1] as CljNumber).value)
          return v.boolean(false)
      }
      return v.boolean(true)
    })
    .withMeta([
      ...docMeta({
        doc: 'Compares adjacent arguments left to right, returns true if all comparisons returns true for greater than or equal to checks, false otherwise.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.comparison,
      }),
    ]),

  '<=': v
    .nativeFn('<=', function lessThanOrEqual(...nums: CljValue[]) {
      if (nums.length < 2)
        throw new EvaluationError('<= expects at least two arguments', {
          args: nums,
        })
      if (nums.length === 2) {
        if (nums[0].kind !== 'number')
          throw EvaluationError.atArg(
            '<= expects all arguments to be numbers',
            { args: nums },
            0
          )
        if (nums[1].kind !== 'number')
          throw EvaluationError.atArg(
            '<= expects all arguments to be numbers',
            { args: nums },
            1
          )
        return v.boolean(
          (nums[0] as CljNumber).value <= (nums[1] as CljNumber).value
        )
      }
      for (let i = 0; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            '<= expects all arguments to be numbers',
            { args: nums },
            i
          )
      }
      for (let i = 1; i < nums.length; i++) {
        if ((nums[i] as CljNumber).value < (nums[i - 1] as CljNumber).value)
          return v.boolean(false)
      }
      return v.boolean(true)
    })
    .withMeta([
      ...docMeta({
        doc: 'Compares adjacent arguments left to right, returns true if all comparisons returns true for less than or equal to checks, false otherwise.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.comparison,
      }),
    ]),

  '=': v
    .nativeFn('=', function equals(...vals: CljValue[]) {
      if (vals.length < 2) {
        throw new EvaluationError('= expects at least two arguments', {
          args: vals,
        })
      }
      for (let i = 1; i < vals.length; i++) {
        if (!is.equal(vals[i], vals[i - 1])) {
          return v.boolean(false)
        }
      }
      return v.boolean(true)
    })
    .withMeta([
      ...docMeta({
        doc: 'Compares adjacent arguments left to right, returns true if all values are structurally equal, false otherwise.',
        arglists: [['&', 'vals']],
        docGroup: DocGroups.comparison,
      }),
    ]),

  inc: v
    .nativeFn('inc', function increment(x: CljValue) {
      if (x === undefined || x.kind !== 'number') {
        throw EvaluationError.atArg(
          `inc expects a number${x !== undefined ? `, got ${printString(x)}` : ''}`,
          { x },
          0
        )
      }
      return v.number((x as CljNumber).value + 1)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the argument incremented by 1. Throws on non-number arguments.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  dec: v
    .nativeFn('dec', function decrement(x: CljValue) {
      if (x === undefined || x.kind !== 'number') {
        throw EvaluationError.atArg(
          `dec expects a number${x !== undefined ? `, got ${printString(x)}` : ''}`,
          { x },
          0
        )
      }
      return v.number((x as CljNumber).value - 1)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the argument decremented by 1. Throws on non-number arguments.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  max: v
    .nativeFn('max', function maximum(...nums: CljValue[]) {
      if (nums.length === 0)
        throw new EvaluationError('max expects at least one argument', {
          args: nums,
        })
      if (nums[0].kind !== 'number')
        throw EvaluationError.atArg(
          'max expects all arguments to be numbers',
          { args: nums },
          0
        )
      let best = (nums[0] as CljNumber).value
      for (let i = 1; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            'max expects all arguments to be numbers',
            { args: nums },
            i
          )
        const n = (nums[i] as CljNumber).value
        if (n > best) best = n
      }
      return v.number(best)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the largest of the arguments. Throws on non-number arguments.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  min: v
    .nativeFn('min', function minimum(...nums: CljValue[]) {
      if (nums.length === 0)
        throw new EvaluationError('min expects at least one argument', {
          args: nums,
        })
      if (nums[0].kind !== 'number')
        throw EvaluationError.atArg(
          'min expects all arguments to be numbers',
          { args: nums },
          0
        )
      let best = (nums[0] as CljNumber).value
      for (let i = 1; i < nums.length; i++) {
        if (nums[i].kind !== 'number')
          throw EvaluationError.atArg(
            'min expects all arguments to be numbers',
            { args: nums },
            i
          )
        const n = (nums[i] as CljNumber).value
        if (n < best) best = n
      }
      return v.number(best)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the smallest of the arguments. Throws on non-number arguments.',
        arglists: [['&', 'nums']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  mod: v
    .nativeFn('mod', function modulo(n: CljValue, d: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `mod expects a number as first argument${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      if (d === undefined || d.kind !== 'number') {
        throw EvaluationError.atArg(
          `mod expects a number as second argument${d !== undefined ? `, got ${printString(d)}` : ''}`,
          { d },
          1
        )
      }
      if ((d as CljNumber).value === 0) {
        const err = new EvaluationError('mod: division by zero', { n, d })
        err.data = { argIndex: 1 }
        throw err
      }
      // Clojure mod always returns non-negative when divisor is positive
      const result = (n as CljNumber).value % (d as CljNumber).value
      return v.number(
        result < 0 ? result + Math.abs((d as CljNumber).value) : result
      )
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the remainder of the first argument divided by the second argument. Throws on non-number arguments or division by zero.',
        arglists: [['n', 'd']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'even?': v
    .nativeFn('even?', function isEven(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `even? expects a number${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      return v.boolean((n as CljNumber).value % 2 === 0)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns true if the argument is an even number, false otherwise.',
        arglists: [['n']],
        docGroup: DocGroups.predicates,
      }),
    ]),

  'odd?': v
    .nativeFn('odd?', function isOdd(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `odd? expects a number${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      return v.boolean(Math.abs((n as CljNumber).value) % 2 !== 0)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns true if the argument is an odd number, false otherwise.',
        arglists: [['n']],
        docGroup: DocGroups.predicates,
      }),
    ]),

  'pos?': v
    .nativeFn('pos?', function isPositive(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `pos? expects a number${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      return v.boolean((n as CljNumber).value > 0)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns true if the argument is a positive number, false otherwise.',
        arglists: [['n']],
        docGroup: DocGroups.predicates,
      }),
    ]),

  'neg?': v
    .nativeFn('neg?', function isNegative(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `neg? expects a number${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      return v.boolean((n as CljNumber).value < 0)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns true if the argument is a negative number, false otherwise.',
        arglists: [['n']],
        docGroup: DocGroups.predicates,
      }),
    ]),

  'zero?': v
    .nativeFn('zero?', function isZero(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `zero? expects a number${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      return v.boolean((n as CljNumber).value === 0)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns true if the argument is zero, false otherwise.',
        arglists: [['n']],
        docGroup: DocGroups.predicates,
      }),
    ]),

  abs: v
    .nativeFn('abs', function absImpl(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `abs expects a number${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      return v.number(Math.abs((n as CljNumber).value))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the absolute value of a.',
        arglists: [['a']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  sqrt: v
    .nativeFn('sqrt', function sqrtImpl(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(
          `sqrt expects a number${n !== undefined ? `, got ${printString(n)}` : ''}`,
          { n },
          0
        )
      }
      return v.number(Math.sqrt((n as CljNumber).value))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the square root of n.',
        arglists: [['n']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  quot: v
    .nativeFn('quot', function quotImpl(num: CljValue, div: CljValue) {
      if (num === undefined || num.kind !== 'number') {
        throw EvaluationError.atArg(
          `quot expects a number as first argument`,
          { num },
          0
        )
      }
      if (div === undefined || div.kind !== 'number') {
        throw EvaluationError.atArg(
          `quot expects a number as second argument`,
          { div },
          1
        )
      }
      if ((div as CljNumber).value === 0) {
        throw EvaluationError.atArg('quot: division by zero', { num, div }, 1)
      }
      return v.number(
        Math.trunc((num as CljNumber).value / (div as CljNumber).value)
      )
    })
    .withMeta([
      ...docMeta({
        doc: 'quot[ient] of dividing numerator by denominator.',
        arglists: [['num', 'div']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  rem: v
    .nativeFn('rem', function remImpl(num: CljValue, div: CljValue) {
      if (num === undefined || num.kind !== 'number') {
        throw EvaluationError.atArg(
          `rem expects a number as first argument`,
          { num },
          0
        )
      }
      if (div === undefined || div.kind !== 'number') {
        throw EvaluationError.atArg(
          `rem expects a number as second argument`,
          { div },
          1
        )
      }
      if ((div as CljNumber).value === 0) {
        throw EvaluationError.atArg('rem: division by zero', { num, div }, 1)
      }
      return v.number((num as CljNumber).value % (div as CljNumber).value)
    })
    .withMeta([
      ...docMeta({
        doc: 'remainder of dividing numerator by denominator.',
        arglists: [['num', 'div']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  rand: v
    .nativeFn('rand', function randImpl(...args: CljValue[]) {
      if (args.length === 0) return v.number(Math.random())
      if (args[0].kind !== 'number') {
        throw EvaluationError.atArg(`rand expects a number`, { n: args[0] }, 0)
      }
      return v.number(Math.random() * (args[0] as CljNumber).value)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).',
        arglists: [[], ['n']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'rand-int': v
    .nativeFn('rand-int', function randIntImpl(n: CljValue) {
      if (n === undefined || n.kind !== 'number') {
        throw EvaluationError.atArg(`rand-int expects a number`, { n }, 0)
      }
      return v.number(Math.floor(Math.random() * (n as CljNumber).value))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns a random integer between 0 (inclusive) and n (exclusive).',
        arglists: [['n']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'rand-nth': v
    .nativeFn('rand-nth', function randNthImpl(coll: CljValue) {
      if (coll === undefined || (!is.list(coll) && !is.vector(coll))) {
        throw EvaluationError.atArg(
          `rand-nth expects a list or vector`,
          { coll },
          0
        )
      }
      const items = (coll as CljList | CljVector).value
      if (items.length === 0) {
        throw EvaluationError.atArg(
          'rand-nth called on empty collection',
          { coll },
          0
        )
      }
      return items[Math.floor(Math.random() * items.length)]
    })
    .withMeta([
      ...docMeta({
        doc: 'Return a random element of the (sequential) collection.',
        arglists: [['coll']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  shuffle: v
    .nativeFn('shuffle', function shuffleImpl(coll: CljValue) {
      if (coll === undefined || coll.kind === 'nil') return v.vector([])
      if (!is.seqable(coll)) {
        throw EvaluationError.atArg(
          `shuffle expects a collection, got ${printString(coll)}`,
          { coll },
          0
        )
      }
      const arr = [...toSeq(coll)]
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return v.vector(arr)
    })
    .withMeta([
      ...docMeta({
        doc: 'Return a random permutation of coll.',
        arglists: [['coll']],
        docGroup: DocGroups.collections,
      }),
    ]),

  'bit-and': v
    .nativeFn('bit-and', function bitAndImpl(x: CljValue, y: CljValue) {
      if (x?.kind !== 'number')
        throw EvaluationError.atArg('bit-and expects numbers', { x }, 0)
      if (y?.kind !== 'number')
        throw EvaluationError.atArg('bit-and expects numbers', { y }, 1)
      return v.number((x as CljNumber).value & (y as CljNumber).value)
    })
    .withMeta([
      ...docMeta({
        doc: 'Bitwise and',
        arglists: [['x', 'y']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'bit-or': v
    .nativeFn('bit-or', function bitOrImpl(x: CljValue, y: CljValue) {
      if (x?.kind !== 'number')
        throw EvaluationError.atArg('bit-or expects numbers', { x }, 0)
      if (y?.kind !== 'number')
        throw EvaluationError.atArg('bit-or expects numbers', { y }, 1)
      return v.number((x as CljNumber).value | (y as CljNumber).value)
    })
    .withMeta([
      ...docMeta({
        doc: 'Bitwise or',
        arglists: [['x', 'y']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'bit-xor': v
    .nativeFn('bit-xor', function bitXorImpl(x: CljValue, y: CljValue) {
      if (x?.kind !== 'number')
        throw EvaluationError.atArg('bit-xor expects numbers', { x }, 0)
      if (y?.kind !== 'number')
        throw EvaluationError.atArg('bit-xor expects numbers', { y }, 1)
      return v.number((x as CljNumber).value ^ (y as CljNumber).value)
    })
    .withMeta([
      ...docMeta({
        doc: 'Bitwise exclusive or',
        arglists: [['x', 'y']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'bit-not': v
    .nativeFn('bit-not', function bitNotImpl(x: CljValue) {
      if (x?.kind !== 'number')
        throw EvaluationError.atArg('bit-not expects a number', { x }, 0)
      return v.number(~(x as CljNumber).value)
    })
    .withMeta([
      ...docMeta({
        doc: 'Bitwise complement',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'bit-shift-left': v
    .nativeFn(
      'bit-shift-left',
      function bitShiftLeftImpl(x: CljValue, n: CljValue) {
        if (x?.kind !== 'number')
          throw EvaluationError.atArg(
            'bit-shift-left expects numbers',
            { x },
            0
          )
        if (n?.kind !== 'number')
          throw EvaluationError.atArg(
            'bit-shift-left expects numbers',
            { n },
            1
          )
        return v.number((x as CljNumber).value << (n as CljNumber).value)
      }
    )
    .withMeta([
      ...docMeta({
        doc: 'Bitwise shift left',
        arglists: [['x', 'n']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'bit-shift-right': v
    .nativeFn(
      'bit-shift-right',
      function bitShiftRightImpl(x: CljValue, n: CljValue) {
        if (x?.kind !== 'number')
          throw EvaluationError.atArg(
            'bit-shift-right expects numbers',
            { x },
            0
          )
        if (n?.kind !== 'number')
          throw EvaluationError.atArg(
            'bit-shift-right expects numbers',
            { n },
            1
          )
        return v.number((x as CljNumber).value >> (n as CljNumber).value)
      }
    )
    .withMeta([
      ...docMeta({
        doc: 'Bitwise shift right',
        arglists: [['x', 'n']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),

  'unsigned-bit-shift-right': v
    .nativeFn(
      'unsigned-bit-shift-right',
      function unsignedBitShiftRightImpl(x: CljValue, n: CljValue) {
        if (x?.kind !== 'number')
          throw EvaluationError.atArg(
            'unsigned-bit-shift-right expects numbers',
            { x },
            0
          )
        if (n?.kind !== 'number')
          throw EvaluationError.atArg(
            'unsigned-bit-shift-right expects numbers',
            { n },
            1
          )
        return v.number((x as CljNumber).value >>> (n as CljNumber).value)
      }
    )
    .withMeta([
      ...docMeta({
        doc: 'Bitwise shift right, without sign-extension',
        arglists: [['x', 'n']],
        docGroup: DocGroups.arithmetic,
      }),
    ]),
}
