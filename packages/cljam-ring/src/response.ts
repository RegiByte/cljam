// response.ts — writes a Ring response CljMap to a Node.js ServerResponse.
//
// Ring response map shape:
//   :status   — number  (default 200)
//   :headers  — map     (keyword or string keys → string values)
//   :body     — string | nil | any Clojure value (auto-JSON)

import type { ServerResponse } from 'node:http'
import { cljToJs, printString } from '@regibyte/cljam'
import type { CljValue, FunctionApplier } from '@regibyte/cljam'

// Response body serialisation never needs to call Clojure functions.
const throwOnFn: FunctionApplier = {
  applyFunction: () => {
    throw new Error('Clojure functions cannot be serialised as an HTTP response body')
  },
}

function mapGet(resp: CljValue, keyName: string): CljValue | null {
  if (resp.kind !== 'map') return null
  for (const [k, val] of resp.entries) {
    if (k.kind === 'keyword' && k.name === keyName) return val
  }
  return null
}

function headersFromClj(headersVal: CljValue | null): Record<string, string> {
  const out: Record<string, string> = {}
  if (headersVal?.kind !== 'map') return out
  for (const [k, val] of headersVal.entries) {
    const strVal = val.kind === 'string' ? val.value : printString(val)
    if (k.kind === 'keyword') {
      out[k.name.slice(1)] = strVal  // strip leading ':'
    } else if (k.kind === 'string') {
      out[k.value] = strVal
    }
  }
  return out
}

export function writeCljResponse(resp: CljValue, res: ServerResponse): void {
  if (resp.kind !== 'map') {
    res.writeHead(500, { 'content-type': 'text/plain' })
    res.end('handler must return a map')
    return
  }

  const statusVal = mapGet(resp, ':status')
  const status = statusVal?.kind === 'number' ? statusVal.value : 200

  const headers = headersFromClj(mapGet(resp, ':headers'))
  const bodyVal = mapGet(resp, ':body')

  let body: string
  if (!bodyVal || bodyVal.kind === 'nil') {
    body = ''
  } else if (bodyVal.kind === 'string') {
    body = bodyVal.value
  } else {
    if (!headers['content-type']) headers['content-type'] = 'application/json'
    body = JSON.stringify(cljToJs(bodyVal, throwOnFn))
  }

  res.writeHead(status, headers)
  res.end(body)
}

export function writeErrorResponse(res: ServerResponse, message: string, status = 500): void {
  if (!res.headersSent) {
    res.writeHead(status, { 'content-type': 'text/plain' })
  }
  res.end(message)
}

