import { describe, it, expect, vi } from 'vitest'
import type { Server } from 'node:http'
import { createSession, v, type CljValue } from '@regibyte/cljam'
import { library as ringLib } from '../../library.ts'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeSession() {
  return createSession({
    libraries: [ringLib],
    allowedPackages: ['ring.adapter'],
  })
}

function extractNodeServer(handle: unknown): Server {
  const h = handle as { fields: [{ name: string }, { value: unknown }][] }
  const entry = h.fields.find(([k]) => k.name === ':_handle')!
  return entry[1].value as Server
}

async function resolvePending(val: unknown): Promise<unknown> {
  if (
    val !== null &&
    typeof val === 'object' &&
    (val as { kind: string }).kind === 'pending'
  ) {
    return await (val as { promise: Promise<unknown> }).promise
  }
  return val
}

function getPort(handle: unknown): number {
  const h = handle as {
    kind: string
    entries?: [{ name: string }, { value: number }][]
    fields?: [{ name: string }, { value: number }][]
  }
  const entries = h.kind === 'record' ? h.fields! : h.entries!
  return entries.find(([k]) => k.name === ':port')![1].value
}

// Starts a server and binds `srv` in the Clojure session.
// ring/start is async, so we use (then #(def srv %)) to bind once resolved.
async function startAndBind(
  session: ReturnType<typeof makeSession>,
  handlerExpr: string,
  startOpts = '{:handler h :port 0}'
): Promise<void> {
  session.evaluate(`(ns t (:require [ring.adapter.node :as ring]))`)
  session.evaluate(handlerExpr)
  await resolvePending(
    session.evaluate(`(-> (ring/start ${startOpts}) (then #(def srv %)))`)
  )
}

// ---------------------------------------------------------------------------
// 1. Library setup
// ---------------------------------------------------------------------------

describe('cljam-ring — library setup', () => {
  it('installs without error', () => {
    expect(() => createSession({ libraries: [ringLib] })).not.toThrow()
  })

  it('appears in session.capabilities.libraries', () => {
    const session = createSession({ libraries: [ringLib] })
    expect(session.capabilities.libraries).toContain('cljam-ring')
  })

  it('ring.adapter.node namespace loads on :require', () => {
    const session = makeSession()
    expect(() =>
      session.evaluate('(ns t (:require [ring.adapter.node :as ring]))')
    ).not.toThrow()
  })
})

// ---------------------------------------------------------------------------
// 2. Server handle
// ---------------------------------------------------------------------------

