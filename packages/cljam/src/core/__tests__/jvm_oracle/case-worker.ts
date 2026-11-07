/**
 * Worker thread entry. Evaluates cases one at a time, each in a clone of a
 * bootstrapped session. A thread is what a hang needs: cljam evaluates
 * synchronously, so only the parent can stop a case by terminating this thread.
 */

import { parentPort, workerData } from 'node:worker_threads'
import {
  createSession,
  createSessionFromSnapshot,
  snapshotSession,
} from '../../index'
import { nodePreset } from '../../../presets'
import type { Outcome } from './oracle'

const { printLength } = workerData as { printLength: number }

const silent = { output: () => {}, stderr: () => {} }
const base = snapshotSession(createSession({ ...nodePreset(), ...silent }))

function runCase(source: string): Outcome {
  let out = ''
  const session = createSessionFromSnapshot(base, {
    output: (text) => {
      out += text
    },
    stderr: () => {},
  })
  try {
    const value = session.evaluate(source)
    const printer = session.evaluate(
      `(fn [value] (binding [*print-length* ${printLength}] (pr-str value)))`
    )
    const printed = session.applyFunction(printer, [value])
    return {
      kind: 'value',
      printed: (printed as { value: string }).value,
      out,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return { kind: 'threw', message: message.split('\n')[0] ?? '', out }
  }
}

parentPort!.on('message', (message: { index: number; source: string }) => {
  parentPort!.postMessage({
    index: message.index,
    outcome: runCase(message.source),
  })
})
parentPort!.postMessage('ready')
