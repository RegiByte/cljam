# @regibyte/cljam-mcp

[![npm](https://img.shields.io/npm/v/%40regibyte%2Fcljam-mcp)](https://www.npmjs.com/package/@regibyte/cljam-mcp)
[![license](https://img.shields.io/npm/l/%40regibyte%2Fcljam-mcp)](LICENSE)

An [MCP](https://modelcontextprotocol.io/) server that gives LLMs a persistent, interactive Clojure REPL backed by [@regibyte/cljam](https://www.npmjs.com/package/@regibyte/cljam).

Sessions survive across tool calls. Define a function, call it three turns later. Accumulate state. Explore a live codebase. Pair-program with a human in Calva — in the same runtime, the same atoms.

***

## Setup

### Claude Code

Add to your project's `.claude.json` (or global `~/.claude/claude.json`):

```json
{
  "mcpServers": {
    "cljam": {
      "command": "npx",
      "args": ["@regibyte/cljam-mcp", "--root-dir", "/path/to/workspace"]
    }
  }
}
```

`--root-dir` is optional, but recommended. It gives every new session the same
workspace root, source roots, and `cljam.libraries` configuration. You can also
set `CLJAM_MCP_ROOT_DIR=/path/to/workspace` instead of passing an argument.

### Claude Desktop / other MCP clients

Same config, different file location (see your client's documentation for the config path). The server communicates over stdio — no port, no daemon.

### Bun

```bash
bunx @regibyte/cljam-mcp --root-dir /path/to/workspace
```

***

## Mode 1 — Built-in sessions

For LLM-driven work: create sessions, eval Clojure, load files, introspect.

### Quick start

```
new_session {}
→ { session_id: "abc123", ns: "user", preset: "agent", root_dir: "/path/to/workspace" }

eval { session_id: "abc123", code: "(+ 1 2)" }
→ { result: "3", ns: "user" }

eval { session_id: "abc123", code: "(def x 42)\n(str \"x is \" x)" }
→ { result: "\"x is 42\"", ns: "user" }
```

State persists across `eval` calls. `def`, `defn`, `require`, `ns` all work as expected.

Sessions use the MCP agent workspace configuration by default: captured output,
Node.js host bindings such as `process`, `Buffer`, `fetch`, and dynamic imports
for day-to-day work with Node modules.

### Loading project files

```
new_session { root_dir: "/path/to/my/project" }

load_file { session_id: "abc123", path: "src/my/lib.clj" }

eval { session_id: "abc123", code: "(my.lib/greet \"world\")" }
```

If `root_dir` is omitted, the server-level `--root-dir` is used. `root_dir`
also triggers source-root discovery and library auto-loading from `package.json`:

```json
{
  "cljam": {
    "sourceRoots": ["src/clojure"],
    "libraries": ["@regibyte/cljam-schema"],
    "main": "my.app"
  }
}
```

### Auto-loading an entrypoint namespace

`cljam.main` (optional) declares a bootstrap entrypoint. When set, every new
session in this workspace:

1. Requires the namespace — equivalent to `(require '[my.app])`
2. Switches `currentNs` into it — `eval` calls land inside `my.app` directly

So an agent can call `(some-fn ...)` unqualified right after `new_session {}`,
without an extra `require`/`in-ns` round-trip.

To run a bootstrap function on session start, use the `ns:fn` form:

```json
{ "cljam": { "main": "my.app:start" } }
```

The function is called with no arguments after the require. If the bootstrap
fails the session still comes up, the error is reported as `main_load_error`
in the `new_session` response.

Override per server invocation with `--main` or `CLJAM_MCP_MAIN`:

```bash
cljam-mcp --root-dir /path/to/workspace --main my.tests:run-all
```

### Introspection with `describe`

`describe` is a Clojure function — call it inside `eval`:

```
eval { session_id: "abc123", code: "(describe #'clojure.core/map)" }
→ result: a map with :name :ns :doc :arglists

eval { session_id: "abc123", code: "(describe (find-ns 'clojure.core))" }
→ result: {:name clojure.core :vars [...50 vars...]}
```

### Quick reference with `handbook`

`handbook` gives dense, example-first entries for topics where cljam diverges from JVM Clojure:

```
handbook {}
→ list of all topic keys

handbook { topic: "sort" }
→ "Default comparator is `compare`, NOT `<` ..."

handbook { topic: "jvm-gaps" }
→ overview of what doesn't exist in cljam vs JVM
```

Available topics: `sort` `char-literals` `dynamic-vars` `require` `jvm-gaps` `types` `records` `protocols` `schema-primitives` `schema-compound` `schema-api` `describe` `sessions` `pair-programming` `and-short-circuit`

### Mode 1 tool reference

| Tool | Description |
|---|---|
| `new_session` | Create a session. Returns `session_id`. |
| `eval` | Evaluate Clojure code. Returns `result`, `ns`, `stdout`, `error`. |
| `load_file` | Load a `.clj` file into a session. |
| `list_sessions` | List active sessions with namespace and metadata. |
| `delete_session` | Delete a session and free memory. |
| `handbook` | Look up a cljam quick-reference topic. |

***

## Mode 2 — nREPL bridge

Connect to an existing nREPL server — including the one Calva is using. Both the LLM and the human developer are in the same live runtime, sharing atoms, namespaces, and definitions.

### Start a cljam nREPL server

```bash
# From your project root
cljam nrepl-server --port 7888
# or with library auto-loading:
cljam nrepl-server --root-dir . --port 7888
```

Connect Calva (VS Code) via **Calva: Connect to Running REPL Server in Project**.

### Connect the LLM

```
connect_nrepl { port: 7888 }
→ {
    connection_id: "conn-xyz",
    session_id: "my-fresh-session-uuid",
    other_sessions: [
      { id: "calvas-session-uuid", ns: "schema.dev" }
    ]
  }
```

`other_sessions` lists every pre-existing session — Calva's session is right there, identified by its namespace. No probing required.

### Pair programming

```
nrepl_eval {
  connection_id: "conn-xyz",
  session_id: "calvas-session-uuid",
  code: "(defn my-fn [x] (* x 2))"
}
```

Now the human can call `(my-fn 21)` from Calva and get `42`. Same atoms, same vars. Definitions created by either side are instantly visible to the other.

### Mode 2 tool reference

| Tool | Description |
|---|---|
| `connect_nrepl` | Connect to a running nREPL server. Returns `connection_id`, `session_id`, `other_sessions`. |
| `nrepl_eval` | Eval code in an nREPL session. Returns `value`, `ns`, `out`, `error`. |
| `nrepl_sessions` | List sessions on this connection. |
| `nrepl_new_session` | Clone a fresh session from the server snapshot. |
| `nrepl_server_sessions` | List ALL sessions on the server (all clients, including Calva). |
| `nrepl_close` | Close the connection and free all its sessions. |

***

## Key differences from JVM Clojure

`handbook { topic: "jvm-gaps" }` has the full list. Essentials:

- No Java interop: `.method`, `new Class`, `import` — use `js/` namespace instead
- No `future`, `agent` — use `(async ...)` with `@deref` as await
- Numbers are IEEE-754 floats — no `BigDecimal`, no ratio literals
- `catch` uses keyword discriminators, not exception class names
- `defrecord`, `defprotocol`, `extend-protocol` — available and work as in JVM Clojure

***

## License

MIT
