(ns workspace.config
  (:require [clojure.edn :as edn]))

(defn read-config [path]
  (edn/read-string (slurp path)))

(defn config-dev [] (read-config "envs/dev.edn"))

(comment
  (config-dev)
  ;
  )