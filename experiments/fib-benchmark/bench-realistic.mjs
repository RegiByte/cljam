import { sum_loop as squintSumLoop } from './fib-squint-loop.mjs'
import { createSession } from '../../packages/cljam/src/core/session.ts'

const RUNS = 5
const N = 1_000_000

// ── Vanilla JS ───────────────────────────────────────────────────────────────

function jsLoop(n) {
  let i = 0, acc = 0
  while (i <= n) { acc += i; i++ }
  return acc
}

// ── Benchmark helper ─────────────────────────────────────────────────────────

function bench(label, fn) {
  const times = []
  for (let i = 0; i < RUNS; i++) {
    const start = performance.now()
    fn()
    times.push(performance.now() - start)
  }
  const avg = times.reduce((a, b) => a + b, 0) / RUNS
  const min = Math.min(...times)
  console.log(`${label.padEnd(24)} avg: ${avg.toFixed(1)}ms  min: ${min.toFixed(1)}ms`)
  return avg
}

// ── Run ──────────────────────────────────────────────────────────────────────

const session = createSession()
session.evaluate(`
  (defn sum-loop [n]
    (loop [i 0 acc 0]
      (if (> i n)
        acc
        (recur (+ i 1) (+ acc i)))))
`)

console.log(`sum(0..${N.toLocaleString()}) via loop/recur — ${RUNS} runs each\n`)

const jsAvg    = bench('vanilla JS',        () => jsLoop(N))
const sqAvg    = bench('squint (compiled)', () => squintSumLoop(N))
const cljamAvg = bench('cljam loop/recur',  () => session.evaluate(`(sum-loop ${N})`))

console.log()
console.log(`squint is ${(cljamAvg / sqAvg).toFixed(1)}x faster than cljam`)
console.log(`vanilla JS is ${(cljamAvg / jsAvg).toFixed(1)}x faster than cljam`)
