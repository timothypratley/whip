(ns whip.view.projects
  (:require
    [devcards.core :refer-macros [defcard-rg deftest]]
    [whip.model :as model]
    [goog.dom.forms :as forms]))

(defn burndown-chart []
  (into
    [:svg
     {:width 300
      :height :200
      :style {:border "1px solid lightgrey"}}
     [:text {:x 200 :y 30} "Burn Down"]
     ;; When Reagent 6.0 is released, you will be able to use xlink-href,
     ;; because React 14 supports this attribute mapping.
     ;; [:image {:xlink-href "img/logo.png" :x 170 :y 15 :height 20 :width 20}]
     ;; In the meantime you can dangerouslySetInnerHTML.
     [:g {:dangerouslySetInnerHTML
          {:__html "<image xlink:href=\"img/logo.png\" x=170 y=15 height=20 width=20 /> "}}]]
    (for [i (range 9)]
      [:line
       {:x1 (* (inc i) 30)
        :y1 180
        :x2 (* (inc i) 30)
        :y2 (+ (* 15 i) (rand-int 50))
        :stroke "green"
        :stroke-width 15}])))

(defcard-rg burndown-chart-example
  [burndown-chart])

(defn projects-list [app-state]
  [:div
   [:span {:data-awesome "maximus"}]    ;; will have the data-awesome attribute

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
   [:ul.projects
    (for [[id {:keys [title]}] (:projects @app-state)]
      ^{:key id}
      [:li.project
       [:a
        ;; TODO: bidi this back
        {:href (str "#/project/" id)}
        [:h3 title]]
       [burndown-chart]
       [:ul {:style {:float "right"}}
        [:li "Jeremy completed project kickoff meeting agenda."]
        [:li "Cards can be moved was moved from Done to In Progress."]]])]])

(defcard-rg projects-list-example
  [projects-list model/app-state])