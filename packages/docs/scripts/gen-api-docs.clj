;; API reference doc generator — runs inside a cljam session.
;; Returns a vector of [ns-name-string, markdown-string] pairs, one per namespace.
;; Orchestrated by gen-api-docs.ts which writes the files.
(ns gen-api-docs
  (:require [clojure.string :as str]))

;; clojure.core is always loaded; require the rest.
(doseq [ns-sym '[clojure.string clojure.math clojure.edn
                 clojure.set clojure.walk clojure.test]]
  (require (vector ns-sym)))

;; ── Formatters ──────────────────────────────────────────────────────────────

(defn kind-label [kind]
  (cond
    (= kind :fn)           "fn"
    (= kind :native-fn)    "fn"
    (= kind :macro)        "macro"
    (= kind :protocol)     "protocol"
    (= kind :multi-method) "multimethod"
    :else                  (name kind)))

(defn format-arglists
  "Renders a seq of arglists as a clojure code block.
   Works with both string-arglists (from describe) and symbol-arglists (from meta)."
  [sym-name arglists]
  (when (seq arglists)
    (let [fence "```"]
      (str fence "clojure\n"
           (str/join "\n"
             (map (fn [al]
                    (str "(" sym-name
                         (when (seq al) (str " " (str/join " " al)))
                         ")"))
                  arglists))
           "\n" fence))))

(defn var->section
  "Renders one public var as a markdown ### section."
  [[sym the-var]]
  (let [sym-name (str sym)
        d        (describe the-var)
        val-d    (:value d)             ; {:kind :fn/:macro/etc, :arglists [...], :doc "..."}
        kind     (:kind val-d)
        vm       (meta the-var)         ; var-level meta — has :doc for macros, :arglists for fns
        ;; describe gives string arglists; var meta gives symbol arglists — both work with str/join
        arglists (or (seq (:arglists val-d)) (seq (:arglists vm)))
        ;; describe :doc works for fns/native-fns; meta :doc covers macros
        raw-doc  (or (let [doc (:doc val-d)] (when (string? doc) doc))
                     (when (string? (:doc vm)) (:doc vm))
                     "")
        ;; Escape < and > so VitePress doesn't parse them as Vue/HTML tags
        doc      (-> raw-doc
                     (str/replace "<" "&lt;")
                     (str/replace ">" "&gt;"))]
    (str/join "\n"
      (filter some?
        [(str "### `" sym-name "`")
         ""
         (str "**" (kind-label kind) "**")
         (when arglists (str "\n" (format-arglists sym-name arglists) "\n"))
         (when (seq doc) (str "\n" doc "\n"))
         "---"]))))

(defn ns->markdown
  "Renders an entire namespace as a markdown document."
  [ns-sym]
  (let [publics (sort-by (comp str first) (ns-publics ns-sym))]
    (str "# " (str ns-sym) "\n\n"
         "> _Namespace:_ `" (str ns-sym) "`\n\n"
         (str/join "\n\n" (map var->section publics)))))

;; ── Entry point ─────────────────────────────────────────────────────────────

(into []
  (map (fn [ns-sym] [(str ns-sym) (ns->markdown ns-sym)])
    '[clojure.core
      clojure.string
      clojure.math
      clojure.edn
      clojure.set
      clojure.walk
      clojure.test]))
