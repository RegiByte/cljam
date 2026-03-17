export const specialFormKeywords = {
  quote: 'quote',
  def: 'def',
  if: 'if',
  do: 'do',
  let: 'let',
  fn: 'fn',
  defmacro: 'defmacro',
  quasiquote: 'quasiquote',
  ns: 'ns',
  loop: 'loop',
  recur: 'recur',
  defmulti: 'defmulti',
  defmethod: 'defmethod',
  try: 'try',
  var: 'var',
  binding: 'binding',
  'set!': 'set!',
  letfn: 'letfn',
  delay: 'delay',
  'lazy-seq': 'lazy-seq',
  // --- ASYNC (experimental) ---
  async: 'async',
  // --- END ASYNC ---
  // --- JS INTEROP ---
  '.': '.',
  'js/new': 'js/new',
  // --- END JS INTEROP ---
} as const
