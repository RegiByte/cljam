# clojure.core

> _Namespace:_ `clojure.core`

### `*`

**fn**

```clojure
(* & nums)
```


Returns the product of the arguments. Throws on non-number arguments.

---

### `*compiler-options*`

**map**
---

### `*data-readers*`

**map**
---

### `*describe-limit*`

**number**
---

### `*err*`

**nil**
---

### `*hierarchy*`

**map**
---

### `*ns*`

**namespace**
---

### `*out*`

**nil**
---

### `*print-length*`

**nil**
---

### `*print-level*`

**nil**
---

### `+`

**fn**

```clojure
(+ & nums)
```


Returns the sum of the arguments. Throws on non-number arguments.

---

### `-`

**fn**

```clojure
(- & nums)
```


Returns the difference of the arguments. Throws on non-number arguments.

---

### `->`

**macro**
---

### `->>`

**macro**
---

### `/`

**fn**

```clojure
(/ & nums)
```


Returns the quotient of the arguments. Throws on non-number arguments or division by zero.

---

### `<`

**fn**

```clojure
(< & nums)
```


Compares adjacent arguments left to right, returns true if all values are in ascending order, false otherwise.

---

### `<=`

**fn**

```clojure
(<= & nums)
```


Compares adjacent arguments left to right, returns true if all comparisons returns true for less than or equal to checks, false otherwise.

---

### `=`

**fn**

```clojure
(= & vals)
```


Compares adjacent arguments left to right, returns true if all values are structurally equal, false otherwise.

---

### `>`

**fn**

```clojure
(> & nums)
```


Compares adjacent arguments left to right, returns true if all values are in descending order, false otherwise.

---

### `>=`

**fn**

```clojure
(>= & nums)
```


Compares adjacent arguments left to right, returns true if all comparisons returns true for greater than or equal to checks, false otherwise.

---

### `Boolean`

**keyword**
---

### `Byte`

**keyword**
---

### `Character`

**keyword**
---

### `Class`

**keyword**
---

### `Cloneable`

**keyword**
---

### `Comparable`

**keyword**
---

### `Double`

**keyword**
---

### `Error`

**keyword**
---

### `Exception`

**keyword**
---

### `Float`

**keyword**
---

### `Integer`

**keyword**
---

### `Iterable`

**keyword**
---

### `Long`

**keyword**
---

### `Math`

**keyword**
---

### `NaN?`

**fn**

```clojure
(NaN? num)
```


Returns true if num is NaN, else false.

---

### `Number`

**keyword**
---

### `Object`

**keyword**
---

### `Runnable`

**keyword**
---

### `Runtime`

**keyword**
---

### `Short`

**keyword**
---

### `String`

**keyword**
---

### `System`

**keyword**
---

### `Thread`

**keyword**
---

### `Throwable`

**keyword**
---

### `Void`

**keyword**
---

### `abs`

**fn**

```clojure
(abs a)
```


Returns the absolute value of a.

---

### `add-method!`

**fn**

```clojure
(add-method! mm-var dispatch-val fn)
```


Adds or replaces a method on a multimethod var. Uses :default as the fallback dispatch value.

---

### `add-watch`

**fn**

```clojure
(add-watch atom key fn)
```


Adds a watch function to an atom. The watch fn must be a fn of 4 args: a key, the atom, its old-state, its new-state.

---

### `all`

**fn**

```clojure
(all pendings)
```


Returns a pending that resolves with a vector of all results when every input resolves.

---

### `all-ns`

**fn**
---

### `alter-meta!`

**fn**

```clojure
(alter-meta! ref f & args)
```


Applies f to ref's current metadata (with optional args), sets the result as the new metadata, and returns it.

---

### `alter-var-root`

**fn**

```clojure
(alter-var-root v f & args)
```


Atomically alters the root binding of var v by applying f to its current value plus any additional args.

---

### `ancestors`

**fn**

```clojure
(ancestors tag)
(ancestors h tag)
```


Returns the set of all ancestors of tag in the hierarchy (default: *hierarchy*),
  or nil if tag has no ancestors.

---

### `and`

**macro**
---

### `any?`

**fn**

```clojure
(any? _x)
```


Returns true for any given argument

---

### `apply`

**fn**

```clojure
(apply f args)
(apply f & args)
```


Calls f with the elements of the last argument (a collection) as its arguments, optionally prepended by fixed args.

---

### `as->`

**macro**
---

### `assoc`

**fn**

```clojure
(assoc collection & kvals)
```


Associates the value val with the key k in collection. If collection is a map, returns a new map with the same mappings, otherwise returns a vector with the new value at index k.

---

### `assoc-in`

**fn**

```clojure
(assoc-in m ks v)
```


Associates a value in a nested associative structure, where ks is a
  sequence of keys and v is the new value. Returns a new nested structure.

---

### `associative?`

**fn**

```clojure
(associative? coll)
```


Returns true if coll implements Associative (map or vector).

---

### `atom`

**fn**

```clojure
(atom value)
```


Returns a new atom holding the given value.

---

### `atom?`

**fn**

```clojure
(atom? value)
```


Returns true if the value is an atom, false otherwise.

---

### `bit-and`

**fn**

```clojure
(bit-and x y)
```


Bitwise and

---

### `bit-not`

**fn**

```clojure
(bit-not x)
```


Bitwise complement

---

### `bit-or`

**fn**

```clojure
(bit-or x y)
```


Bitwise or

---

### `bit-shift-left`

**fn**

```clojure
(bit-shift-left x n)
```


Bitwise shift left

---

### `bit-shift-right`

**fn**

```clojure
(bit-shift-right x n)
```


Bitwise shift right

---

### `bit-xor`

**fn**

```clojure
(bit-xor x y)
```


Bitwise exclusive or

---

### `boolean`

**fn**

```clojure
(boolean x)
```


Coerces to boolean. Everything is true except false and nil.

---

### `boolean?`

**fn**

```clojure
(boolean? x)
```


Returns true if the value is a boolean, false otherwise.

---

### `butlast`

**fn**

```clojure
(butlast coll)
```


Return a seq of all but the last item in coll, in linear time

---

### `case`

**macro**

Takes an expression, and a set of clauses. Each clause can take the form of
  either:
    test-constant result-expr
  If no clause matches, and there is an odd number of forms (a default), the
  last expression is returned.

---

### `case-emit`

**fn**

```clojure
(case-emit ge clauses)
```

---

### `catch*`

**fn**

```clojure
(catch* val f)
```


Handles rejection of a pending value by calling f with the thrown value or an error map.

---

### `char`

**fn**

```clojure
(char n)
```


Returns the character at the given Unicode code point.

---

### `char?`

**fn**

```clojure
(char? x)
```


Returns true if the value is a character, false otherwise.

---

### `class`

**fn**
---

### `class?`

**fn**
---

### `clj->js`

**fn**
---

### `clojure-version`

**fn**

```clojure
(clojure-version)
```


Returns a string describing the current Clojure version.

---

### `coll?`

**fn**

```clojure
(coll? x)
```


Returns true if the value is a collection, false otherwise.

---

### `comment`

**macro**

Ignores body, yields nil

---

### `comp`

**fn**

```clojure
(comp)
(comp f)
(comp f g)
(comp f g & fns)
```


Returns the composition of fns, applied right-to-left. (comp f g) is equivalent to (fn [x] (f (g x))). Accepts any callable: functions, keywords, and maps.

---

### `compare`

**fn**

