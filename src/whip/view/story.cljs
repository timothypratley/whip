(ns whip.view.story
  (:require
    [devcards.core :refer-macros [defcard-rg deftest]]
    [whip.model :as model]))

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
(defn story-details [app-state {:keys [story-id]}]
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
  [story-details model/app-state {:story-id 1}])
