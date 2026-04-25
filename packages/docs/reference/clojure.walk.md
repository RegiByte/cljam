# clojure.walk

> _Namespace:_ `clojure.walk`

### `keywordize-keys`

**fn**

```clojure
(keywordize-keys m)
```


Recursively transforms all map keys from strings to keywords.

---

### `postwalk`

**fn**

```clojure
(postwalk f form)
```


Performs a depth-first, post-order traversal of form. Calls f on
  each sub-form, uses f's return value in place of the original.

---

### `postwalk-replace`

**fn**

```clojure
(postwalk-replace smap form)
```


Recursively transforms form by replacing keys in smap with their
  values. Like clojure/replace but works on any data structure.

---

### `prewalk`

**fn**

```clojure
(prewalk f form)
```


Like postwalk, but does pre-order traversal.

---

### `prewalk-replace`

**fn**

```clojure
(prewalk-replace smap form)
```


Recursively transforms form by replacing keys in smap with their
  values. Like clojure/replace but works on any data structure.

---

### `stringify-keys`

**fn**

```clojure
(stringify-keys m)
```


Recursively transforms all map keys from keywords to strings.

---

### `walk`

**fn**

```clojure
(walk inner outer form)
```


Traverses form, an arbitrary data structure. inner and outer are
  functions. Applies inner to each element of form, building up a
  data structure of the same type, then applies outer to the result.

---