(ns weekly.repository
  (:require
    [environ.core :refer [env]]
    [monger.core :as mg]
    [monger.collection :as mc]
    ;; mongo doesn't support java 8 dates, use clj-time/joda
    [clj-time.local :as l]
    ;; adds joda support
    [monger.joda-time]
    ;; adds cheshire support
    [monger.json]
    )
  (:import (org.bson.types ObjectId)))

(def db-url (env :database-url))
(def db-port (env :database-port))

(defn- conn
  "Returns a new connection.
  TODO: use a connection pool, this spawns a connection plus a monitor connection"
  []
  (let [conn (mg/connect {:host db-url :port db-port})
        db (mg/get-db conn "weekly")]
    db))

(defn stub-data [user-id year month day activity]
  {:id       user-id
   :year     year
   :month    month
   :day      day
   :activity activity
   :payload  {
              :totalCalories 2450
              :protein       {
                              :name     "Protein"
                              :grams    200
                              :calories 800
                              }
              :carbohydrates {
                              :name     "Carbohydrates"
                              :grams    300
                              :calories 1200
                              }
              :fat           {
                              :name     "Fat"
                              :grams    50
                              :calories 450
                              }
              }})

(defn save-eating [user-id year month day activity data]
  (let [db (conn)
        collection activity]
    (do
      (mc/update db collection
                 {:user_id user-id
                  :year    year
                  :month   month
                  :day     day}
                 {:user_id  user-id
                  :year     year
                  :month    month
                  :day      day
                  :activity activity
                  :payload  data}
                 {:upsert true})
      (mc/find-maps db collection {:user_id user-id
                                   :year    year
                                   :month   month
                                   :day     day}))))

(defn save-token
  "Saves a user authentication token with an expiration set
  for the server time when it will need to be refreshed.
  Performs an update-or-insert based on the user's ID"
  [user-id token-body]
  (let [db (conn)
        collection "tokens"
        access-token (:access_token token-body)
        refresh-token (:refresh_token token-body)
        token-type (:token_type token-body)
        expires-in (.plusSeconds (l/local-now) (:expires_in token-body))
        doc {:_id           user-id
             :access_token  access-token
             :refresh_token refresh-token
             :token_type    token-type
             :expires_in    expires-in}]
    (do (mc/update-by-id db collection user-id doc {:upsert true})
        (let [stored (mc/find-map-by-id db collection user-id)
              expires-in (.toString (stored :expires_in))]
          (assoc stored :expires_in expires-in)))))


;;