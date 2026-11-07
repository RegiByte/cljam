/**
 * JVM oracle: compares cljam against goldens generated on JVM Clojure. The other
 * suites prove the engines agree with each other; this one checks them against
 * the language. See "JVM oracle" in AGENTS.md for how to add a case.
 */

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { beforeAll, describe, expect, it } from 'vitest'
import { createSession, cljToJs } from '../../index'
import { nodePreset } from '../../../presets'
import { specialFormKeywords } from '../../keywords'
import { runCases } from './case-pool'
import {
  compareOutcome,
  parseCases,
  parseDivergences,
  renderCoverage,
} from './oracle'
import type { Case, CoverageRow, Golden, Outcome } from './oracle'

const ORACLE_DIR = fileURLToPath(new URL('.', import.meta.url))
const KB_ENTITIES = join(ORACLE_DIR, '../../../../../../kb/entities')
const REGENERATE = 'regenerate with `bun run gen:jvm-goldens`'
const CASE_TIMEOUT_MS = 5000
const PRINT_LENGTH = 100

type Group = { name: string; cases: Case[]; goldens: Golden[] }

function loadGroups(): Group[] {
  return readdirSync(join(ORACLE_DIR, 'cases'))
    .filter((file) => file.endsWith('.txt'))
    .sort()
    .map((file) => {
      const name = file.slice(0, -'.txt'.length)
      const goldenFile = join(ORACLE_DIR, 'goldens', `${name}.json`)
      const cases = parseCases(
        readFileSync(join(ORACLE_DIR, 'cases', file), 'utf8')
      )
      const goldens = existsSync(goldenFile)
        ? (JSON.parse(readFileSync(goldenFile, 'utf8')).cases as Golden[])
        : []
      return { name, cases, goldens }
    })
}

function loadEntityIds(dir: string): Set<string> {
  const entries = readdirSync(dir, { recursive: true, encoding: 'utf8' })
  return new Set(
    entries
      .filter((path) => path.endsWith('.md'))
      .map((path) => path.split('/').pop()!.slice(0, -'.md'.length))
  )
}

const groups = loadGroups()
const allCases = groups.flatMap((group) => group.cases)
const divergences = parseDivergences(
  readFileSync(join(ORACLE_DIR, 'divergences.txt'), 'utf8')
)
const listed = new Set(divergences.map((divergence) => divergence.source))

describe('jvm oracle', () => {
  let outcomes: Map<string, Outcome>

  beforeAll(async () => {
    outcomes = await runCases(
      allCases.map((testCase) => testCase.source),
      { timeoutMs: CASE_TIMEOUT_MS, printLength: PRINT_LENGTH, workers: 4 }
    )
    console.log(
      `[jvm oracle] ${allCases.length - listed.size} of ${allCases.length} cases agree, ${listed.size} listed as divergent`
    )
  }, 600_000)

  it('has no duplicate cases', () => {
    const sources = allCases.map((testCase) => testCase.source)
    expect(sources.filter((s, i) => sources.indexOf(s) !== i)).toEqual([])
  })

  it('lists only existing cases', () => {
    const known = new Set(allCases.map((testCase) => testCase.source))
    const orphans = divergences.filter((d) => !known.has(d.source))
    expect(orphans.map((d) => d.source)).toEqual([])
  })

  it('names only kb entities that exist', () => {
    const entities = loadEntityIds(KB_ENTITIES)
    const dangling = divergences.filter((d) => !entities.has(d.entity))
    expect(dangling.map((d) => `${d.entity} ${d.source}`)).toEqual([])
  })

  describe.each(groups)('$name', ({ cases, goldens }) => {
    it(`goldens match the case file, or ${REGENERATE}`, () => {
      expect(goldens.map((golden) => golden.source)).toEqual(
        cases.map((testCase) => testCase.source)
      )
    })

    cases.forEach((testCase, index) => {
      it(testCase.source, () => {
        const golden = goldens[index]
        if (golden === undefined) {
          throw new Error(`No golden for this case: ${REGENERATE}`)
        }
        const verdict = compareOutcome(golden, outcomes.get(testCase.source)!)
        if (listed.has(testCase.source)) {
          if (verdict.agree) {
            throw new Error(
              'This case now agrees with the JVM. Delete it from divergences.txt, and fix or delete its kb entity.'
            )
          }
        } else if (!verdict.agree) {
          throw new Error(
            `Differs from JVM Clojure ${verdict.reason}\nFix cljam, or list the case in divergences.txt.`
          )
        }
      })
    })
  })
})

describe('compareOutcome', () => {
  const value = (printed: string, out = ''): Golden => ({
    source: 'x',
    kind: 'value',
    printed,
    out,
  })
  const threw: Golden = {
    source: 'x',
    kind: 'threw',
    class: 'java.lang.ArithmeticException',
    message: 'Divide by zero',
    out: '',
  }

  it('agrees on equal printed form and output', () => {
    expect(compareOutcome(value('1'), value('1')).agree).toBe(true)
  })

  it('differs on printed form, on output, and on a timeout', () => {
    expect(compareOutcome(value('1'), value('2')).agree).toBe(false)
    expect(compareOutcome(value('1', 'a'), value('1', 'b')).agree).toBe(false)
    expect(compareOutcome(value('1'), { kind: 'timeout' }).agree).toBe(false)
  })

  it('agrees on a marked throw whatever the host error says', () => {
    const actual: Outcome = { kind: 'threw', message: 'other words', out: '' }
    expect(compareOutcome(threw, actual).agree).toBe(true)
  })

  it('does not count a missing var as the same throw', () => {
    const actual: Outcome = {
      kind: 'threw',
      message: 'Symbol foo not found',
      out: '',
    }
    expect(compareOutcome(threw, actual).agree).toBe(false)
  })
})

describe('public var coverage', () => {
  it('matches the tracked report', async () => {
    const golden = JSON.parse(
      readFileSync(join(ORACLE_DIR, 'goldens/public-vars.json'), 'utf8')
    ) as { clojure: string; namespaces: Record<string, string[]> }

    const session = createSession({
      ...nodePreset(),
      output: () => {},
      stderr: () => {},
    })
    const specialForms = new Set(Object.keys(specialFormKeywords))

    const publicNames = (namespace: string): string[] | null => {
      try {
        if (namespace !== 'clojure.core') {
          session.evaluate(`(require '[${namespace}])`)
        }
      } catch {
        return null
      }
      const names = session.evaluate(
        `(mapv str (keys (ns-publics '${namespace})))`
      )
      return cljToJs(names, session) as string[]
    }

    const rows: CoverageRow[] = Object.entries(golden.namespaces).map(
      ([namespace, jvmNames]) => {
        const names = publicNames(namespace)
        const have = new Set(names ?? [])
        // Special forms on cljam are vars on the JVM, and ns-publics omits them.
        const isCovered = (name: string) =>
          have.has(name) ||
          (namespace === 'clojure.core' && specialForms.has(name))
        const missing = jvmNames.filter((name) => !isCovered(name))
        return {
          namespace,
          jvm: jvmNames.length,
          covered: jvmNames.length - missing.length,
          missing,
          extra: [...have].filter((name) => !jvmNames.includes(name)).sort(),
          loads: names !== null,
        }
      }
    )

    await expect(renderCoverage(golden.clojure, rows)).toMatchFileSnapshot(
      'goldens/coverage.md'
    )
  })
})
