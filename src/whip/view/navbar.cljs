(ns whip.view.navbar
  (:require
    [devcards.core :refer-macros [defcard-rg deftest]]
    [whip.model :as model]))

(defn navbar [app-state]
  [:nav
   [:ul.nav-list
    [:li
     [:a
      {:href "#/"}
      [:img
       {:src "img/logo.png"}]
      [:span
       {:style {:font-family "fantasy"}}
       " Whip"]]]

    [:ul.nav-list
     {:style {:float "right"}}
     [:li
      [:a {:href "#/"} "About"]]
     [:li
      (if-let [username (:username @app-state)]
        [:a {:href "#/settings"} username]
        [:a {:href "#/login"} "Login"])]]]])

(defcard-rg navbar-example
  [navbar model/app-state])