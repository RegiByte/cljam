(ns workspace.harvest
  "Thin Harvest API utilities for the MCP workspace.

  This namespace is intentionally small and REPL-friendly. It uses the
  personal Harvest credentials from envs/dev.edn under:

    {:harvest {:host \"https://api.harvestapp.com\"
               :account-id \"...\"
               :token \"...\"}}

  All network-facing public functions return cljam pending values, so call
  them from an async block and deref with @:

    (async
      @(hours-summary {:from \"2026-04-01\" :to \"2026-04-30\"}))

  Harvest time entries require both a project and a task. The UI may hide the
  task selector, but the API requires task_id. Prefer project/task names for
  day-to-day use and let this namespace resolve IDs from the current user's
  project assignments:

    (async
      @(time-entry-payload {:project-name \"P&L\"
                            :task-name \"Programming\"
                            :spent-date \"2026-04-30\"
                            :hours 1.5
                            :notes \"Dry run only\"}))

  Use time-entry-payload first when testing. It resolves project/task IDs
  without creating anything in Harvest. Use log-hours! only when the user has
  explicitly confirmed the date, hours, project, task, and notes.

  Current known shortcut:
    Azul PNL = Harvest project \"P&L Forecasting\", code \"AZUL\"
    Programming task id = 6225463"
  (:require
   [clojure.string :as str]
   [clojure.walk :as walk]
   [workspace.config :as config]
   [js :as js]))

(declare js->clj)
(declare clj->js)


(def api-prefix "/api/v2")

(def default-per-page 2000)

(defn api-path [path]
  (if (str/starts-with? path api-prefix)
    path
    (str api-prefix path)))

(defn api-key [k]
  (-> (name k)
      (str/replace "-" "_")))

(defn query-string [query]
  (let [pairs (->> query
                   (remove (fn [[_ v]] (nil? v)))
                   (map (fn [[k v]]
                          (str (api-key k) "=" v))))]
    (when (seq pairs)
      (str "?" (str/join "&" pairs)))))

(defn path-with-query [path query]
  (str (api-path path) (or (query-string query) "")))

(defn harvest-headers [cfg extra-headers has-body?]
  (let [{:keys [token account-id]} (:harvest cfg)
        base-headers {"Harvest-Account-ID" account-id
                      "Authorization" (str "Bearer " token)
                      "User-Agent" "Cljam MCP Workspace"}]
    (cond-> (merge base-headers extra-headers)
      has-body? (assoc "Content-Type" "application/json"))))

(defn fetch-harvest
  "Fetch a Harvest path and return the raw JS Response.
  Prefer harvest-request for parsed Clojure data."
  ([path] (fetch-harvest path {}))
  ([path opts] (fetch-harvest path opts (config/config-dev)))
  ([path opts cfg]
   (async
    (let [{:keys [host]} (:harvest cfg)
          method (str/upper-case (name (or (:method opts) :get)))
          query (:query opts)
          body (:body opts)
          headers (harvest-headers cfg (:headers opts) (some? body))
          fetch-opts (cond-> {:method method
                              :headers headers}
                       body (assoc :body (js/JSON.stringify (clj->js body))))
          response @(js/fetch (str host (path-with-query path query)) fetch-opts)]
      response))))

(defn successful-response? [response]
  (let [status (. response status)]
    (and (>= status 200) (< status 300))))

(defn content-type [response]
  (let [headers (. response headers)]
    (. headers get "content-type")))

(defn json-response? [response]
  (let [ctype (or (content-type response) "")]
    (str/includes? ctype "application/json")))

(defn response-headers [response]
  (-> response
      (. headers)
      (. entries)
      (js/call)
      (js/Object.fromEntries)
      (js->clj)))

(defn response-body [response]
  (async
   (if (json-response? response)
     (-> @((. response json))
         js->clj
         walk/keywordize-keys)
     @((. response text)))))

(defn parse-response [response]
  (async
   (let [parsed {:status (. response status)
                 :body @(response-body response)
                 :content-type (content-type response)
                 :headers (response-headers response)}]
     (if (successful-response? response)
       parsed
       (throw (ex-info "Failed to fetch Harvest data" parsed))))))

(defn harvest-request
  "Low-level Harvest request helper.

  method is a keyword such as :get or :post. path can omit /api/v2. opts may
  include :query for URL query params and :body for JSON request bodies.
  Returns {:status :body :content-type :headers}; JSON bodies are converted to
  Clojure data with keyword keys."
  ([method path] (harvest-request method path {}))
  ([method path opts] (harvest-request method path opts (config/config-dev)))
  ([method path opts cfg]
   (async
    @(parse-response @(fetch-harvest path (assoc opts :method method) cfg)))))

(defn body-of [promise]
  (async
   (:body @promise)))

(defn me
  "Return the authenticated Harvest user."
  []
  (body-of (harvest-request :get "/users/me.json")))

(defn list-projects
  "Return projects assigned to the authenticated user.

  This intentionally uses /users/me/project_assignments instead of /projects,
  because personal Harvest tokens may not be authorized to list all account
  projects."
  ([] (list-projects {}))
  ([query]
   (async
    (mapv :project (:project_assignments
                    (:body @(harvest-request :get "/users/me/project_assignments"
                                             {:query (merge {:per-page default-per-page} query)})))))))

(defn list-project-assignments
  "Return the authenticated user's project assignments, including nested tasks.

  This is the most useful discovery endpoint for agents because it includes the
  projects the user can log time against and their task assignments."
  ([] (list-project-assignments {}))
  ([query]
   (async
    (:project_assignments
     (:body @(harvest-request :get "/users/me/project_assignments"
                              {:query (merge {:per-page default-per-page} query)}))))))

(defn assignment-project [assignment]
  (assoc (:project assignment) :client (:client assignment)))

(defn project-matches? [needle project]
  (let [needle (str/lower-case needle)
        client-name (or (get-in project [:client :name]) "")
        haystack (str/lower-case (str (:name project) " " (:code project) " " client-name))]
    (str/includes? haystack needle)))

(defn project-assignment-matches? [needle assignment]
  (project-matches? needle (assignment-project assignment)))

(defn find-project-assignments [needle]
  (async
   (vec (filter #(project-assignment-matches? needle %) @(list-project-assignments)))))

(defn find-projects
  "Find assigned projects by case-insensitive substring across project name,
  project code, and client name. Returns a vector of matching projects with
  client data attached."
  [needle]
  (async
   (mapv assignment-project @(find-project-assignments needle))))

(defn find-project
  "Find exactly one assigned project by name/code/client substring.

  Throws if there are no matches or multiple matches, with candidate project
  details in ex-data. Use find-projects first when unsure."
  [needle]
  (async
   (let [matches @(find-projects needle)]
     (cond
       (= 1 (count matches)) (first matches)
       (empty? matches) (throw (ex-info "No Harvest project matched" {:needle needle}))
       :else (throw (ex-info "Multiple Harvest projects matched"
                             {:needle needle
                              :matches (mapv #(select-keys % [:id :name :code :client]) matches)}))))))

(defn find-project-assignment [project-id-or-name]
  (async
   (let [assignments @(list-project-assignments)
         matches (if (number? project-id-or-name)
                   (filter #(= project-id-or-name (get-in % [:project :id])) assignments)
                   (filter #(project-assignment-matches? project-id-or-name %) assignments))]
     (cond
       (= 1 (count matches)) (first matches)
       (empty? matches) (throw (ex-info "No Harvest project assignment matched"
                                        {:project project-id-or-name}))
       :else (throw (ex-info "Multiple Harvest project assignments matched"
                             {:project project-id-or-name
                              :matches (mapv #(select-keys (assignment-project %) [:id :name :code :client])
                                             matches)}))))))

(defn list-project-task-assignments [project-id]
  (async
   (:task_assignments
    (:body @(harvest-request :get
                             (str "/projects/" project-id "/task_assignments")
                             {:query {:per-page default-per-page}})))))

(defn assignment-active? [assignment]
  (not= false (:is_active assignment)))

(defn task-summary [assignment]
  (let [task (:task assignment)]
    {:id (:id task)
     :name (:name task)
     :billable (:billable assignment)
     :active (:is_active assignment)}))

(defn list-project-tasks
  "Return task summaries for a project id or project search string.

  Example:
    (async @(list-project-tasks \"P&L\"))"
  [project-id-or-name]
  (async
   (let [assignment @(find-project-assignment project-id-or-name)]
     (mapv task-summary (:task_assignments assignment)))))

(defn task-name-matches? [needle assignment]
  (let [needle (str/lower-case needle)
        task-name (str/lower-case (or (get-in assignment [:task :name]) ""))]
    (or (= needle task-name)
        (str/includes? task-name needle))))

(defn resolve-project-id [{:keys [project-id project-name]}]
  (async
   (cond
     project-id project-id
     project-name (:id @(find-project project-name))
     :else (throw (ex-info "Harvest project-id or project-name is required" {})))))

(defn resolve-task-id [project-id {:keys [task-id task-name]}]
  (async
   (cond
     task-id task-id
     :else
     (let [project-assignment @(find-project-assignment project-id)
           assignments (filter assignment-active? (:task_assignments project-assignment))
           matches (if task-name
                     (filter #(task-name-matches? task-name %) assignments)
                     assignments)]
       (cond
         (= 1 (count matches)) (get-in (first matches) [:task :id])
         (empty? matches) (throw (ex-info "No Harvest task matched"
                                          {:project-id project-id
                                           :task-name task-name
                                           :available-tasks (mapv task-summary assignments)}))
         :else (throw (ex-info "Multiple Harvest tasks matched"
                               {:project-id project-id
                                :task-name task-name
                                :available-tasks (mapv task-summary matches)})))))))

(defn require-entry-fields! [entry]
  (doseq [k [:spent-date :hours]]
    (when (nil? (get entry k))
      (throw (ex-info "Missing required Harvest time entry field" {:field k
                                                                   :entry entry})))))

(defn time-entry-payload
  "Resolve a friendly time-entry map into the exact Harvest POST payload.

  Accepts:
    :project-id or :project-name
    :task-id or :task-name
    :spent-date, :hours, optional :notes

  This does not create an entry. Use it as a dry run before log-hours!."
  [entry]
  (async
   (require-entry-fields! entry)
   (let [project-id @(resolve-project-id entry)
         task-id @(resolve-task-id project-id entry)]
     {:project_id project-id
      :task_id task-id
      :spent_date (:spent-date entry)
      :hours (:hours entry)
      :notes (:notes entry)})))

(defn log-hours!
  "Create a Harvest time entry.

  Accepts the same map as time-entry-payload. This performs a real POST to
  Harvest, so only call it after the user explicitly confirms the date, hours,
  project, task, and notes.

  Example:
    (async
      @(log-hours! {:project-name \"P&L\"
                    :task-name \"Programming\"
                    :spent-date \"2026-04-27\"
                    :hours 8
                    :notes \"Worked on PNL page improvements\"}))"
  [entry]
  (async
   (let [payload @(time-entry-payload entry)]
     (:body @(harvest-request :post "/time_entries" {:body payload})))))

(defn list-time-entries
  "Return Harvest time entries for the authenticated user.

  Common query keys: :from, :to, :project-id, :task-id, :is-running, :per-page.
  Keyword query names are converted from kebab-case to Harvest snake_case."
  ([] (list-time-entries {}))
  ([query]
   (async
    (:time_entries
     (:body @(harvest-request :get "/time_entries"
                              {:query (merge {:per-page default-per-page} query)}))))))

(defn sum-hours [entries]
  (reduce + 0 (map #(or (:hours %) 0) entries)))

(defn hours-by [entry->key entries]
  (reduce (fn [acc entry]
            (let [k (entry->key entry)]
              (assoc acc k (+ (get acc k 0) (or (:hours entry) 0)))))
          {}
          entries))

(defn summarize-time-entries
  "Summarize an already fetched collection of Harvest time entries."
  [entries]
  {:entry-count (count entries)
   :total-hours (sum-hours entries)
   :by-day (hours-by :spent_date entries)
   :by-project (hours-by #(get-in % [:project :name]) entries)
   :by-task (hours-by #(get-in % [:task :name]) entries)})

(defn hours-summary
  "Fetch time entries and return {:entry-count :total-hours :by-day :by-project :by-task}.

  Example:
    (async
      @(hours-summary {:from \"2026-04-01\"
                       :to \"2026-04-30\"
                       :project-id 43476848}))"
  [query]
  (async
   (summarize-time-entries @(list-time-entries query))))

(comment
  ;; Cold-start examples for future agents:
  ;;
  ;; 1. Confirm credentials work.
  (config/read-config "envs/dev.edn")

  (me)

  ;; 2. Discover the Azul PNL project and its tasks.
  (find-projects "P&L")
  (list-project-tasks "P&L")

  ;; 3. Report hours.
  (hours-summary {:from "2026-04-01" :to "2026-04-30"})

  ;; 4. Dry-run a time entry. This does not write to Harvest.
  (time-entry-payload {:project-name "P&L"
                       :task-name "Programming"
                       :spent-date "2026-04-28"
                       :hours 8
                       :notes "Worked on a new changelog page in the Azul MAI frontend."})

  ;; 5. Real write. Only do this after explicit user confirmation.
  (log-hours! {:project-name "P&L"
               :task-name "Programming"
               :spent-date "2026-04-28"
               :hours 8
               :notes "- Worked on a new changelog page in the Azul MAI frontend.\n- Sync with the team about next line of work, cancellations page improvements."})
  )



