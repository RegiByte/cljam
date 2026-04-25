#!/usr/bin/env bun
/**
 * Generates API reference documentation from cljam's live runtime introspection.
 *
 * The Clojure side (gen-api-docs.clj) spawns a pristine session, requires all
 * builtin namespaces, and returns [{ns-name, markdown-content}] pairs.
 * This script writes each pair to packages/docs/reference/<ns-name>.md.
 *
 * Usage:
 *   bun packages/docs/scripts/gen-api-docs.ts
 *   # or via npm script:
 *   bun run --filter docs gen:api-docs
 */

import { createSession } from '@regibyte/cljam'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))
const docsDir = join(__dir, '..')
const refDir = join(docsDir, 'reference')
const cljSrc = readFileSync(join(__dir, 'gen-api-docs.clj'), 'utf8')

async function main() {
  console.log('cljam api-docs generator')
  console.log('========================')
  console.log('Creating session...')
  const session = createSession()

  console.log('Running Clojure introspection (this may take a moment)...')
  const result = await session.evaluateAsync(cljSrc)

  if (result.kind !== 'vector') {
    throw new Error(`Expected vector result from introspection, got: ${result.kind}`)
  }

  mkdirSync(refDir, { recursive: true })

  const sidebarItems: string[] = []
  let count = 0

  for (const pair of result.value) {
    if (pair.kind !== 'vector' || pair.value.length !== 2) continue
    const [nsName, content] = pair.value
    if (nsName.kind !== 'string' || content.kind !== 'string') continue

    const filename = `${nsName.value}.md`
    writeFileSync(join(refDir, filename), content.value, 'utf8')
    console.log(`  ✓  reference/${filename}`)
    sidebarItems.push(
      `        { text: '${nsName.value}', link: '/reference/${nsName.value}' }`
    )
    count++
  }

  console.log(`\n${count} namespace(s) written to packages/docs/reference/`)

  console.log('\n── Add this sidebar block to .vitepress/config.ts ──────────────────')
  console.log(`      '/reference/': [
        {
          text: 'API Reference',
          items: [
${sidebarItems.join(',\n')}
          ],
        },
      ],`)
  console.log('────────────────────────────────────────────────────────────────────')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
