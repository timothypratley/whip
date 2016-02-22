(ns whip.model
  (:require
    [devcards.core :refer-macros [deftest]]
    [cljs.test :refer-macros [is testing]]
    [reagent.core :as reagent]
    [clojure.string :as string])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defonce app-state
  (reagent/atom
    {:view
     [:project-list]

     :team
     ;; TODO: use email as the key!
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

(defn unique
  "For a true uuid, call (random-uuid) instead.
  Id assignment is usually handled on the server.
  This function creates a random base 36 number.
  There are 45k possible 3 letter codes."
  []
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

(defn add-story! [app-state project-id status title]
  (swap! app-state update :stories assoc
         (unique) {:title title
                   :status status
                   :project-id project-id
                   :order (inc (max-order app-state project-id))}))

(defn set-story-status! [app-state story-id status]
  (swap! app-state assoc-in [:stories story-id :status] status))

(defn set-project-title! [app-state project-id title]
  (swap! app-state assoc-in [:projects project-id :title] title))

(defn navigation [event]
  (swap! app-state assoc :route (.-token event)))

(defn set-member! [app-state email details]
  (swap! app-state assoc-in [:team email :details] details))

(defn set-search-term! [app-state search-term]
  (swap! app-state assoc :search-term search-term))

(defn story-search-match [search-term story]
  (or
    (string/blank? search-term)
    (not= -1 (.indexOf (string/lower-case (string/join " " (vals story)))
                       (string/lower-case search-term)))))

(defn filter-stories [stories search-term project-id status]
  (filter
    (fn filter-match [[id story]]
      (and (= (:project-id story) project-id)
           (= (:status story) status)
           (story-search-match search-term story)))
    stories))

(defn stories-by-project-status [app-state project-id status]
  (sort-by
    (comp :order second)
    (filter-stories (:stories @app-state) (:search-term @app-state) project-id status)))

(defn stories-by-project-status-reaction [app-state project-id status]
  (let [search-term (reaction (:search-term @app-state))
        all-stories (reaction (:stories @app-state))
        a (atom nil)
        filtered-stories
        (reaction
          (let [b (filter-stories @all-stories @search-term project-id status)]
            (if (= b @a)
              @a
              (reset! a b))))]
    (reaction (sort-by (comp :order second) @filtered-stories))))

