---
outline: 2
---

# Namespace: `clojure.string`

---
String operations. Provides functions for joining, splitting, trimming, and manipulating strings.

## Functions

### `blank?`

```clojure
(blank? s)
```

True if s is nil, empty, or contains only whitespace.

---

### `capitalize`

```clojure
(capitalize s)
```

Converts first character of the string to upper-case, all other
  characters to lower-case.

---

### `ends-with?`

```clojure
(ends-with? s substr)
```

True if s ends with substr.

---

### `escape`

```clojure
(escape s cmap)
```

Return a new string, using cmap to escape each character ch from s as
  follows: if (cmap ch) is nil, append ch to the new string; otherwise append
  (str (cmap ch)).

  cmap may be a map or a function. Maps are callable directly (IFn semantics).

  Note: Clojure uses char literal keys (e.g. {\&lt; "&lt;"}). This interpreter
  has no char type, so map keys must be single-character strings instead
  (e.g. {"&lt;" "&lt;"}).

---

### `includes?`

```clojure
(includes? s substr)
```

True if s includes substr.

---

### `index-of`

```clojure
(index-of s value)
(index-of s value from-index)
```

Return index of value (string) in s, optionally searching forward from
  from-index. Return nil if value not found.

---

### `join`

```clojure
(join coll)
(join separator coll)
```

Returns a string of all elements in coll, as returned by (str), separated
  by an optional separator.

---

### `last-index-of`

```clojure
(last-index-of s value)
(last-index-of s value from-index)
```

Return last index of value (string) in s, optionally searching backward
  from from-index. Return nil if value not found.

---

### `lower-case`

```clojure
(lower-case s)
```

Converts string to all lower-case.

---

### `re-quote-replacement`

```clojure
(re-quote-replacement s)
```

Given a replacement string that you wish to be a literal replacement for a
  pattern match in replace or replace-first, escape any special replacement
  characters ($ signs) so they are treated literally.

---

### `replace`

```clojure
(replace s match replacement)
```

Replaces all instances of match with replacement in s.

  match/replacement can be:
    string / string   — literal match, literal replacement
    pattern / string  — regex match; $1, $2, etc. substituted from groups
    pattern / fn      — regex match; fn called with match (string or vector
                        of [whole g1 g2 ...]), return value used as replacement.

  See also replace-first.

---

### `replace-first`

```clojure
(replace-first s match replacement)
```

Replaces the first instance of match with replacement in s.
  Same match/replacement semantics as replace.

---

### `reverse`

```clojure
(reverse s)
```

Returns s with its characters reversed.

---

### `split`

```clojure
(split s sep)
(split s sep limit)
```

Splits string on a regular expression. Optional limit is the maximum number
  of parts returned. Trailing empty strings are not returned by default; pass
  a limit of -1 to return all.

---

### `split-lines`

```clojure
(split-lines s)
```

Splits s on \n or \r\n. Trailing empty lines are not returned.

---

### `starts-with?`

```clojure
(starts-with? s substr)
```

True if s starts with substr.

---

### `trim`

```clojure
(trim s)
```

Removes whitespace from both ends of string.

---

### `trim-newline`

```clojure
(trim-newline s)
```

Removes all trailing newline \n or return \r characters from string.
  Similar to Perl's chomp.

---

### `triml`

```clojure
(triml s)
```

Removes whitespace from the left side of string.

---

### `trimr`

```clojure
(trimr s)
```

Removes whitespace from the right side of string.

---

### `upper-case`

```clojure
(upper-case s)
```

Converts string to all upper-case.

---