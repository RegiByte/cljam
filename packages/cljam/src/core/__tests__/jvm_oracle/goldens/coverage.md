# Public var coverage against Clojure 1.12.6

422 of 1077 public vars.

| namespace | loads | covered | jvm | extra |
|---|---|---|---|---|
| clojure.core | yes | 336 | 679 | 103 |
| clojure.core.protocols | no | 0 | 11 | 0 |
| clojure.core.reducers | no | 0 | 21 | 0 |
| clojure.core.server | no | 0 | 11 | 0 |
| clojure.data | no | 0 | 5 | 0 |
| clojure.datafy | no | 0 | 2 | 0 |
| clojure.edn | yes | 1 | 2 | 3 |
| clojure.inspector | no | 0 | 13 | 0 |
| clojure.instant | no | 0 | 5 | 0 |
| clojure.java.basis | no | 0 | 2 | 0 |
| clojure.java.browse | no | 0 | 2 | 0 |
| clojure.java.io | no | 0 | 19 | 0 |
| clojure.java.javadoc | no | 0 | 8 | 0 |
| clojure.java.process | no | 0 | 9 | 0 |
| clojure.java.shell | no | 0 | 5 | 0 |
| clojure.main | no | 0 | 20 | 0 |
| clojure.math | yes | 28 | 45 | 27 |
| clojure.pprint | no | 0 | 26 | 0 |
| clojure.reflect | yes | 2 | 17 | 1 |
| clojure.repl | no | 0 | 13 | 0 |
| clojure.repl.deps | no | 0 | 3 | 0 |
| clojure.set | yes | 12 | 12 | 0 |
| clojure.stacktrace | no | 0 | 6 | 0 |
| clojure.string | yes | 21 | 21 | 0 |
| clojure.template | no | 0 | 2 | 0 |
| clojure.test | yes | 15 | 39 | 5 |
| clojure.test.junit | no | 0 | 18 | 0 |
| clojure.test.tap | no | 0 | 7 | 0 |
| clojure.uuid | no | 0 | 0 | 0 |
| clojure.walk | yes | 7 | 10 | 0 |
| clojure.xml | no | 0 | 16 | 0 |
| clojure.zip | no | 0 | 28 | 0 |

## clojure.core

Missing: *' *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* *command-line-args* *compile-files* *compile-path* *default-data-reader-fn* *e *file* *flush-on-newline* *fn-loader* *in* *math-context* *print-dup* *print-meta* *print-namespace-maps* *print-readably* *read-eval* *reader-resolver* *repl* *source-path* *suppress-read* *unchecked-math* *use-context-classloader* *verbose-defrecords* *warn-on-reflection* +' -' ->ArrayChunk ->Eduction ->Vec ->VecNode ->VecSeq -cache-protocol-fn -reset-methods .. == EMPTY-NODE Inst PrintWriter-on StackTraceElement->vec Throwable->map accessor aclone add-classpath add-tap agent agent-error agent-errors aget alength alias alter amap areduce array-map aset aset-boolean aset-byte aset-char aset-double aset-float aset-int aset-long aset-short assert assoc! await await-for await1 bases bean bigdec bigint biginteger bit-and-not bit-clear bit-flip bit-set bit-test boolean-array booleans bound-fn bound-fn* bound? bounded-count byte byte-array bytes bytes? cast cat char-array char-escape-string char-name-string chars chunk chunk-append chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? clear-agent-errors commute comparator compile conj! construct-proxy create-ns create-struct dec' decimal? default-data-readers definline definterface defonce defstruct deftype deliver denominator disj! dissoc! distinct? dosync doto double double-array doubles eduction ensure enumeration-seq error-handler error-mode extend extends? ffirst file-seq find-keyword find-protocol-impl find-protocol-method find-var float float-array floats flush format future future-call future-cancel future-cancelled? future-done? future? gen-class gen-interface get-method get-proxy-class get-thread-bindings get-validator halt-when hash-combine hash-ordered-coll hash-unordered-coll if-not import inc' indexed? init-proxy inst-ms inst-ms* inst? int-array intern into-array ints io! iteration iterator-seq lazy-cat line-seq load load-file load-reader load-string locking long long-array longs make-array map-entry? memfn method-sig methods mix-collection-hash munge namespace-munge ns-resolve ns-unalias ns-unmap num numerator object-array parse-uuid partitionv partitionv-all pcalls persistent! pmap pop! pop-thread-bindings prefer-method prefers primitives-classnames print-ctor print-dup print-method print-simple printf promise proxy proxy-call-with-super proxy-mappings proxy-name proxy-super push-thread-bindings pvalues random-sample random-uuid ratio? rational? rationalize re-groups re-matcher read read+string read-line reader-conditional reader-conditional? ref ref-history-count ref-max-history ref-min-history ref-set refer refer-clojure reify release-pending-sends remove-all-methods remove-method remove-ns remove-tap replace replicate requiring-resolve reset-meta! restart-agent resultset-seq reversible? rseq rsubseq send send-off send-via seq-to-map-for-destructuring seque set-agent-send-executor! set-agent-send-off-executor! set-error-handler! set-error-mode! short short-array shorts shutdown-agents slurp sorted-map sorted-map-by sorted-set sorted-set-by sorted? spit splitv-at stream-into! stream-reduce! stream-seq! stream-transduce! struct struct-map subseq supers sync tagged-literal tagged-literal? tap> test thread-bound? to-array to-array-2d transient tree-seq unchecked-add unchecked-add-int unchecked-byte unchecked-char unchecked-dec unchecked-dec-int unchecked-divide-int unchecked-double unchecked-float unchecked-inc unchecked-inc-int unchecked-int unchecked-long unchecked-multiply unchecked-multiply-int unchecked-negate unchecked-negate-int unchecked-remainder-int unchecked-short unchecked-subtract unchecked-subtract-int unquote unquote-splicing update-proxy uri? use uuid? var-set vector-of with-bindings with-bindings* with-in-str with-loading-context with-local-vars with-open with-precision with-redefs-fn xml-seq

