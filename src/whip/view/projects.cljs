(ns whip.view.projects
  (:require
    [devcards.core :refer-macros [defcard-rg deftest]]
    [whip.model :as model]
    [goog.dom.forms :as forms]))

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
   [:ul.projects
    (for [[id {:keys [title]}] (:projects @app-state)]
      ^{:key id}
      [:a
       ;; TODO: bidi this back
       {:href (str "#/project/" id)}
       [:li.project
        title]])]])

(defcard-rg projects-list-example
  [projects-list model/app-state])