```clojure
(compare x y)
```


Comparator. Returns a negative number, zero, or a positive number.

---

### `compare-and-set!`

**fn**

```clojure
(compare-and-set! atom oldval newval)
```


Atomically sets the value of atom to newval if and only if the current value of the atom is identical to oldval. Returns true if set happened, else false.

---

### `complement`

**fn**

```clojure
(complement f)
```


Takes a fn f and returns a fn that takes the same arguments as f,
  has the same effects, if any, and returns the opposite truth value.

---

### `completing`

**fn**

```clojure
(completing f)
(completing f cf)
```


Takes a reducing function f of 2 args and returns a fn suitable for
  transduce by adding an arity-1 signature that calls cf (default -
  identity) on the result argument.

---

### `concat`

**fn**

```clojure
(concat)
(concat x)
(concat x y)
(concat x y & zs)
```


Returns a lazy seq representing the concatenation of the elements in the
  supplied colls.

---

### `concat*`

**fn**

```clojure
(concat* & colls)
```


Eagerly concatenates seqable collections into a list (quasiquote bootstrap helper).

---

### `cond`

**macro**
---

### `cond->`

**macro**
---

### `cond->>`

**macro**
---

### `condp`

**macro**

Takes a binary predicate, an expression, and a set of clauses.
  Each clause can take the form of either:
    test-expr result-expr
  The predicate is applied to each test-expr and the expression in turn.

---

### `condp-emit`

**fn**

```clojure
(condp-emit gpred gexpr clauses)
```

---

### `conj`

**fn**

```clojure
(conj collection & args)
```


Appends args to the given collection. Lists append in reverse order to the head, vectors append to the tail, sets add unique elements.

---

### `cons`

**fn**

```clojure
(cons x xs)
```


Returns a new collection with x prepended to the head of xs.

---

### `constantly`

**fn**

```clojure
(constantly x)
```


Returns a function that takes any number of arguments and returns x.

---

### `contains?`

**fn**

```clojure
(contains? coll key)
```


Returns true if key is present in coll. For maps checks key existence (including keys with nil values). For vectors checks index bounds.

---

### `count`

**fn**

```clojure
(count countable)
```


Returns the number of elements in the given countable value.

---

### `counted?`

**fn**

```clojure
(counted? coll)
```


Returns true if coll implements count in constant time.

---

### `cycle`

**fn**

```clojure
(cycle coll)
(cycle n coll)
```


Returns a lazy infinite sequence of repetitions of the items in coll.
  With 2 args (n coll), returns a finite sequence (backwards compat).

---

### `dec`

**fn**

```clojure
(dec x)
```


Returns the argument decremented by 1. Throws on non-number arguments.

---

### `dedupe`

**fn**

```clojure
(dedupe)
(dedupe coll)
```


Returns a sequence removing consecutive duplicates in coll.
   Returns a transducer when no collection is provided.

---

### `defmethod`

**macro**
---

### `defmulti`

**macro**
---

### `defn`

**macro**
---

### `defn-`

**macro**

Same as defn, but marks the var as private.

---

### `defprotocol`

**macro**

Defines a named protocol. Creates a protocol var and one dispatch
  function var per method in the current namespace.

  (defprotocol IShape
    "doc"
    (area [this] "Compute area.")
    (perimeter [this] "Compute perimeter."))

---

### `defrecord`

**macro**

Defines a record type: a named, typed persistent map.
  Creates -&gt;Name (positional) and map-&gt;Name (map-based) constructors.
  Optionally implements protocols inline.

  (defrecord Circle [radius]
    IShape
    (area [this] (* js/Math.PI radius radius)))

---

### `delay`

**macro**
---

### `delay?`

**fn**

```clojure
(delay? x)
```


Returns true if x is a Delay.

---

### `deref`

**fn**

```clojure
(deref value)
```


Returns the wrapped value from an atom, volatile, reduced, or delay value.

---

### `derive`

**fn**

```clojure
(derive child parent)
(derive h child parent)
```


Establishes a parent/child relationship between child and parent.

  2-arity: mutates the global *hierarchy* via session-safe native.
  3-arity: pure — returns a new hierarchy map without side effects.

---

### `descendants`

**fn**

```clojure
(descendants tag)
(descendants h tag)
```


Returns the set of all descendants of tag in the hierarchy (default: *hierarchy*),
  or nil if tag has no descendants.

---

### `describe`

**fn**

```clojure
(describe x)
(describe x limit)
```


