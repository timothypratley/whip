(ns whip.view.project
  (:require
    [devcards.core :refer-macros [defcard-rg deftest]]
    [goog.dom.forms :as forms]
    [goog.events.KeyCodes :as KeyCodes]
    [reagent.core :as reagent]
    [whip.communication :as communication]
    [whip.model :as model]))

(defn gravatar-img [email]
  (str "//www.gravatar.com/avatar/" (communication/md5-hash email) "?s=30&d=wavatar"))

(defn member [email details]
  [:span.member
   [:img
    {:src (gravatar-img email)
     :title details}]])

;; exercise -- use local state and buttons to compare with form handling
(defn story-card [app-state story-id {:keys [title members]}]
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
     (for [m members
           :let [email (get-in @app-state [:team m] m)
                 details (get-in @app-state [:team email :details])]]
       ^{:key email}
       [member email details]))])

(defcard-rg done-story-card-example
  [story-card model/app-state 1 (get-in @model/app-state [:stories 1])])

(defn story-card-example-component []
  ;; capture the initial state
  (let [app-state (reagent/atom @model/app-state)]
    (fn a-story-card-example-component []
      [story-card app-state 2 (get-in @app-state [:stories 2])])))

(defcard-rg story-card-example
  [story-card-example-component])

(defn add-story-form [app-state project-id status adding?]
  [:form
   {:on-submit
    (fn add-story-submit [e]
      (.preventDefault e)
      (model/add-story! app-state project-id status
                        (forms/getValueByName (.-target e) "story-title"))
      (swap! adding? not)
      nil)}
   [:textarea
    {:rows 2
     :required "required"
     :auto-focus "autofocus"
     :name "story-title"
     :style {:width "96%"}}]
   [:input
    {:type "submit"
     :value "Add"
     :style {:background-color "#A1B56C"}}]
   [:button
    {:type "button"
     :on-click
     (fn [e]
       (swap! adding? not)
       nil)}
    "Cancel"]])

(defn maybe-add-story-form [app-state project-id status]
  (let [adding? (reagent/atom false)]
    (fn a-maybe-add-story-form [app-state project-id status]
      (if @adding?
        [add-story-form app-state project-id status adding?]
        [:button
         {:on-click
          (fn add-story-click [e]
            (swap! adding? not)
            nil)}
         "Add a story"]))))

(defn project-title-input [title editing?]
  (reagent/create-class
    {:display-name "project-title"
     :component-did-mount
     (fn project-title-input-did-mount [this]
       (doto (.getDOMNode this)
         (.setSelectionRange 10000 10000)))
     :reagent-render
     (fn project-title-input-render [title]
       [:input
        {:default-value title
         :required "required"
         :auto-focus "autofocus"
         :name "project-title"
         :style {:width "95%"
                 :font-size "2em"
                 :padding "20px"}
         :on-key-down
         (fn project-title-input-key-down [e]
           (when (= (.-keyCode e) KeyCodes/ESC)
             (swap! editing? not)
             nil))}])}))

(defn project-title [app-state project-id]
  (let [editing? (reagent/atom false)]
    (fn a-project-title [app-state project-id]
      (let [title (get-in @app-state [:projects project-id :title])]
        (if @editing?
          [:form
           {:on-submit
            (fn project-title-submit [e]
              (.preventDefault e)
              (model/set-project-title! app-state project-id
                                        (forms/getValueByName (.-target e) "project-title"))
              (swap! editing? not)
              nil)
            :on-blur
            (fn [e]
              (swap! editing? not)
              nil)}
           [project-title-input title editing?]]
          [:h1
           {:on-click
            (fn project-title-click [e]
              (swap! editing? not)
              nil)}
           title])))))

(defn project-board [app-state {:keys [project-id]}]
  [:div.board
   [project-title app-state project-id]
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
        (let [stories (model/stories-by-project-status app-state project-id status)]
          (doall
            (for [[story-id story] stories]
              ^{:key story-id}
              [story-card app-state story-id story])))
        [:center
         [maybe-add-story-form app-state project-id status]]]))])

(defcard-rg project-board-example
  [project-board model/app-state {:project-id "aaa"}])

(defn project-board-reaction []
  (let [stories (model/stories-by-project-status-reaction model/app-state "aaa" "In Progress")]
    (fn []
      (prn "Rendering in progress stories")
      [:ul
       (doall
         (for [[story-id story] @stories]
           ^{:key story-id}
           [story-card model/app-state story-id story]))])))

(defcard-rg project-board-reaction-example
  [project-board-reaction])
