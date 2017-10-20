(ns whip.view.navbar
  (:require
    [devcards.core :refer-macros [defcard-rg deftest]]
    [whip.model :as model]
    [reagent.core :as reagent]))

(defn search [app-state]
  [:input
   {:style {:background-color "lightblue"}                       ;; TODO: make better css
    :default-value (:search-term @app-state)
    :on-change
    (fn search-change [e]
      (model/set-search-term! app-state (.. e -target -value)))}])

(defn user-widget [app-state]
  (if-let [username (:username @app-state)]
    [:a {:href "#/settings"} username]
    [:a {:href "#/login"} "Login"]))

(defn navbar [app-state]
  [:nav
   [:ul.nav-list
    [:li
     [:a {:href "#/"}
      [:img {:src "img/logo.png"}]
      [:span {:style {:font-family "fantasy"}} " Whip"]]]
    [:ul.nav-list {:style {:float "right"}}
     [:li [:a [search app-state]]]
     [:li [:a {:href "#/"} "About"]]
     [:li [user-widget app-state]]]]])

(defcard-rg navbar-example
  [navbar model/app-state])