// Native math helpers used by clojure.math.
// All public API lives in src/clojure/math.clj; these are private helpers.
import { EvaluationError } from '../../../errors'
import { DocGroups, docMeta, v } from '../../../factories'
import { printString } from '../../../printer'
import type { CljNumber, CljValue } from '../../../types'

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function assertNum(val: CljValue | undefined, fnName: string): number {
  if (val === undefined || val.kind !== 'number') {
    throw new EvaluationError(
      `${fnName} expects a number${val !== undefined ? `, got ${printString(val)}` : ''}`,
      { val }
    )
  }
  return (val as CljNumber).value
}

function assertNum2(
  a: CljValue | undefined,
  b: CljValue | undefined,
  fnName: string
): [number, number] {
  return [assertNum(a, fnName), assertNum(b, fnName)]
}

// IEEE 754 round-half-to-even (banker's rounding).
// JavaScript's Math.round is half-up, which differs from Clojure's rint.
function rint(x: number): number {
  const floor = Math.floor(x)
  const diff = x - floor
  if (diff === 0.5) {
    return floor % 2 === 0 ? floor : floor + 1
  }
  return Math.round(x)
}

const hideDocExtras = {
  'no-doc': true,
} as const

// ---------------------------------------------------------------------------
// Exported record
// ---------------------------------------------------------------------------

