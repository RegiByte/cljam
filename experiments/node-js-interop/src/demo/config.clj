(ns demo.config
  (:require [clojure.walk :as walk]
            [clojure.edn :as edn]
            [cljam.integrant.core :as ig]))

(defn bare-ref [refpath] {:reader/ref refpath})
(defn bare-ref? [x] (and (map? x) (contains? x :reader/ref)))

(defmulti config-reader (fn [tag value opts] tag))

(defmethod config-reader :default [tag value opts]
  (throw {:type :config-reader/no-reader
          :message (str "Hey! There is no reader function for tag #" tag)
          :data {:tag tag :value value}}))

(defn resolve-refs [config]
  (clojure.walk/postwalk
   (fn [x]
     (if (bare-ref? x)
       (get-in config (:reader/ref x))
       x))
   config))

(defn read-config
  ([the-str]
   (read-config the-str {}))
  ([the-str opts]
   (let [edn-opts
         {:default
          (fn [tag value]
            (config-reader (symbol tag) value opts))}]
     (-> (edn/read-string
          edn-opts
          the-str)
         (resolve-refs)))))

(defmethod config-reader 'ref [_ path _]
  (bare-ref path))

(defmethod config-reader 'ig/ref [_ value _]
  (ig/ref value))

(defmethod config-reader 'include [_ path opts]
  (read-config (slurp path) opts))

(defmethod config-reader 'profile [_ value opts]
  (let [profile (or (:profile opts) :dev)
        profile-value (get value profile)]
    (if profile-value profile-value (:default value))))


(comment
  (inc 2)

  (doc get)

  (def config-str (slurp "system.config.edn"))

  (read-config config-str {:profile :qa})

  (symbol "ig/ref")

  (config-reader 'ig/ref :something-else {:profile :dev})
  

  ; 
  )