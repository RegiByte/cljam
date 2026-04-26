---
outline: 2
---

# clojure.walk

> _Namespace:_ `clojure.walk`

Tree-walking utilities. Provides functions for traversing and transforming data structures.

## Functions

### `keywordize-keys`

```clojure
(keywordize-keys m)
```

Recursively transforms all map keys from strings to keywords.

---

### `postwalk`

```clojure
(postwalk f form)
```

Performs a depth-first, post-order traversal of form. Calls f on
  each sub-form, uses f's return value in place of the original.

---

### `postwalk-replace`

```clojure
(postwalk-replace smap form)
```

Recursively transforms form by replacing keys in smap with their
  values. Like clojure/replace but works on any data structure.

---

### `prewalk`

```clojure
(prewalk f form)
```

Like postwalk, but does pre-order traversal.

---

### `prewalk-replace`

```clojure
(prewalk-replace smap form)
```

Recursively transforms form by replacing keys in smap with their
  values. Like clojure/replace but works on any data structure.

---

### `stringify-keys`

```clojure
(stringify-keys m)
```

Recursively transforms all map keys from keywords to strings.

---

### `walk`

```clojure
(walk inner outer form)
```

Traverses form, an arbitrary data structure. inner and outer are
  functions. Applies inner to each element of form, building up a
  data structure of the same type, then applies outer to the result.

---