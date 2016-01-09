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
  {:projects
   {"aaa"
    {:title "Build a project management tool"}}
   :stories
   {1 {:title "Design a data model for projects and stories"
       :status "done"
       :project-id "aaa"
       :order 1}
    2 {:title "Create a story title entry form"
       :project-id "aaa"
       :order 2}
    3 {:title "Implement a way to finish stories"
       :project-id "aaa"
       :order 3}
    4 {:title "Build a todo list"
       :project-id "aaa"
       :order 4}
    5 {:title "Draw cards to represent stories"
       :project-id "aaa"
       :order 5}
    6 {:title "Create lanes to represent story status"
       :project-id "aaa"
       :order 6}}})

(def example-app-state
  (reagent/atom example-projects))

(defcard-rg projects-list-example
  [projects-list example-app-state])

;; exercise -- use local state and buttons to compare with form handling
(defn story-card [app-state story-id {:keys [title status]}]
  [:li.card
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
           (model/story-done! app-state story-id))}
        "done"]])]])

(defcard-rg done-story-card-example
  [story-card example-app-state 1 (get-in @example-app-state [:stories 1])])

(defn story-card-example-component []
  (let [app-state (reagent/atom example-projects)]
    (fn a-story-card-example-component []
      [story-card app-state 2 (get-in @app-state [:stories 2])])))

(defcard-rg story-card-example
  [story-card-example-component])

(defn project-board [app-state project-id]
  [:div
   [:h2 (get-in @app-state [:projects project-id :title])]
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
      :value "Add story"}]]
   [:ul
    (for [[story-id story] (sort-by :order (get-in @app-state [:stories]))
          :when (= (:project-id story) project-id)
          ;; TODO: ^^ before?
          ]
      ^{:key story-id}
      [story-card app-state story-id story])]])

(defcard-rg project-board-example
  [project-board example-app-state "aaa"])

(defn story-details [app-state story-id]
  (let [{:keys [title] :as story}
        (get-in @app-state [:stories story-id])]
    [:div
     [:h2 title]
     (into
       [:dl]
       (mapcat
         (fn [[k v]]
           [[:dt (str k)]
            [:dd (str v)]])
         story))]))

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
      :project-list [projects-list app-state])))

(defn navbar [app-state]
  [:nav
   [:ul
    [:li
     [:img
      {:src "img/logo.png"
       :style {:height 35}}]]
    [:li
     [:h3
      [:a
       {:href "#/"}
       "Whip project management tool"]]]
    [:li
     [:a
      {:href "#/settings"}
      "Tim"]]]])

(defn whip-main [app-state]
  [:div.content
   [:div.header
    [navbar app-state]]
   [:div.main
    [whip-content app-state]]
   [:div.footer "Some footer"]])
