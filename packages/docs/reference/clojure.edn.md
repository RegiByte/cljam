---
outline: 2
---

# clojure.edn

> _Namespace:_ `clojure.edn`

## Functions

### `pr-str`

```clojure
(pr-str val)
```

Returns a string representation of val in EDN format.
  Equivalent to clojure.core/pr-str for all standard EDN-compatible types.

---

### `read-string`

```clojure
(read-string s)
(read-string opts s)
```

Reads one EDN value from string s and returns it.

  Accepts an optional opts map as the first argument:
    :readers - map from tag symbol to handler function; merged with *data-readers*
    :default - fn of [tag-name value] called for tags with no registered handler

  Uses *data-readers* (from clojure.core) for globally registered tag handlers.
  Built-in tags: #inst (returns JS Date), #uuid (returns string passthrough).

  Rejects Clojure-specific syntax that is not part of the EDN spec:
  quote ('), syntax-quote (`), unquote (~), #(...), @deref, ^metadata, #'var,
  #"regex", and #:ns{...} namespaced maps.

---