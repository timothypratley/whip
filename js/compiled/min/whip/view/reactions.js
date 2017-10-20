// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.view.reactions');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('devcards.core');
whip.view.reactions.a = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(200)], null));
whip.view.reactions.b = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(whip.view.reactions.a) : cljs.core.deref.call(null,whip.view.reactions.a)));
}));
whip.view.reactions.c = reagent.ratom.make_reaction((function (){
return ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(whip.view.reactions.b) : cljs.core.deref.call(null,whip.view.reactions.b)) + (10));
}));
whip.view.reactions.view_c = (function whip$view$reactions$view_c(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering view-c"], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(whip.view.reactions.c) : cljs.core.deref.call(null,whip.view.reactions.c))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(whip.view.reactions.a,cljs.core.update,cljs.core.cst$kw$x,cljs.core.inc);
})], null),"inc x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(whip.view.reactions.a,cljs.core.update,cljs.core.cst$kw$y,cljs.core.inc);
})], null),"inc y"], null)], null);
});