export const mathFunctions: Record<string, CljValue> = {
  // ── Rounding ──────────────────────────────────────────────────────────────

  'floor*': v
    .nativeFn('math-floor*', function mathFloorImpl(x: CljValue) {
      return v.number(Math.floor(assertNum(x, 'floor')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the largest integer ≤ x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'ceil*': v
    .nativeFn('math-ceil*', function mathCeilImpl(x: CljValue) {
      return v.number(Math.ceil(assertNum(x, 'ceil')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the smallest integer ≥ x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'round*': v
    .nativeFn('math-round*', function mathRoundImpl(x: CljValue) {
      return v.number(Math.round(assertNum(x, 'round')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the closest integer to x, with ties rounding up.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'rint*': v
    .nativeFn('math-rint*', function mathRintImpl(x: CljValue) {
      return v.number(rint(assertNum(x, 'rint')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the integer closest to x, with ties rounding to the nearest even (IEEE 754 round-half-to-even).',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  // ── Exponents / logarithms ────────────────────────────────────────────────

  'pow*': v
    .nativeFn('math-pow*', function mathPowImpl(x: CljValue, y: CljValue) {
      const [xn, yn] = assertNum2(x, y, 'pow')
      return v.number(Math.pow(xn, yn))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns x raised to the power of y.',
        arglists: [['x', 'y']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'exp*': v
    .nativeFn('math-exp*', function mathExpImpl(x: CljValue) {
      return v.number(Math.exp(assertNum(x, 'exp')))
    })
    .withMeta([
      ...docMeta({
        doc: "Returns Euler's number e raised to the power of x.",
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'log*': v
    .nativeFn('math-log*', function mathLogImpl(x: CljValue) {
      return v.number(Math.log(assertNum(x, 'log')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the natural logarithm (base e) of x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'log10*': v
    .nativeFn('math-log10*', function mathLog10Impl(x: CljValue) {
      return v.number(Math.log10(assertNum(x, 'log10')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the base-10 logarithm of x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'cbrt*': v
    .nativeFn('math-cbrt*', function mathCbrtImpl(x: CljValue) {
      return v.number(Math.cbrt(assertNum(x, 'cbrt')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the cube root of x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'hypot*': v
    .nativeFn('math-hypot*', function mathHypotImpl(x: CljValue, y: CljValue) {
      const [xn, yn] = assertNum2(x, y, 'hypot')
      return v.number(Math.hypot(xn, yn))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns sqrt(x² + y²), the length of the hypotenuse.',
        arglists: [['x', 'y']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  // ── Trigonometry ──────────────────────────────────────────────────────────

  'sin*': v
    .nativeFn('math-sin*', function mathSinImpl(x: CljValue) {
      return v.number(Math.sin(assertNum(x, 'sin')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the sine of x (in radians).',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'cos*': v
    .nativeFn('math-cos*', function mathCosImpl(x: CljValue) {
      return v.number(Math.cos(assertNum(x, 'cos')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the cosine of x (in radians).',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'tan*': v
    .nativeFn('math-tan*', function mathTanImpl(x: CljValue) {
      return v.number(Math.tan(assertNum(x, 'tan')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the tangent of x (in radians).',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'asin*': v
    .nativeFn('math-asin*', function mathAsinImpl(x: CljValue) {
      return v.number(Math.asin(assertNum(x, 'asin')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the arc sine of x, in radians.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'acos*': v
    .nativeFn('math-acos*', function mathAcosImpl(x: CljValue) {
      return v.number(Math.acos(assertNum(x, 'acos')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the arc cosine of x, in radians.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'atan*': v
    .nativeFn('math-atan*', function mathAtanImpl(x: CljValue) {
      return v.number(Math.atan(assertNum(x, 'atan')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the arc tangent of x, in radians.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'atan2*': v
    .nativeFn('math-atan2*', function mathAtan2Impl(y: CljValue, x: CljValue) {
      const [yn, xn] = assertNum2(y, x, 'atan2')
      return v.number(Math.atan2(yn, xn))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the angle θ from the conversion of rectangular (x, y) to polar (r, θ). Args: y, x.',
        arglists: [['y', 'x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  // ── Hyperbolic ────────────────────────────────────────────────────────────

  'sinh*': v
    .nativeFn('math-sinh*', function mathSinhImpl(x: CljValue) {
      return v.number(Math.sinh(assertNum(x, 'sinh')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the hyperbolic sine of x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'cosh*': v
    .nativeFn('math-cosh*', function mathCoshImpl(x: CljValue) {
      return v.number(Math.cosh(assertNum(x, 'cosh')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the hyperbolic cosine of x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'tanh*': v
    .nativeFn('math-tanh*', function mathTanhImpl(x: CljValue) {
      return v.number(Math.tanh(assertNum(x, 'tanh')))
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns the hyperbolic tangent of x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  // ── Miscellaneous ─────────────────────────────────────────────────────────

  'signum*': v
    .nativeFn('math-signum*', function mathSignumImpl(x: CljValue) {
      const n = assertNum(x, 'signum')
      if (n === 0 || Number.isNaN(n)) return v.number(n)
      return v.number(n > 0 ? 1.0 : -1.0)
    })
    .withMeta([
      ...docMeta({
        doc: 'Returns -1.0, 0.0, or 1.0 indicating the sign of x.',
        arglists: [['x']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'floor-div*': v
    .nativeFn(
      'math-floor-div*',
      function mathFloorDivImpl(x: CljValue, y: CljValue) {
        const [xn, yn] = assertNum2(x, y, 'floor-div')
        if (yn === 0)
          throw new EvaluationError('floor-div: division by zero', { x, y })
        return v.number(Math.floor(xn / yn))
      }
    )
    .withMeta([
      ...docMeta({
        doc: 'Returns the largest integer ≤ x/y (floor division).',
        arglists: [['x', 'y']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'floor-mod*': v
    .nativeFn(
      'math-floor-mod*',
      function mathFloorModImpl(x: CljValue, y: CljValue) {
        const [xn, yn] = assertNum2(x, y, 'floor-mod')
        if (yn === 0)
          throw new EvaluationError('floor-mod: division by zero', { x, y })
        return v.number(((xn % yn) + yn) % yn)
      }
    )
    .withMeta([
      ...docMeta({
        doc: 'Returns x - (floor-div x y) * y (floor modulo).',
        arglists: [['x', 'y']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'to-radians*': v
    .nativeFn('math-to-radians*', function mathToRadiansImpl(x: CljValue) {
      return v.number((assertNum(x, 'to-radians') * Math.PI) / 180)
    })
    .withMeta([
      ...docMeta({
        doc: 'Converts an angle in degrees to radians.',
        arglists: [['deg']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),

  'to-degrees*': v
    .nativeFn('math-to-degrees*', function mathToDegreesImpl(x: CljValue) {
      return v.number((assertNum(x, 'to-degrees') * 180) / Math.PI)
    })
    .withMeta([
      ...docMeta({
        doc: 'Converts an angle in radians to degrees.',
        arglists: [['rad']],
        docGroup: DocGroups.arithmetic,
        extra: hideDocExtras,
      }),
    ]),
}
