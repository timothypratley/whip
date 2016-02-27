(ns whip.view.story
  (:require
    [clojure.string :as string]
    [devcards.core :refer-macros [defcard-rg deftest]]
    [whip.model :as model]))

(defn line [{:keys [project-id status]} k v statuses projects]
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
      (for [s statuses]
        [:option s]))

    :project-id
    (into
      [:select {:default-value v}]
      (for [[k {:keys [title]}] projects]
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
      :default-value v}]

    [:input
     {:type "text"
      :name (name k)
      :default-value (str v)
      :style {:width "100%"}}]))

(defn story-details [app-state {:keys [story-id]}]
  (let [story (get-in @app-state [:stories story-id])
        statuses (get-in @app-state [:projects (:project-id story) :statuses])
        projects (:projects @app-state)]
    (-> [:form
         {:on-submit
          (fn story-submit [e]
            (.preventDefault e))}]
        (into
          (for [[k v] story]
            [:div
             [:label (string/capitalize (name k))]
             [line story k v statuses projects]]))
        (conj [:input {:type "submit"}]))))

(defcard-rg card-details-example
  [story-details model/app-state {:story-id 1}])
