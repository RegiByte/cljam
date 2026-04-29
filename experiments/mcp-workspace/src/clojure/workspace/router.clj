(ns workspace.router
  (:require [clojure.string :as str]))

(def http-methods
  #{:get :post :put :patch :delete :options :head})

(def regex-special-chars
  #{"\\" "." "^" "$" "|" "?" "*" "+" "(" ")" "[" "]" "{" "}"})

(defn escape-regex [s]
  (apply str
         (map (fn [ch]
                (let [part (str ch)]
                  (if (contains? regex-special-chars part)
                    (str "\\" part)
                    part)))
              s)))

(defn normalize-param-name [raw-name]
  (let [name-without-colon (if (str/starts-with? raw-name ":")
                             (subs raw-name 1)
                             raw-name)]
    (keyword name-without-colon)))

(defn parse-bracket-param [raw-param]
  (if (str/starts-with? raw-param "*")
    {:type :wildcard
     :name (normalize-param-name (subs raw-param 1))}
    {:type :param
     :name (normalize-param-name raw-param)}))

(defn flush-literal [tokens literal]
  (if (str/blank? literal)
    tokens
    (conj tokens {:type :literal :value literal})))

(defn parse-colon-param [template start-index]
  (let [end-index (or (str/index-of template "/" start-index)
                      (count template))]
    {:token {:type :param
             :name (normalize-param-name (subs template (inc start-index) end-index))}
     :next-index end-index}))

(defn parse-star-param [template start-index]
  (let [end-index (or (str/index-of template "/" start-index)
                      (count template))]
    {:token {:type :wildcard
             :name (normalize-param-name (subs template (inc start-index) end-index))}
     :next-index end-index}))

(defn parse-template [template]
  (loop [index 0
         literal ""
         tokens []]
    (if (>= index (count template))
      (flush-literal tokens literal)
      (let [ch (subs template index (inc index))]
        (cond
          (= ch "{")
          (let [end-index (str/index-of template "}" index)]
            (when (nil? end-index)
              (throw (ex-info "Unclosed bracket path parameter"
                              {:template template
                               :index index})))
            (recur (inc end-index)
                   ""
                   (conj (flush-literal tokens literal)
                         (parse-bracket-param (subs template (inc index) end-index)))))

          (= ch ":")
          (let [{:keys [token next-index]} (parse-colon-param template index)]
            (recur next-index
                   ""
                   (conj (flush-literal tokens literal) token)))

          (= ch "*")
          (let [{:keys [token next-index]} (parse-star-param template index)]
            (recur next-index
                   ""
                   (conj (flush-literal tokens literal) token)))

          :else
          (recur (inc index)
                 (str literal ch)
                 tokens))))))

(defn token-pattern [token]
  (case (:type token)
    :literal (escape-regex (:value token))
    :param "([^/]+?)"
    :wildcard "(.*)"))

(defn compile-template [template]
  (let [tokens (parse-template template)
        param-names (->> tokens
                         (filter #(contains? #{:param :wildcard} (:type %)))
                         (mapv :name))
        pattern (str "^" (str/join "" (map token-pattern tokens)) "$")]
    {:template template
     :tokens tokens
     :param-names param-names
     :pattern pattern
     :regex (re-pattern pattern)}))

(defn join-paths [parent child]
  (let [parent (or parent "")
        child (or child "")]
    (cond
      (str/blank? parent)
      (if (str/blank? child) "/" child)

      (str/blank? child)
      parent

      (str/starts-with? child "/")
      (str (str/replace parent #"/$" "") child)

      :else
      (str (str/replace parent #"/$" "") "/" child))))

(defn compile-route-node
  ([node]
   (compile-route-node "" [] node))
  ([parent-path parent-middleware node]
   (let [path (first node)
         maybe-data (second node)
         has-data? (map? maybe-data)
         data (if has-data? maybe-data {})
         children (if has-data? (drop 2 node) (rest node))
         full-path (join-paths parent-path path)
         middleware (into parent-middleware (:middleware data []))
         methods (select-keys data http-methods)
         route-data (apply dissoc data (conj (vec http-methods) :middleware))
         compiled-template (compile-template full-path)
         compiled-route (when (seq methods)
                          (assoc compiled-template
                                 :path full-path
                                 :methods methods
                                 :middleware middleware
                                 :route-data route-data))]
     (vec (concat (when compiled-route [compiled-route])
                  (mapcat #(compile-route-node full-path middleware %) children))))))

(defn compile-routes [routes]
  (vec (mapcat compile-route-node routes)))

(defn captures->path-params [param-names match]
  (zipmap param-names (rest match)))

(defn match-route [compiled-routes method uri]
  (some (fn [route]
          (when-let [handler (get (:methods route) method)]
            (when-let [match (re-matches (:regex route) uri)]
              (assoc route
                     :handler handler
                     :path-params (captures->path-params (:param-names route) match)
                     :method method))))
        compiled-routes))

(defn apply-middlewares [handler middlewares]
  (reduce (fn [handler middleware]
            (middleware handler))
          handler
          (reverse middlewares)))

(defn make-router [routes]
  (let [compiled-routes (compile-routes routes)]
    (fn [req]
      (if-let [match (match-route compiled-routes (:method req) (:uri req))]
        (let [request-with-route (assoc req
                                        :path-params (:path-params match)
                                        :route (:route-data match))
              route-handler (apply-middlewares (:handler match) (:middleware match))]
          (route-handler request-with-route))
        {:status 404
         :headers {"content-type" "text/plain"}
         :body "Not found"}))))
