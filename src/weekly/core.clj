(ns weekly.core
  (:require
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.file :refer [wrap-file]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
    [ring.util.response :refer [response file-response redirect]]
    [ring.middleware.reload :as reload]
    [weekly.repository :refer [stub-data save-eating]]
    [org.httpkit.server :refer [run-server with-channel on-close on-receive send!]]
    [clojure.tools.logging :refer [info]]
    [weekly.api :as api]
    ))

(def user-state (atom {}))

(defn- wrap-request-logging [handler]
  (fn [{:keys [request-method uri] :as req}]
    (let [resp (handler req)]
      (info (name request-method) (:status resp)
            (if-let [qs (:query-string req)]
              (str uri "?" qs) uri))
      resp)))

(defn in-dev? [] true)

(defn handler [request id]
  (with-channel request channel
                (info channel "connected" request)
                (on-close channel #(api/on-close id %))
                (on-receive channel #(api/on-receive % id))))

(defroutes app-routes
           (GET "/" [] (file-response "index.html" {:root "resources"}))
           (GET "/ws/:id" [id :as request] (handler request id))
           (context "/api/:user-id/:year/:month/:day/:activity" [user-id year month day activity]
             (GET "/" [user-id year month day activity]
               (response (stub-data user-id year month day activity)))
             (POST "/" [user-id year month day activity :as request]
               (response (save-eating user-id year month day activity (request :body)))))
           (route/not-found "<h1>Page not found</h1>"))

(def app
  (-> app-routes
      (wrap-request-logging)
      (wrap-params)
      (wrap-json-response)
      (wrap-json-body)
      (wrap-file "resources")
      ))

(defn -main [& args]                                        ;; entry point, lein run will pick up and start from here
  (let [handler (if (in-dev?)                               ;;(in-dev? args)
                  (reload/wrap-reload app)                  ;; only reload when dev
                  app)]
    (run-server handler {:port 3000})))

;;