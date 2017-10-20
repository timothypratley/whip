// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.view.projects');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('whip.model');
goog.require('goog.dom.forms');
whip.view.projects.burndown_chart = (function whip$view$projects$burndown_chart(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(300),cljs.core.cst$kw$height,cljs.core.cst$kw$200,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid lightgrey"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(200),cljs.core.cst$kw$y,(30)], null),"Burn Down"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,"<image xlink:href=\"img/logo.png\" x=170 y=15 height=20 width=20 /> "], null)], null)], null)], null),(function (){var iter__5440__auto__ = (function whip$view$projects$burndown_chart_$_iter__22914(s__22915){
return (new cljs.core.LazySeq(null,(function (){
var s__22915__$1 = s__22915;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22915__$1);
if(temp__4425__auto__){
var s__22915__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22915__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__22915__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__22917 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__22916 = (0);
while(true){
if((i__22916 < size__5439__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__22916);
cljs.core.chunk_append(b__22917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,((i + (1)) * (30)),cljs.core.cst$kw$y1,(180),cljs.core.cst$kw$x2,((i + (1)) * (30)),cljs.core.cst$kw$y2,(((15) * i) + cljs.core.rand_int((50))),cljs.core.cst$kw$stroke,"green",cljs.core.cst$kw$stroke_DASH_width,(15)], null)], null));

var G__22920 = (i__22916 + (1));
i__22916 = G__22920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22917),whip$view$projects$burndown_chart_$_iter__22914(cljs.core.chunk_rest(s__22915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22917),null);
}
} else {
var i = cljs.core.first(s__22915__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,((i + (1)) * (30)),cljs.core.cst$kw$y1,(180),cljs.core.cst$kw$x2,((i + (1)) * (30)),cljs.core.cst$kw$y2,(((15) * i) + cljs.core.rand_int((50))),cljs.core.cst$kw$stroke,"green",cljs.core.cst$kw$stroke_DASH_width,(15)], null)], null),whip$view$projects$burndown_chart_$_iter__22914(cljs.core.rest(s__22915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((9)));
})());
});
whip.view.projects.projects_list = (function whip$view$projects$projects_list(app_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_awesome,"maximus"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Projects"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function whip$view$projects$projects_list_$_add_project_submit(e){
e.preventDefault();

return whip.model.add_project_BANG_(app_state,(function (){var G__22945 = e.target;
var G__22946 = "project-title";
return goog.dom.forms.getValueByName(G__22945,G__22946);
})());
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"project-title"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,"Add project"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$projects,(function (){var iter__5440__auto__ = (function whip$view$projects$projects_list_$_iter__22947(s__22948){
return (new cljs.core.LazySeq(null,(function (){
var s__22948__$1 = s__22948;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22948__$1);
if(temp__4425__auto__){
var s__22948__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22948__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__22948__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__22950 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__22949 = (0);
while(true){
if((i__22949 < size__5439__auto__)){
var vec__22959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__22949);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22959,(0),null);
var map__22960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22959,(1),null);
var map__22960__$1 = ((((!((map__22960 == null)))?((((map__22960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22960):map__22960);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22960__$1,cljs.core.cst$kw$title);
cljs.core.chunk_append(b__22950,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/project/"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,title], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.projects.burndown_chart], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Jeremy completed project kickoff meeting agenda."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Cards can be moved was moved from Done to In Progress."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__22965 = (i__22949 + (1));
i__22949 = G__22965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22950),whip$view$projects$projects_list_$_iter__22947(cljs.core.chunk_rest(s__22948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22950),null);
}
} else {
var vec__22962 = cljs.core.first(s__22948__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22962,(0),null);
var map__22963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22962,(1),null);
var map__22963__$1 = ((((!((map__22963 == null)))?((((map__22963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22963):map__22963);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963__$1,cljs.core.cst$kw$title);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/project/"),cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,title], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.projects.burndown_chart], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Jeremy completed project kickoff meeting agenda."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Cards can be moved was moved from Done to In Progress."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),whip$view$projects$projects_list_$_iter__22947(cljs.core.rest(s__22948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(cljs.core.cst$kw$projects.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state))));
})()], null)], null);
});
