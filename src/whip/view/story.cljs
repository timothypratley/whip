(ns whip.view.story
  (:require
    [clojure.string :as string]
    [devcards.core :refer-macros [defcard-rg deftest]]
    [whip.model :as model]
    [reagent.core :as reagent]))

(defn line [app-state {:keys [project-id status]} k v]
  (case k
    :title
    [:textarea
     {:name "title"
      :default-value v
      :required "required"
      :rows 1
      :style {:width "100%"
              :height "auto"
              :font-size "1.5em"}}]

    :status
    (into
      [:select {:default-value v}]
      (for [s (get-in @app-state [:projects project-id :statuses])]
        [:option s]))

    :project-id
    (into
      [:select {:default-value v}]
      (for [[k {:keys [title]}] (:projects @app-state)]
        [:option
         {:value k}
         title]))

    :members
    (into
      [:div]
      (for [member v]
        [:span.tag member]))

    :order
    [:input
     {:type "number"
      :name (name k)
      :min 1
      ;; TODO: efficient way? react to swaps. TODO: not quite right anyway
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
  (let [{:keys [title] :as story} (get-in @app-state [:stories story-id])
        in-valid (reagent/atom #{})]
    (-> [:form
         {:on-submit
          (fn story-submit [e]
            (.preventDefault e))}]
        (into
          (for [[k v] story]
            [:div
             [:label (string/capitalize (name k))]
             [line app-state story k v]]))
        (conj [:input {:type "submit"}]))))

(defcard-rg card-details-example
  [story-details model/app-state {:story-id 1}])
