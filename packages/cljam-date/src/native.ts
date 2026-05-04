// cljam.date.native — native RuntimeModule wrapping the JS Date API.
//
// Design rules:
//   - All functions that receive a date expect a CljJsValue wrapping a Date instance.
//   - All functions that return a date return a CljJsValue wrapping a new Date instance.
//   - Dates are immutable from the Clojure side — no .setXxx() calls ever.
//   - month* is 1-indexed (unlike JS getMonth() which is 0-indexed).
//   - format* delegates to Intl.DateTimeFormat; options map uses keyword keys.

import { v, is, EvaluationError } from '@regibyte/cljam'
import type { CljValue, RuntimeModule, VarMap } from '@regibyte/cljam'

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function assertDate(val: CljValue, fnName: string): Date {
  if (!is.jsValue(val) || !(val.value instanceof Date)) {
    throw new EvaluationError(
      `${fnName}: expected a date value, got ${is.jsValue(val) ? 'js-value (not a Date)' : val.kind}`,
      { val }
    )
  }
  return val.value
}

/**
 * Convert a Clojure keyword-map to an Intl.DateTimeFormatOptions object.
 * Only keyword keys and string/keyword values are considered.
 * Example: {:year "numeric" :month "long"} → {year: "numeric", month: "long"}
 */
function mapToIntlOptions(opts: CljValue): Intl.DateTimeFormatOptions {
  if (!is.map(opts)) return {}
  const result: Record<string, string> = {}
  for (const [k, val] of opts.entries) {
    if (!is.keyword(k)) continue
    const key = k.name.slice(1) // strip leading ':'
    const value =
      is.string(val)
        ? val.value
        : is.keyword(val)
          ? val.name.slice(1)
          : null
    if (value !== null) result[key] = value
  }
  return result as Intl.DateTimeFormatOptions
}

// ---------------------------------------------------------------------------
// Native functions
// ---------------------------------------------------------------------------

const nativeFns: Record<string, CljValue> = {
  // (now*) → date — current instant
  'now*': v.nativeFn('cljam.date.native/now*', () => {
    return v.jsValue(new Date())
  }),

  // (from-millis* ms) → date — construct from epoch milliseconds
  'from-millis*': v.nativeFn('cljam.date.native/from-millis*', (ms: CljValue) => {
    if (!is.number(ms)) {
      throw new EvaluationError(
        `from-millis*: expected a number, got ${ms.kind}`,
        { ms }
      )
    }
    return v.jsValue(new Date(ms.value))
  }),

  // (from-iso* s) → date — construct from ISO 8601 string
  'from-iso*': v.nativeFn('cljam.date.native/from-iso*', (s: CljValue) => {
    if (!is.string(s)) {
      throw new EvaluationError(
        `from-iso*: expected a string, got ${s.kind}`,
        { s }
      )
    }
    const d = new Date(s.value)
    if (isNaN(d.getTime())) {
      throw new EvaluationError(
        `from-iso*: invalid date string "${s.value}"`,
        { s }
      )
    }
    return v.jsValue(d)
  }),

  // (to-millis* date) → number — epoch milliseconds
  'to-millis*': v.nativeFn('cljam.date.native/to-millis*', (d: CljValue) => {
    return v.number(assertDate(d, 'to-millis*').getTime())
  }),

  // (to-iso* date) → string — ISO 8601 string
  'to-iso*': v.nativeFn('cljam.date.native/to-iso*', (d: CljValue) => {
    return v.string(assertDate(d, 'to-iso*').toISOString())
  }),

  // (year* date) → number — full year (e.g. 2026)
  'year*': v.nativeFn('cljam.date.native/year*', (d: CljValue) => {
    return v.number(assertDate(d, 'year*').getUTCFullYear())
  }),

  // (month* date) → number — month, 1-indexed (1 = January, 12 = December)
  'month*': v.nativeFn('cljam.date.native/month*', (d: CljValue) => {
    return v.number(assertDate(d, 'month*').getUTCMonth() + 1)
  }),

  // (day* date) → number — day of month (1–31)
  'day*': v.nativeFn('cljam.date.native/day*', (d: CljValue) => {
    return v.number(assertDate(d, 'day*').getUTCDate())
  }),

  // (hour* date) → number — hours (0–23)
  'hour*': v.nativeFn('cljam.date.native/hour*', (d: CljValue) => {
    return v.number(assertDate(d, 'hour*').getUTCHours())
  }),

  // (minute* date) → number — minutes (0–59)
  'minute*': v.nativeFn('cljam.date.native/minute*', (d: CljValue) => {
    return v.number(assertDate(d, 'minute*').getUTCMinutes())
  }),

  // (second* date) → number — seconds (0–59)
  'second*': v.nativeFn('cljam.date.native/second*', (d: CljValue) => {
    return v.number(assertDate(d, 'second*').getUTCSeconds())
  }),

  // (add-millis* date ms) → date — create new date offset by ms milliseconds
  'add-millis*': v.nativeFn(
    'cljam.date.native/add-millis*',
    (d: CljValue, ms: CljValue) => {
      const date = assertDate(d, 'add-millis*')
      if (!is.number(ms)) {
        throw new EvaluationError(
          `add-millis*: expected a number for milliseconds, got ${ms.kind}`,
          { ms }
        )
      }
      return v.jsValue(new Date(date.getTime() + ms.value))
    }
  ),

  // (format* date locale opts-or-nil) → string
  // locale: string like "en-US" or "fr-FR"; nil = system default
  // opts-or-nil: Clojure map like {:year "numeric" :month "long"} or nil
  'format*': v.nativeFn(
    'cljam.date.native/format*',
    (d: CljValue, locale: CljValue, opts: CljValue) => {
      const date = assertDate(d, 'format*')
      const localeStr: string | undefined =
        is.string(locale) ? locale.value : undefined
      const options: Intl.DateTimeFormatOptions =
        is.nil(opts) ? {} : mapToIntlOptions(opts)
      return v.string(new Intl.DateTimeFormat(localeStr, options).format(date))
    }
  ),
}

// ---------------------------------------------------------------------------
// Module
// ---------------------------------------------------------------------------

export function makeDateNativeModule(): RuntimeModule {
  return {
    id: 'cljam-date/native',
    declareNs: [
      {
        name: 'cljam.date.native',
        vars(_ctx): VarMap {
          const map = new Map()
          for (const [name, fn] of Object.entries(nativeFns)) {
            map.set(name, { value: fn })
          }
          return map
        },
      },
    ],
  }
}
