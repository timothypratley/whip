(ns whip.view
  (:require
    [whip.model :as model]
    [cljs.test :refer-macros [is]]
    [devcards.core :refer-macros [defcard-rg deftest]]
    [goog.dom.forms :as forms]
    [reagent.core :as reagent]))

(defn projects-list [app-state]
  [:div
   [:h2 "Projects"]
   [:form
    {:on-submit
     (fn add-project-submit [e]
       (.preventDefault e)
       (model/add-project!
         app-state
         (forms/getValueByName (.-target e) "project-title")))}
    [:input
     {:type "text"
      :name "project-title"}]
    [:input
     {:type "submit"
      :value "Add project"}]]
   [:ul
    (for [[id {:keys [title]}] (:projects @app-state)]
      [:li
       {:key id
        :on-click
        (fn project-click [e]
          (model/view-project! app-state id))}
       title])]])

(def example-projects
  {:view [:projects-list]
   :projects
   {"aaa"
    {:title "Build a project management tool"
     :statuses ["planned" "in progress" "done"]}
    "bbb"
    {:title "Examples"
     :statuses ["planned" "pending"]}}
   :stories
   {1 {:title "Design a data model for projects and stories"
       :status "done"
       :project-id "aaa"
       :order 1}
    2 {:title "Create a story title entry form"
       :status "in progress"
       :project-id "aaa"
       :order 2}
    3 {:title "Implement a way to finish stories"
       :status "in progress"
       :project-id "aaa"
       :order 3}
    4 {:title "Build a todo list"
       :status "planned"
       :project-id "aaa"
       :order 4}
    5 {:title "Draw cards to represent stories"
       :status "planned"
       :project-id "aaa"
       :order 5}
    6 {:title "Create lanes to represent story status"
       :status "planned"
       :project-id "aaa"
       :order 6}}})

(def example-app-state
  (reagent/atom example-projects))

(defcard-rg projects-list-example
  [projects-list example-app-state])

;; exercise -- use local state and buttons to compare with form handling
(defn story-card [app-state story-id {:keys [title status]}]
  [:li.card
   {:draggable "true"
    :on-drag-start (fn card-drag-start [e]
                     (.setData (.-dataTransfer e) "text/plain" story-id)
                     (set! (.. e -dataTransfer -dropEffect) "move"))}
   [:a
    {;; TODO: :href (str "#/story/" story-id)
     ;; TODO: pass type and id instead of path
     :on-click
     (fn []
       (swap! app-state assoc :view [:story-details story-id]))}
    (if (= status "done")
      [:del title]
      [:span
       title
       " "
       [:button
        {:on-click
         (fn done-click [e]
           (model/set-story-status! app-state story-id "done"))}
        "done"]])]
   [:a
    {:href ""}
    [:img
     {:src "img/logo.png"
      :style {:height 20}}]]])

(defcard-rg done-story-card-example
  [story-card example-app-state 1 (get-in @example-app-state [:stories 1])])

(defn story-card-example-component []
  (let [app-state (reagent/atom example-projects)]
    (fn a-story-card-example-component []
      [story-card app-state 2 (get-in @app-state [:stories 2])])))

(defcard-rg story-card-example
  [story-card-example-component])

(defn add-story-form [app-state project-id]
  [:form
   {:on-submit
    (fn add-story-submit [e]
      (.preventDefault e)
      (model/add-story!
        app-state
        project-id
        (forms/getValueByName (.-target e) "story-title")))}
   [:input
    {:type "text"
     :name "story-title"}]
   [:input
    {:type "submit"
     :value "Add story"}]])


(defn project-board [app-state project-id]
  [:div.board
   [:h2 (get-in @app-state [:projects project-id :title])]
   (doall
     (for [status (get-in @app-state [:projects project-id :statuses])]
       ^{:key status}
       [:ul.column
        {:on-drop (fn drop-on-column [e]
                    (.preventDefault e)
                    (let [story-id (int (.getData (.-dataTransfer e) "text"))]
                      (model/set-story-status! app-state story-id status)))
         :on-drag-over (fn drag-over-column [e]
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
        [add-story-form]]))])

(defcard-rg project-board-example
  [project-board example-app-state "aaa"])

(defn line [app-state {:keys [project-id status]} k v]
  (case k
    :status
    (into
      [:select
       {:default-value v}]
      (for [s (get-in @app-state [:projects project-id :statuses])]
        [:option s]))
    :project-id
    (into
      [:select
       {:default-value v}]
      (for [[k {:keys [title]}] (:projects @app-state)]
        [:option
         {:value k}
         title]))
    :order
    [:input
     {:type "number"
      :name (name k)
      :min 1
      ;; TODO: efficient way? react to swaps.
      :max (count (filter #(and (= (:status %) status) (= (:project-id %) project-id)) (vals (:stories @app-state))))
      :default-value v}]
    [:input
     {:type "text"
      :name (name k)
      :default-value (str v)
      :style {:width "100%"}}]))

;; TODO:
;; good example for having a resize callback
(defn story-details [app-state story-id]
  (let [{:keys [title] :as story}
        (get-in @app-state [:stories story-id])]
    [:div
     [:textarea
      {:rows 1
       :name "title"
       :default-value title
       :style {:width "100%"
               :height "auto"
               :font-size "1.5em"}}]
     (into
       [:table]
       (for [[k v] (dissoc story :title)]
         [:tr
          [:td (name k)]
          [:td [line app-state story k v]]]))]))

(defcard-rg card-details-example
  [story-details example-app-state 1])

;; talk about core.match?
#_(defn whip-content [app-state]
    (match (:view @app-state)
           [:project project-id] [project-board app-state project-id]
           [:story project-id story-id] [story-details project-id story-id]
           [project-board]))

(defn whip-content [app-state]
  (let [[page id] (:view @app-state)]
    (case page
      :project [project-board app-state id]
      :story-details [story-details app-state id]
      :project-list [projects-list app-state]
      [:h3 "ERROR" page])))

(defn navbar [app-state]
  [:nav
   [:ul.nav-list
    [:li
     [:a
      [:img
       {:src "img/logo.png"
        :style {:height 35}}]]]
    [:li
     [:a
      {:href "#/"}
      "Whip project management tool"]]
    [:ul.nav-list
     {:style {:float "right"}}
     [:li
      [:a
       {:href "#/"}
       "About"]]
     [:li
      [:a
       {:href "#/settings"}
       "Tim"]]]]])

(defcard-rg navbar-example
  [navbar example-app-state])

(defn whip-main [app-state]
  [:div.content
   [:div.header
    [navbar app-state]]
   [:div.main
    [whip-content app-state]]
   [:div.footer "Some footer"]])
