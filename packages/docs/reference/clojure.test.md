# clojure.test

> _Namespace:_ `clojure.test`

### `*report-counters*`

**nil**
---

### `*test-out*`

**nil**
---

### `*testing-contexts*`

**vector**
---

### `*testing-vars*`

**vector**
---

### `are`

**macro**
---

### `compose-fixtures`

**fn**

```clojure
(compose-fixtures f1 f2)
```


Returns a single fixture that wraps f2 inside f1.
  Setup order: f1 setup first, then f2 setup.
  Teardown order: f2 teardown first, then f1 teardown.
  This is the standard middleware-onion composition.

---

### `default-fixture`

**fn**

```clojure
(default-fixture f)
```

---

### `deftest`

**macro**
---

### `fixture-registry`

**atom**
---

### `is`

**macro**
---

### `join-fixtures`

**fn**

```clojure
(join-fixtures fixtures)
```


Compose a sequence of fixture functions into a single fixture.
  Empty sequence returns default-fixture (calls f directly).
  Fixtures run left-to-right for setup, right-to-left for teardown.

---

### `report`

**multimethod**
---

### `run-test`

**macro**

Runs a single deftest. Returns a summary map.
  Useful for targeted test runs at the REPL without running the whole suite.

---

### `run-tests`

**fn**

```clojure
(run-tests)
(run-tests & namespaces)
```

---

### `successful?`

**fn**

```clojure
(successful? summary)
```


Returns true if the test summary has zero failures and zero errors.

---

### `test-registry`

**atom**
---

### `testing`

**macro**
---

### `thrown-with-msg?`

**macro**

Returns the caught exception if body throws exc-type AND the exception
  message matches the regex re. Returns false if no throw, nil if message
  does not match. Wrong-type exceptions propagate unchanged.
  Message is extracted via (:message e) for runtime error maps, (str e) otherwise.

---

### `thrown?`

**macro**

Returns the caught exception if body throws an exception matching exc-type,
  false if no exception is thrown. Wrong-type exceptions propagate unchanged.
  Use :default to match any thrown value.

---

### `use-fixtures`

**fn**

```clojure
(use-fixtures type & fixture-fns)
```


Register fixture functions for the current namespace.
  type must be :each (runs around each individual test) or
  :once (runs around the entire namespace test suite).
  Multiple fixture fns are composed in order.

---

### `with-testing-context*`

**fn**

```clojure
(with-testing-context* string thunk)
```

---