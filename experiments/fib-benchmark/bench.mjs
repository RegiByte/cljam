import { fib as fibSquint } from './fib.mjs'
import { createSession } from '../../packages/cljam/src/core/session.ts'

const RUNS = 5
const N = 35

// ── Vanilla JS ───────────────────────────────────────────────────────────────

function fibJs(n) {
  if (n <= 1) return n
  return fibJs(n - 1) + fibJs(n - 2)
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
  console.log(`${label.padEnd(20)} avg: ${(avg / 1000).toFixed(3)}s  min: ${(min / 1000).toFixed(3)}s`)
  return avg
}

// ── Run ──────────────────────────────────────────────────────────────────────

console.log(`fib(${N}) — ${RUNS} runs each\n`)

const jsAvg = bench('vanilla JS',      () => fibJs(N))
const sqAvg = bench('squint (compiled)', () => fibSquint(N))

// cljam: create session once, reuse across runs (same-session benchmark)
const session = createSession()
session.evaluate('(defn fib [n] (if (<= n 1) n (+ (fib (- n 1)) (fib (- n 2)))))')

const cljamAvg = bench('cljam',        () => session.evaluate('(fib 35)'))

console.log()
console.log(`squint is ${(cljamAvg / sqAvg).toFixed(1)}x faster than cljam`)
console.log(`vanilla JS is ${(cljamAvg / jsAvg).toFixed(1)}x faster than cljam`)
