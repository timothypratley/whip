(ns ^:figwheel-always whip.core
  (:require
    [reagent.core :as reagent]
    [goog.dom :as dom]
    [goog.dom.forms :as forms]))

(enable-console-print!)

(defonce app-state
  (reagent/atom
    {:projects
     {"Build Whip"
      {:stories
       {1 {:title "Design a data model for projects and stories"
           :status "done"
           :order 1}
        2 {:title "Create a story title entry form"
           :order 2}
        3 {:title "Implement a way to finish stories"
           :order 3}
        4 {:title "Build a todo list"
           :order 4}
        5 {:title "Draw cards to represent stories"
           :order 5}
        6 {:title "Create lanes to represent story status"
           :order 6}}}}}))

(defn unique []
  ;;(random-uuid)
  ;; handle id assignment on the server,
  ;; here we have 45k 3 letter codes, nice for testing.
  (.toString (rand-int (js/Math.pow 36 3)) 36))

(defn max-order []
  ;; TODO: project specific, and handle server side
  (inc (apply max 0
              (map :order (vals (get-in @app-state [:projects "Build Whip" :stories]))))))

(defn add-story [title]
  (swap! app-state update-in [:projects "Build Whip" :stories]
         assoc (unique) {:title title
                         :order (max-order)}))

(defn story-done [id]
  (swap! app-state assoc-in [:projects "Build Whip" :stories id :status]
         "done"))

;; exercise -- use local state and buttons

(defn story-card [[id {:keys [title status]}]]
  [:li.card {:key id}
   (if (= status "done")
     [:del title]
     [:span
      title
      " "
      [:button
       {:on-click
        (fn done-click [e]
          (story-done id))}
       "done"]])])

(defn project-board []
  [:div.board
   [:ul
    (for [story (sort-by :order (get-in @app-state [:projects "Build Whip" :stories]))]
      [story-card story])]])

(defn whip-main []
  [:div.content
   [:div.header [:h1 "Whip project management tool"]]
   [:div.main
    [:h2 "Build a project management tool"]
    [:form
     {:on-submit
      (fn add-story-submit [e]
        (.preventDefault e)
        (add-story (forms/getValueByName (.-target e) "story-title")))}
     [:input
      {:type "text"
       :name "story-title"}]
     [:input
      {:type "submit"
       :value "Add story"}]]
    [project-board]]
   [:div.footer "Some footer"]])

(reagent/render-component [whip-main] (dom/getElement "app"))
