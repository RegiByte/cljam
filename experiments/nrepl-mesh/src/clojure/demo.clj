(ns demo
  (:require [mesh :as m]))

(+ 1 2 3)


(async
 (let [n [1 2 3]]
   (doseq [node n]
     (println node))))

(-> (m/list-nodes)
    (then (fn [nodes]
            (for [node nodes]
              (println node)))))

(mesh/set-target! "node2")

(println (+ 1 2))

m/*eval-target*

(m/with-node "node2" '(println "hello"))


(mesh/set-target! nil)