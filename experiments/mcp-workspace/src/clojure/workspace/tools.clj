(ns workspace.tools
  (:require [clojure.string :as str]
            [clojure.walk :as walk]))
(declare js->clj)

(defn write-file
  "Write content string to a file at path (creates or overwrites).
  Returns {:file path :bytes (count content)}."
  [path content]
  (spit path content))

(defn edit-file
  "Replace first occurrence of old-str with new-str in file at path.
  Returns {:file path :changed? bool}."
  [path old-str new-str]
  (let [content (slurp path)
        updated (str/replace-first content old-str new-str)]
    (spit path updated)
    {:file path :changed? (not= content updated)}))

(defn fetch-json
   "Fetch a URL and return parsed JSON as Clojure data with keyword keys (async)."
  [url]
  (async
   (let [response @(js/fetch url)
         text @((. response text))]
     (-> (js/JSON.parse text)
         js->clj
         walk/keywordize-keys))))

(comment
  (fetch-json "https://api.github.com/users/regibyte")
  
  ; 
  )