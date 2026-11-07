/**
 * Pure core of the JVM oracle: the case and divergence file formats, the
 * outcome shape both runtimes produce, and the definition of agreement.
 */

export type Case = { source: string; throws: boolean }

export type Outcome =
  | { kind: 'value'; printed: string; out: string }
  | { kind: 'threw'; class?: string; message: string; out: string }
  | { kind: 'timeout' }
  | { kind: 'crashed'; message: string }

export type Golden = Extract<Outcome, { kind: 'value' | 'threw' }> & {
  source: string
}

export type Verdict = { agree: true } | { agree: false; reason: string }

export type Divergence = {
  source: string
  /** kb divergence entity id. */
  entity: string
}

const isContent = (line: string) => line.trim() !== '' && !line.startsWith(';')

export function parseCases(text: string): Case[] {
  return text
    .split('\n')
    .filter(isContent)
    .map((line) =>
      line.startsWith('!throws ')
        ? { source: line.slice('!throws '.length), throws: true }
        : { source: line, throws: false }
    )
}

/** Each line is `<entity id> <case source>`. */
export function parseDivergences(text: string): Divergence[] {
  return text
    .split('\n')
    .filter(isContent)
    .map((line) => {
      const gap = line.indexOf(' ')
      return { source: line.slice(gap + 1), entity: line.slice(0, gap) }
    })
}

const describe = (outcome: Outcome): string => {
  switch (outcome.kind) {
    case 'value':
      return outcome.printed
    case 'threw':
      return `threw ${outcome.class ?? ''} ${outcome.message}`.replace(
        '  ',
        ' '
      )
    case 'timeout':
      return 'timed out'
    case 'crashed':
      return `crashed: ${outcome.message}`
  }
}

const isUnresolvedOnCljam = (message: string) =>
  /^Symbol \S+ not found/.test(message)
const isUnresolvedOnJvm = (message: string) =>
  /^(Unable to resolve symbol|No such var)/.test(message)

/**
 * Printed form is the observable: `pr-str` is what a program and a REPL see, each
 * runtime prints with its own printer, and two values printing alike is the
 * closest a text comparison gets to Clojure `=` across runtimes. Output written
 * during evaluation is compared with it.
 *
 * A JVM throw is agreement when cljam also throws, ignoring class and message:
 * those are host-specific, and only a case marked `!throws` can have a throwing
 * golden, so a typo never agrees by accident. Throwing because a var is missing
 * is the exception: that is an absent feature, not the same behaviour.
 */
export function compareOutcome(golden: Golden, actual: Outcome): Verdict {
  const differ = (detail?: string): Verdict => ({
    agree: false,
    reason:
      `jvm:   ${describe(golden)}\ncljam: ${describe(actual)}` +
      (detail ? `\n${detail}` : ''),
  })

  if (golden.kind === 'value') {
    if (actual.kind !== 'value' || actual.printed !== golden.printed) {
      return differ()
    }
  } else {
    if (actual.kind !== 'threw') return differ()
    if (
      isUnresolvedOnCljam(actual.message) &&
      !isUnresolvedOnJvm(golden.message)
    ) {
      return differ('cljam threw because a var is missing')
    }
  }
  if (actual.out !== golden.out) {
    return differ(
      `output differs\njvm:   ${JSON.stringify(golden.out)}\ncljam: ${JSON.stringify(actual.out)}`
    )
  }
  return { agree: true }
}

export type CoverageRow = {
  namespace: string
  jvm: number
  covered: number
  missing: string[]
  /** Public vars cljam adds to a namespace the JVM also has. */
  extra: string[]
  loads: boolean
}

export function renderCoverage(
  clojureVersion: string,
  rows: CoverageRow[]
): string {
  const total = rows.reduce((sum, row) => sum + row.jvm, 0)
  const covered = rows.reduce((sum, row) => sum + row.covered, 0)
  const table = rows.map(
    (row) =>
      `| ${row.namespace} | ${row.loads ? 'yes' : 'no'} | ${row.covered} | ${row.jvm} | ${row.extra.length} |`
  )
  const lists = rows
    .filter(
      (row) => row.loads && (row.missing.length > 0 || row.extra.length > 0)
    )
    .flatMap((row) => [
      `## ${row.namespace}`,
      '',
      ...(row.missing.length > 0
        ? [`Missing: ${row.missing.join(' ')}`, '']
        : []),
      ...(row.extra.length > 0 ? [`Extra: ${row.extra.join(' ')}`, ''] : []),
    ])
  return [
    `# Public var coverage against Clojure ${clojureVersion}`,
    '',
    `${covered} of ${total} public vars.`,
    '',
    '| namespace | loads | covered | jvm | extra |',
    '|---|---|---|---|---|',
    ...table,
    '',
    ...lists,
  ].join('\n')
}
