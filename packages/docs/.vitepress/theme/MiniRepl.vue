<template>
  <div class="mr">
    <div class="mr-header">
      <span class="mr-lang">cljam</span>
      <span class="mr-hint">{{ hint }}</span>
      <div class="mr-actions">
        <button
          v-if="dirty"
          type="button"
          class="mr-btn mr-btn--ghost"
          @click="reset"
          :disabled="running"
          title="Reset to the original snippet"
        >Reset</button>
        <button
          type="button"
          class="mr-btn"
          @click="run"
          :disabled="running || !mounted"
          :title="mounted ? 'Evaluate this snippet (Ctrl/Cmd + Enter)' : 'Loading runtime...'"
        >
          <span v-if="running">running…</span>
          <span v-else-if="!mounted">loading…</span>
          <span v-else>▶ Run</span>
        </button>
      </div>
    </div>

    <textarea
      ref="taRef"
      class="mr-code"
      v-model="editableCode"
      spellcheck="false"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      :rows="initialRows"
      @input="autoresize"
      @keydown="onKeydown"
    ></textarea>

    <div v-if="ranOnce" class="mr-results">
      <div
        v-for="line in printLines"
        :key="`p-${line.id}`"
        class="mr-line mr-line--print"
      >{{ line.text }}</div>
      <div
        v-if="result !== null"
        class="mr-line"
        :class="{ 'mr-line--error': isError }"
      >
        <span class="mr-arrow">{{ isError ? '✗' : '⇒' }}</span>
        <span class="mr-value">{{ result }}</span>
        <span v-if="durationMs !== null" class="mr-duration">({{ formatDuration(durationMs) }})</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { makeRepl, evalSource } from './repl'
import type { ReplState } from './repl'

const props = defineProps<{
  code: string
}>()

const editableCode = ref(props.code)
const initialRows  = computed(() => Math.max(3, props.code.split('\n').length))

const mounted    = ref(false)
const running    = ref(false)
const ranOnce    = ref(false)
const result     = ref<string | null>(null)
const isError    = ref(false)
const durationMs = ref<number | null>(null)
const printLines = ref<{ id: number; text: string }[]>([])

const taRef = ref<HTMLTextAreaElement | null>(null)

const dirty = computed(() => editableCode.value !== props.code)

const hint = computed(() => {
  if (!mounted.value) return ''
  if (running.value)  return ''
  return 'editable · ⌘/Ctrl + Enter to run'
})

let lineId = 0
let replState: ReplState | null = null

onMounted(() => {
  replState = makeRepl()
  mounted.value = true
  nextTick(autoresize)
})

watch(() => props.code, (next) => {
  editableCode.value = next
  nextTick(autoresize)
})

function autoresize(): void {
  const ta = taRef.value
  if (!ta) return
  ta.style.height = 'auto'
  ta.style.height = `${ta.scrollHeight}px`
}

function reset(): void {
  editableCode.value = props.code
  nextTick(autoresize)
}

function onKeydown(e: KeyboardEvent): void {
  // Cmd/Ctrl + Enter → run
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    run()
    return
  }
  // Tab inserts two spaces instead of moving focus
  if (e.key === 'Tab' && !e.shiftKey) {
    e.preventDefault()
    const ta = taRef.value
    if (!ta) return
    const start = ta.selectionStart
    const end   = ta.selectionEnd
    const value = editableCode.value
    editableCode.value = value.slice(0, start) + '  ' + value.slice(end)
    nextTick(() => {
      ta.selectionStart = ta.selectionEnd = start + 2
      autoresize()
    })
  }
}

async function run(): Promise<void> {
  if (!replState || running.value) return
  running.value    = true
  ranOnce.value    = true
  printLines.value = []
  result.value     = null
  isError.value    = false
  durationMs.value = null

  try {
    const entries = await evalSource(replState, editableCode.value)

    for (const entry of entries) {
      if (entry.kind === 'output') {
        printLines.value.push({ id: lineId++, text: entry.text })
      } else if (entry.kind === 'result') {
        result.value     = entry.output
        durationMs.value = entry.durationMs
      } else if (entry.kind === 'error') {
        result.value     = entry.message
        isError.value    = true
        durationMs.value = entry.durationMs
      }
    }
  } finally {
    running.value = false
  }
}

function formatDuration(ms: number): string {
  if (ms < 1)    return `${Math.round(ms * 1000)} µs`
  if (ms < 10)   return `${ms.toFixed(2)} ms`
  if (ms < 100)  return `${ms.toFixed(1)} ms`
  if (ms < 1000) return `${Math.round(ms)} ms`
  return `${(ms / 1000).toFixed(2)} s`
}
</script>

<style scoped>
.mr {
  margin: 1.5em 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  font-family: 'Fira Code', 'JetBrains Mono', 'SF Mono', ui-monospace, monospace;
}

.mr-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.5rem 0.85rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.mr-lang {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

.mr-hint {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mr-actions {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-shrink: 0;
}

.mr-btn {
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.28rem 0.95rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-brand-1);
  background: transparent;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.mr-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

.mr-btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.mr-btn--ghost {
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.mr-btn--ghost:hover:not(:disabled) {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-3);
}

.mr-code {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.95rem 1.1rem;
  background: #1e1e1e;
  color: #d4d4d4;
  font-family: inherit;
  font-size: 0.85rem;
  line-height: 1.55;
  border: 0;
  outline: none;
  resize: none;
  overflow: hidden;
  white-space: pre;
  tab-size: 2;
  caret-color: var(--vp-c-brand-1);
  box-sizing: border-box;
}

.mr-code:focus {
  background: #1c1c1c;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--vp-c-brand-1) 35%, transparent);
}

.mr-results {
  padding: 0.7rem 1.1rem;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.82rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.mr-line {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--vp-c-text-1);
}

.mr-line--print {
  color: var(--vp-c-text-2);
  padding-left: 1.2rem;
}

.mr-line--error {
  color: #d83b3b;
}

.mr-arrow {
  color: #4caf50;
  font-weight: 700;
  flex-shrink: 0;
}

.mr-line--error .mr-arrow {
  color: #d83b3b;
}

.mr-value {
  flex: 1;
}

.mr-duration {
  color: var(--vp-c-text-3);
  font-size: 0.92em;
  flex-shrink: 0;
}
</style>
