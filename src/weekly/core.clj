(ns weekly.core
  (:require
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.file :refer [wrap-file]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.json :refer [wrap-json-response]]
    [ring.util.response :refer [response file-response redirect]]
    [ring.middleware.reload :as reload]
    [weekly.repository :refer [stub-data]]
    [org.httpkit.server :refer [run-server with-channel on-close on-receive send!]]
    [clojure.tools.logging :refer [info]]
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

(defn handler [request]
  (with-channel request channel
                (info channel "connected")
                (on-close channel (fn [status] (println "channel closed: " status)))
                (on-receive channel (fn [data]              ;; echo it back
                                      (send! channel data)))))

(defroutes app-routes
           (GET "/" [] (file-response "index.html" {:root "resources"}))
           (GET "/ws" [] handler)
           (context "/api/:week-id" [week-id]
             (GET "/" [week-id] (response (stub-data week-id))))
           (route/not-found "<h1>Page not found</h1>"))

(def app
  (-> app-routes
      (wrap-request-logging)
      (wrap-params)
      (wrap-json-response)
      (wrap-file "resources")
      ))

(defn -main [& args]                                        ;; entry point, lein run will pick up and start from here
  (let [handler (if (in-dev?)                               ;;(in-dev? args)
                  (reload/wrap-reload app)                  ;; only reload when dev
                  app)]
    (run-server handler {:port 3000})))

;;