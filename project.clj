(defproject whip "0.1.0-SNAPSHOT"
  :description "Whip project management tracker"
  :url "http://timothypratley.github.io/whip"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [reagent "0.5.1"]
                 [devcards "0.2.0-8"]
                 [bidi "1.25.0"]
                 [cljs-http "0.1.39"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild
  {:warning-handlers
   ;; TODO: verify
   [(fn treat-warnings-as errors [warning-type env extra]
      (when-let [s (cljs.analyzer/error-message warning-type extra)]
        (binding [*out* *err*]
          (println "WARNING:" (cljs.analyzer/message env s)))
        (System/exit 1)))]
   :builds
   {"dev"
    {:source-paths ["src"]
     :figwheel {}
     :compiler {:main whip.main
                :asset-path "js/compiled/out"
                :output-to "resources/public/js/compiled/whip.js"
                :output-dir "resources/public/js/compiled/out"
                :source-map-timestamp true}}

    "devcards"
    {:source-paths ["src"]
     :figwheel {:devcards true}
     :compiler {:main whip.main
                :asset-path "js/compiled/devcards"
                :output-to "resources/public/js/compiled/devcards.js"
                :output-dir "resources/public/js/compiled/devcards"
                :source-map-timestamp true}}

    ;; A compressed minified build for production.
    ;; You can build this with: lein cljsbuild once min
    "min"
    {:source-paths ["src"]
     :compiler {:output-to "resources/public/js/compiled/whip.js"
                :main whip.main
                :optimizations :advanced
                :source-map "resources/public/js/compiled/whip.js.map"
                :output-dir "resources/public/js/compiled/min"
                :pretty-print false}}}}

  :figwheel {:css-dirs ["resources/public/css"]})
