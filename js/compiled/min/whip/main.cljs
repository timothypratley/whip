(ns ^:figwheel-always whip.main
  (:require
    [bidi.bidi :as bidi]
    [goog.dom :as dom]
    [goog.history.EventType :as EventType]
    [goog.events :as events]
    [reagent.core :as reagent]
    [whip.a-init]
    [whip.view.navbar :as navbar]
    [whip.view.project :as project]
    [whip.view.projects :as projects]
    [whip.view.reactions]
    [whip.view.story :as story]
    [whip.model :as model])
  (:import
    [goog History]))

(def routes
  ["/"
   [["projects" projects/projects-list]
    [["project/" :project-id] project/project-board]
    [["story/" :story-id] story/story-details]]])

(defn whip-content [app-state]
  (let [route (:route @app-state)
        {:keys [handler route-params]} (bidi/match-route routes route)]
    [(or handler projects/projects-list) app-state route-params]))

(defn whip-main [app-state]
  [:div.content
   [:div.header
    [navbar/navbar app-state]]
   [:div.main
    [whip-content app-state]]
   [:div.footer
    {:style {:font-family "fantasy"}}
    [:center "Clojure for Professionals 2016"]]])

(when-let [app (dom/getElement "app")]
  (doto (History.)
    (events/listen EventType/NAVIGATE model/navigation)
    (.setEnabled true))
  (reagent/render-component [whip-main model/app-state] app))
