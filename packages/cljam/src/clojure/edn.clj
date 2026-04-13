(ns clojure.edn)

;; Runtime-injected native helpers. Declared here so clojure-lsp can resolve
;; them; the interpreter treats bare (def name) as a no-op and leaves the
;; native binding from coreEnv intact.
(def edn-read-string*)
(def edn-pr-str*)

(defn read-string
  "Reads one EDN value from string s and returns it.

  Accepts an optional opts map as the first argument:
    :readers - map from tag symbol to handler function; merged with *data-readers*
    :default - fn of [tag-name value] called for tags with no registered handler

  Uses *data-readers* (from clojure.core) for globally registered tag handlers.
  Built-in tags: #inst (returns JS Date), #uuid (returns string passthrough).

  Rejects Clojure-specific syntax that is not part of the EDN spec:
  quote ('), syntax-quote (`), unquote (~), #(...), @deref, ^metadata, #'var,
  #\"regex\", and #:ns{...} namespaced maps."
  ([s]
   (edn-read-string* s))
  ([opts s]
   (edn-read-string* opts s)))

(defn pr-str
  "Returns a string representation of val in EDN format.
  Equivalent to clojure.core/pr-str for all standard EDN-compatible types."
  [val]
  (edn-pr-str* val))
