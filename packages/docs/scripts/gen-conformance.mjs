#!/usr/bin/env node
// Regenerates the known-divergences part of guide/conformance.md from the divergence entities in kb/.
// The page's other sections are hand-written and stay outside the markers.
//
//   node packages/docs/scripts/gen-conformance.mjs           rewrite the page
//   node packages/docs/scripts/gen-conformance.mjs --check   fail when the page is out of date

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')
const PAGE = join(ROOT, 'packages/docs/guide/conformance.md')
const ENTITIES = join(ROOT, 'kb/entities')
const START = '<!-- divergences:start -->'
const END = '<!-- divergences:end -->'

const FAILURES = [
  ['silent', 'Silent: wrong value, no error'],
  ['loud', 'Loud: error where the JVM succeeds'],
  ['printing', 'Output and printing'],
  ['missing', 'Not implemented'],
]

const markdownFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return markdownFiles(path)
    return path.endsWith('.md') ? [path] : []
  })

function parseEntity(path) {
  const [, frontmatter, ...body] = readFileSync(path, 'utf8').split(/^---$/m)
  return { ...JSON.parse(frontmatter), body: body.join('---').trim() }
}

function publicBody({ body }, nameOf) {
  return body
    .replace(/\[([^\]]+)\]\(ref:[^)]*\)/g, '$1')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '*$2*')
    .replace(/\[\[([^\]]+)\]\]/g, (_, id) => `*${nameOf[id] ?? id}*`)
}

function renderEntity(entity, nameOf) {
  return `#### ${entity.name}\n\n${publicBody(entity, nameOf)}\n`
}

function renderLedger(entities) {
  const nameOf = Object.fromEntries(entities.map((e) => [e.id, e.name]))
  const byName = (a, b) => a.name.localeCompare(b.name, 'en')
  const open = entities.filter((e) => e.status === 'open').sort(byName)
  const justified = entities.filter((e) => e.status === 'justified').sort(byName)

  const openSections = FAILURES.flatMap(([failure, title]) => {
    const group = open.filter((e) => e.failure === failure)
    return group.length === 0 ? [] : [`### ${title}\n`, ...group.map((e) => renderEntity(e, nameOf))]
  })

  return [
    `${open.length} open and ${justified.length} justified differences. An open difference is a bug or an undecided`,
    'question. A justified one carries its reason. Each was run on JVM Clojure 1.12 and on cljam.\n',
    ...openSections,
    '### Justified: differences with a stated reason\n',
    ...justified.map((e) => renderEntity(e, nameOf)),
  ].join('\n')
}

function replaceLedger(page, ledger) {
  const start = page.indexOf(START)
  const end = page.indexOf(END)
  if (start === -1 || end === -1) throw new Error(`${relative(ROOT, PAGE)} is missing its ${START} markers`)
  return `${page.slice(0, start + START.length)}\n\n${ledger}\n${page.slice(end)}`
}

const entities = markdownFiles(ENTITIES)
  .map((path) => ({ id: path.split('/').pop().replace(/\.md$/, ''), ...parseEntity(path) }))
  .filter((entity) => entity.type === 'divergence')

const current = readFileSync(PAGE, 'utf8')
const next = replaceLedger(current, renderLedger(entities))

if (!process.argv.includes('--check')) {
  writeFileSync(PAGE, next)
} else if (next !== current) {
  console.error(`${relative(ROOT, PAGE)} is out of date. Run: node packages/docs/scripts/gen-conformance.mjs`)
  process.exit(1)
}
