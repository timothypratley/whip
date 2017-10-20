(ns whip.view.reactions
  (:require [reagent.core :as reagent]
            [devcards.core :refer-macros [defcard-rg deftest]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(def a (reagent/atom {:x 100 :y 200}))
(def b (reaction (:x @a)))
(def c (reaction (+ @b 10)))

(defn view-c []
  (prn "Rendering view-c")
  [:div
   [:div @c]
   [:button {:on-click (fn [e] (swap! a update :x inc))} "inc x"]
   [:button {:on-click (fn [e] (swap! a update :y inc))} "inc y"]])

(defcard-rg reaction-example
  [view-c])
