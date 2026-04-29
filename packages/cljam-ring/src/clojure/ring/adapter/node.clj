(ns ring.adapter.node
  (:require [ring.adapter.native :as ring-native]))

; ---------------------------------------------------------------------------
; ServerHandle record
;
; Returned by start and wait-ready!. Behaves like a plain map — (:port srv),
; (:host srv), destructuring all work. Being a named type means users can
; extend protocols onto it without modifying this library.
;
; :_handle is an opaque JS value (Node http.Server). Do not mutate it.
; ---------------------------------------------------------------------------

(defrecord ServerHandle [port host _handle])

; ---------------------------------------------------------------------------
; Server lifecycle
; ---------------------------------------------------------------------------

(defn start
  "Start an HTTP server with Ring semantics. Returns a pending value that
   resolves to a ServerHandle record once the port is successfully bound.
   The resolved handle always carries the correct :port — even when :port 0
   is used for OS-assigned ports.

   opts map:
     :handler   — fn (request-map) → response-map  (required)
     :port      — port number (default 3000)
     :host      — bind address (default \"localhost\")
     :on-error  — fn ({:message s :type s}) → any  (optional)
                  Called for server-level errors (e.g. port conflict after
                  reload, unexpected socket close). If omitted, errors are
                  logged to stderr so the process does not crash.

   Usage:
     (async (def srv (ring/start {:handler my-handler :port 0})))
     (:port srv) ; always the real bound port

   Response map:
     :status   — integer HTTP status code
     :headers  — map of keyword or string keys to string values
     :body     — string, nil (no body), or any Clojure value (auto-serialised as JSON)"
  [opts]
  (-> (ring-native/start-server* opts)
      (then map->ServerHandle)))

(defn stop!
  "Stop the server. Returns a pending value that resolves to nil when stopped.

   opts map (optional):
     :drain-timeout-ms — controls the shutdown sequence:
       nil (default) — pure graceful drain: stops accepting new connections,
                       waits indefinitely for existing connections to close.
                       Correct for production / blue-green deployments.
       0             — immediate: all connections are force-closed right away.
                       Best for REPL / dev hot-reload loops.
       N (number)    — graceful with deadline: idle keep-alive connections are
                       closed immediately, active requests are allowed to finish,
                       and after N ms anything still open is force-killed.

   Examples:
     (ring/stop! srv)                           ; graceful, wait forever
     (ring/stop! srv {:drain-timeout-ms 5000})  ; graceful, force after 5s
     (ring/stop! srv {:drain-timeout-ms 0})     ; immediate kill"
  ([server]
   (ring-native/stop-server* server nil))
  ([server opts]
   (ring-native/stop-server* server opts)))


(defn started?
  "Returns true if the server has successfully bound its port."
  [server]
  (ring-native/started?* server))