describe('cljam-ring — server handle', () => {
  it('ring/start returns a pending that resolves to a ServerHandle record', async () => {
    const session = makeSession()
    session.evaluate(`(ns t (:require [ring.adapter.node :as ring]))`)
    session.evaluate(`(defn h [_] {:status 200 :body "ok"})`)

    const handle = await resolvePending(
      session.evaluate('(ring/start {:handler h :port 0})')
    )
    expect((handle as { kind: string }).kind).toBe('record')
    expect((handle as { recordType: string }).recordType).toBe('ServerHandle')

    // bind for cleanup
    await resolvePending(session.evaluate('(-> (ring/start {:handler h :port 0}) (then #(def srv %)))'))
    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it(':port in the resolved handle is the actual bound port (not 0)', async () => {
    const session = makeSession()
    await startAndBind(session, '(defn h [_] {:status 200 :body "ok"})')

    const port = getPort(session.evaluate('srv'))
    expect(port).toBeGreaterThan(0)

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('ring/started? is true immediately after start resolves', async () => {
    const session = makeSession()
    await startAndBind(session, '(defn h [_] {:status 200 :body "ok"})')

    expect(session.evaluate('(ring/started? srv)')).toEqual(v.boolean(true))

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

})

// ---------------------------------------------------------------------------
// 3. Request / response cycle
// ---------------------------------------------------------------------------

describe('cljam-ring — request/response', () => {
  it('serves a plain text response', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn h [_req] {:status 200 :headers {"content-type" "text/plain"} :body "hello ring"})`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    expect(resp.status).toBe(200)
    expect(await resp.text()).toBe('hello ring')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('receives request map with correct :method and :uri', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(def last-req (atom nil))
       (defn h [req] (reset! last-req req) {:status 200 :body "captured"})`
    )
    const port = getPort(session.evaluate('srv'))

    await fetch(`http://localhost:${port}/hello/world`)

    const method = session.evaluate('(:method @last-req)')
    const uri = session.evaluate('(:uri @last-req)')
    expect(method).toEqual(v.keyword(':get'))
    expect(uri).toEqual(v.string('/hello/world'))

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('parses JSON request body', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(def last-body (atom nil))
       (defn h [req] (reset! last-body (:body req)) {:status 200 :body "ok"})`
    )
    const port = getPort(session.evaluate('srv'))

    await fetch(`http://localhost:${port}/`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: 'ring', value: 42 }),
    })

    const name = session.evaluate('(:name @last-body)')
    expect(name).toEqual(v.string('ring'))

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('serialises Clojure map body as JSON', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn h [_req] {:status 200 :body {:message "from clojure" :n 7}})`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    const json = (await resp.json()) as Record<string, unknown>
    expect(json.message).toBe('from clojure')
    expect(json.n).toBe(7)

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('returns 500 when handler throws', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn h [_req] (throw (ex-info "boom" {})))`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    expect(resp.status).toBe(500)

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })
})

// ---------------------------------------------------------------------------
// 4. Async handler
// ---------------------------------------------------------------------------

describe('cljam-ring — async handler', () => {
  it('handles a handler that returns a pending value', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn h [_req] (async {:status 200 :body "async works"}))`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    expect(resp.status).toBe(200)
    expect(await resp.text()).toBe('async works')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })
})

// ---------------------------------------------------------------------------
// 5. stop!
// ---------------------------------------------------------------------------

describe('cljam-ring — stop!', () => {
  it('stop! resolves to nil', async () => {
    const session = makeSession()
    await startAndBind(session, '(defn h [_] {:status 200 :body "ok"})')

    const stopResult = await resolvePending(
      session.evaluate('(ring/stop! srv)')
    )
    expect((stopResult as CljValue).kind).toBe('nil')
  })

  it('started? is false after stop!', async () => {
    const session = makeSession()
    await startAndBind(session, '(defn h [_] {:status 200 :body "ok"})')
    await resolvePending(session.evaluate('(ring/stop! srv)'))

    expect(session.evaluate('(ring/started? srv)')).toEqual(v.boolean(false))
  })

  it('stop! with {:drain-timeout-ms 0} resolves immediately', async () => {
    const session = makeSession()
    await startAndBind(session, '(defn h [_] {:status 200 :body "ok"})')

    const t0 = Date.now()
    await resolvePending(
      session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})')
    )
    expect(Date.now() - t0).toBeLessThan(500)
    expect(session.evaluate('(ring/started? srv)')).toEqual(v.boolean(false))
  })

  it('stop! with {:drain-timeout-ms N} resolves after making a request', async () => {
    const session = makeSession()
    await startAndBind(session, '(defn h [_] {:status 200 :body "ok"})')
    const port = getPort(session.evaluate('srv'))
    await fetch(`http://localhost:${port}/`)

    const stopResult = await resolvePending(
      session.evaluate('(ring/stop! srv {:drain-timeout-ms 3000})')
    )
    expect((stopResult as CljValue).kind).toBe('nil')
    expect(session.evaluate('(ring/started? srv)')).toEqual(v.boolean(false))
  })

  it('multiple independent servers can be started and stopped', async () => {
    const session = makeSession()
    session.evaluate(`(ns t (:require [ring.adapter.node :as ring]))`)
    session.evaluate(`(defn h1 [_] {:status 200 :body "server-1"})`)
    session.evaluate(`(defn h2 [_] {:status 200 :body "server-2"})`)
    await Promise.all([
      resolvePending(session.evaluate('(-> (ring/start {:handler h1 :port 0}) (then #(def srv1 %)))')),
      resolvePending(session.evaluate('(-> (ring/start {:handler h2 :port 0}) (then #(def srv2 %)))')),
    ])

    const port1 = getPort(session.evaluate('srv1'))
    const port2 = getPort(session.evaluate('srv2'))
    expect(port1).not.toBe(port2)

    const [resp1, resp2] = await Promise.all([
      fetch(`http://localhost:${port1}/`),
      fetch(`http://localhost:${port2}/`),
    ])
    expect(await resp1.text()).toBe('server-1')
    expect(await resp2.text()).toBe('server-2')

    await Promise.all([
      resolvePending(session.evaluate('(ring/stop! srv1 {:drain-timeout-ms 0})')),
      resolvePending(session.evaluate('(ring/stop! srv2 {:drain-timeout-ms 0})')),
    ])
  })

  it('stopping srv1 does not affect srv2', async () => {
    const session = makeSession()
    session.evaluate(`(ns t (:require [ring.adapter.node :as ring]))`)
    session.evaluate(`(defn h [_] {:status 200 :body "alive"})`)
    await Promise.all([
      resolvePending(session.evaluate('(-> (ring/start {:handler h :port 0}) (then #(def srv1 %)))')),
      resolvePending(session.evaluate('(-> (ring/start {:handler h :port 0}) (then #(def srv2 %)))')),
    ])
    const port2 = getPort(session.evaluate('srv2'))

    await resolvePending(session.evaluate('(ring/stop! srv1 {:drain-timeout-ms 0})'))

    const resp = await fetch(`http://localhost:${port2}/`)
    expect(await resp.text()).toBe('alive')

    await resolvePending(session.evaluate('(ring/stop! srv2 {:drain-timeout-ms 0})'))
  })
})

// ---------------------------------------------------------------------------
// 6. :on-error handler
// ---------------------------------------------------------------------------

