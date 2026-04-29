(ns workspace.user
  (:require [ring.adapter.node :as ring]
            [clojure.string :as str]
            [cljam.integrant.core :as ig]
            [workspace.router :as router]))


(defn attrs->str [attrs]
  (str/join " " (map (fn [[k v]]
                       (str (name k) "=\"" v "\"")) attrs)))

(def self-closing
  #{:area :base :br
    :col :embed :hr
    :img :input :link
    :meta :param :source
    :track :wbr :keygen
    :command :basefont :frame})

(defn render-html [node]
  (cond
    (nil? node) ""
    ;; vectors are the main AST nodes
    (vector? node)
    (let [[tag & children] node
          tag-name (name tag)
          has-attrs? (map? (first children))
          self-closing? (contains? self-closing tag)
          attrs (when has-attrs? (first children))
          children (if has-attrs? (rest children) children)]
      (str "<" tag-name
           (when attrs (str " " (attrs->str attrs)))
           (if self-closing? "/>"
               (str ">"
                    (str/join "" (map render-html children))
                    "</" tag-name ">"))))
    (number? node) (str node)
    (string? node) node
    (seq? node) (str/join "" (map render-html node))
    :else (str node)))


(defn system-config [port]
  {:server {:port port}})

(defn mark-middleware [mark]
  (fn [handler]
    (fn [req]
      (handler (assoc req :middleware (conj (vec (:middleware req)) mark))))))

(defn response [body]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body body})

(def routes
  [["/" {:middleware [(mark-middleware :root)]}
    ["" {:name :home
         :get (fn [req]
                (response (str "Home via " (:middleware req))))}]
    ["users" {:middleware [(mark-middleware :users)]}
     ["{id}" {:name :user/show
              :get (fn [req]
                     (response (str "User " (:id (:path-params req))
                                    " route " (:name (:route req))
                                    " middleware " (:middleware req))))
              :put (fn [req]
                     (response (str "Updated user " (:id (:path-params req)))))}]
     ["{id}/posts/{post-id}" {:name :user-post/show
                              :get (fn [req]
                                     (response (str "Post " (:post-id (:path-params req))
                                                    " for user " (:id (:path-params req))
                                                    " middleware " (:middleware req))))}]]
    ["files/{name}.{extension}" {:name :files/show
                                 :get (fn [req]
                                        (response (str "File " (:name (:path-params req))
                                                       " extension " (:extension (:path-params req)))))}]
    ["assets/{*path}" {:name :assets
                       :get (fn [req]
                              (response (str "Asset path " (:path (:path-params req)))))}]]
   ["broker.{customer}.{device}.{*data}"
    {:name :broker/event
     :get (fn [req]
            (response (str "Broker " (:customer (:path-params req))
                           " device " (:device (:path-params req))
                           " data " (:data (:path-params req)))))}]])

(def app-handler
  (router/make-router routes))

(defn handler [req]
  (#'app-handler req))


(defmethod ig/init-key :server [_ {:keys [port]}]
  (ring/start {:handler #(#'handler %) :port port}))

(defmethod ig/halt-key! :server [_ srv]
  (ring/stop! srv {:drain-timeout-ms 0}))

(def system1 (atom nil))
(def system2 (atom nil))

(defn start-system! [config a-target]
  (async
   (let [system @(ig/init config)]
     (println "System started on port" (:port (:server system)))
     (reset! a-target system)
     system)))



(defn stop-system! [system]
  (when @system
    (async
     @(ig/halt! @system)
     (reset! system nil)
     (println "System stopped"))))


(defn wait [ms]
  (make-promise
   (fn [resolve _reject] (js/setTimeout #(resolve) ms))))


(comment
  (assoc {:n 2} :a 5)

  @system1
  (reset! system1 {:key "alguma coisa"})
  (describe ig/halt!)

  (async
   (try @(start-system! (system-config 3000) system1)
        (catch :integrant/build-failed e (println "Integrant Error:" (:message e)))
        (catch :default e (println "Default Error:" e))))

  (start-system! (system-config 3000) system1)
  (start-system! (system-config 3001) system2)
  (stop-system! system1)
  (stop-system! system2)
  @system2

  (+ 1 2)

  (meta @system1)



  (render-html [:h1 "Hello, World!"])
  (render-html [:h1 {:class "foo" :id "bar"} "Hello, World!"])
  (render-html [:div {:id "container"}
                [:h1 {:class "foo" :id "bar"} "Hello, World!"]
                [:br]
                [:img {:src "https://example.com/image.jpg" :alt "Image"}]
                [:p {:class "foo" :id "bar"} "This is a paragraph!" [:span {:id "the-span"} "This is a span"]]])

  (contains? #{1 2 3} 2)

  (async @(all [42 43 44]))

  (js/setTimeout #(println "hello") 2000)
  (defn wait [ms]
    (make-promise
     (fn [resolve _reject] (js/setTimeout #(resolve) ms))))

  (-> (wait 2000)
      (then (fn [_] (println "Hello"))))

  (-> (js/fetch "http://localhost:3000/users/123" 
                {:method "PUT" :body "Hello"})
      (then #((. % text))))
  
  ;
  )