Extra: *describe-limit* *hierarchy* Boolean Byte Character Class Cloneable Comparable Double Error Exception Float Integer Iterable Long Math Number Object Runnable Runtime Short String System Thread Throwable Void add-method! all analyze* analyze*-impl ast* ast*-impl atom? case-emit catch* clj->js concat* condp-emit describe describe* disassemble* disassemble*-impl doc extend-protocol! falsy? flatten-step hierarchy-ancestors-global hierarchy-derive* hierarchy-derive-global! hierarchy-descendants-global hierarchy-isa?* hierarchy-isa?-global hierarchy-parents-global hierarchy-underive* hierarchy-underive-global! insert-sorted js->clj lazy-seq? macroexpand-all make-delay make-err make-lazy-seq make-multimethod! make-promise make-protocol! make-record! maybe-destructured measure* measure*-impl multimethod? namespace? pending? pprint pprint-str pretty-print-str promise-of protocol? protocols record-type regexp? repeat* sort-compare sqrt str-ends-with* str-includes* str-index-of* str-last-index-of* str-lower-case* str-replace* str-replace-first* str-reverse* str-split* str-starts-with* str-trim* str-triml* str-trimr* str-upper-case* then throw time*-impl truthy? warn with-err-str

## clojure.edn

Missing: read

Extra: edn-pr-str* edn-read-string* pr-str

## clojure.math

Missing: IEEE-remainder add-exact copy-sign decrement-exact expm1 get-exponent increment-exact log1p multiply-exact negate-exact next-after next-down next-up random scalb subtract-exact ulp

Extra: TAU abs acos* asin* atan* atan2* cbrt* ceil* cos* cosh* exp* floor* floor-div* floor-mod* hypot* log* log10* pow* rint* round* signum* sin* sinh* tan* tanh* to-degrees* to-radians*

## clojure.reflect

Missing: ->AsmReflector ->Constructor ->Field ->JavaReflector ->Method ClassResolver Reflector TypeReference do-reflect flag-descriptors map->Constructor map->Field map->Method resolve-class typename

Extra: parse-flags

## clojure.test

Missing: *initial-report-counters* *load-tests* *stack-trace-depth* assert-any assert-expr assert-predicate deftest- do-report file-position function? get-possibly-unbound-var inc-report-counter run-all-tests run-test-var set-test test-all-vars test-ns test-var test-vars testing-contexts-str testing-vars-str try-expr with-test with-test-out

Extra: default-fixture fixture-registry test-registry thrown-with-msg? thrown?

## clojure.walk

Missing: macroexpand-all postwalk-demo prewalk-demo
