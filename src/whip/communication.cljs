(ns whip.communication
  (:require
    [cljs.pprint :as pprint]
    [clojure.string :as string]
    [goog.crypt :as crypt]
    [goog.net.XhrIo :as xhr]
    [whip.model :as model]
    [cljs.core.async :refer [<!]]
    [cljs-http.client :as http])
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:import
    [goog.crypt Md5]
    [goog.net Jsonp]))

(defn md5-hash [s]
  (let [md5 (Md5.)]
    (.update md5 (string/trim s))
    (crypt/byteArrayToHex (.digest md5))))

(xhr/send "data.edn"
          (fn [e]
            (prn (.. e -target getResponseText))))

(defn member-details [email]
  (doto (Jsonp. (str "//www.gravatar.com/" (md5-hash email) ".json"))
    (.send
      nil
      (fn profile-success [result]
        (model/set-member! model/app-state email
                           (with-out-str (pprint/pprint ((js->clj result) "entry")))))
      (fn profile-error [error]
        (model/set-member! model/app-state email "No profile")))))

;; TODO: fetch everyone in the team
(member-details "timothypratley@gmail.com")

(go (let [response (<! (http/get "data.edn"))]
      (prn (:status response))
      (prn (:body response))))

;; TODO: cljs-http jsonp example?