(ns whip.model
  (:require
    [devcards.core :refer-macros [deftest]]
    [cljs.test :refer-macros [is testing]]
    [reagent.core :as reagent]))

;; move to data model
(defonce app-state
  (reagent/atom
    {:view [:project-list]
     :projects
     {"aaa"
      {:title "Build Whip"
       :order 1}}
     :stories
     {1 {:title "Design a data model for projects and stories"
         :project-id "aaa"
         :status "done"
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
         :order 6}}}))

(defn unique []
  ;;(random-uuid)
  ;; handle id assignment on the server,
  ;; here we have 45k 3 letter codes, nice for testing.
  (.toString (rand-int (js/Math.pow 36 3)) 36))

(defn add-project! [app-state title]
  (swap! app-state assoc-in [:projects (unique)]
         {:title title
          :order (inc (apply max 0 (map :order (vals (:projects @app-state)))))}))

(defn max-order [app-state project-id]
  (apply max 0 (map :order (vals (filter #(= (:project-id %) project-id) (:stories @app-state))))))

(deftest max-order-test
  (testing "blah"
    (is (= 1 2))))

(defn add-story! [app-state project-id title]
  (swap! app-state update :stories
         assoc (unique) {:title title
                         :order (inc (max-order app-state project-id))}))

(defn story-done! [app-state story-id]
  (swap! app-state assoc-in [:stories story-id :status] "done"))

(defn view-project! [app-state project-id]
  (swap! app-state assoc :view [:project project-id]))
