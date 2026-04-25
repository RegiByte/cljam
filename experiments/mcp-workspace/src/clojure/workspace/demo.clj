(ns workspace.demo)

(def bootstrap-state (atom []))

(defn bootstrap []
  (swap! bootstrap-state conj :booted)
  :ok)

(defn greet [name]
  (str "hello " name " from the MCP workspace"))

(defn summarize [xs]
  {:count (count xs)
   :first (first xs)
   :last (last xs)})
