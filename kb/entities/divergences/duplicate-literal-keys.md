---
{
  "type": "divergence",
  "name": "Duplicate keys in literals are accepted",
  "summary": "Map and set literals with duplicate keys read without error, where the JVM reports them.",
  "in": "cljam",
  "reviewed": "2026-11-07",
  "status": "open",
  "failure": "silent",
  "refs": ["cljam/packages/cljam/src/core/reader.ts#readMap", "cljam/packages/cljam/src/core/reader.ts#readSet"]
}
---
`{:a 1 :a 2}` is a read error on the JVM (`Duplicate key: :a`) and `{:a 2}` here. `#{1 1}` is an error there and `#{1}`
here, because [`readSet`](ref:cljam/packages/cljam/src/core/reader.ts#readSet) deduplicates.
