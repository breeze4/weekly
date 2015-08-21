(ns weekly.core
  (:require
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.file :refer [wrap-file]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.json :refer [wrap-json-response]]
    [ring.util.response :refer [file-response redirect]]
    ))

(def user-state (atom {}))

(defroutes app-routes
           (GET "/" [] (file-response "index.html" {:root "resources"}))
           (route/not-found "<h1>Page not found</h1>"))

(defn logging-middleware [handler]
  (fn [request]
    (do
      (prn request)
      (handler request)
      )))

(def app
  (-> app-routes
      (logging-middleware)
      (wrap-params)
      (wrap-json-response)
      (wrap-file "resources")
      ))