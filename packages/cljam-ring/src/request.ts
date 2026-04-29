// request.ts — converts a Node.js IncomingMessage to a CljMap.
//
// Ring request map shape:
//   :method        — keyword  (:get, :post, ...)
//   :uri           — string   (pathname only, no query string)
//   :query-string  — string   (raw query, without the leading "?")
//   :query-params  — map      (string keys → string values)
//   :headers       — map      (keyword keys → string values)
//   :body          — parsed value | nil
//                     application/json            → jsToClj(JSON.parse(...))
//                     application/x-www-form-urlencoded → map of string→string
//                     everything else / no body   → raw string | nil
//   :remote-addr   — string

import type { IncomingMessage } from 'node:http'
import { v, jsToClj } from '@regibyte/cljam'
import type { CljMap, CljValue } from '@regibyte/cljam'

function headersToClj(headers: IncomingMessage['headers']): CljMap {
  const entries: [CljValue, CljValue][] = []
  for (const [key, val] of Object.entries(headers)) {
    if (val === undefined) continue
    const strVal = Array.isArray(val) ? val.join(', ') : val
    entries.push([v.keyword(`:${key}`), v.string(strVal)])
  }
  return v.map(entries)
}

function queryParamsToClj(search: string): CljMap {
  const params = new URLSearchParams(search)
  const entries: [CljValue, CljValue][] = []
  for (const [key, val] of params.entries()) {
    entries.push([v.string(key), v.string(val)])
  }
  return v.map(entries)
}

function readBody(req: IncomingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

function parseBody(bodyText: string, contentType: string): CljValue {
  if (!bodyText) return v.nil()

  if (contentType.includes('application/json')) {
    try {
      return jsToClj(JSON.parse(bodyText) as unknown)
    } catch {
      return v.string(bodyText)
    }
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return queryParamsToClj(bodyText)
  }

  return v.string(bodyText)
}

export async function requestToClj(req: IncomingMessage): Promise<CljMap> {
  const host = (req.headers.host ?? 'localhost').split(':')[0]
  const rawUrl = req.url ?? '/'
  const url = new URL(rawUrl, `http://${host}`)

  const contentType = (req.headers['content-type'] ?? '').toLowerCase()
  const bodyBuffer = await readBody(req)
  const bodyText = bodyBuffer.toString('utf-8')

  const method = (req.method ?? 'get').toLowerCase()
  const queryString = url.search.startsWith('?') ? url.search.slice(1) : url.search

  return v.map([
    [v.keyword(':method'), v.keyword(`:${method}`)],
    [v.keyword(':uri'), v.string(url.pathname)],
    [v.keyword(':query-string'), v.string(queryString)],
    [v.keyword(':query-params'), queryParamsToClj(url.search)],
    [v.keyword(':headers'), headersToClj(req.headers)],
    [v.keyword(':body'), parseBody(bodyText, contentType)],
    [v.keyword(':remote-addr'), v.string(req.socket.remoteAddress ?? '')],
  ])
}
