# Conformance with JVM Clojure

cljam targets the semantics of JVM Clojure 1.12. This page records how that claim was tested, what matched, and what does not. The known divergences are generated from the project's knowledge base (`kb/entities/divergences/`), where each one is backed by a reference into the code.

## How it was tested

Three independent layers, each catching a different class of error.

### 1. Clojure semantic suite

`packages/cljam/src/core/__tests__/clojure_suite/` — 21 `.clj` files written in `clojure.test`, engine-independent, run through the session API. Several files mirror the [jank](https://github.com/jank-lang/jank) test suite (`eq.cljc`, the `*_qmark.cljc` predicate files, namespace behaviour), adapted to the subset cljam supports. Areas: arithmetic, atoms, chars, collections, destructuring, edn, equality, error handling, hierarchies, higher-order fns, macros, math, metadata, multimethods, namespaces, predicates, sequences, sets, strings, transducers, vars.

### 2. Differential harness (walker ⇄ VM)

cljam has two execution engines sharing one analyzer front-end: the AST walker (the semantic reference) and a bytecode VM used for function bodies by default. `differential.spec.ts` evaluates every suite form on both engines and asserts identical results, including thrown values. 290/290 forms agree with 290/290 VM coverage. This guarantees the fast path cannot silently drift from the reference.

### 3. Black-box review against JVM Clojure 1.12.1

Six independent reviewers, given no knowledge of cljam internals or its known-gaps list, solved 16 practical challenges (collections, laziness, equality, destructuring, arity/recursion, macros, records/protocols, multimethods, state, dynamic vars, namespaces, reader, printing, exceptions, transducer pipelines, integration katas) on JVM Clojure and on cljam, then reported every observable difference with a minimal repro. Findings were deduplicated and ranked by how silently they fail.

Result: **16/16 challenges scored PARTIAL** — every area had a working core and at least one divergence. Nothing was unsolvable; nothing passed byte-for-byte end to end.

## What matches JVM Clojure

Probed hard and came back value- or byte-identical, apart from the entries under [Known divergences](#known-divergences):

- **Destructuring** — the full matrix: nested map/vector, `:keys`/`:strs`/`:syms`, namespaced and `::keys`, `:or` referencing earlier bindings, `:as`, `& rest`, kwargs, nil sources.
- **Functions and recursion** — multi-arity/variadic dispatch, `recur` in fn and loop tails, both recur compile-error forms, `trampoline`, `letfn` mutual recursion, `partial`/`comp`/`juxt`/`apply`; 10M-iteration `loop`/`recur`; non-tail recursion to 100k frames (deeper than a default JVM stack) with a catchable overflow error.
- **Macros** — `defmacro`, syntax-quote/unquote/splicing into vector and set literals, auto-gensym, `macroexpand-1`/`macroexpand`, expansion-time helpers, recursive macros.
- **Records** — value equality, record ≠ map, assoc of an unknown key stays a record, dissoc of a basis key demotes to a map, `map->P`, positional `->P`, protocol dispatch after assoc.
- **Protocols and multimethods** — keyword and arbitrary-fn dispatch, `:default`, global `derive`/`isa?`/`parents`/`ancestors`/`descendants`, last-definition-wins, catchable missing-method and ambiguity errors.
- **State** — `swap!` (multi-arg, CAS), `swap-vals!`/`reset-vals!`, watches, volatiles, `delay`/`force`/`realized?`, `memoize`.
- **Dynamic vars** — `binding` nesting with restore on exit and on throw, `set!` inside `binding`, `with-redefs`, `alter-var-root`, forward declarations, and the lazy-seq binding-conveyance behaviour reproduced exactly.
- **Exceptions on cljam's idiom** — `ex-info`/`ex-data`/`ex-message`, `finally` on success and error, nested `finally` ordering, rethrow with data intact.
- **Namespaces** — multi-file projects via `cljam.sourceRoots`, transitive requires, `:as`, `:refer [syms]`, circular-require detection.
- **Reader** — `#_`, metadata forms, quote/var/deref/syntax-quote, char and string literals, dotted/slashed keywords, `::auto`, `#(… %1 %2 %&)`, regex literals with named groups and inline flags.
- **Printing** — `pr-str` ↔ `read-string` byte-identical on nested structures; `*print-length*`/`*print-level*`.
- **Laziness** — creation is free, `lazy-seq` recursion, `take`/`drop`/`take-while`, `cycle`/`repeat`/`iterate`, `doall`/`dorun`, `mapcat`, `realized?`, `apply concat` spine realization.
- **Transducers** — `transduce`, `completing`, `into` with xf, `sequence` with xf, `partition-by`/`partition-all` as transducers, early termination, `dedupe`.
- **Equality** — cross-type sequential equality, equal ⇒ same hash including cross-type set/map lookup, stable sort, `min-key`/`max-key` ties.

## Known divergences

<!-- divergences:start -->

81 open and 3 justified differences. An open difference is a bug or an undecided
question. A justified one carries its reason. Each was run on JVM Clojure 1.12 and on cljam.

### Silent: wrong value, no error

#### assoc on a vector skips bounds checks

`(assoc [1 2 3] -1 :x)` throws `IndexOutOfBoundsException` on the JVM. Here it prints as `[1 2 3]`, and the backing array holds
a stray `"-1"` property. `(assoc [1 2 3] 1.5 :x)` throws `Key must be integer` there and prints `[1 2 3]` here. Past the end,
`(assoc [1 2 3] 5 :x)` does throw.

#### atom options are ignored

`(reset! (atom 0 :validator pos?) -1)` throws on the JVM and returns `-1` here. `(meta (atom 0 :meta {:x 1}))` is `{:x 1}` there
and `nil` here. `set-validator!` works, but does not check the current value: `(set-validator! (atom 0) pos?)` throws on the JVM.
`get-validator` and `reset-meta!` are absent.

#### Bit operators are 32-bit

| Form | JVM | cljam |
|---|---|---|
| `(bit-shift-left 1 40)` | `1099511627776` | `256` |
| `(bit-shift-left 1 31)` | `2147483648` | `-2147483648` |
| `(bit-and 4294967296 4294967296)` | `4294967296` | `0` |
| `(bit-or 4294967296 1)` | `4294967297` | `1` |
| `(bit-not 4294967296)` | `-4294967297` | `-1` |
| `(unsigned-bit-shift-right -1 1)` | `9223372036854775807` | `2147483647` |

The host's operators are 32-bit, but the number model does not bound them to 32, so this is wrong under any outcome of
*One double-precision number type*. `bit-and-not`, `bit-test` and friends are in *Numeric tower API is absent*.

#### catch does not test classes

`(try (throw (ex-info "x" {})) (catch Exception e :caught))` is `:caught` on the JVM. Here the exception escapes, and
`(try (/ 1 0) (catch Throwable e :caught))` escapes too.

Core defines `Exception`, `Throwable` and a few other names as keyword stubs,
and a keyword only matches a thrown map's `:type`. A name that does not resolve is
a catch-all, so
`(try (throw (ex-info "x" {})) (catch ArithmeticException e :caught))` returns `:caught` where the JVM rethrows.
`(catch :default e ...)` catches everything. Open until the error and class model is redesigned; see *Thrown values are not exceptions*.

#### class, type and instance? have no class model

| Form | JVM | cljam |
|---|---|---|
| `(class 1)` | `java.lang.Long` | `"conjure.number"` |
| `(class nil)` | `nil` | `"conjure.nil"` |
| `(type "s")` | `java.lang.String` | `:string` |
| `(type nil)` | `nil` | `:nil` |
| `(type (with-meta [] {:type :x}))` | `:x` | `:vector` |
| `(instance? String "a")` | `true` | `false` |
| `(isa? Long Number)` | `true` | `false` |

`instance?` ignores its arguments and returns `false`, and the
`conjure.` prefix is a leftover of an old project name. `defrecord` defines no class symbol: `P` does not resolve after
`(defrecord P [x])`, where `(instance? P (->P 1))` is `true` on the JVM. `(defmulti f class)` with `String` as a dispatch
value finds no method. `class?`, `parents` and `ancestors` on classes return `false` or `nil`. Open until the class
model is redesigned together with the errors.

#### clojure.core carries non-Clojure names

`make-record!`, `str-reverse*`, `hierarchy-isa?*` and `case-emit` resolve as `clojure.core` vars here, and so do cljam's own
`describe`, `js->clj`, `clj->js`, `pprint`, `doc` and `then`. Each shadows nothing on the JVM, so a user definition with one
of these names collides here.

`Math`, `String` and the other class stubs evaluate to keywords.
`(all-ns)` lists `clojure.reflect` and `cursive.repl.runtime`, stub namespaces for editor integrations.

#### delay does not cache a thrown exception

```clojure
(let [n (atom 0)
      d (delay (swap! n inc) (throw (ex-info "x" {})))]
  (try @d (catch :default e nil))
  (try @d (catch :default e nil))
  @n)
```

The JVM counts `1`, cljam counts `2`.

#### Duplicate keys in literals are accepted

`{:a 1 :a 2}` is a read error on the JVM (`Duplicate key: :a`) and `{:a 2}` here. `#{1 1}` is an error there and `#{1}`
here, because `readSet` deduplicates.

#### flatten only descends into lists and vectors

`(flatten (list (range 2)))` is `(0 1)` on the JVM and `[(0 1)]` here, and `(flatten (list (list 1) (seq [2])))` is `(1 2)`
there and `[1 (2)]` here. `flatten-step` tests `list?` and `vector?`,
where the JVM tests `sequential?`. It also returns a vector; see *Seq functions return vectors*.

#### get and friends miss some collection types

`(get #{1} 1)` is `1` on the JVM and `nil` here, though `(#{1} 1)` works. `(find [1] 0)` is `[0 1]` there and throws here, and
`(contains? "a" 0)` is `true` there and throws here.

#### Hashes and hash order differ

`(hash "a")` is `1455541201` on the JVM and `-533258471` here; `(hash 1)` is `1392991556` and `1`. Equal values still hash equally.

Order follows from it. `(seq #{:a :b :c})` is `(:c :b :a)` on the JVM and `(:a :b :c)` here, and a map past eight entries such as
`(zipmap (range 12) (range 12))` iterates in hash order there and insertion order here. Small map literals keep insertion
order on both.

Absent vars: `hash-combine`, `hash-ordered-coll`, `hash-unordered-coll`, `mix-collection-hash`.

#### identical? is false for equal keywords and numbers

`(identical? :a :a)` and `(identical? :a (keyword "a"))` are `true` on the JVM and `false` here. So are `(identical? 1 1)` and
`(identical? "a" "a")`, which are `true` there through caching and interning. `=` works. Every keyword is a fresh box;
*unboxed-values-transition* bears on this.

#### iterate calls its fn too early

`(let [n (atom 0)] (first (iterate (fn [x] (swap! n inc) x) 0)) @n)` is `0` on the JVM and `1` here. Taking two elements
gives `1` and `2`. The fn runs even for the element nobody asks for, which matters when it has side effects or throws.

#### Leading zeros are not octal

`017` is `15` on the JVM and `17` here. `-017` is `-15` and `-17`. `08` is a read error on the JVM and `8` here.

#### Macro expansions have a different shape

| Form | JVM | cljam |
|---|---|---|
| `(macroexpand-1 '(when a b))` | `(if a (do b))` | `(if a (do b) nil)` |
| `(macroexpand-1 '(-> a b))` | `(b a)` | `(clojure.core/-> (b a))` |
| `(macroexpand-1 '(defn f [] 1))` | `(def f (clojure.core/fn ([] 1)))` | `(def f (clojure.core/fn f [] 1))` |
| `'#(+ %)` | `(fn* [p1__N#] (+ p1__N#))` | `(fn [p1] (+ p1))` |
| `'@a` | `(clojure.core/deref a)` | `(deref a)` |
| `'~a` | `(clojure.core/unquote a)` | `(unquote a)` |

Results of running the code are the same. Generated names differ too: `` `foo# `` is `foo__35`, not `foo__391__auto__`.
`(destructure '[[a] b])` expands to a different binding vector.

#### Macros win over local bindings

`(let [when (fn [& _] :local)] (when false 1))` is `:local` on the JVM and `nil` here. `(let [and ...] (and 1 2))`,
`letfn` and fn parameters behave the same way.

`lookupMacro` looks the head symbol up without checking
the locals in scope.

#### Map destructuring treats vectors as kwargs

`(let [{a 0} [10 20]] a)` is `10` on the JVM and `nil` here. `(let [{:keys [a]} [:a 1]] a)` is `nil` there and `1` here.

The JVM turns only seqs into a map. cljam applies `hash-map` to any
sequential value, so `(let [{:keys [a]} [:a 1 :b]] a)` fails with a `hash-map` error.

#### One double-precision number type

| Form | JVM | cljam |
|---|---|---|
| `(= 1 1.0)` | `false` | `true` |
| `(count {1 :a 1.0 :b})` | `2` | `1` |
| `(str 1.0)`, `1e3` | `"1.0"`, `1000.0` | `"1"`, `1000` |
| `(integer? 1.0)`, `(float? 1.0)` | `false`, `true` | `true`, `false` |
| `(/ 1 2)` | `1/2` | `0.5` |
| `9007199254740993` | exact | `9007199254740992` |
| `(+ 9223372036854775807 1)` | throws `long overflow` | `9223372036854776000` |
| `(pr-str 1e21)` | `"1.0E21"` | `"1e+21"` |
| `(pr-str -0.0)` | `"-0.0"` | `"0"` |

`int?` and `double?` answer `true` for every whole number, so `(double? 1)` is `true`. The box in
`CljNumber` could carry a tag, so the host does not force this today.

Open pending a decision on the number model. The body records the reason once one is made.

#### Private vars are not enforced

After `(ns a) (defn- hidden [] 2)`, calling `(a/hidden)` from another namespace is an error on the JVM
(`var: #'a/hidden is not public`) and returns `2` here. `:refer [hidden]` also succeeds. `(:private (meta #'hidden))` is
`true`, so the marker is recorded but unchecked.

#### read-string takes no options and accepts empty input

`(read-string "")` is an `EOF while reading` error on the JVM and `nil` here. `(read-string {:eof :x} "")` is `:x` there
and throws `read-string expects a string` here. `^"x" []` is valid metadata on the JVM (`{:tag "x"}`) and a read error
here.

#### Records can be called as functions

With `(defrecord R [x y])`, `((->R 5 6) :x)` throws on the JVM and returns `5` here. `((->R 5 6) :w)` throws there and returns
`nil` here. `(ifn? (->R 5 6))` is `false` and `true`.

#### Regexes use the JavaScript dialect

`(re-find #"\Aa\z" "a")`, `(re-find #"\p{Alpha}" "a")`, `(re-find #"\Qa.b\E" "a.b")` and `(re-find #"[a&&[^b]]" "a")` match on the
JVM and return `nil` here. `(re-find #"a++" "aa")` and `(?x)` are errors here.

The host engine is a fixed constraint: a regex is a host RegExp, as in ClojureScript, so a Java engine is not the goal. That does
not cover the silent `nil`. `\A`, `\z` and `\Q...\E` can be translated to RegExp syntax, and syntax with no translation can be
rejected at read time, as `(?x)` already is. Named groups, `(?i)`, `(?s)` and `(?m)` behave the same.

#### Seq functions return vectors

`(sort [2 1])` is `(1 2)` on the JVM and `[1 2]` here, `(seq? (sort [1]))` is `false`, `(vector? (sort [1]))` is `true`.

The same holds for `sort-by`, `keys`, `vals`, `flatten`, `rest` and `nthrest` on a vector, `cons` onto a vector, `distinct`,
`drop-last`, `reductions`, `list*`, both parts of `split-at` and `split-with`, and `partition`, which returns a vector of
vectors. `partition-all` and `partition-by` return a seq of vectors, so `(partition-by even? [1 1 2])` is `([1 1] [2])`.

Related differences in the same family: `(keys {})` and `(vals {})` are `[]` here and `nil` on the JVM, `(sort nil)` is `[]`
where the JVM gives `()`, `(empty (map inc [1]))` is `nil`, not `()`, `(list? (rest '(1 2)))` is `false` where the JVM says
`true`, and `(list? (cons 1 '(2)))` is `true` where the JVM says `false`.

#### Seqs are not chunked

Values are identical, but side-effect counts differ. `(let [n (atom 0)] (first (map (fn [x] (swap! n inc) x) (range 100))) @n)`
is `32` on the JVM and `1` here.

Absent vars: `chunk`, `chunk-append`, `chunk-buffer`, `chunk-cons`, `chunk-first`, `chunk-next`, `chunk-rest`, `chunked-seq?`.

#### Some invalid arguments return a value

`(subs "abc" 5)` throws `StringIndexOutOfBoundsException` on the JVM and returns `""` here. `(even? 1.5)` and `(odd? 1.5)` throw
`Argument must be an integer` there and return `false` and `true` here.

#### Some lazy functions are eager

`(first (partition 3 (range)))` is `(0 1 2)` on the JVM and hangs here. So do `(first (distinct (range)))`,
`(first (reductions + (range)))`, `(first (split-at 2 (range)))` and `(first (split-with #(< % 3) (range)))`.

`partition-all`, `partition-by`, `map`, `filter`, `mapcat`, `take-nth`, `keep`, `interleave`, `interpose`, `dedupe`,
`concat` and `drop-while` stay lazy.

#### String and char escapes are incomplete

`"\101"` is `"A"` on the JVM and `"101"` here. `"\b\f"` is a backspace and a form feed there and `"bf"` here. The
string scanner handles `\"`, `\\`, `\n`, `\r` and `\t`, then
keeps the next character for anything else, where the JVM reads every other unknown escape as an error.

`\o101` is `\A` on the JVM and `Unknown character literal` here.

#### Strings traverse as strings, not chars

`(= \a (first "a"))` is `true` on the JVM and `false` here, and `(seq "ab")` gives `("a" "b")` instead of `(\a \b)`. `vec`, `set`, `map`,
`filter`, `reduce`, `frequencies`, `sort`, `zipmap` and `into` see the same strings, so `(filter #(= % \a) "aba")` is `()` here.

Indexing is missing too: `(get "abc" 1)` is `\b` on the JVM and `nil` here, `(nth "abc" 1)` throws, and `(let [[a b] "hi"] [a b])` throws
`Cannot destructure`. `(reverse "ab")` is in *last, reverse and rest reject some seqables*.

cljam has a char type and `char?`, but `toSeq` maps a
string's characters to strings. No host constraint forces this. It also walks code points where the JVM walks UTF-16 units, so
`(seq "😀")` has one element here and two there, while `(count "😀")` is `2` on both. It stays open until traversal yields chars.

#### Thrown values are not exceptions

`(throw 1)` is an error on the JVM (`Long` cannot be cast to `Throwable`). Here it throws `1`, and
`(try (throw 1) (catch :default e e))` returns `1`.

A caught error is a map: `(map? e)` is `true` and `(:message e)` works, where the JVM gives `false` and `nil`. Host error
text differs too: `(/ 1 0)` reports `division by zero` instead of `Divide by zero`, and `(ex-message e)` for
`(nth [1] 5)` is a sentence where the JVM's is `nil`. `Throwable->map` is absent. Open until the error model is
redesigned; see *catch does not test classes*.

#### Unresolved symbols fail at run time

`(fn [] undefined-sym)` and `(defn g [] (undefined-fn 1))` are compile errors on the JVM. Here both are accepted and fail only
when called. `(if false undefined-sym 1)` is a compile error there and `1` here. A typo in a fn body stays hidden until
that line runs.

#### Var metadata is incomplete

After `(defn f [] 1)`, `(:name (meta #'f))` is `f` on the JVM and `nil` here, `(:ns (meta #'f))` is the namespace and `nil`
here, and `(:arglists (meta #'f))` is `([])` and `[[]]` here. `(:macro (meta #'when))` is `true` there and `nil` here, and
core vars have no `:added`. Core docstrings are cljam's own text. `(ns foo "doc" {:a 1})` records no namespace metadata.

### Loud: error where the JVM succeeds

#### &form and &env are not bound in macros

`(defmacro fm [] (list 'quote (some? &form))) (fm)` is `true` on the JVM and `Symbol &form not found` here. Macros that read
`(:line (meta &form))` or `(keys &env)` fail the same way.

#### case rejects lists and symbols as constants

`(case :a (:a :b) 1)` is `1` on the JVM and throws `No matching clause: :a` here. `(case 'a a 1)` is `1` there and
`Symbol a not found` here. Keywords, numbers, strings and vectors work.

#### compare handles few types

`(compare [1 2] [1 3])` is `-1` on the JVM, `(compare 'a 'b)` is `-1` and `(compare true false)` is `1`. Here all three throw
`compare: cannot compare`. `(sort [[3] [1 2]])`, `(sort ['b 'a])` and `(sort [true false])` fail with them. Numbers, strings,
keywords, chars and nil compare.

#### conj on a map only takes pairs

`(conj {:a 1} {:b 2})` is `{:a 1, :b 2}` on the JVM and throws here. `(conj {} {})` and `(conj {:a 1} nil)` throw too, and
`(into {} [{:a 1} {:b 2}])` fails with them. `(merge {:a 1} [:b 2])` also throws. `(conj {:a 1} [:b 2])` works.

#### Float division by zero throws

`(/ 1.0 0.0)` is `##Inf` on the JVM, `(/ 0.0 0.0)` is `##NaN` and `(/ 1 0.0)` is `##Inf`. Here all three throw
`division by zero`. Follows from *One double-precision number type*: `(/ 1 0)` must throw, and with one number type `1` and `1.0` look
the same to `/`.

#### keyword and symbol accept only strings

`(keyword 'a)` and `(keyword :a)` are `:a` on the JVM, `(keyword nil)` is `nil` and `(keyword 1)` is `nil`. `(symbol :a)` is `a`
and `(symbol #'map)` is `clojure.core/map`. Here each throws `expects a string`, except `(symbol 'a)`.

#### last, reverse and rest reject some seqables

`(reverse (range 3))` is `(2 1 0)` on the JVM and throws `reverse expects a list or vector` here. `(last (range 3))`,
`(last (map inc [1]))`, `(reverse (map inc [1]))`, `(reverse (seq [1]))`, `(last #{1})` and `(reverse {:a 1})` all fail the
same way. A vector or a realized list works.

`(rest #{1 2})`, `(next #{1})` and `(second #{1})` throw `rest expects a collection or string`.

#### Many functions reject nil

| Form | JVM | cljam |
|---|---|---|
| `(conj nil 1)` | `(1)` | throws |
| `(into nil [1])` | `(1)` | throws |
| `(dissoc nil :a)` | `nil` | throws |
| `(pop nil)` | `nil` | throws |
| `(keys nil)`, `(vals nil)` | `nil` | throws |
| `(nth nil 0)` | `nil` | throws |
| `(last nil)` | `nil` | throws |
| `(reverse nil)` | `()` | throws |
| `(zipmap nil nil)` | `{}` | throws |
| `(reduce-kv + 0 nil)` | `0` | throws |
| `(disj nil 1)` | `nil` | `#{}` |
| `(seqable? nil)` | `true` | `false` |

`first`, `rest`, `seq`, `count`, `get`, `assoc`, `merge` and `map` are nil-safe.

#### Most numeric literal forms do not read

`0xFF`, `2r101`, `36rZZ`, `1/2`, `1N` and `1.5M` read on the JVM. Here the
number scanner stops at the first letter, so `0xFF` fails with
`Symbol xFF not found` and `1/2` with `Symbol /2 not found`.

`##Inf`, `##-Inf` and `##NaN` fail with `Unknown dispatch character: ##`, `1.` is `Invalid number format`, and `+1` is
`Symbol +1 not found`. Which of these can exist follows from *One double-precision number type*.

#### Multimethod dispatch is incomplete

`(defmulti hm identity :hierarchy (atom (derive (make-hierarchy) :a :b)))` dispatches through that hierarchy on the JVM. Here the
option is ignored, so `(hm :a)` finds no
method.

With `(derive ::sub ::mid) (derive ::mid ::top)` and methods on both `::mid` and `::top`, `(d ::sub)` picks `::mid` on the JVM
and throws `Multiple methods` here.

`(derive ::a ::b) (isa? [::a] [::b])` is `true` there and `false` here, so a method on `[::b ::b]` is not found for `[::a ::a]`.
Deriving a tag from an ancestor it already has throws on the JVM and succeeds here.

#### One ns form per file or evaluation

A file with `(ns one) (def x 1) (ns two)` loads on the JVM. The CLI rejects it with
`A file may declare at most one namespace`, and `session.evaluate` rejects the same source with
`ns form must be the first form in an evaluation`. Each `ns` needs its own file or evaluation.

#### print and str crash on indexed seqs

`(with-out-str (println (seq [1 2])))` is `"(1 2)\n"` on the JVM and throws `unhandled value type: indexed-seq` here. So do `(str (seq [1 2]))`,
`(print (next [1 2 3]))`, `(println (seq "hi"))`, `(println (seq {:a 1}))` and `(println (seq #{1}))`. `pr-str` and `prn` work.

`valueToString` has no case for that value kind.

#### Protocols cannot extend classes

`(extend-protocol P String (p [_] :s))` works on the JVM. Here it
throws `expected a keyword type tag or nil, got: String`, and the
same goes for `Object`, `Number`, `clojure.lang.Keyword` and a record name. The accepted form is
`(extend-protocol P :string ...)`, with the tags that `type` returns.

`(defrecord R [x] Object (toString [_] "hi"))` also fails, and `:extend-via-metadata` is not supported. `extend` and
`extends?` are in *deftype, reify and extend are absent*. Open with *class, type and instance? have no class model*: what dispatch means depends on the class redesign.

#### reduce on an empty coll does not call f

`(reduce + [])` is `0` on the JVM and `(reduce * [])` is `1`. Here both throw `reduce called on empty collection with no
initial value`. So does `(reduce + nil)`, and the same with an empty list, map or lazy seq. `(apply + [])` works.

#### Symbols cannot be called

`('a {'a 1})` is `1` on the JVM and `('a {} :d)` is `:d`. Here both throw `(quote a) is not callable`, and `(ifn? 'a)` is `false`.
Keywords, maps, sets and vectors are callable.

#### Top-level do is not form-by-form

`(do (defmacro m [] 1) (m))` is `1` on the JVM and `m is not callable` here. `(do (ns foo) *ns*)` is `foo` there and `user`
here.

#### Trailing map in kwargs calls fails

With `(defn kw [& {:keys [a]}] a)`, `(kw {:a 1})` is `1` on the JVM and throws `hash-map expects an even number of arguments`
here. `(kw :a 1)` works. A mix also fails: with `(defn kw [& {:as m}] m)`, `(kw :a 1 {:b 2})` is `{:a 1, :b 2}` on the JVM.

#### Vars are not values you can deref or resolve to

`(def v 1) @#'v` is `1` on the JVM and fails here with `deref expects an atom, volatile, reduced, or delay value, got var`.
`(deref (var v))` fails the same way; `var-get` works.

`resolve` returns the value, so `(var? (resolve 'v))` is `false`
and `(resolve 'clojure.core/map)` is the function.

`(def x) x` is an unbound-var object on the JVM and `Symbol x not found` here, and `(declare x) #'x` fails with
`Unable to resolve var`. A var declared this way works once it is defined.

### Output and printing

#### Maps print without commas

`(pr-str {:a 1 :b 2})` is `"{:a 1, :b 2}"` on the JVM and `"{:a 1 :b 2}"` here. `str` and `print` do the same, and so do namespaced
maps: `#:a{:b 1, :c 2}` against `#:a{:b 1 :c 2}`. Both read back as equal values.

#### NaN and infinities print in JavaScript form

With `clojure.math` as `m`, `(pr-str (m/sqrt -1))` is `"##NaN"` on the JVM and `"NaN"` here. `(pr-str (m/pow 10 400))` is `"##Inf"` and
`"Infinity"`, and the negative case is `"##-Inf"` and `"-Infinity"`. `str` is `"NaN"` on both.

#### Opaque values print in cljam formats

| Form | JVM | cljam |
|---|---|---|
| `(pr-str (atom 1))` | `#object[clojure.lang.Atom 0x... {:status :ready, :val 1}]` | `#<Atom 1>` |
| `(pr-str (delay 1))` | `#object[clojure.lang.Delay 0x... {...}]` | `#<Delay pending>` |
| `(pr-str inc)` | `#object[clojure.core$inc 0x... "..."]` | `(native-fn inc)` |
| `(pr-str (fn []))` | `#object[...$fn__N 0x... "..."]` | `#function[user/eval174/fn--779]` |
| `(pr-str *ns*)` | `#object[clojure.lang.Namespace 0x... "user"]` | `#namespace[user]` |
| `(pr-str (ex-info "x" {}))` | `#error {...}` | `{:message "x" :data {}}` |

The JVM forms name JVM classes and identity hashes, so what they become depends on *class, type and instance? have no class model*.

#### Records print with a slash tag

`(pr-str (->P 1))` is `"#user.P{:x 1}"` on the JVM and `"#user/P{:x 1}"` here. On the JVM `read-string` returns the record. Here it throws
`Reader tags (#user/P) are only supported in EDN mode`. `(str (->P 1))` also prints the fields, where the JVM prints `user.P@hash`.

#### Some reader errors report 0-based positions

`\o101` on the first line reports `at line 0 column 0`, `1.` the same, and an unterminated string reports a raw offset.
Parser errors add 1, so `(read-string "(")` says `line 1 column 1`.

#### str on a collection drops string quotes

`(str ["a"])` is `"[\"a\"]"` on the JVM and `"[a]"` here. `(str {:a "b"})`, `(str '("a"))` and `(str #{"a"})` behave the same.

`(str (map inc [1]))` is `"clojure.lang.LazySeq@21"` on the JVM and `"(2)"` here, and `(str (fn []))` is a class name there and
`"(fn [] )"` here.

#### The Node output sink adds a newline per write

A file holding `(print "a") (print "b") (println "c")` writes `abc` and one newline on the JVM. The CLI writes `a`, `b`, `c` on separate
lines with a blank line after, and `pr` and `prn` do the same. The sink appends a newline to text that already carries its own.

`with-out-str` is unaffected and matches the JVM byte for byte.

#### time prints without quotes

`(time 1)` prints `"Elapsed time: 0.003 msecs"` with quotes on the JVM and `Elapsed time: 0.196 msecs` without them here.

#### Uncaught ex-info prints [object Object]

`(throw (ex-info "boom" {:a 1}))` in a file run by the CLI writes `[object Object]`. The JVM reports `Execution error (ExceptionInfo)
at user/eval (a.clj:2).`, the message, and a full report. The handler stringifies a
thrown value that is not an `Error`.

### Not implemented

#### #inst and #uuid do not read in code

`#inst "2020-01-01"` and `#uuid "..."` evaluate on the JVM. Here they fail with
`Reader tags (#inst) are only supported in EDN mode`, as does `(read-string "#inst \"2020-01-01\"")`.
`clojure.edn/read-string` accepts them, but the result prints without its tag: `(pr-str (edn/read-string "#inst \"2020-01-01\""))`
is `2020-01-01T00:00:00.000Z`, not `#inst "..."`.

Absent vars: `tagged-literal`, `tagged-literal?`, `default-data-readers`, `*default-data-reader-fn*`, `random-uuid`,
`parse-uuid`, `uuid?`, `inst?`, `inst-ms`, `inst-ms*`, `Inst`. `#=` is `Unknown dispatch character`.

#### Concurrency primitives are absent

`@(future 1)`, `(ref 1)` and `(agent 1)` are `Symbol not found`. Deref cannot block outside *async is a lexical boundary*, so `future` needs a decision,
while `promise` and `ref` look direct to port.

Absent vars: `future`, `future-call`, `future-cancel`, `future-cancelled?`, `future-done?`, `future?`, `promise`, `deliver`, `ref`, `ref-set`,
`ref-history-count`, `ref-max-history`, `ref-min-history`, `alter`, `commute`, `ensure`, `dosync`, `sync`, `io!`, `locking`, `agent`,
`*agent*`, `agent-error`, `agent-errors`, `clear-agent-errors`, `restart-agent`, `error-handler`, `error-mode`, `set-error-handler!`,
`set-error-mode!`, `send`, `send-off`, `send-via`, `set-agent-send-executor!`, `set-agent-send-off-executor!`, `release-pending-sends`,
`shutdown-agents`, `await`, `await-for`, `await1`, `pmap`, `pcalls`, `pvalues`.

#### Core dynamic vars are absent

`(binding [*print-meta* true] ...)` fails with `No var found for symbol`, and so does `*print-readably*`. `*out*` and `*err*`
exist but are `nil`, and `(clojure-version)` is `"1.12.0"`.

Absent vars: `*1`, `*2`, `*3`, `*e`, `*assert*`, `*clojure-version*`, `*command-line-args*`, `*file*`, `*flush-on-newline*`,
`*in*`, `*math-context*`, `*print-dup*`, `*print-meta*`, `*print-namespace-maps*`, `*print-readably*`, `*read-eval*`,
`*repl*`, `*unchecked-math*`.

#### deftype, reify and extend are absent

`(deftype T [x])`, `(reify P (f [_] :ok))`, `(extend String P {...})` and `(extends? P String)` are `Symbol not found`. Absent vars: `deftype`, `reify`, `extend`, `extends?`. `defprotocol`,
`defrecord`, `extend-type` and `extend-protocol` exist; see *Protocols cannot extend classes*.

#### Everyday collection functions are absent

Absent: `ffirst`, `tree-seq`, `replace`, `replicate`, `distinct?`, `bounded-count`, `comparator`, `array-map`, `map-entry?`, `indexed?`,
`partitionv`, `partitionv-all`, `splitv-at`, `vector-of`, `find-keyword`, `xml-seq`.

#### Everyday macros are absent

Absent: `if-not`, `doto`, `defonce`, `assert`, `lazy-cat`, `with-open`, `definline`. `doto` and `with-open` would need host calls, the
others are plain Clojure. `(if-not false 1)` fails with `Symbol if-not not found`.

#### File and stream IO is absent

`(slurp "/etc/hosts")` and `(spit "x" "a")` are `Symbol not found`, also under `nodePreset`. A browser host has no file system, so these need
a host capability, not a browser polyfill.

Absent vars: `slurp`, `spit`, `read`, `read+string`, `read-line`, `line-seq`, `file-seq`, `with-in-str`, `*in*`.

#### format and printing extension are absent

`(format "%d %s" 1 "a")` is `"1 a"` on the JVM and `Symbol format not found` here. On the JVM `format` delegates to `java.util.Formatter`,
so its directives need a host-side definition.

Absent vars: `format`, `printf`, `flush`, `print-method`, `print-dup`, `print-simple`, `print-ctor`, `char-escape-string`, `char-name-string`.

#### Host arrays are absent

Absent vars: `aclone`, `aget`, `alength`, `amap`, `areduce`, `aset`, `aset-boolean`, `aset-byte`, `aset-char`, `aset-double`, `aset-float`,
`aset-int`, `aset-long`, `aset-short`, `make-array`, `into-array`, `to-array`, `to-array-2d`, `object-array`, `boolean-array`, `byte-array`,
`char-array`, `double-array`, `float-array`, `int-array`, `long-array`, `short-array`, `booleans`, `bytes`, `bytes?`, `chars`, `doubles`,
`floats`, `ints`, `longs`, `shorts`.

#### Missing arities

`(doall 2 (range 5))` and `(dorun 2 (range 5))` throw `No matching arity`. The zero-argument `distinct` is in *Transducer gaps*, and
the options arity of `read-string` is in *read-string takes no options and accepts empty input*.

#### Multimethod API is absent

`prefer-method`, `prefers`, `methods`, `get-method`, `remove-method` and `remove-all-methods` are `Symbol not found`, so an
ambiguous dispatch cannot be resolved with a preference.

#### Namespace tooling is partial

`(require 'clojure.string)`, `(require '(clojure string))` and `(ns foo (:require clojure.string))` work on the JVM. Here they
throw `require spec must be a vector`; only `(require '[clojure.string])`
works. `:refer :all` and `:rename` are rejected too, and `(ns foo "doc" {:a 1})` drops its metadata.

Absent vars: `alias`, `ns-resolve`, `requiring-resolve`, `use`, `refer`, `refer-clojure`, `create-ns`, `remove-ns`,
`ns-unmap`, `ns-unalias`, `find-var`, `intern`, `load`, `load-file`, `load-reader`, `load-string`, `munge`,
`namespace-munge`. `ns-refers` returns `{}`, and `(str *ns*)` is `"#namespace[user]"`, not `"user"`.

#### Numeric tower API is absent

`(== 1 1.0)`, `(double 1)` and `(long 1.9)` are `Symbol not found` here, while `int` exists.

Absent vars: `==`, `*'`, `+'`, `-'`, `inc'`, `dec'`, `num`, `double`, `float`, `long`, `short`, `byte`, `bigdec`, `bigint`, `biginteger`,
`decimal?`, `ratio?`, `rational?`, `rationalize`, `numerator`, `denominator`, `with-precision`, `bit-and-not`, `bit-clear`, `bit-flip`,
`bit-set`, `bit-test`, and the `unchecked-*` family. What each means follows from *One double-precision number type*.

#### Reader conditionals are not implemented

`#?(:default 3)` is `3` on the JVM and `Unknown dispatch character: #?` here. `[#?@(:default [1 2])]` fails the same way.
The JVM also takes `(read-string {:read-cond :allow} "#?(:clj 1)")`, covered by *read-string takes no options and accepts empty input*.

Implementing it follows *reader-features*. `reader-conditional` and `reader-conditional?` are absent.

#### Regex matcher API is absent

`(let [m (re-matcher #"a" "a")] (re-find m) (re-groups m))` is `"a"` on the JVM and `Symbol re-matcher not found` here. `re-find`,
`re-matches` and `re-seq` work on strings.

#### Sorted collections are absent

Absent vars: `sorted-map`, `sorted-map-by`, `sorted-set`, `sorted-set-by`, `sorted?`, `subseq`, `rsubseq`, `rseq`, `reversible?`.
`rseq` is absent for vectors too: `(rseq [1 2 3])` is `(3 2 1)` on the JVM.

#### Standard namespaces are absent

`(require '[clojure.zip :as z])` fails with `Namespace 'clojure.zip' not found`. The same for `clojure.pprint`, `clojure.repl`, `clojure.data`,
`clojure.template`, `clojure.stacktrace`, `clojure.java.io`, `clojure.java.shell`, `clojure.spec.alpha`, `clojure.instant`, `clojure.xml`,
`clojure.main`, `clojure.core.protocols`, `clojure.core.reducers`, `clojure.datafy`, `clojure.uuid` and `clojure.inspector`.

`pprint` and `doc` exist in `clojure.core` instead; see *clojure.core carries non-Clojure names*.

#### Standard namespaces are partial

- `clojure.math`, 17 of 45 absent: `IEEE-remainder`, `add-exact`, `copy-sign`, `decrement-exact`, `expm1`, `get-exponent`, `increment-exact`,
  `log1p`, `multiply-exact`, `negate-exact`, `next-after`, `next-down`, `next-up`, `random`, `scalb`, `subtract-exact`, `ulp`.
- `clojure.test`, 24 of 39 absent, including `test-ns`, `test-var`, `test-vars`, `run-all-tests`, `run-test-var`, `with-test`, `try-expr`,
  `do-report`, `assert-expr` and `deftest-`. `run-tests` returns no `:type :summary`.
- `clojure.walk` lacks `macroexpand-all`, `postwalk-demo` and `prewalk-demo`. `clojure.edn` lacks `read`.

`clojure.string` and `clojure.set` are complete.

#### Struct maps are absent

Absent vars: `defstruct`, `create-struct`, `struct`, `struct-map`, `accessor`.

#### tap> is absent

Absent vars: `tap>`, `add-tap`, `remove-tap`.

#### Transducer gaps

`(into [] cat [[1] [2]])` is `[1 2]` on the JVM and `Symbol cat not found` here. `(into [] (distinct) [1 1 2])` fails because
`distinct` has no transducer arity.

Absent vars: `cat`, `eduction`, `halt-when`, `random-sample`, `iteration`, `seque`, `stream-into!`, `stream-reduce!`, `stream-seq!`,
`stream-transduce!`.

#### Transients are absent

Absent vars: `transient`, `persistent!`, `conj!`, `assoc!`, `dissoc!`, `pop!`, `disj!`. Code written for speed with
`(persistent! (reduce conj! (transient []) xs))` fails with `Symbol transient not found`.

#### Var and binding API is partial

`(bound? #'v)` and `(thread-bound? #'v)` work on the JVM and are `Symbol not found` here.

Absent vars: `bound?`, `thread-bound?`, `bound-fn`, `bound-fn*`, `var-set`, `with-local-vars`, `with-bindings`,
`with-bindings*`, `with-redefs-fn`, `get-thread-bindings`, `push-thread-bindings`, `pop-thread-bindings`, `test`.

### Justified: differences with a stated reason

#### async is a lexical boundary

`(async 1)` has no JVM counterpart. `@(async 1)` outside `async` throws `@ on a pending value requires an (async ...) context`,
where a JVM deref of a pending value blocks. A nested fn does not inherit the context:
`(async (let [f (fn [] @(async 1))] (f)))` rejects with the same error.

**Reason.** JavaScript has one thread and cannot block on a pending value, so `@` can only suspend inside an `async` body. As in
JavaScript, a closure is not `async` because the code around it is: it needs its own `(async ...)`.

#### No Java interop

`(.toUpperCase "a")`, `(String. "a")`, `(new String "a")`, `Long/MAX_VALUE`, `(Math/floor 1.5)`, `(System/currentTimeMillis)` and
`(import java.util.Date)` fail here. In `(ns foo (:import java.util.Date))` the import has no effect.

**Reason.** The host is JavaScript, so Java classes do not exist. Host access goes through the `js` module.

Absent because they describe JVM classes, bytecode or compilation: `..`, `memfn`, `import`, `bean`, `bases`, `supers`, `cast`, `compile`,
`definterface`, `gen-class`, `gen-interface`, `proxy`, `construct-proxy`, `get-proxy-class`, `init-proxy`, `update-proxy`,
`proxy-call-with-super`, `proxy-mappings`, `proxy-name`, `proxy-super`, `add-classpath`, `enumeration-seq`, `iterator-seq`, `resultset-seq`,
`PrintWriter-on`, `StackTraceElement->vec`, `Throwable->map`, `method-sig`, `uri?`, `primitives-classnames`, `with-loading-context`,
`->ArrayChunk`, `->Eduction`, `->Vec`, `->VecNode`, `->VecSeq`, `EMPTY-NODE`, `-cache-protocol-fn`, `-reset-methods`, `find-protocol-impl`,
`find-protocol-method`, `seq-to-map-for-destructuring`, `*allow-unresolved-vars*`, `*compile-files*`, `*compile-path*`, `*fn-loader*`,
`*reader-resolver*`, `*source-path*`, `*suppress-read*`, `*use-context-classloader*`, `*verbose-defrecords*`, `*warn-on-reflection*`.

#### Recursion has a fixed frame budget

With `(defn f [n] (if (= n 0) 0 (inc (f (dec n)))))`, `(f 50000)` overflows a default JVM stack and returns `50000` here.
`(f 150000)` overflows both, here as `Stack overflow: exceeded 100000 VM call frames`. Both are catchable.

Self tail calls reuse the frame, so
`(defn f [n] (if (= n 0) :done (f (dec n))))` finishes for any `n` and a self tail call with no base case runs forever, where the
JVM overflows.

**Reason.** The JavaScript call stack is small and differs per engine. A VM budget gives one limit on every host, deeper than the
JVM default.

<!-- divergences:end -->
