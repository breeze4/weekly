(ns weekly.api
  (:require
    [ring.util.response :refer [response file-response redirect]]
    [org.httpkit.server :refer [send!]]
    [clojure.tools.logging :refer [info]]
    ))

(defn on-close [id status]
  (prn "channel closed: " id status))

(defn on-receive [id data]
  (prn id data))

(defn send-back [])