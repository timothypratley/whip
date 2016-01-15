(ns ^:figwheel-always whip.main
  (:require
    [whip.a-init]
    [whip.view :as view]
    [whip.model :as model]
    [reagent.core :as reagent]
    [goog.dom :as dom]))

(when-let [app (dom/getElement "app")]
  (reagent/render-component [view/whip-main model/app-state] app))
