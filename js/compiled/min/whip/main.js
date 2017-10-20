// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.main');
goog.require('cljs.core');
goog.require('whip.view.story');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('bidi.bidi');
goog.require('whip.model');
goog.require('whip.view.projects');
goog.require('goog.history.EventType');
goog.require('whip.view.reactions');
goog.require('whip.view.navbar');
goog.require('goog.History');
goog.require('goog.events');
goog.require('whip.view.project');
goog.require('whip.a_init');
whip.main.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["projects",whip.view.projects.projects_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["project/",cljs.core.cst$kw$project_DASH_id], null),whip.view.project.project_board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["story/",cljs.core.cst$kw$story_DASH_id], null),whip.view.story.story_details], null)], null)], null);
whip.main.whip_content = (function whip$main$whip_content(app_state){
var route = cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)));
var map__23396 = bidi.bidi.match_route(whip.main.routes,route);
var map__23396__$1 = ((((!((map__23396 == null)))?((((map__23396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23396):map__23396);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,cljs.core.cst$kw$handler);
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,cljs.core.cst$kw$route_DASH_params);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4668__auto__ = handler;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return whip.view.projects.projects_list;
}
})(),app_state,route_params], null);
});
whip.main.whip_main = (function whip$main$whip_main(app_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.navbar.navbar,app_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.main.whip_content,app_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,"fantasy"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,"Clojure for Professionals 2016"], null)], null)], null);
});
var temp__4425__auto___23401 = goog.dom.getElement("app");
if(cljs.core.truth_(temp__4425__auto___23401)){
var app_23402 = temp__4425__auto___23401;
var G__23398_23403 = (new goog.History());
goog.events.listen(G__23398_23403,goog.history.EventType.NAVIGATE,whip.model.navigation);

G__23398_23403.setEnabled(true);


var G__23399_23404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.main.whip_main,whip.model.app_state], null);
var G__23400_23405 = app_23402;
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__23399_23404,G__23400_23405) : reagent.core.render_component.call(null,G__23399_23404,G__23400_23405));
} else {
}
