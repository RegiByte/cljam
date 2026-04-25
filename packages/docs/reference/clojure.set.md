# clojure.set

> _Namespace:_ `clojure.set`

### `difference`

**fn**

```clojure
(difference s)
(difference s1 s2)
(difference s1 s2 & sets)
```


Return a set that is the first set without elements of the remaining sets.

---

### `index`

**fn**

```clojure
(index xrel ks)
```


Returns a map of the distinct values of ks in the xrel mapped to a
  set of the maps in xrel with the corresponding values of ks.

---

### `intersection`

**fn**

```clojure
(intersection s)
(intersection s1 s2)
(intersection s1 s2 & sets)
```


Return a set that is the intersection of the input sets.

---

### `join`

**fn**

```clojure
(join xrel yrel)
(join xrel yrel km)
```


When passed 2 rels, returns the relation corresponding to the natural
  join. When passed an additional keymap, joins on the corresponding keys.

---

### `map-invert`

**fn**

```clojure
(map-invert m)
```


Returns the map with the vals mapped to the keys.

---

### `project`

**fn**

```clojure
(project xrel ks)
```


Returns a rel of the elements of xrel with only the keys in ks.

---

### `rename`

**fn**

```clojure
(rename xrel kmap)
```


Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap.

---

### `rename-keys`

**fn**

```clojure
(rename-keys m kmap)
```


Returns the map with the keys in kmap renamed to the vals in kmap.

---

### `select`

**fn**

```clojure
(select pred s)
```


Returns a set of the elements for which pred is true.

---

### `subset?`

**fn**

```clojure
(subset? s1 s2)
```


Is set1 a subset of set2?

---

### `superset?`

**fn**

```clojure
(superset? s1 s2)
```


Is set1 a superset of set2?

---

### `union`

**fn**

```clojure
(union)
(union s)
(union s1 s2)
(union s1 s2 & sets)
```


Return a set that is the union of the input sets.

---