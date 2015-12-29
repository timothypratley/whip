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
      {:tasks
       {1 {:title "Design a data model for projects and tasks"
           :status "done"
           :order 1}
        2 {:title "Create a task title entry form"
           :order 2}
        3 {:title "Implement a way to finish tasks"
           :order 3}
        4 {:title "Build a todo list"
           :order 4}
        5 {:title "Draw cards to represent tasks"
           :order 5}
        6 {:title "Create lanes to represent task status"
           :order 6}}}}}))

(defn unique []
  ;;(random-uuid)
  ;; handle id assignment on the server,
  ;; here we have 45k 3 letter codes, nice for testing.
  (.toString (rand-int (js/Math.pow 36 3)) 36))

(defn max-order []
  ;; TODO: project specific, and handle server side
  (inc (apply max 0
              (map :order (vals (get-in @app-state [:projects "Build Whip" :tasks]))))))

(defn add-task [title]
  (swap! app-state update-in [:projects "Build Whip" :tasks]
         assoc (unique) {:title title
                         :order (max-order)}))

(defn task-done [id]
  (swap! app-state assoc-in [:projects "Build Whip" :tasks id :status]
         "done"))

;; exercise -- use local state and buttons

(defn task-card [[id {:keys [title status]}]]
  [:li.card {:key id}
   (if (= status "done")
     [:del title]
     [:span
      title
      " "
      [:button
       {:on-click
        (fn done-click [e]
          (task-done id))}
       "done"]])])

(defn project-board []
  [:div.board
   [:ul
    (for [task (sort-by :order (get-in @app-state [:projects "Build Whip" :tasks]))]
      [task-card task])]])

(defn whip-main []
  [:div.content
   [:div.header [:h1 "Whip project management tool"]]
   [:div.main
    [:h2 "Build a project management tool"]
    [:form
     {:on-submit
      (fn task-submit [e]
        (.preventDefault e)
        (add-task (forms/getValueByName (.-target e) "task-title")))}
     [:input
      {:type "text"
       :name "task-title"}]
     [:input
      {:type "submit"
       :value "Add task"}]]
    [project-board]]
   [:div.footer "Some footer"]])

(reagent/render-component [whip-main] (dom/getElement "app"))
