# cljam MCP workspace

Temporary project for testing `@regibyte/cljam-mcp` with a persistent workspace root.

Example MCP config:

```json
{
  "mcpServers": {
    "cljam": {
      "command": "bunx",
      "args": [
        "@regibyte/cljam-mcp",
        "--root-dir",
        "/Users/reginaldo/code/clojure-land/cljam/experiments/mcp-workspace"
      ]
    }
  }
}
```

Once configured, an agent can call:

```text
new_session {}
eval { session_id: "...", code: "(greet \"Regi\")" }
```

The `cljam.sourceRoots` entry points sessions at `src/clojure`, and the
`cljam.main` field auto-requires `workspace.demo` and switches the session
into that namespace — so functions like `greet` and `summarize` are callable
unqualified right after `new_session`.

To run a bootstrap function on session start, use `"main": "workspace.demo:bootstrap"`.
The function is called with no arguments after the require.

Override the workspace's `cljam.main` from the CLI:

```bash
cljam-mcp --root-dir /path/to/workspace --main workspace.tests:run-all
CLJAM_MCP_MAIN=workspace.tests:run-all cljam-mcp --root-dir /path/to/workspace
```
