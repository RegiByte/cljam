# LLM Integration with cljam-mcp

`@regibyte/cljam-mcp` is an [MCP](https://modelcontextprotocol.io/) server that gives LLMs a persistent, stateful Clojure REPL as tool calls. Sessions survive across turns — define a function, call it ten turns later.

## Setup in Claude Code

Add to your project's `.claude.json`:

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

Claude Code restarts the server automatically on crash. `--root-dir` is optional,
but recommended: it becomes the default workspace for every new built-in session.
You can also set `CLJAM_MCP_ROOT_DIR=/path/to/workspace`.

## Mode 1: Built-in sessions

The LLM creates and manages Clojure sessions directly:

```
new_session {}
→ { session_id: "abc123", preset: "agent", root_dir: "/path/to/workspace" }

eval { session_id: "abc123", code: "(defn greet [n] (str \"hello \" n))" }
eval { session_id: "abc123", code: "(greet \"world\")" }
→ { result: "\"hello world\"" }
```

Built-in sessions use a single MCP agent configuration with captured output,
Node.js host bindings, and dynamic imports enabled. Load project files with
`root_dir`, or configure the server with `--root-dir` and omit it per session:

```
new_session { root_dir: "/path/to/project" }
load_file { session_id: "...", path: "src/my/lib.clj" }
eval { session_id: "...", code: "(my.lib/main)" }
```

When a workspace has `cljam.sourceRoots`, namespace requires resolve from those
roots. `cljam.main` (optional) names an entrypoint namespace that is auto-required
into every new session — the session enters that namespace so the agent can call
its functions unqualified:

```json
{
  "cljam": {
    "sourceRoots": ["src/clojure"],
    "libraries": ["@regibyte/cljam-schema"],
    "main": "my.app"
  }
}
```

Use `"main": "my.app:start"` to also call a bootstrap function with no args after
the require. Override from the CLI with `--main <ns[:fn]>` or `CLJAM_MCP_MAIN`.
If the bootstrap fails the session still comes up; the error is reported as
`main_load_error` in the `new_session` response.

## Mode 2: nREPL bridge (pair programming)

Connect to the same nREPL server the human developer is using in Calva. Both parties share the same live runtime — atoms, namespaces, definitions:

```bash
# Human starts the nREPL server
cljam nrepl-server --root-dir . --port 7888

# Human connects Calva → Calva: Connect to Running REPL Server in Project
```

```
# LLM connects via MCP
connect_nrepl { port: 7888 }
→ {
    connection_id: "conn-xyz",
    session_id: "my-fresh-session-uuid",
    other_sessions: [
      { id: "calva-session-uuid", ns: "my-app.dev" }
    ]
  }

# LLM evals into Calva's session — true shared state
nrepl_eval {
  connection_id: "conn-xyz",
  session_id: "calva-session-uuid",
  code: "(def answer 42)"
}
# Human can now call (answer) from Calva and get 42
```

`other_sessions` in the connect response identifies every pre-existing session. Pick the one with the active namespace — that's Calva.

## Introspection with `describe`

`describe` is a Clojure function, called inside `eval`:

```
eval { session_id: "...", code: "(describe #'clojure.core/map)" }
→ { :name map :ns clojure.core :doc "..." :arglists (...) }

eval { session_id: "...", code: "(describe (find-ns 'clojure.core))" }
→ { :name clojure.core :vars [...] }
```

## Quick reference with `handbook`

```
handbook {}
→ list of all topic keys

handbook { topic: "sort" }
→ dense reference entry with examples
```

Handbook topics include `jvm-gaps`, `types`, `records`, `protocols`, `schema-api`, `describe`, `sessions`, `pair-programming`, and more.

## All tools

### Mode 1

| Tool | Description |
|---|---|
| `new_session` | Create an agent workspace session (optional `root_dir` override) |
| `eval` | Evaluate Clojure — returns `result`, `ns`, `stdout`, `error` |
| `load_file` | Load a `.clj` file into the session |
| `list_sessions` | List active sessions |
| `delete_session` | Delete a session |
| `handbook` | Look up a quick-reference topic |

### Mode 2

| Tool | Description |
|---|---|
| `connect_nrepl` | Connect to nREPL server — returns `connection_id`, `session_id`, `other_sessions` |
| `nrepl_eval` | Eval in an nREPL session |
| `nrepl_sessions` | List sessions on this connection |
| `nrepl_new_session` | Clone a fresh session |
| `nrepl_server_sessions` | List ALL sessions server-wide (all connected clients) |
| `nrepl_close` | Close the connection |
