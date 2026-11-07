/**
 * Runs cases across worker threads with a per-case timeout. A case that hangs or
 * kills its thread costs only itself: the thread is replaced and the rest go on.
 */

import { Worker } from 'node:worker_threads'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { mkdtempSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'
import type { Outcome } from './oracle'

const WORKER_SOURCE = fileURLToPath(
  new URL('./case-worker.ts', import.meta.url)
)

export type PoolOptions = {
  timeoutMs: number
  printLength: number
  workers: number
}

/** vitest's transform does not reach worker threads, so the worker is bundled for node. */
async function bundleWorker(dir: string): Promise<string> {
  const outfile = join(dir, 'case-worker.mjs')
  await build({
    entryPoints: [WORKER_SOURCE],
    bundle: true,
    outfile,
    platform: 'node',
    format: 'esm',
    logLevel: 'silent',
  })
  return outfile
}

function drainQueue(
  next: () => { index: number; source: string } | undefined,
  record: (index: number, outcome: Outcome) => void,
  workerFile: string,
  { timeoutMs, printLength }: PoolOptions
): Promise<void> {
  return new Promise((resolve, reject) => {
    const startWorker = (): void => {
      const worker = new Worker(workerFile, {
        workerData: { printLength },
        resourceLimits: { maxOldGenerationSizeMb: 1024 },
      })
      let current: { index: number; source: string } | undefined
      let timer: NodeJS.Timeout | undefined

      const finish = (outcome: Outcome) => {
        clearTimeout(timer)
        record(current!.index, outcome)
        current = undefined
        worker.removeAllListeners()
        void worker.terminate()
        startWorker()
      }

      const assign = () => {
        current = next()
        if (current === undefined) {
          void worker.terminate()
          resolve()
          return
        }
        timer = setTimeout(() => finish({ kind: 'timeout' }), timeoutMs)
        worker.postMessage(current)
      }

      worker.on(
        'message',
        (message: 'ready' | { index: number; outcome: Outcome }) => {
          if (message !== 'ready') {
            clearTimeout(timer)
            record(message.index, message.outcome)
          }
          assign()
        }
      )
      worker.on('error', (error: Error) => {
        if (current === undefined) reject(error)
        else finish({ kind: 'crashed', message: error.message })
      })
    }
    startWorker()
  })
}

export async function runCases(
  sources: string[],
  options: PoolOptions
): Promise<Map<string, Outcome>> {
  const dir = mkdtempSync(join(tmpdir(), 'cljam-oracle-'))
  try {
    const workerFile = await bundleWorker(dir)
    const outcomes = new Map<string, Outcome>()
    let cursor = 0
    const next = () => {
      const index = cursor++
      const source = sources[index]
      return source === undefined ? undefined : { index, source }
    }
    const record = (index: number, outcome: Outcome) => {
      outcomes.set(sources[index]!, outcome)
    }
    await Promise.all(
      Array.from({ length: options.workers }, () =>
        drainQueue(next, record, workerFile, options)
      )
    )
    return outcomes
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}
