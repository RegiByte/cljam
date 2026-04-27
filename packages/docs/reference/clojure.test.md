---
outline: 2
---

# Namespace: `clojure.test`

---
Testing facilities. Provides macros for defining and running tests, as well as assertions and reporting. 
   can be overridden for custom integration.

## Functions

### `compose-fixtures`

```clojure
(compose-fixtures f1 f2)
```

Returns a single fixture that wraps f2 inside f1.
  Setup order: f1 setup first, then f2 setup.
  Teardown order: f2 teardown first, then f1 teardown.
  This is the standard middleware-onion composition.

---

### `default-fixture`

```clojure
(default-fixture f)
```

---

### `join-fixtures`

```clojure
(join-fixtures fixtures)
```

Compose a sequence of fixture functions into a single fixture.
  Empty sequence returns default-fixture (calls f directly).
  Fixtures run left-to-right for setup, right-to-left for teardown.

---

### `run-tests`

```clojure
(run-tests)
(run-tests & namespaces)
```

---

### `successful?`

```clojure
(successful? summary)
```

Returns true if the test summary has zero failures and zero errors.

---

### `use-fixtures`

```clojure
(use-fixtures type & fixture-fns)
```

Register fixture functions for the current namespace.
  type must be :each (runs around each individual test) or
  :once (runs around the entire namespace test suite).
  Multiple fixture fns are composed in order.

---

### `with-testing-context*`

```clojure
(with-testing-context* string thunk)
```

---

## Macros

### `are`

```clojure
(are argv expr & args)
```

---

### `deftest`

```clojure
(deftest name & body)
```

---

### `is`

```clojure
(is form)
(is form msg)
```

---

### `run-test`

```clojure
(run-test test-symbol)
```

Runs a single deftest. Returns a summary map.
  Useful for targeted test runs at the REPL without running the whole suite.

---

### `testing`

```clojure
(testing string & body)
```

---

### `thrown-with-msg?`

```clojure
(thrown-with-msg? exc-type re & body)
```

Returns the caught exception if body throws exc-type AND the exception
  message matches the regex re. Returns false if no throw, nil if message
  does not match. Wrong-type exceptions propagate unchanged.
  Message is extracted via (:message e) for runtime error maps, (str e) otherwise.

---

### `thrown?`

```clojure
(thrown? exc-type & body)
```

Returns the caught exception if body throws an exception matching exc-type,
  false if no exception is thrown. Wrong-type exceptions propagate unchanged.
  Use :default to match any thrown value.

---

## Multimethods

### `report`

---

## Special Vars

### `*report-counters*`

**dynamic var** · default: `nil`

---

### `*test-out*`

**dynamic var** · default: `nil`

---

### `*testing-contexts*`

**dynamic var** · default: `[]`

---

### `*testing-vars*`

**dynamic var** · default: `[]`

---

### `fixture-registry`

**atom** · initial: `{}`

---

### `test-registry`

**atom** · initial: `{}`

---