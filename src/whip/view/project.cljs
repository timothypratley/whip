(ns whip.view.project
  (:require
    [clojure.string :as string]
    [devcards.core :refer-macros [defcard-rg deftest]]
    [goog.crypt :as crypt]
    [goog.dom.forms :as forms]
    [reagent.core :as reagent]
    [whip.model :as model])
  (:import
    [goog.crypt Md5]))

(defn md5-hash [s]
  (let [md5 (Md5.)]
    (.update md5 s)
    (crypt/byteArrayToHex (.digest md5))))

(defn gravatar [email]
  (str "http://www.gravatar.com/avatar/"
       (md5-hash (string/trim email))
       "?s=30&d=wavatar"))

;; exercise -- use local state and buttons to compare with form handling
(defn story-card [app-state story-id {:keys [title status members]}]
  [:li.story
   {:draggable "true"
    :on-drag-start
    (fn card-drag-start [e]
      (.setData (.-dataTransfer e) "text/plain" story-id)
      (set! (.. e -dataTransfer -dropEffect) "move"))}
   [:a
    {:href (str "#/story/" story-id)}
    title]
   (into
     [:div.members]
     (for [member members]
       [:span.member
        [:img
         {:src (gravatar (get-in @app-state [:team member] member))}]]))])

(defcard-rg done-story-card-example
  [story-card model/app-state 1 (get-in @model/app-state [:stories 1])])

(defn story-card-example-component []
  ;; capture the initial state
  (let [app-state (reagent/atom @model/app-state)]
    (fn a-story-card-example-component []
      [story-card app-state 2 (get-in @app-state [:stories 2])])))

(defcard-rg story-card-example
  [story-card-example-component])

(defn add-story-form [app-state project-id status]
  [:form
   {:on-submit
    (fn add-story-submit [e]
      (.preventDefault e)
      (model/add-story!
        app-state
        project-id
        (forms/getValueByName (.-target e) "story-title")
        status))}
   [:input
    {:type "text"
     :name "story-title"}]
   [:input
    {:type "submit"
     :value "Add story"}]])

(defn project-board [app-state {:keys [project-id]}]
  [:div.board
   [:h1 (get-in @app-state [:projects project-id :title])]
   (doall
     (for [status (get-in @app-state [:projects project-id :statuses])]
       ^{:key status}
       [:ul.column
        {:on-drop
         (fn drop-on-column [e]
           (.preventDefault e)
           (let [story-id (.getData (.-dataTransfer e) "text")]
             (model/set-story-status! app-state story-id status)))
         :on-drag-over
         (fn drag-over-column [e]
           (.preventDefault e)
           (set! (.. e -dataTransfer -dropEffect) "move"))}
        [:h3 status]
        (doall
          (for [[story-id story] (sort-by :order (get-in @app-state [:stories]))
                :when (= (:project-id story) project-id)
                :when (= (:status story) status)
                ;; TODO: ^^ before?
                ]
            ^{:key story-id}
            [story-card app-state story-id story]))
        [add-story-form app-state project-id status]]))])

(defcard-rg project-board-example
  [project-board model/app-state {:project-id "aaa"}])