(ns workspace.demo
  (:require
   [js :as js]))

(declare js->clj)

(def bootstrap-state (atom []))

(defn bootstrap []
  (swap! bootstrap-state conj :booted)
  :ok)

(defn greet [name]
  (str "hello " name " from the MCP workspace"))

(def github-report-path "/Users/reginaldo/code/clojure-land/cljam/experiments/mcp-workspace/github-report.md")

(defn summarize [xs]
  {:count (count xs)
   :first (first xs)
   :last (last xs)})


(comment


  (-> (js/fetch "https://api.github.com/users/amandamachadodev" {})
      (then #((. % json)))
      (then js->clj)
      (then pprint))
  ;
  )