// cljam-ring — Ring-style HTTP adapter for cljam.
//
// Usage:
//   import { library as ringLib } from '@regibyte/cljam-ring'
//   createSession({ libraries: [ringLib], allowedPackages: ['ring.adapter'] })
//
// Then in Clojure:
//   (ns my-app (:require [ring.adapter.node :as ring]))
//
//   (defn handler [req]
//     {:status 200 :headers {"content-type" "text/plain"} :body "Hello!"})
//
//   ;; Fire-and-forget (REPL / integrant component)
//   (def srv (ring/start {:handler handler :port 3000}))
//
//   ;; Wait for port binding (production / tests)
//   (async
//     (let [srv (ring/wait-ready! (ring/start {:handler handler :port 0}))]
//       (println "Listening on" (:port srv))
//       srv))

import type { CljamLibrary } from '@regibyte/cljam'
import { makeRingNativeModule } from './src/native.ts'
import { sources } from './src/generated/sources.ts'

// ---------------------------------------------------------------------------
// Library manifest
// ---------------------------------------------------------------------------

export const library: CljamLibrary = {
  id: 'cljam-ring',
  sources,
  module: makeRingNativeModule(),
}