Returns a plain map describing any cljam value.

  Works on protocols, records, functions, namespaces, multimethods,
  vars, and all primitive types. Output is always a plain Clojure map —
  composable with get, get-in, filter, and any other map operation.

  For namespaces, the number of vars shown is capped by *describe-limit*
  (default 50). Bind *describe-limit* to nil for unlimited output.

  Examples:
    (describe (-&gt;Circle 5))        ;; record
    (describe IShape)              ;; protocol
    (describe area)                ;; protocol dispatch fn
    (describe println)             ;; native fn
    (describe (find-ns 'user))     ;; namespace
    (describe #'my-fn)             ;; var

---

### `describe*`

**fn**

```clojure
(describe* value)
(describe* value limit)
```


Returns a plain map describing any cljam value. Called by describe — prefer using describe directly.

---

### `destructure`

**fn**

```clojure
(destructure bindings)
```

---

### `disj`

**fn**

```clojure
(disj s & items)
```


Returns a set with the given items removed.

---

### `dissoc`

**fn**

```clojure
(dissoc collection & keys)
```


Dissociates the key k from collection. If collection is a map, returns a new map with the same mappings, otherwise returns a vector with the value at index k removed.

---

### `distinct`

**fn**

```clojure
(distinct coll)
```


Returns a vector of the elements of coll with duplicates removed,
  preserving first-seen order.

---

### `doall`

**fn**

```clojure
(doall coll)
```


Forces realization of a (possibly lazy) sequence. Unlike dorun,
  retains the head and returns the seq.

---

### `doc`

**macro**
---

### `dorun`

**fn**

```clojure
(dorun coll)
```


Forces realization of a (possibly lazy) sequence. Walks the sequence
  without retaining the head. Returns nil.

---

### `doseq`

**macro**

Repeatedly executes body (presumably for side-effects) with
  bindings. Supports :let, :when, and :while modifiers.

---

### `dotimes`

**macro**

bindings =&gt; name n
  Repeatedly executes body (presumably for side-effects) with name
  bound to integers from 0 through n-1.

---

### `double?`

**fn**

```clojure
(double? x)
```


Return true if x is a Double (all numbers in JS are doubles).

---

### `drop`

**fn**

```clojure
(drop n)
(drop n coll)
```


Returns a sequence of all but the first n items in coll.
   Returns a stateful transducer when no collection is provided.

---

### `drop-last`

**fn**

```clojure
(drop-last coll)
(drop-last n coll)
```


Return a sequence of all but the last n (default 1) items in coll

---

### `drop-while`

**fn**

```clojure
(drop-while pred)
(drop-while pred coll)
```


Returns a sequence of the items in coll starting from the
  first item for which (pred item) returns logical false.  Returns a
  stateful transducer when no collection is provided.

---

### `edn-pr-str*`

**fn**
---

### `edn-read-string*`

**fn**
---

### `empty`

**fn**

```clojure
(empty coll)
```


Returns an empty collection of the same category as coll, or nil.

---

### `empty?`

**fn**

```clojure
(empty? coll)
```


Returns true if coll has no items. Accepts collections, strings, and nil.

---

### `ensure-reduced`

**fn**

```clojure
(ensure-reduced value)
```


Returns the given value if it is a reduced value, otherwise returns a reduced value with the given value as its value.

---

### `eval`

**fn**

```clojure
(eval form)
```


Evaluates the given form in the global environment and returns the result.

---

### `even?`

**fn**

```clojure
(even? n)
```


Returns true if the argument is an even number, false otherwise.

---

### `every?`

**fn**

```clojure
(every? pred coll)
```


Returns true if all items in coll satisfy pred, false otherwise.

---

### `ex-cause`

**fn**

```clojure
(ex-cause e)
```


Returns the :cause of an error map, or nil.

---

### `ex-data`

**fn**

```clojure
(ex-data e)
```


Returns the :data map of an error map, or nil.

---

### `ex-info`

**fn**

```clojure
(ex-info msg data)
(ex-info msg data cause)
```


Creates an error map with :message and :data keys. Optionally accepts a :cause.

---

### `ex-message`

**fn**

```clojure
(ex-message e)
```


Returns the :message of an error map, or nil.

---

### `extend-protocol`

**macro**

Extends a protocol to one or more types.

  (extend-protocol IShape
    nil
    (area [_] 0)
    String
    (area [s] (count s)))

---

### `extend-protocol!`

**fn**

```clojure
(extend-protocol! proto-var type-tag impl-map)
```


Registers method implementations for type-tag on a protocol. Mutates the protocol in place.

---

### `extend-type`

**macro**

Extends a type to implement one or more protocols.

  (extend-type Circle
    IShape
    (area [this] ...)
    ISerializable
    (to-json [this] ...))

---

### `extenders`

**fn**

```clojure
(extenders protocol)
```


Returns a vector of type-tag strings that have extended the protocol.

---

### `false?`

**fn**

```clojure
(false? arg)
```


Returns true if the value is a boolean and false, false otherwise.

---

### `falsy?`

**fn**

```clojure
(falsy? arg)
```


Returns true if the value is nil or false, false otherwise.

---

### `filter`

**fn**

```clojure
(filter pred)
(filter pred coll)
```


Returns a sequence of the items in coll for which
  (pred item) returns logical true. pred must be free of side-effects.
  Returns a transducer when no collection is provided.

---

### `filterv`

**fn**

```clojure
(filterv pred coll)
```


Returns a vector of the items in coll for which
  (pred item) returns logical true.

---

### `find-ns`

**fn**
---

### `first`

**fn**

```clojure
(first coll)
```


Returns the first element of the given collection or string.

---

### `flatten`

**fn**

```clojure
(flatten x)
```


Takes any nested combination of sequential things (lists/vectors) and
  returns their contents as a single flat vector.

---

### `flatten-step`

**fn**

```clojure
(flatten-step v)
```


Internal helper for flatten.

---

### `fn`

**macro**
---

### `fn?`

**fn**

```clojure
(fn? x)
```


Returns true if the value is a function, false otherwise.

---

### `fnext`

**fn**

```clojure
(fnext x)
```


Same as (first (next x))

---

### `fnil`

**fn**

```clojure
(fnil f x)
(fnil f x y)
(fnil f x y z)
```


Takes a function f, and returns a function that calls f, replacing
  a nil first argument with x, optionally nil second with y, nil third with z.

---

### `for`

**macro**

List comprehension. Takes a vector of one or more
  binding-form/collection-expr pairs, each followed by zero or more
  modifiers, and yields a sequence of evaluations of expr.
  Supported modifiers: :let, :when, :while.

---

### `force`

**fn**

```clojure
(force x)
```


If x is a Delay or LazySeq, forces and returns the realized value. Otherwise returns x.

---

### `frequencies`

**fn**

```clojure
(frequencies coll)
```


Returns a map from distinct items in coll to the number of times they appear.

---

### `gensym`

**fn**

```clojure
(gensym)
(gensym prefix)
```


Returns a unique symbol with the given prefix. Defaults to "G" if no prefix is provided.

---

### `get`

**fn**

```clojure
(get target key)
(get target key not-found)
```


Returns the value associated with key in target. If target is a map, returns the value associated with key, otherwise returns the value at index key in target. If not-found is provided, it is returned if the key is not found, otherwise nil is returned.

---

### `get-in`

**fn**

```clojure
(get-in m ks)
(get-in m ks not-found)
```


Returns the value in a nested associative structure, where ks is a
  sequence of keys. Returns nil if the key is not present, or the not-found
  value if supplied.

---

### `group-by`

**fn**

```clojure
(group-by f coll)
```


Returns a map of the elements of coll keyed by the result of f on each
  element. The value at each key is a vector of matching elements.

---

### `hash`

**fn**

```clojure
(hash x)
```


Returns the hash code of its argument.

---

### `hash-map`

**fn**

```clojure
(hash-map & kvals)
```


Returns a new hash-map containing the given key-value pairs.

---

### `hash-set`

**fn**

```clojure
(hash-set & xs)
```


Returns a set containing the given values.

---

### `hierarchy-ancestors-global`

**fn**

```clojure
(hierarchy-ancestors-global tag)
```


Returns all ancestors of tag in the global *hierarchy* (session-safe), or nil.

---

### `hierarchy-derive*`

**fn**

```clojure
(hierarchy-derive* h child parent)
```


Pure derive — returns a new hierarchy with child deriving from parent.

---

### `hierarchy-derive-global!`

**fn**

```clojure
(hierarchy-derive-global! child parent)
```


Derives child from parent in the global *hierarchy* (session-safe).

---

### `hierarchy-descendants-global`

**fn**

```clojure
(hierarchy-descendants-global tag)
```


Returns all descendants of tag in the global *hierarchy* (session-safe), or nil.

---

### `hierarchy-isa?*`

**fn**

```clojure
(hierarchy-isa?* h child parent)
```


Returns true if child isa? parent according to the given hierarchy.

---

### `hierarchy-isa?-global`

**fn**

```clojure
(hierarchy-isa?-global child parent)
```


Returns true if child isa? parent in the global *hierarchy* (session-safe).

---

### `hierarchy-parents-global`

**fn**

```clojure
(hierarchy-parents-global tag)
```


Returns the immediate parents of tag in the global *hierarchy* (session-safe), or nil.

---

### `hierarchy-underive*`

**fn**

```clojure
(hierarchy-underive* h child parent)
```


Pure underive — returns a new hierarchy with the child→parent edge removed.

---

### `hierarchy-underive-global!`

**fn**

```clojure
(hierarchy-underive-global! child parent)
```


Underives child from parent in the global *hierarchy* (session-safe).

---

### `ident?`

**fn**

```clojure
(ident? x)
```


Returns true if x is a symbol or keyword.

---

### `identical?`

**fn**

```clojure
(identical? x y)
```


Tests if 2 arguments are the same object (reference equality).

---

### `identity`

**fn**

```clojure
(identity x)
```


Returns its single argument unchanged.

---

### `if-let`

**macro**
---

### `if-some`

**macro**

bindings =&gt; binding-form test
  If test is not nil, evaluates then with binding-form bound to the
  value of test, if not, yields else

---

### `in-ns`

**fn**
---

### `inc`

**fn**

```clojure
(inc x)
```


Returns the argument incremented by 1. Throws on non-number arguments.

---

### `infinite?`

**fn**

```clojure
(infinite? num)
```


Returns true if num is positive or negative infinity, else false.

---

### `insert-sorted`

**fn**

```clojure
(insert-sorted cmp x sorted)
```


Internal helper for insertion-sort based sort implementation.

---

### `instance?`

**fn**
---

### `int`

**fn**

```clojure
(int x)
```


Coerces x to int. For characters, returns the Unicode code point.

---

### `int?`

**fn**

```clojure
(int? x)
```


Return true if x is a fixed precision integer.

---

### `interleave`

**fn**

```clojure
(interleave c1 c2)
(interleave c1 c2 & colls)
```


Returns a lazy sequence of the first item in each coll, then the second etc.
  Stops as soon as any coll is exhausted.

---

### `interpose`

**fn**

```clojure
(interpose sep)
(interpose sep coll)
```


Returns a sequence of the elements of coll separated by sep.
  Returns a transducer when no collection is provided.

---

### `into`

**fn**

```clojure
(into to from)
(into to xf from)
```


Returns a new coll consisting of to-coll with all of the items of
   from-coll conjoined. A transducer may be supplied.

---

### `isa?`

**fn**

```clojure
(isa? child parent)
(isa? h child parent)
```


Returns true if child is either identical to parent, or child derives from
  parent in the given hierarchy (default: *hierarchy*).

---

### `iterate`

**fn**

```clojure
(iterate f x)
(iterate f x n)
```


Returns a lazy sequence of x, (f x), (f (f x)) etc.
  With 3 args, returns a finite sequence of n items (backwards compat).

---

### `js->clj`

**fn**
---

### `juxt`

**fn**

```clojure
(juxt & fns)
```


Takes a set of functions and returns a fn that is the juxtaposition
  of those fns. The returned fn takes a variable number of args and
  returns a vector containing the result of applying each fn to the args.

---

### `keep`

**fn**

```clojure
(keep f)
(keep f coll)
```


Returns a sequence of the non-nil results of (f item). Note,
  this means false return values will be included.  f must be free of
  side-effects.  Returns a transducer when no collection is provided.

---

### `keep-indexed`

**fn**

```clojure
(keep-indexed f)
(keep-indexed f coll)
```


Returns a sequence of the non-nil results of (f index item). Note,
  this means false return values will be included.  f must be free of
  side-effects.  Returns a stateful transducer when no collection is provided.

---

### `keys`

**fn**

```clojure
(keys m)
```


Returns a vector of the keys of the given map or record.

---

### `keyword`

**fn**

```clojure
(keyword name)
(keyword ns name)
```


Constructs a keyword with the given name and namespace strings. Returns a keyword value.

Note: do not use : in the keyword strings, it will be added automatically.
e.g. (keyword "foo") =&gt; :foo

---

### `keyword?`

**fn**

```clojure
(keyword? x)
```


Returns true if the value is a keyword, false otherwise.

---

### `last`

**fn**

```clojure
(last coll)
```


Returns the last element of the given collection.

---

### `lazy-seq?`

**fn**

```clojure
(lazy-seq? x)
```


Returns true if x is a LazySeq.

---

### `let`

**macro**
---

### `letfn`

**macro**
---

### `list`

**fn**

```clojure
(list & args)
```


Returns a new list containing the given values.

---

### `list*`

**fn**

```clojure
(list* args)
(list* a args)
(list* a b args)
(list* a b c args)
(list* a b c d & more)
```


Creates a new seq containing the items prepended to the rest, the
  last of which will be treated as a sequence.

---

### `list?`

**fn**

```clojure
(list? x)
```


Returns true if the value is a list, false otherwise.

---

### `loaded-libs`

**fn**
---

### `loop`

**macro**
---

### `macroexpand`

**fn**

```clojure
(macroexpand form)
```


Expands all macros until the expansion is stable (head is no longer a macro)

Note neither macroexpand-1 nor macroexpand will expand macros in sub-forms

---

### `macroexpand-1`

**fn**

```clojure
(macroexpand-1 form)
```


If the head of the form is a macro, expands it and returns the resulting forms. Otherwise, returns the form unchanged.

---

### `macroexpand-all`

**fn**

```clojure
(macroexpand-all form)
```


Fully expands all macros in a form recursively — including in sub-forms.

Unlike macroexpand, this descends into every sub-expression.
Expansion stops at quote/quasiquote boundaries and fn/loop bodies.

---

### `make-delay`

**fn**

```clojure
(make-delay thunk-fn)
```


Creates a Delay that invokes thunk-fn (a zero-arg function) on first force.

---

### `make-err`

**fn**

```clojure
(make-err type message)
(make-err type message data)
(make-err type message data cause)
```


Creates an error map with type, message, data and optionally cause

---

### `make-hierarchy`

**fn**

```clojure
(make-hierarchy)
```


Returns a new, empty hierarchy.

---

### `make-multimethod!`

**fn**

```clojure
(make-multimethod! name dispatch-fn & opts)
```


Creates a multimethod with the given name and dispatch-fn in the current namespace. Accepts optional :default &lt;sentinel-val&gt; to customize the fallback sentinel. No-op if already a multimethod (re-eval safe).

---

### `make-protocol!`

**fn**

```clojure
(make-protocol! name doc method-defs)
```


Creates a protocol with the given name, docstring, and method definitions. Interns the protocol and its dispatch functions in the current namespace.

---

### `make-record!`

**fn**

```clojure
(make-record! record-type ns-name field-map)
```


Creates a record value. Called by generated constructors (-&gt;Name, map-&gt;Name).

---

### `map`

**fn**

```clojure
(map f)
(map f coll)
(map f c1 c2)
(map f c1 c2 & colls)
```


Returns a sequence consisting of the result of applying f to the set
  of first items of each coll, followed by applying f to the set of
  second items in each coll, until any one of the colls is exhausted.
  Any remaining items in other colls are ignored. Returns a transducer
  when no collection is provided.

---

### `map-indexed`

**fn**

```clojure
(map-indexed f)
(map-indexed f coll)
```


Returns a sequence consisting of the result of applying f to 0
   and the first item of coll, followed by applying f to 1 and the second
   item in coll, etc, until coll is exhausted. Thus function f should
   accept 2 arguments, index and item. Returns a stateful transducer when
   no collection is provided.

---

### `map?`

**fn**

```clojure
(map? x)
```


Returns true if the value is a map, false otherwise.

---

### `mapcat`

**fn**

```clojure
(mapcat f)
(mapcat f coll)
(mapcat f coll & more)
```


Returns the result of applying concat to the result of applying map
  to f and colls.  Thus function f should return a collection. Returns
  a transducer when no collections are provided.

---

### `mapv`

**fn**

```clojure
(mapv f coll)
(mapv f c1 c2)
(mapv f c1 c2 c3)
(mapv f c1 c2 c3 & colls)
```


Returns a vector consisting of the result of applying f to the
  set of first items of each coll, followed by applying f to the set
  of second items in each coll, until any one of the colls is exhausted.

---

### `math-acos*`

**fn**

```clojure
(math-acos* x)
```


Returns the arc cosine of x, in radians.

---

### `math-asin*`

**fn**

```clojure
(math-asin* x)
```


Returns the arc sine of x, in radians.

---

### `math-atan*`

**fn**

```clojure
(math-atan* x)
```


Returns the arc tangent of x, in radians.

---

### `math-atan2*`

**fn**

```clojure
(math-atan2* y x)
```


Returns the angle θ from the conversion of rectangular (x, y) to polar (r, θ). Args: y, x.

---

### `math-cbrt*`

**fn**

```clojure
(math-cbrt* x)
```


Returns the cube root of x.

---

### `math-ceil*`

**fn**

```clojure
(math-ceil* x)
```


Returns the smallest integer ≥ x.

---

### `math-cos*`

**fn**

```clojure
(math-cos* x)
```


Returns the cosine of x (in radians).

---

### `math-cosh*`

**fn**

```clojure
(math-cosh* x)
```


Returns the hyperbolic cosine of x.

---

### `math-exp*`

**fn**

```clojure
(math-exp* x)
```


Returns Euler's number e raised to the power of x.

---

### `math-floor*`

**fn**

```clojure
(math-floor* x)
```


Returns the largest integer ≤ x.

---

### `math-floor-div*`

**fn**

```clojure
(math-floor-div* x y)
```


Returns the largest integer ≤ x/y (floor division).

---

### `math-floor-mod*`

**fn**

```clojure
(math-floor-mod* x y)
```


Returns x - (floor-div x y) * y (floor modulo).

---

### `math-hypot*`

**fn**

```clojure
(math-hypot* x y)
```


Returns sqrt(x² + y²), the length of the hypotenuse.

---

### `math-log*`

**fn**

```clojure
(math-log* x)
```


Returns the natural logarithm (base e) of x.

---

### `math-log10*`

**fn**

```clojure
(math-log10* x)
```


Returns the base-10 logarithm of x.

---

### `math-pow*`

**fn**

```clojure
(math-pow* x y)
```


Returns x raised to the power of y.

---

### `math-rint*`

**fn**

```clojure
(math-rint* x)
```


Returns the integer closest to x, with ties rounding to the nearest even (IEEE 754 round-half-to-even).

---

### `math-round*`

**fn**

```clojure
(math-round* x)
```


Returns the closest integer to x, with ties rounding up.

---

### `math-signum*`

**fn**

```clojure
(math-signum* x)
```


Returns -1.0, 0.0, or 1.0 indicating the sign of x.

---

### `math-sin*`

**fn**

```clojure
(math-sin* x)
```


Returns the sine of x (in radians).

---

### `math-sinh*`

**fn**

```clojure
(math-sinh* x)
```


Returns the hyperbolic sine of x.

---

### `math-tan*`

**fn**

```clojure
(math-tan* x)
```


Returns the tangent of x (in radians).

---

### `math-tanh*`

**fn**

```clojure
(math-tanh* x)
```


Returns the hyperbolic tangent of x.

---

### `math-to-degrees*`

**fn**

```clojure
(math-to-degrees* rad)
```


Converts an angle in radians to degrees.

---

### `math-to-radians*`

**fn**

```clojure
(math-to-radians* deg)
```


Converts an angle in degrees to radians.

---

### `max`

**fn**

```clojure
(max & nums)
```


Returns the largest of the arguments. Throws on non-number arguments.

---

### `maybe-destructured`

**fn**

```clojure
(maybe-destructured params body)
```

---

### `memoize`

**fn**

```clojure
(memoize f)
```


Returns a memoized version of a referentially transparent function. The
  memoized version of the function keeps a cache of the mapping from arguments
  to results and, when calls with the same arguments are repeated often, has
  higher performance at the expense of higher memory use.

---

### `merge`

**fn**

```clojure
(merge & maps)
```


Returns a map that consists of the rest of the maps conj-ed onto
  the first. If a key occurs in more than one map, the mapping from
  the latter (left-to-right) will be the mapping in the result.

---

### `merge-with`

**fn**

```clojure
(merge-with f & maps)
```


Returns a map that consists of the rest of the maps conj-ed onto
  the first.  If a key occurs in more than one map, the mapping(s)
  from the latter (left-to-right) will be combined with the mapping in
  the result by calling (f val-in-result val-in-latter).

---

### `meta`

**fn**

```clojure
(meta val)
```


Returns the metadata map of a value, or nil if the value has no metadata.

---

### `min`

**fn**

```clojure
(min & nums)
```


Returns the smallest of the arguments. Throws on non-number arguments.

---

### `mod`

**fn**

```clojure
(mod n d)
```


Returns the remainder of the first argument divided by the second argument. Throws on non-number arguments or division by zero.

---

### `multimethod?`

**fn**

```clojure
(multimethod? x)
```


Returns true if x is a multimethod.

---

### `name`

**fn**

```clojure
(name x)
```


Returns the local name of a qualified keyword or symbol, or the string value if the argument is a string.

---

### `namespace`

**fn**

```clojure
(namespace x)
```


Returns the namespace string of a qualified keyword or symbol, or nil if the argument is not qualified.

---

### `namespace?`

**fn**

```clojure
(namespace? x)
```


Returns true if x is a namespace.

---

### `nat-int?`

**fn**

```clojure
(nat-int? x)
```


Return true if x is a non-negative fixed precision integer.

---

### `neg-int?`

**fn**

```clojure
(neg-int? x)
```


Return true if x is a negative fixed precision integer.

---

### `neg?`

**fn**

```clojure
(neg? n)
```


Returns true if the argument is a negative number, false otherwise.

---

### `newline`

**fn**

```clojure
(newline)
```


Writes a newline to *out*.

---

### `next`

**fn**

```clojure
(next coll)
```


Returns a seq of the items after the first. Calls seq on its
  argument.  If there are no more items, returns nil.

---

### `nfirst`

**fn**

```clojure
(nfirst x)
```


Same as (next (first x))

---

### `nil?`

**fn**

```clojure
(nil? arg)
```


Returns true if the value is nil, false otherwise.

---

### `nnext`

**fn**

```clojure
(nnext x)
```


Same as (next (next x))

---

### `not`

**fn**

```clojure
(not x)
```


Returns true if x is logical false, false otherwise.

---

### `not-any?`

**fn**
---

### `not-empty`

**fn**

```clojure
(not-empty coll)
```


If coll is empty, returns nil, else coll

---

### `not-every?`

**fn**

```clojure
(not-every? pred coll)
```


Returns false if (pred x) is logical true for every x in
  coll, else true.

---

### `not=`

**fn**

```clojure
(not= & vals)
```


Returns true if any two adjacent arguments are not equal, false otherwise.

---

### `ns-aliases`

**fn**
---

### `ns-imports`

**fn**
---

### `ns-interns`

**fn**
---

### `ns-map`

**fn**
---

### `ns-name`

**fn**
---

### `ns-publics`

**fn**
---

### `ns-refers`

**fn**
---

### `nth`

**fn**

```clojure
(nth coll n not-found)
```


Returns the nth element of the given collection. If not-found is provided, it is returned if the index is out of bounds, otherwise an error is thrown.

---

### `nthnext`

**fn**

```clojure
(nthnext coll n)
```


Returns the nth next of coll, (seq coll) when n is 0.

---

### `nthrest`

**fn**

```clojure
(nthrest coll n)
```


Returns the nth rest of coll, coll when n is 0.

---

### `number?`

**fn**

```clojure
(number? x)
```


Returns true if the value is a number, false otherwise.

---

### `odd?`

**fn**

```clojure
(odd? n)
```


Returns true if the argument is an odd number, false otherwise.

---

### `or`

**macro**
---

### `parents`

**fn**

```clojure
(parents tag)
(parents h tag)
```


Returns the immediate parents of tag in the hierarchy (default: *hierarchy*),
  or nil if tag has no parents.

---

### `parse-boolean`

**fn**

```clojure
(parse-boolean s)
```


Parses string s as a boolean. Returns true for "true", false for "false", nil for anything else.

---

### `parse-double`

**fn**

```clojure
(parse-double s)
```


Parses string s as a double. Returns nil if s is not a valid number string.

---

### `parse-long`

**fn**

```clojure
(parse-long s)
```


Parses string s as a long integer. Returns nil if s is not a valid integer string.

---

### `partial`

**fn**

```clojure
(partial f & args)
```


Returns a function that calls f with pre-applied args prepended to any additional arguments.

---

### `partition`

**fn**

```clojure
(partition n coll)
(partition n step coll)
(partition n step pad coll)
```


Returns a sequence of lists of n items each, at offsets step
  apart. If step is not supplied, defaults to n, i.e. the partitions
  do not overlap. If a pad collection is supplied, use its elements as
  necessary to complete last partition up to n items. In case there are
  not enough padding elements, return a partition with less than n items.

---

### `partition-all`

**fn**

```clojure
(partition-all n)
(partition-all n coll)
```


Returns a sequence of lists like partition, but may include
   partitions with fewer than n items at the end.  Returns a stateful
   transducer when no collection is provided.

---

### `partition-by`

**fn**

```clojure
(partition-by f)
(partition-by f coll)
```


Applies f to each value in coll, splitting it each time f returns a
  new value.  Returns a sequence of partitions.  Returns a stateful
  transducer when no collection is provided.

---

### `peek`

**fn**

```clojure
(peek coll)
```


For a list, same as first. For a vector, same as last.

---

### `pending?`

**fn**

```clojure
(pending? val)
```


Returns true if val is a pending (async) value.

---

### `pop`

**fn**

```clojure
(pop coll)
```


For a list, returns a new list without the first item. For a vector, returns a new vector without the last item.

---

### `pos-int?`

**fn**

```clojure
(pos-int? x)
```


Return true if x is a positive fixed precision integer.

---

### `pos?`

**fn**

```clojure
(pos? n)
```


Returns true if the argument is a positive number, false otherwise.

---

### `pprint`

**fn**
---

### `pprint-str`

**fn**

```clojure
(pprint-str x)
(pprint-str x max-width)
```


Returns the pretty-printed string representation of x, optionally
  limiting line width to max-width (default 80).

---

### `pr`

**fn**
---

### `pr-str`

**fn**

```clojure
(pr-str & args)
```


Returns a readable string representation of the given values (strings are quoted).

---

### `pretty-print-str`

**fn**

```clojure
(pretty-print-str form)
(pretty-print-str form max-width)
```


Returns a pretty-printed string representation of form.

---

### `print`

**fn**
---

### `print-str`

**fn**

```clojure
(print-str & args)
```


print to a string (human-readable, no quotes on strings).

---

### `println`

**fn**
---

### `println-str`

**fn**

```clojure
(println-str & args)
```


println to a string.

---

### `prn`

**fn**
---

### `prn-str`

**fn**

```clojure
(prn-str & args)
```


pr-str to a string, followed by a newline.

---

### `promise-of`

**fn**

```clojure
(promise-of val)
```


Wraps val in an immediately-resolving pending value. Useful for testing async composition.

---

### `protocol?`

**fn**

```clojure
(protocol? x)
```


Returns true if x is a protocol.

---

### `protocols`

**fn**

```clojure
(protocols type-kw-or-value)
```


Returns a vector of all protocols that a type implements. Accepts a keyword type tag (:string, :user/Circle) or any value.

---

### `qualified-ident?`

**fn**

```clojure
(qualified-ident? x)
```


Returns true if x is a symbol or keyword with a namespace component.

---

### `qualified-keyword?`

**fn**

```clojure
(qualified-keyword? x)
```


Returns true if the value is a qualified keyword, false otherwise.

---

### `qualified-symbol?`

**fn**

```clojure
(qualified-symbol? x)
```


Returns true if the value is a qualified symbol, false otherwise.

---

### `quot`

**fn**

```clojure
(quot num div)
```


quot[ient] of dividing numerator by denominator.

---

### `rand`

**fn**

```clojure
(rand)
(rand n)
```


Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).

---

### `rand-int`

**fn**

```clojure
(rand-int n)
```


Returns a random integer between 0 (inclusive) and n (exclusive).

---

### `rand-nth`

**fn**

```clojure
(rand-nth coll)
```


Return a random element of the (sequential) collection.

---

### `range`

**fn**

```clojure
(range)
(range end)
(range start end)
(range start end step)
```


Returns a lazy infinite sequence of integers from 0.
  With args, returns a finite sequence (delegates to native range*).

---

### `range*`

**fn**

```clojure
(range* n)
(range* start end)
(range* start end step)
```


Returns a finite sequence of numbers (native helper).

---

### `re-find`

**fn**

```clojure
(re-find re s)
```


Returns the next regex match, if any, of string to pattern, using
  java.util.regex.Matcher.find(). Returns the match or nil. When there
  are groups, returns a vector of the whole match and groups (nil for
  unmatched optional groups).

---

### `re-matches`

**fn**

```clojure
(re-matches re s)
```


Returns the match, if any, of string to pattern, using
  java.util.regex.Matcher.matches(). The entire string must match.
  Returns the match or nil. When there are groups, returns a vector
  of the whole match and groups (nil for unmatched optional groups).

---

### `re-pattern`

**fn**

```clojure
(re-pattern s)
```


Returns an instance of java.util.regex.Pattern, for use, e.g. in re-matcher.
  (re-pattern "\\d+") produces the same pattern as #"\d+".

---

### `re-seq`

**fn**

```clojure
(re-seq re s)
```


Returns a lazy sequence of successive matches of pattern in string,
  using java.util.regex.Matcher.find(), each such match processed with
  re-groups.

---

### `read-string`

**fn**

```clojure
(read-string s)
```


Reads one object from the string s. Returns nil if string is empty.

---

### `realized?`

**fn**

```clojure
(realized? x)
```


Returns true if a Delay or LazySeq has been realized.

---

### `record-type`

**fn**

```clojure
(record-type record)
```


Returns the qualified type name (ns/Name) of a record.

---

### `record?`

**fn**

```clojure
(record? x)
```


Returns true if x is a record.

---

### `reduce`

**fn**

```clojure
(reduce f coll)
(reduce f val coll)
```


Reduces a collection to a single value by iteratively applying f. (reduce f coll) or (reduce f init coll).

---

### `reduce-kv`

**fn**

```clojure
(reduce-kv f init coll)
```


Reduces an associative structure. f should be a function of 3
  arguments: accumulator, key/index, value.

---

### `reduced`

**fn**

```clojure
(reduced value)
```


Returns a reduced value, indicating termination of the reduction process.

---

### `reduced?`

**fn**

```clojure
(reduced? value)
```


Returns true if the given value is a reduced value, false otherwise.

---

### `reductions`

**fn**

```clojure
(reductions f coll)
(reductions f init coll)
```


Returns a sequence of the intermediate values of the reduction (as
  by reduce) of coll by f, starting with init.

---

### `regexp?`

**fn**

```clojure
(regexp? x)
```


Returns true if x is a regular expression pattern.

---

### `rem`

**fn**

```clojure
(rem num div)
```


remainder of dividing numerator by denominator.

---

### `remove`

**fn**

```clojure
(remove pred)
(remove pred coll)
```


Returns a lazy sequence of the items in coll for which
  (pred item) returns logical false. pred must be free of side-effects.
  Returns a transducer when no collection is provided.

---

### `remove-watch`

**fn**

```clojure
(remove-watch atom key)
```


Removes a watch (set by add-watch) from an atom.

---

### `repeat`

**fn**

```clojure
(repeat x)
(repeat n x)
```


Returns a lazy infinite sequence of xs.
  With 2 args (n x), returns a finite sequence of n copies.

---

### `repeat*`

**fn**

```clojure
(repeat* n x)
```


Returns a finite sequence of n copies of x (native helper).

---

### `repeatedly`

**fn**

```clojure
(repeatedly f)
(repeatedly n f)
```


Takes a function of no args, presumably with side effects, and
  returns a lazy infinite sequence of calls to it.
  With 2 args (n f), returns a finite sequence of n calls.

---

### `require`

**fn**
---

### `reset!`

**fn**

```clojure
(reset! atomVal newVal)
```


Sets the value of the atom to newVal and returns the new value.

---

### `reset-vals!`

**fn**

```clojure
(reset-vals! atom newval)
```


Sets the value of atom to newVal. Returns [old new].

---

### `resolve`

**fn**
---

### `rest`

**fn**

```clojure
(rest coll)
```


Returns a sequence of the given collection or string excluding the first element.

---

### `reverse`

**fn**

```clojure
(reverse coll)
```


Returns a new sequence with the elements of the given collection in reverse order.

---

### `run!`

**fn**

```clojure
(run! proc coll)
```


Runs the supplied procedure (via reduce), for purposes of side
  effects, on successive items in the collection. Returns nil.

---

### `satisfies?`

**fn**

```clojure
(satisfies? protocol value)
```


Returns true if value implements the protocol.

---

### `second`

**fn**

```clojure
(second coll)
```


Same as (first (next x))

---

### `select-keys`

**fn**

```clojure
(select-keys m keys)
```


Returns a map containing only those entries in map whose key is in keys.

---

### `seq`

**fn**

```clojure
(seq coll)
```


Returns a sequence of the given collection or string. Strings yield a sequence of single-character strings.

---

### `seqable?`

**fn**

```clojure
(seqable? x)
```


Return true if the seq function is supported for x.

---

### `sequence`

**fn**

```clojure
(sequence coll)
(sequence xf coll)
```


Coerces coll to a (possibly empty) sequence, if it is not already
  one. Will not force a seq. (sequence nil) yields (), When a
  transducer is supplied, returns a lazy sequence of applications of
  the transform to the items in coll

---

### `sequential?`

**fn**

```clojure
(sequential? coll)
```


Returns true if coll is a sequential collection (list, vector, lazy-seq, or cons).

---

### `set`

**fn**

```clojure
(set coll)
```


Returns a set of the distinct elements of the given collection.

---

### `set-validator!`

**fn**

```clojure
(set-validator! atom fn)
```


Sets the validator-fn for an atom. fn must be nil or a side-effect-free fn of one argument.

---

### `set?`

**fn**

```clojure
(set? x)
```


Returns true if x is a set.

---

### `shuffle`

**fn**

```clojure
(shuffle coll)
```


Return a random permutation of coll.

---

### `simple-ident?`

**fn**

```clojure
(simple-ident? x)
```


Returns true if x is a symbol or keyword with no namespace component.

---

### `simple-keyword?`

**fn**

```clojure
(simple-keyword? x)
```


Returns true if x is a keyword with no namespace component.

---

### `simple-symbol?`

**fn**

```clojure
(simple-symbol? x)
```


Returns true if x is a symbol with no namespace component.

---

### `some`

**fn**

```clojure
(some pred coll)
```


Returns the first truthy result of applying pred to each item in coll, or nil if no item satisfies pred.

---

### `some->`

**macro**
---

### `some->>`

**macro**
---

### `some?`

**fn**

```clojure
(some? x)
```


Returns true if x is not nil, false otherwise

---

### `sort`

**fn**

```clojure
(sort coll)
(sort cmp coll)
```


Returns the items in coll in sorted order. With no comparator, uses
  compare (works on numbers, strings, keywords, chars). Comparator may
  return boolean or number.

---

### `sort-by`

**fn**

```clojure
(sort-by keyfn coll)
(sort-by keyfn cmp coll)
```


Returns a sorted sequence of items in coll, where the sort order is
  determined by comparing (keyfn item). Default comparator is compare.

---

### `sort-compare`

**fn**

```clojure
(sort-compare cmp a b)
```


Internal helper: normalizes comparator results.

---

### `special-symbol?`

**fn**
---

### `split-at`

**fn**

```clojure
(split-at n coll)
```


Returns a vector of [(take n coll) (drop n coll)]

---

### `split-with`

**fn**

```clojure
(split-with pred coll)
```


Returns a vector of [(take-while pred coll) (drop-while pred coll)]

---

### `sqrt`

**fn**

```clojure
(sqrt n)
```


Returns the square root of n.

---

### `str`

**fn**

```clojure
(str & args)
```


Returns a concatenated string representation of the given values.

---

### `str-ends-with*`

**fn**

```clojure
(str-ends-with* s substr)
```


Internal helper. Returns true if s ends with substr.

---

### `str-includes*`

**fn**

```clojure
(str-includes* s substr)
```


Internal helper. Returns true if s contains substr.

---

### `str-index-of*`

**fn**

```clojure
(str-index-of* s value)
(str-index-of* s value from-index)
```


Internal helper. Returns index of value in s, or nil if not found.

---

### `str-last-index-of*`

**fn**

```clojure
(str-last-index-of* s value)
(str-last-index-of* s value from-index)
```


Internal helper. Returns last index of value in s, or nil if not found.

---

### `str-lower-case*`

**fn**

```clojure
(str-lower-case* s)
```


Internal helper. Converts s to lower-case.

---

### `str-replace*`

**fn**

```clojure
(str-replace* s match replacement)
```


Internal helper. Replaces all occurrences of match with replacement in s.

---

### `str-replace-first*`

**fn**

```clojure
(str-replace-first* s match replacement)
```


Internal helper. Replaces the first occurrence of match with replacement in s.

---

### `str-reverse*`

**fn**

```clojure
(str-reverse* s)
```


Internal helper. Returns s with its characters reversed (Unicode-safe).

---

### `str-split*`

**fn**

```clojure
(str-split* s sep)
(str-split* s sep limit)
```


Internal helper for clojure.string/split. Splits string s by a regex or
  string separator. Optional limit keeps all parts when provided.

---

### `str-starts-with*`

**fn**

```clojure
(str-starts-with* s substr)
```


Internal helper. Returns true if s starts with substr.

---

### `str-trim*`

**fn**

```clojure
(str-trim* s)
```


Internal helper. Removes whitespace from both ends of s.

---

### `str-triml*`

**fn**

```clojure
(str-triml* s)
```


Internal helper. Removes whitespace from the left of s.

---

### `str-trimr*`

**fn**

```clojure
(str-trimr* s)
```


Internal helper. Removes whitespace from the right of s.

---

### `str-upper-case*`

**fn**

```clojure
(str-upper-case* s)
```


Internal helper. Converts s to upper-case.

---

### `string?`

**fn**

```clojure
(string? x)
```


Returns true if the value is a string, false otherwise.

---

### `subs`

**fn**

```clojure
(subs s start)
(subs s start end)
```


Returns the substring of s beginning at start, and optionally ending before end.

---

### `subvec`

**fn**

```clojure
(subvec v start)
(subvec v start end)
```


Returns a persistent vector of the items in vector from start (inclusive) to end (exclusive).

---

### `swap!`

**fn**

```clojure
(swap! atomVal fn & extraArgs)
```


Applies fn to the current value of the atom, replacing the current value with the result. Returns the new value.

---

### `swap-vals!`

**fn**

```clojure
(swap-vals! atom f & args)
```


Atomically swaps the value of atom to be (apply f current-value-of-atom args). Returns [old new].

---

### `symbol`

**fn**

```clojure
(symbol name)
(symbol ns name)
```


Returns a Symbol with the given namespace and name.

---

### `symbol?`

**fn**

```clojure
(symbol? x)
```


Returns true if the value is a symbol, false otherwise.

---

### `take`

**fn**

```clojure
(take n)
(take n coll)
```


Returns a sequence of the first n items in coll, or all items if
  there are fewer than n.  Returns a stateful transducer when
  no collection is provided.

---

### `take-last`

**fn**

```clojure
(take-last n coll)
```


Returns a sequence of the last n items in coll.  Depending on the type
  of coll may be no better than linear time.  For vectors, see also subvec.

---

### `take-nth`

**fn**

```clojure
(take-nth n)
(take-nth n coll)
```


Returns a sequence of every nth item in coll.  Returns a stateful
  transducer when no collection is provided.

---

### `take-while`

**fn**

```clojure
(take-while pred)
(take-while pred coll)
```


Returns a sequence of successive items from coll while
  (pred item) returns logical true. pred must be free of side-effects.
  Returns a transducer when no collection is provided.

---

### `the-ns`

**fn**
---

### `then`

**fn**

```clojure
(then val f)
```


Applies f to the resolved value of a pending, or to val directly if not pending.

---

### `throw`

**fn**

```clojure
(throw value)
```


Throws a value as an exception. The value may be any CljValue; maps are idiomatic.

---

### `trampoline`

**fn**

```clojure
(trampoline f)
(trampoline f & args)
```


trampoline can be used to convert algorithms requiring mutual
  recursion without stack consumption. Calls f with supplied args, if
  any. If f returns a fn, calls that fn with no arguments, and
  continues to repeat, until the return value is not a fn, then
  returns that non-fn value.

---

### `transduce`

**fn**

```clojure
(transduce xform f coll)
(transduce xform f init coll)
```


reduce with a transformation of f (xf). If init is not
supplied, (f) will be called to produce it. f should be a reducing
step function that accepts both 1 and 2 arguments, if it accepts
only 2 you can add the arity-1 with 'completing'. Returns the result
of applying (the transformed) xf to init and the first item in coll,
then applying xf to that result and the 2nd item, etc. If coll
contains no items, returns init and f is not called. Note that
certain transforms may inject or skip items.

---

### `true?`

**fn**

```clojure
(true? arg)
```


Returns true if the value is a boolean and true, false otherwise.

---

### `truthy?`

**fn**

```clojure
(truthy? arg)
```


Returns true if the value is not nil or false, false otherwise.

---

### `type`

**fn**

```clojure
(type x)
```


Returns a keyword representing the type of a value. Records return :ns/RecordType; built-ins return :string, :number, :nil, etc.

---

### `underive`

**fn**

```clojure
(underive child parent)
(underive h child parent)
```


Removes the parent/child relationship between child and parent.

  2-arity: mutates the global *hierarchy* via session-safe native.
  3-arity: pure — returns a new hierarchy map without side effects.

---

### `unreduced`

**fn**

```clojure
(unreduced value)
```


Returns the unreduced value of the given value. If the value is not a reduced value, it is returned unchanged.

---

### `unsigned-bit-shift-right`

**fn**

```clojure
(unsigned-bit-shift-right x n)
```


Bitwise shift right, without sign-extension

---

### `update`

**fn**

```clojure
(update m k f & args)
```


Updates a value in an associative structure where k is a key and f is a
  function that will take the old value and any supplied args and return the
  new value, and returns a new structure.

---

### `update-in`

**fn**

```clojure
(update-in m ks f & args)
```


Updates a value in a nested associative structure, where ks is a
  sequence of keys and f is a function that will take the old value and any
  supplied args and return the new value. Returns a new nested structure.

---

### `update-keys`

**fn**

```clojure
(update-keys m f)
```


m f =&gt; apply f to each key in m

---

### `update-vals`

**fn**

```clojure
(update-vals m f)
```


m f =&gt; apply f to each val in m

---

### `vals`

**fn**

```clojure
(vals m)
```


Returns a vector of the values of the given map or record.

---

### `var-get`

**fn**

```clojure
(var-get x)
```


Returns the value in the Var object.

---

### `var?`

**fn**

```clojure
(var? x)
```


Returns true if x is a Var.

---

### `vary-meta`

**fn**

```clojure
(vary-meta obj f & args)
```


Returns an object of the same type and value as obj, with
  (apply f (meta obj) args) as its metadata.

---

### `vec`

**fn**

```clojure
(vec coll)
```


Creates a new vector containing the contents of coll.

---

### `vector`

**fn**

```clojure
(vector & args)
```


Returns a new vector containing the given values.

---

### `vector?`

**fn**

```clojure
(vector? x)
```


Returns true if the value is a vector, false otherwise.

---

### `volatile!`

**fn**

```clojure
(volatile! value)
```


Returns a volatile value with the given value as its value.

---

### `volatile?`

**fn**

```clojure
(volatile? value)
```


Returns true if the given value is a volatile value, false otherwise.

---

### `vreset!`

**fn**

```clojure
(vreset! vol newVal)
```


Resets the value of the given volatile to the given new value and returns the new value.

---

### `vswap!`

**fn**

```clojure
(vswap! vol fn)
(vswap! vol fn & extraArgs)
```


Applies fn to the current value of the volatile, replacing the current value with the result. Returns the new value.

---

### `warn`

**fn**
---

### `when`

**macro**

Executes body when condition is true, otherwise returns nil.

---

### `when-first`

**macro**

bindings =&gt; x xs
  Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once

---

### `when-let`

**macro**
---

### `when-not`

**macro**

Executes body when condition is false, otherwise returns nil.

---

### `when-some`

**macro**

bindings =&gt; binding-form test
  When test is not nil, evaluates body with binding-form bound to the
  value of test

---

### `while`

**macro**

Repeatedly executes body while test expression is true. Presumes
  some side-effect will cause test to become false/nil.

---

### `with-err-str`

**macro**

Like with-out-str but captures *err* output (warn, etc.).

---

### `with-meta`

**fn**

```clojure
(with-meta val m)
```


Returns a new value with the metadata map m applied to val.

---

### `with-out-str`

**macro**

Evaluates body in a context in which *out* is bound to a fresh string
  accumulator. Returns the string of all output produced by println, print,
  pr, prn, pprint and newline during the evaluation.

---

### `with-redefs`

**macro**

binding =&gt; var-symbol temp-value-expr
  Temporarily redefines Vars while executing the body. The
  temp-value-exprs will be evaluated and each resulting value will
  replace in parallel the root value of its Var. Always restores
  the original values, even if body throws.

---

### `zero?`

**fn**

```clojure
(zero? n)
```


Returns true if the argument is zero, false otherwise.

---

### `zipmap`

**fn**

```clojure
(zipmap ks vs)
```


Returns a new map with the keys and values of the given collections.

---