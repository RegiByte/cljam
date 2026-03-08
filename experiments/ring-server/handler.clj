(ns ring-server.handler
  (:require [clojure.string :as str]))

;; In-memory store for demo purposes
(def store (atom {}))
(def next-id (atom 0))

;; ── Helpers ────────────────────────────────────────────────────────────────

(defn ok [body]
  {:status 200 :headers {"content-type" "application/json"} :body body})

(defn created [body]
  {:status 201 :headers {"content-type" "application/json"} :body body})

(defn not-found []
  {:status 404 :headers {"content-type" "text/plain"} :body "Not Found"})

(defn bad-request [msg]
  {:status 400 :headers {"content-type" "text/plain"} :body msg})

;; ── Route table ─────────────────────────────────────────────────────────────
;;
;; [method path-pattern route-key]
;; Segments prefixed with ":" are captured into :path-params automatically.

(def routes
  [[:get    "/ping"       :ping]
   [:get    "/items"      :items]
   [:post   "/items"      :items]
   [:get    "/items/:id"  :items/id]
   [:delete "/items/:id"  :items/id]])

(defn _match-segments [pattern-parts uri-parts]
  (when (= (count pattern-parts) (count uri-parts))
    (reduce (fn [params [pat seg]]
              (cond
                (nil? params)               nil
                (= pat seg)                 params
                (str/starts-with? pat ":")  (assoc params (keyword (subs pat 1)) seg)
                :else                       nil))
            {}
            (map vector pattern-parts uri-parts))))

(defn _match-route [method uri]
  (let [uri-parts (str/split uri #"/")]
    (some (fn [[m pattern route-key]]
            (when (= m method)
              (when-let [params (_match-segments (str/split pattern #"/") uri-parts)]
                [route-key params])))
          routes)))

(defn enrich [req]
  (let [[route params] (or (_match-route (:method req) (:uri req))
                           [:not-found {}])]
    (assoc req :route route :path-params params)))

;; ── Multimethod router ──────────────────────────────────────────────────────

(defmulti handle-route
  (fn [req] [(:method req) (:route req)]))

(defmethod handle-route [:get :ping] [_req]
  {:status 200 :body "pong"})

(defmethod handle-route [:get :items] [_req]
  (ok (vals @store)))

(defmethod handle-route [:post :items] [req]
  (let [body (:body req)]
    (if (nil? body)
      (bad-request "body is required here")
      (let [id   (str (swap! next-id inc))
            item (assoc body :id id)]
        (swap! store assoc id item)
        (created item)))))

(defmethod handle-route [:get :items/id] [req]
  (let [id   (get-in req [:path-params :id])
        item (get @store id)]
    (if item
      (ok item)
      (not-found))))

(defmethod handle-route [:delete :items/id] [req]
  (let [id (get-in req [:path-params :id])]
    (if (contains? @store id)
      (do
        (swap! store dissoc id)
        {:status 204 :body nil})
      (not-found))))

(defmethod handle-route :default [_req]
  (not-found))

;; ── Entry point ─────────────────────────────────────────────────────────────

(defn handler [req]
  (handle-route (enrich req)))
