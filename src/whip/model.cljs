(ns whip.model
  (:require
    [devcards.core :refer-macros [deftest]]
    [cljs.test :refer-macros [is testing]]
    [reagent.core :as reagent]))

;; move to data model
(defonce app-state
  (reagent/atom
    {:view [:project-list]
     :team
     {"Jeremy" "jeremy@code-adept.com"
      "Jordan" "jordan@biserkov.com"
      "Justin" "justin.h.holguin@gmail.com"
      "Michael" "michael.gaare@gmail.com"
      "Nick" "nickmbailey@gmail.com"
      "Timothy" "timothypratley@gmail.com"}
     :projects
     {"aaa"
      {:title "Build a project management tool"
       :statuses ["Planned" "In Progress" "Done"]}
      "bbb"
      {:title "Examples"
       :statuses ["Planned" "Pending"]}}
     :stories
     {"1" {:title "Design a data model for projects and stories"
           :status "Done"
           :project-id "aaa"
           :members #{"Timothy" "Michael"}
           :order 1}
      "2" {:title "Create a story title entry form"
           :status "In Progress"
           :project-id "aaa"
           :members #{"Timothy"}
           :order 2}
      "3" {:title "Implement a way to finish stories"
           :status "In Progress"
           :project-id "aaa"
           :members #{"Nick" "Justin" "Jordan"}
           :order 3}
      "4" {:title "Build a todo list"
           :status "Planned"
           :project-id "aaa"
           :members #{"Jeremy" "Jordan"}
           :order 4}
      "5" {:title "Draw cards to represent stories"
           :status "Planned"
           :project-id "aaa"
           :members #{"Justin"}
           :order 5}
      "6" {:title "Create lanes to represent story status"
           :status "Planned"
           :project-id "aaa"
           :members #{"Michael"}
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

(defn add-story! [app-state project-id title status]
  (swap! app-state update :stories assoc
         (unique) {:title title
                   :status status
                   :project-id project-id
                   :order (inc (max-order app-state project-id))}))

(defn set-story-status! [app-state story-id status]
  (swap! app-state assoc-in [:stories story-id :status] status))

(defn navigation [event]
  (swap! app-state assoc :route (.-token event)))