describe('cljam-ring — :on-error', () => {
  it(':on-error fn is called with error map when the server emits an error', async () => {
    const session = makeSession()
    session.evaluate(`(ns t (:require [ring.adapter.node :as ring]))`)
    session.evaluate(`
      (def errors (atom []))
      (defn h [_] {:status 200 :body "ok"})
    `)
    await resolvePending(
      session.evaluate(`
        (-> (ring/start {:handler h :port 0
                         :on-error (fn [err] (swap! errors conj err))})
            (then #(def srv %)))
      `)
    )
    const nodeServer = extractNodeServer(session.evaluate('srv'))

    nodeServer.emit('error', new Error('test-server-error'))

    // give the synchronous emit a tick to propagate
    await new Promise((r) => setTimeout(r, 0))

    const errors = session.evaluate('(deref errors)')
    expect((errors as { kind: string }).kind).toBe('vector')
    const msg = session.evaluate('(:message (first @errors))')
    expect(msg).toEqual(v.string('test-server-error'))

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('default handler logs to stderr and does not crash when :on-error is omitted', async () => {
    const session = makeSession()
    await startAndBind(session, '(defn h [_] {:status 200 :body "ok"})')
    const nodeServer = extractNodeServer(session.evaluate('srv'))

    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() =>
      nodeServer.emit('error', new Error('silent-error'))
    ).not.toThrow()
    expect(spy).toHaveBeenCalledWith(
      '[cljam-ring] unhandled server error:',
      'silent-error'
    )
    spy.mockRestore()

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })
})

// ---------------------------------------------------------------------------
// 7. Middleware composition
//
// Middlewares written with (async ...) + @ are transparent to whether the
// handler below is sync or async — the same code works for both.
// ---------------------------------------------------------------------------

describe('cljam-ring — middleware composition', () => {
  it('request-only middleware (no async needed) works with sync handler', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn base [req]
         {:status 200 :body (str "client=" (:client-id req))})
       (defn wrap-client-id [handler]
         (fn [req]
           (handler (assoc req :client-id "ABC"))))
       (def h (wrap-client-id base))`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    expect(resp.status).toBe(200)
    expect(await resp.text()).toBe('client=ABC')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('response-transforming middleware (async+@) works with sync handler', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn base [_req] {:status 200 :body "ok"})
       (defn wrap-custom-header [handler]
         (fn [req]
           (async
             (assoc-in @(handler req) [:headers "x-custom"] "ring-mw"))))
       (def h (wrap-custom-header base))`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    expect(resp.headers.get('x-custom')).toBe('ring-mw')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('response-transforming middleware (async+@) works with async handler', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn base [_req] (async {:status 200 :body "async-base"}))
       (defn wrap-custom-header [handler]
         (fn [req]
           (async
             (assoc-in @(handler req) [:headers "x-custom"] "ring-mw"))))
       (def h (wrap-custom-header base))`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    expect(resp.status).toBe(200)
    expect(resp.headers.get('x-custom')).toBe('ring-mw')
    expect(await resp.text()).toBe('async-base')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('middleware with async pre-processing enriches request and transforms response', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn fetch-user [_token] (async {:id "u42" :name "RegiByte"}))
       (defn base [req]
         {:status 200 :body (str "hello " (get-in req [:user :name]))})
       (defn wrap-auth [handler]
         (fn [req]
           (async
             (let [user @(fetch-user (get-in req [:headers :authorization]))
                   resp @(handler (assoc req :user user))]
               (assoc-in resp [:headers "x-user-id"] (:id user))))))
       (def h (wrap-auth base))`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`, {
      headers: { authorization: 'Bearer token123' },
    })
    expect(resp.status).toBe(200)
    expect(await resp.text()).toBe('hello RegiByte')
    expect(resp.headers.get('x-user-id')).toBe('u42')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('stacked middlewares: two async wrappers compose correctly', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn base [_req] {:status 200 :body "base"})
       (defn wrap-a [handler]
         (fn [req]
           (async (assoc-in @(handler req) [:headers "x-mw-a"] "a"))))
       (defn wrap-b [handler]
         (fn [req]
           (async (assoc-in @(handler req) [:headers "x-mw-b"] "b"))))
       (def h (-> base wrap-a wrap-b))`
    )
    const port = getPort(session.evaluate('srv'))

    const resp = await fetch(`http://localhost:${port}/`)
    expect(resp.headers.get('x-mw-a')).toBe('a')
    expect(resp.headers.get('x-mw-b')).toBe('b')
    expect(await resp.text()).toBe('base')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })

  it('middleware returning early (no handler call) works for both sync and async stacks', async () => {
    const session = makeSession()
    await startAndBind(
      session,
      `(defn base [_req] {:status 200 :body "should not reach"})
       (defn wrap-auth-guard [handler]
         (fn [req]
           (if (= (:uri req) "/secret")
             {:status 401 :body "Unauthorized"}
             (handler req))))
       (def h (wrap-auth-guard base))`
    )
    const port = getPort(session.evaluate('srv'))

    const guarded = await fetch(`http://localhost:${port}/secret`)
    expect(guarded.status).toBe(401)
    expect(await guarded.text()).toBe('Unauthorized')

    const ok = await fetch(`http://localhost:${port}/open`)
    expect(ok.status).toBe(200)
    expect(await ok.text()).toBe('should not reach')

    await resolvePending(session.evaluate('(ring/stop! srv {:drain-timeout-ms 0})'))
  })
})
