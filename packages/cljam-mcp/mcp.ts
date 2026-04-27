// cljam-mcp — MCP server for cljam.
// Gives LLMs a persistent, stateful Clojure REPL via the Model Context Protocol.
//
// Embedded usage:
//   import { createMcpServer } from '@regibyte/cljam-mcp'
//   const server = createMcpServer()
//   // wire your own transport
//
// CLI usage:
//   npx cljam-mcp --root-dir /path/to/workspace
//   npx cljam-mcp --root-dir /path/to/workspace --main my.app:start
//   CLJAM_MCP_ROOT_DIR=/path/to/workspace npx cljam-mcp
//   CLJAM_MCP_MAIN=my.app npx cljam-mcp --root-dir /path/to/workspace
//
// Tools exposed:
//   new_session    — create an agent workspace session
//   eval           — evaluate Clojure code, returns EDN result + captured stdout
//   list_sessions  — list active sessions
//   delete_session — free a session
//   load_file      — load a .clj file by path

export { createMcpServer, startMcpServer } from './src/server.js'
export type { McpServerOptions } from './src/server.js'
export type { SessionRecord, Preset } from './src/session-manager.js'
