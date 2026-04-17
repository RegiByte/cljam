import { createSession } from '../../packages/cljam/src/core/session.ts'

const RUNS = 5

function bench(label, fn) {
  const times = []
  for (let i = 0; i < RUNS; i++) {
    const start = performance.now()
    fn()
    times.push(performance.now() - start)
  }
  const avg = times.reduce((a, b) => a + b, 0) / RUNS
  console.log(`${label.padEnd(36)} avg: ${avg.toFixed(1)}ms`)
  return avg
}

const s = createSession()

// Warm up stdlib + require clojure.string
s.evaluate('(require \'[clojure.string :as str])')

console.log('Data transformation benchmarks — realistic cljam use cases\n')

// 1. Filter + map on a vector of 1000 items
s.evaluate(`
  (def data (vec (range 1000)))
`)
bench('filter+map 1000 items',
  () => s.evaluate('(mapv #(* % %) (filter even? data))'))

// 2. Build a map from pairs
bench('build map 500 assocs',
  () => s.evaluate('(reduce (fn [m i] (assoc m i (* i i))) {} (range 500))'))

// 3. String processing
s.evaluate(`(def words (vec (map str (range 200))))`)
bench('string/join 200 items',
  () => s.evaluate('(str/join ", " words)'))

// 4. Nested map access + update
s.evaluate(`
  (def state {:users (mapv (fn [i] {:id i :name (str "user-" i) :score (* i 3)}) (range 100))})
`)
bench('transform nested map (100 users)',
  () => s.evaluate('(update state :users (fn [users] (mapv (fn [u] (update u :score inc)) users)))'))

// 5. Atom-based stateful counter (100k increments)
s.evaluate('(def counter (atom 0))')
bench('atom swap! 10k times',
  () => s.evaluate('(dotimes [_ 10000] (swap! counter inc))'))
