(ns workspace.demo
  (:require
   [js :as js]
   [clojure.string :as str]
   [workspace.harvest :as harvest]))

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


(defn- workspace-banner []
  (let [workspace-ns (->> (all-ns)
                          (map ns-name)
                          (map str)
                          (filter #(str/starts-with? % "workspace."))
                          sort)]
    (println "\n=== MCP Workspace Ready ===")
    (println "Loaded namespaces:")
    (doseq [n workspace-ns]
      (println (str "  " n)))
    (println "\nExplore any namespace:")
    (println "  (describe (find-ns 'workspace.harvest))")
    (println "  (all-ns)")))

(workspace-banner)

(comment
  (harvest/list-projects)

  (describe (find-ns 'workspace.harvest))

  (all-ns)
  ;
  )