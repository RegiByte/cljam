(ns user.errors)

;; Deep Dive: Error Handling
;;
;; Press ⌘+Enter on any form to evaluate it.


;; try / catch / finally

(comment
  ;; No error — returns the value of the body
  (try
    (+ 1 2))           ;; => 3

  ;; catch with :default — catches anything
  (try
    (/ 1 0)
    (catch :default e
      (str "Caught: " (ex-message e))))

  ;; finally — always runs, does NOT change the return value
  (try
    (+ 1 2)
    (finally
      (println "always runs")))   ;; prints, returns 3

  (try
    (/ 1 0)
    (catch :default e
      (println "handling error")
      :recovered)
    (finally
      (println "cleanup")))       ;; => :recovered
)


;; throw
;;
;; You can throw any value — not just error objects.
;; Catch with a predicate function that matches the thrown value.

(comment
  (try
    (throw "something went wrong")
    (catch string? e
      (str "got a string: " e)))

  (try
    (throw :not-found)
    (catch keyword? e
      (str "got a keyword: " e)))

  (try
    (throw 42)
    (catch number? e
      (str "got a number: " (+ e 1))))

  (try
    (throw {:type :validation :field :email :msg "invalid"})
    (catch map? e
      (str "validation error on " (:field e))))
)


;; Catch Discriminators
;;
;; The catch clause tests the thrown value with a discriminator:
;;
;;   :default        — catches everything
;;   :error/runtime  — catches evaluator errors (type errors, etc.)
;;   predicate fn    — checks (pred thrown-value)  e.g. keyword? number? map?
;;   keyword         — matches if thrown is a map with :type = that keyword

(comment
  ;; Throw a plain map with :type to use keyword discriminators.
  ;; This is the idiomatic pattern for named error types in cljam.
  (defn find-user [id]
    (if (pos? id)
      {:id id :name "Alice"}
      (throw {:type :user/not-found :id id})))

  (try
    (find-user -1)
    (catch :user/not-found e
      (str "User not found, id=" (:id e))))

  ;; Multiple catch clauses — matched in order
  (defn risky [x]
    (cond
      (string? x) (throw {:type :bad-type  :given x})
      (neg?    x) (throw {:type :negative  :given x})
      :else       (/ 100 x)))

  (try
    (risky -5)
    (catch :bad-type _  "wrong type")
    (catch :negative _  "negative number")
    (catch :default  e  (str "unexpected: " e)))

  (try (risky "oops") (catch :bad-type _ "wrong type") (catch :negative _ "neg"))
  (try (risky 0)      (catch :default e (ex-message e)))

  ;; :error/runtime — catches interpreter-level errors (type mismatches, etc.)
  (try
    (+ 1 "not a number")
    (catch :error/runtime e
      (str "type error caught: " (ex-message e))))
)


;; ex-info: Structured Errors
;;
;; `ex-info` creates an error with a :message, a :data map, and an optional cause.
;; Catch with :default, then inspect with ex-message / ex-data / ex-cause.

(comment
  (try
    (throw (ex-info "User validation failed"
                    {:field  :email
                     :value  "not-an-email"
                     :code   :invalid-format}))
    (catch :default e
      {:message (ex-message e)
       :data    (ex-data    e)}))

  ;; ex-info with a cause (chained errors)
  (try
    (try
      (/ 1 0)
      (catch :default cause
        (throw (ex-info "Database query failed"
                        {:query "SELECT *"}
                        cause))))
    (catch :default e
      {:message (ex-message e)
       :data    (ex-data    e)
       :cause   (ex-message (ex-cause e))}))
)


;; Typed Errors: map-based approach
;;
;; Throw a map with :type (and any extra keys you need).
;; Keyword discriminators match on the :type field — no class hierarchy required.

(defn parse-age [x]
  (cond
    (not (number? x))
    (throw {:type :error/parse :msg "Not a number" :value x})

    (neg? x)
    (throw {:type :error/validation :msg "Age cannot be negative" :value x})

    :else x))

(comment
  (try
    (parse-age "hello")
    (catch :error/parse e
      (str "Parse error: " (:msg e) " (got: " (:value e) ")"))
    (catch :error/validation e
      (str "Validation error: " (:msg e))))

  (try
    (parse-age -5)
    (catch :error/parse e      (str "parse: " (:msg e)))
    (catch :error/validation e (str "validation: " (:msg e))))

  (parse-age 30)               ;; => 30  (no error)
)


;; Practical Patterns

(comment
  ;; Result map {ok? result/error}
  (defn safe-divide [a b]
    (try
      {:ok? true  :result (/ a b)}
      (catch :default e
        {:ok? false :error (ex-message e)})))

  (safe-divide 10 2)   ;; => {:ok? true  :result 5}
  (safe-divide 10 0)   ;; => {:ok? false :error "..."}

  ;; Validate before computing — throw a typed map
  (defn sqrt [n]
    (when (neg? n)
      (throw {:type :error/domain :msg "Cannot take sqrt of negative number" :value n}))
    (loop [x (* 0.5 (+ 1.0 n))]
      (let [next-x (* 0.5 (+ x (/ n x)))
            diff   (max (- next-x x) (- x next-x))]
        (if (< diff 1e-9)
          next-x
          (recur next-x)))))

  (try (sqrt 9)  (catch :default e (:msg e)))          ;; => 3.0
  (try (sqrt -1) (catch :error/domain e (:msg e)))     ;; => "Cannot take sqrt..."

  ;; Wrapping errors with context — using ex-info for the cause chain
  (defn load-user [id]
    (try
      (if (= id 42)
        {:id 42 :name "Alice"}
        (throw (ex-info "User not found" {:id id})))
      (catch :default e
        (throw (ex-info (str "Failed to load profile for id=" id)
                        {:id id}
                        e)))))

  (try
    (load-user 99)
    (catch :default e
      {:msg    (ex-message e)
       :cause  (ex-message (ex-cause e))}))
)
