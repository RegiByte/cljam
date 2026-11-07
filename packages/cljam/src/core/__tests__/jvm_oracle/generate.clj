;; Writes the JVM goldens the oracle spec compares cljam against.
;; Run from this directory: clojure -M generate.clj
;; The CLI must not start in packages/cljam: its default classpath holds `src`,
;; where src/clojure/core.clj would shadow the real clojure.core.
(ns generate
  (:require [clojure.java.io :as io]
            [clojure.main]
            [clojure.string :as str])
  (:import [java.io File PushbackReader StringReader StringWriter]))

(def case-timeout-ms 10000)
(def print-length 100)

(def clojure-namespaces
  '[clojure.core clojure.core.protocols clojure.core.reducers clojure.core.server
    clojure.data clojure.datafy clojure.edn clojure.inspector clojure.instant
    clojure.java.basis clojure.java.browse clojure.java.io clojure.java.javadoc
    clojure.java.process clojure.java.shell clojure.main clojure.math
    clojure.pprint clojure.reflect clojure.repl clojure.repl.deps clojure.set
    clojure.stacktrace clojure.string clojure.template clojure.test clojure.test.junit
    clojure.test.tap clojure.uuid clojure.walk clojure.xml clojure.zip])

(defn- json-char [c]
  (case c
    \" "\\\""
    \\ "\\\\"
    \newline "\\n"
    \return "\\r"
    \tab "\\t"
    (if (< (int c) 0x20) (format "\\u%04x" (int c)) (str c))))

(defn- json-str [s]
  (str \" (apply str (map json-char s)) \"))

(defn- json-object [m]
  (str "{" (str/join ", " (map (fn [[k v]] (str (json-str (name k)) ": " (json-str v))) m)) "}"))

(defn- parse-case [line]
  (if (str/starts-with? line "!throws ")
    {:source (subs line (count "!throws ")) :throws? true}
    {:source line :throws? false}))

(defn- read-cases [file]
  (->> (str/split-lines (slurp file))
       (remove #(or (str/blank? %) (str/starts-with? % ";")))
       (mapv parse-case)))

(defn- root-cause [^Throwable e]
  (if-let [cause (.getCause e)] (recur cause) e))

(defn- eval-top-level
  "Reads and evaluates each form in turn, as `load` does, returning the last value."
  [source]
  (let [reader (PushbackReader. (StringReader. source))]
    (loop [result nil]
      (let [form (read {:read-cond :allow :eof ::eof} reader)]
        (if (= ::eof form)
          result
          (recur (eval form)))))))

(defn- scrub-message
  "Removes the addresses and compiler counters JVM messages carry, which change
  from run to run and with every added case."
  [message]
  (str/replace message #"@[0-9a-f]+|(?<=eval|--|__)\d+" "_"))

(defn- run-source [source]
  (let [out (StringWriter.)]
    (binding [*out* out, *err* (StringWriter.)]
      (try
        (let [value (eval-top-level source)
              printed (binding [*print-length* print-length] (pr-str value))]
          {:kind "value" :printed printed :out (str out)})
        (catch Throwable e
          (let [cause (root-cause e)]
            {:kind "threw"
             :class (.getName (class cause))
             :message (scrub-message (str (ex-message cause)))
             :out (str out)}))))))

(def ^:private baseline-namespaces (set (all-ns)))
(def ^:private baseline-hierarchy @#'clojure.core/global-hierarchy)

(defn- reset-world!
  "Gives the next case a new `user` namespace and removes what the last case created.
  clojure.* namespaces stay: they are AOT compiled, so their init classes run once
  and a removed one can never load again."
  []
  (let [leftovers (->> (all-ns)
                       (remove baseline-namespaces)
                       (map ns-name)
                       (remove #(str/starts-with? (name %) "clojure.")))]
    (run! remove-ns leftovers)
    (remove-ns 'user)
    (dosync (alter @#'clojure.core/*loaded-libs* #(reduce disj % leftovers))))
  (alter-var-root #'clojure.core/global-hierarchy (constantly baseline-hierarchy))
  (binding [*ns* (create-ns 'user)]
    (refer-clojure)))

(defn- run-case [{:keys [source]}]
  (reset-world!)
  (let [running (future
                  (clojure.main/with-bindings
                    (set! *ns* (the-ns 'user))
                    (binding [*file* "NO_SOURCE_PATH"]
                      (run-source source))))
        outcome (deref running case-timeout-ms {:kind "timeout"})]
    (when (= "timeout" (:kind outcome))
      (future-cancel running))
    outcome))

(defn- case-problem
  "Why a case cannot have a golden, or nil. Each run order must agree, and every
  JVM throw must be declared, so that both-threw only ever agrees on purpose."
  [{:keys [source throws?]} first-run second-run]
  (cond
    (= "timeout" (:kind first-run)) (str "hangs on the JVM: " source)
    (some-> (:printed first-run) (str/includes? " 0x")) (str "prints an object address: " source)
    (not= first-run second-run) (str "not deterministic: " source
                                     "\n    " (pr-str first-run)
                                     "\n    " (pr-str second-run))
    (and throws? (not= "threw" (:kind first-run))) (str "marked !throws but returned "
                                                        (:printed first-run) ": " source)
    (and (not throws?) (= "threw" (:kind first-run))) (str "threw without !throws, "
                                                           (:message first-run) ": " source)))

(defn- golden-json [cases outcomes]
  (str "{\n  \"clojure\": " (json-str (clojure-version)) ",\n  \"cases\": [\n"
       (str/join ",\n" (map (fn [{:keys [source]} outcome]
                              (str "    " (json-object (assoc outcome :source source))))
                            cases outcomes))
       "\n  ]\n}\n"))

(defn- run-all
  "Each pass walks the cases in a different order, so state leaking from one case
  into the next shows up as non-determinism."
  [cases]
  (let [forward (mapv run-case cases)
        backward (vec (rseq (mapv run-case (rseq cases))))]
    {:outcomes forward
     :problems (keep identity (map case-problem cases forward backward))}))

(defn- write-goldens
  "Returns the problems found; writes the golden only when there are none."
  [^File case-file]
  (let [cases (read-cases case-file)
        golden (str "goldens/" (str/replace (.getName case-file) #"\.txt$" ".json"))
        {:keys [outcomes problems]} (run-all cases)]
    (when (empty? problems)
      (spit golden (golden-json cases outcomes))
      (println (format "%-30s %d cases" golden (count cases))))
    problems))

(defn- public-names [ns-sym]
  (require ns-sym)
  (sort (map str (keys (ns-publics ns-sym)))))

(defn- public-vars-json []
  (str "{\n  \"clojure\": " (json-str (clojure-version)) ",\n  \"namespaces\": {\n"
       (str/join ",\n"
                 (for [ns-sym clojure-namespaces]
                   (str "    " (json-str (str ns-sym)) ": [\n"
                        (str/join ",\n" (map #(str "      " (json-str %)) (public-names ns-sym)))
                        "\n    ]")))
       "\n  }\n}\n"))

(defn -main []
  (let [files (sort-by #(.getName ^File %) (.listFiles (io/file "cases")))
        problems (vec (mapcat write-goldens files))]
    (doseq [problem problems] (println "PROBLEM" problem))
    (flush)
    (reset-world!)
    (when (empty? problems)
      (spit "goldens/public-vars.json" (public-vars-json))
      (println "goldens/public-vars.json"))
    (System/exit (if (empty? problems) 0 1))))

(try
  (-main)
  (catch Throwable e
    (.printStackTrace e)
    (System/exit 1)))
