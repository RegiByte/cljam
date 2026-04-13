import { isEqual } from '../assertions'
import { v } from '../factories'
import { describe, expect, it } from 'vitest'
import type { CljValue } from '../types'

describe('isEqual', () => {
  it.each([
    ['number', v.number(1), v.number(1), true],
    ['string', v.string('1'), v.string('1'), true],
    ['boolean true', v.boolean(true), v.boolean(true), true],
    ['boolean false', v.boolean(false), v.boolean(false), true],
    ['nil', v.nil(), v.nil(), true],
    [
      `symbol (the ref to sym, not eval'ed)`,
      v.symbol('a'),
      v.symbol('a'),
      true,
    ],
    [
      'vector with number',
      v.vector([v.number(1)]),
      v.vector([v.number(1)]),
      true,
    ],
    [
      'map with single key',
      v.map([[v.string('a'), v.number(1)]]),
      v.map([[v.string('a'), v.number(1)]]),
      true,
    ],
    [
      'map with vector value and nested number',
      v.map([[v.string('key1'), v.vector([v.number(1)])]]),
      v.map([[v.string('key1'), v.vector([v.number(1)])]]),
      true,
    ],
    [
      'map with vector value and multiple nested numbers',
      v.map([
        [
          v.string('key1'),
          v.vector([v.number(1), v.number(2), v.number(3)]),
        ],
      ]),
      v.map([
        [
          v.string('key1'),
          v.vector([v.number(1), v.number(2), v.number(3)]),
        ],
      ]),
      true,
    ],
    // order independence
    [
      'maps with keys in different entry orders',
      v.map([
        [
          v.string('key2'),
          v.vector([v.number(1), v.number(2), v.number(3)]),
        ],
        [
          v.string('key1'),
          v.vector([v.number(1), v.number(2), v.number(3)]),
        ],
      ]),
      v.map([
        [
          v.string('key1'),
          v.vector([v.number(1), v.number(2), v.number(3)]),
        ],
        [
          v.string('key2'),
          v.vector([v.number(1), v.number(2), v.number(3)]),
        ],
      ]),
      true,
    ],
    // False cases
    ['number<>number', v.number(1), v.number(2), false],
    //
    ['string<>number', v.string('1'), v.number(1), false],
    ['true<>false', v.boolean(true), v.boolean(false), false],
    ['false<>true', v.boolean(false), v.boolean(true), false],
    ['nil<>vector', v.nil(), v.vector([]), false],
    ['sym(a)<>sym(b)', v.symbol('a'), v.symbol('b'), false],
    [
      'different length vectors',
      v.vector([v.number(1)]),
      v.vector([v.number(1), v.number(2)]),
      false,
    ],
    [
      'additional keys on one side',
      v.map([[v.string('a'), v.number(1)]]),
      v.map([
        [v.string('a'), v.number(1)],
        [v.string('b'), v.number(2)],
      ]),
      false,
    ],
    [
      'additional values on inner vector in map',
      v.map([[v.string('key1'), v.vector([v.number(1)])]]),
      v.map([[v.string('key1'), v.vector([v.number(1), v.number(2)])]]),
      false,
    ],
    [
      'missing value on inner vector in map',
      v.map([
        [
          v.string('key1'),
          v.vector([v.number(1), v.number(2), v.number(3)]),
        ],
      ]),
      v.map([[v.string('key1'), v.vector([v.number(1), v.number(3)])]]),
      false,
    ],
  ])(
    '%s: isEqual(%o, %o) should be %s',
    (_label: string, a: CljValue, b: CljValue, expected: boolean) => {
      expect(isEqual(a, b)).toBe(expected)
    }
  )
})
