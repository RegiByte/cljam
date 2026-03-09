(ns webrepl
  (:require [math :as m]))

(println "Hello World!")

(println '(m/add 3 5) " -> " (m/add 3 5))

(+ 1 2)


(/ 2 3)

(def foo "bar")

(println foo)

(comment
  (println "Hello Claude!")
  (doc m/add)

  (meta #'m/add)
  
 )
