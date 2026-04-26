;; API reference doc generator — runs inside a cljam session.
;; Returns a vector of [ns-name-string, markdown-string] pairs, one per namespace.
;; Orchestrated by gen-api-docs.ts which writes the files.
;;
;; Var metadata hooks:
;;   ^:no-doc              — skip this var entirely
;;   ^{:doc-group "Name"}  — place var in named sub-group within its kind section
(ns gen-api-docs
  (:require [clojure.string :as str]))

;; clojure.core is always loaded; require the rest.
(doseq [ns-sym '[clojure.string clojure.math clojure.edn
                 clojure.set clojure.walk clojure.test]]
  (require (vector ns-sym)))

;; ── Kind helpers ────────────────────────────────────────────────────────────

(defn var-kind [the-var]
  (:kind (:value (describe the-var))))

(defn var-group [the-var]
  (let [kind (var-kind the-var)]
    (cond
      (#{:fn :native-fn} kind) :functions
      (= :macro kind)          :macros
      (= :multi-method kind)   :multimethods
      (= :protocol kind)       :protocols
      (= :keyword kind)        :keywords
      :else                    :special-vars)))

(def group-order [:functions :macros :multimethods :protocols :special-vars :keywords])

(def group-labels
  {:functions    "Functions"
   :macros       "Macros"
   :multimethods "Multimethods"
   :protocols    "Protocols"
   :special-vars "Special Vars"
   :keywords     "Keywords"})

;; ── Formatters ──────────────────────────────────────────────────────────────

(defn format-arglists [sym-name arglists]
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

(defn primitive-value-str
  "Returns the printable form of a describe :value map for simple types, or nil."
  [val-d]
  (when val-d
    (let [kind (:kind val-d)
          cnt  (or (:count val-d) 0)]
      (cond
        (= kind :nil)     "nil"
        (= kind :boolean) (str (:value val-d))
        (= kind :number)  (pr-str (:value val-d))
        (= kind :string)  (pr-str (:value val-d))
        (= kind :keyword) (str ":" (when-let [ns (:ns val-d)] (str ns "/")) (:name val-d))
        (= kind :symbol)  (str (when-let [ns (:ns val-d)] (str ns "/")) (:name val-d))
        (= kind :vector)  (if (zero? cnt) "[]" (str "[" cnt " items]"))
        (= kind :map)     (if (zero? cnt) "{}" (str "{" cnt " entries}"))
        (= kind :set)     (if (zero? cnt) "#{}" (str "#{" cnt " items}"))
        (= kind :list)    (if (zero? cnt) "()" (str "(" cnt " items)"))))))

(defn dynamic-default [val-d]
  (when-let [s (primitive-value-str val-d)]
    (str " · default: `" s "`")))

(defn var->section
  "Renders one public var as a markdown section.
   heading-level is the markdown prefix string: \"###\" or \"####\"."
  [heading-level [sym the-var]]
  (let [sym-name (str sym)
        d        (describe the-var)
        val-d    (:value d)
        kind     (:kind val-d)
        dynamic? (:dynamic d)
        vm       (meta the-var)
        arglists (or (seq (:arglists val-d)) (seq (:arglists vm)))
        raw-doc  (or (let [doc (:doc val-d)] (when (string? doc) doc))
                     (when (string? (:doc vm)) (:doc vm))
                     "")
        doc      (-> raw-doc
                     (str/replace "<" "&lt;")
                     (str/replace ">" "&gt;"))
        badge    (cond
                   dynamic?
                   (str "**dynamic var**" (or (dynamic-default val-d) ""))
                   (#{:fn :native-fn :macro :multi-method :protocol} kind)
                   nil
                   (= kind :atom)
                   (let [inner-str (primitive-value-str (:value val-d))]
                     (str "**atom**" (when inner-str (str " · initial: `" inner-str "`"))))
                   :else
                   (when-let [pval (primitive-value-str val-d)]
                     (str "`" pval "`")))
        chunks   (keep identity
                   [(str heading-level " `" sym-name "`")
                    badge
                    (when arglists (format-arglists sym-name arglists))
                    (when (seq doc) doc)])]
    (str (str/join "\n\n" chunks) "\n\n---")))

;; ── Doc-group helpers ────────────────────────────────────────────────────────

(defn doc-group-of [the-var]
  (:doc-group (meta the-var)))

(defn has-doc-groups? [vars]
  (boolean (some (fn [[_ v]] (doc-group-of v)) vars)))

(defn render-kind-group
  "Renders one ## kind group, with optional ### doc-group sub-sections.
   page-subgroups? indicates whether any kind group on the page uses sub-grouping
   — when true, flat groups use #### for vars to avoid polluting the [2,3] TOC
   with individual var names.
   When any var in the group carries ^{:doc-group \"Name\"}, named sub-sections
   are emitted (### for sub-group name, #### for individual vars).
   Ungrouped vars within a sub-grouped kind go to ### General."
  [group-key vars page-subgroups?]
  (let [heading    (str "## " (get group-labels group-key))
        subgroups? (has-doc-groups? vars)]
    (if subgroups?
      ;; Sub-grouped layout: ## kind › ### sub-group › #### var
      (let [named-groups  (sort (distinct (keep (fn [[_ v]] (doc-group-of v)) vars)))
            ungrouped     (filterv (fn [[_ v]] (nil? (doc-group-of v))) vars)
            named-sections
            (map (fn [g]
                   (let [gvars (filterv (fn [[_ v]] (= (doc-group-of v) g)) vars)]
                     (str "### " g "\n\n"
                          (str/join "\n\n" (map (partial var->section "####") gvars)))))
                 named-groups)
            general-section
            (when (seq ungrouped)
              (str "### General\n\n"
                   (str/join "\n\n" (map (partial var->section "####") ungrouped))))]
        (str heading "\n\n"
             (str/join "\n\n"
               (filter some? (concat named-sections [general-section])))))
      ;; Flat layout — heading level depends on whether page uses [2,3] outline:
      ;; #### keeps flat vars out of the TOC when the page also has ### sub-groups
      (let [var-heading (if page-subgroups? "####" "###")]
        (str heading "\n\n"
             (str/join "\n\n" (map (partial var->section var-heading) vars)))))))

;; ── Namespace renderer ───────────────────────────────────────────────────────

(defn ns->markdown [ns-sym]
  (let [all-publics (sort-by (comp str first) (ns-publics ns-sym))
        ;; Respect ^:no-doc — skip vars explicitly marked for exclusion
        publics     (remove (fn [[_ v]] (:no-doc (meta v))) all-publics)
        groups      (group-by (fn [[_ v]] (var-group v)) publics)
        ns-str      (str ns-sym)
        ;; Namespace docstring — stored by evaluateNs, surfaces via describe
        ns-d        (describe (find-ns ns-sym))
        ns-doc      (when (string? (:doc ns-d)) (:doc ns-d))
        ;; Outline depth: show sub-groups in TOC if any kind group uses them
        any-subgroups? (boolean (some (fn [g]
                                        (when-let [vars (get groups g)]
                                          (has-doc-groups? vars)))
                                      group-order))
        outline        (if any-subgroups? "[2, 3]" "2")
        sections
        (for [group-key group-order
              :let [vars (get groups group-key)]
              :when (seq vars)]
          (render-kind-group group-key vars any-subgroups?))]
    (str "---\noutline: " outline "\n---\n\n"
         "# " ns-str "\n\n"
         "> _Namespace:_ `" ns-str "`\n\n"
         (when ns-doc (str ns-doc "\n\n"))
         (str/join "\n\n" sections))))

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
