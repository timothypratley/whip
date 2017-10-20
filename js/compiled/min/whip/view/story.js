// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.view.story');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('whip.model');
whip.view.story.line = (function whip$view$story$line(p__19899,k,v,statuses,projects){
var map__19933 = p__19899;
var map__19933__$1 = ((((!((map__19933 == null)))?((((map__19933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19933):map__19933);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19933__$1,cljs.core.cst$kw$project_DASH_id);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19933__$1,cljs.core.cst$kw$status);
var G__19935 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__19935) {
case "title":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"title",cljs.core.cst$kw$default_DASH_value,v,cljs.core.cst$kw$required,"required",cljs.core.cst$kw$rows,(1),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"auto",cljs.core.cst$kw$font_DASH_size,"1.5em"], null)], null)], null);

break;
case "status":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default_DASH_value,v], null)], null),(function (){var iter__5440__auto__ = ((function (G__19935,map__19933,map__19933__$1,project_id,status){
return (function whip$view$story$line_$_iter__19936(s__19937){
return (new cljs.core.LazySeq(null,((function (G__19935,map__19933,map__19933__$1,project_id,status){
return (function (){
var s__19937__$1 = s__19937;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19937__$1);
if(temp__4425__auto__){
var s__19937__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19937__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__19937__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__19939 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__19938 = (0);
while(true){
if((i__19938 < size__5439__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__19938);
cljs.core.chunk_append(b__19939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,s], null));

var G__19967 = (i__19938 + (1));
i__19938 = G__19967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19939),whip$view$story$line_$_iter__19936(cljs.core.chunk_rest(s__19937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19939),null);
}
} else {
var s = cljs.core.first(s__19937__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,s], null),whip$view$story$line_$_iter__19936(cljs.core.rest(s__19937__$2)));
}
} else {
return null;
}
break;
}
});})(G__19935,map__19933,map__19933__$1,project_id,status))
,null,null));
});})(G__19935,map__19933,map__19933__$1,project_id,status))
;
return iter__5440__auto__(statuses);
})());

break;
case "project-id":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default_DASH_value,v], null)], null),(function (){var iter__5440__auto__ = ((function (G__19935,map__19933,map__19933__$1,project_id,status){
return (function whip$view$story$line_$_iter__19942(s__19943){
return (new cljs.core.LazySeq(null,((function (G__19935,map__19933,map__19933__$1,project_id,status){
return (function (){
var s__19943__$1 = s__19943;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19943__$1);
if(temp__4425__auto__){
var s__19943__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19943__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__19943__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__19945 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__19944 = (0);
while(true){
if((i__19944 < size__5439__auto__)){
var vec__19954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__19944);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(0),null);
var map__19955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(1),null);
var map__19955__$1 = ((((!((map__19955 == null)))?((((map__19955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19955):map__19955);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19955__$1,cljs.core.cst$kw$title);
cljs.core.chunk_append(b__19945,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,k__$1], null),title], null));

var G__19968 = (i__19944 + (1));
i__19944 = G__19968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19945),whip$view$story$line_$_iter__19942(cljs.core.chunk_rest(s__19943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19945),null);
}
} else {
var vec__19957 = cljs.core.first(s__19943__$2);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957,(0),null);
var map__19958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957,(1),null);
var map__19958__$1 = ((((!((map__19958 == null)))?((((map__19958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19958):map__19958);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19958__$1,cljs.core.cst$kw$title);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,k__$1], null),title], null),whip$view$story$line_$_iter__19942(cljs.core.rest(s__19943__$2)));
}
} else {
return null;
}
break;
}
});})(G__19935,map__19933,map__19933__$1,project_id,status))
,null,null));
});})(G__19935,map__19933,map__19933__$1,project_id,status))
;
return iter__5440__auto__(projects);
})());

break;
case "members":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),(function (){var iter__5440__auto__ = ((function (G__19935,map__19933,map__19933__$1,project_id,status){
return (function whip$view$story$line_$_iter__19960(s__19961){
return (new cljs.core.LazySeq(null,((function (G__19935,map__19933,map__19933__$1,project_id,status){
return (function (){
var s__19961__$1 = s__19961;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19961__$1);
if(temp__4425__auto__){
var s__19961__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19961__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__19961__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__19963 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__19962 = (0);
while(true){
if((i__19962 < size__5439__auto__)){
var member = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__19962);
cljs.core.chunk_append(b__19963,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag,member], null));

var G__19969 = (i__19962 + (1));
i__19962 = G__19969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19963),whip$view$story$line_$_iter__19960(cljs.core.chunk_rest(s__19961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19963),null);
}
} else {
var member = cljs.core.first(s__19961__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag,member], null),whip$view$story$line_$_iter__19960(cljs.core.rest(s__19961__$2)));
}
} else {
return null;
}
break;
}
});})(G__19935,map__19933,map__19933__$1,project_id,status))
,null,null));
});})(G__19935,map__19933,map__19933__$1,project_id,status))
;
return iter__5440__auto__(v);
})());

break;
case "order":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$name,cljs.core.name(k),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$default_DASH_value,v], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,cljs.core.name(k),cljs.core.cst$kw$default_DASH_value,[cljs.core.str(v)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null)], null);

}
});
whip.view.story.story_details = (function whip$view$story$story_details(app_state,p__19970){
var map__19983 = p__19970;
var map__19983__$1 = ((((!((map__19983 == null)))?((((map__19983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19983):map__19983);
var story_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19983__$1,cljs.core.cst$kw$story_DASH_id);
var story = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stories,story_id], null));
var statuses = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects,cljs.core.cst$kw$project_DASH_id.cljs$core$IFn$_invoke$arity$1(story),cljs.core.cst$kw$statuses], null));
var projects = cljs.core.cst$kw$projects.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (story,statuses,projects,map__19983,map__19983__$1,story_id){
return (function whip$view$story$story_details_$_story_submit(e){
return e.preventDefault();
});})(story,statuses,projects,map__19983,map__19983__$1,story_id))
], null)], null),(function (){var iter__5440__auto__ = ((function (story,statuses,projects,map__19983,map__19983__$1,story_id){
return (function whip$view$story$story_details_$_iter__19985(s__19986){
return (new cljs.core.LazySeq(null,((function (story,statuses,projects,map__19983,map__19983__$1,story_id){
return (function (){
var s__19986__$1 = s__19986;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19986__$1);
if(temp__4425__auto__){
var s__19986__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19986__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__19986__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__19988 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__19987 = (0);
while(true){
if((i__19987 < size__5439__auto__)){
var vec__19993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__19987);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19993,(1),null);
cljs.core.chunk_append(b__19988,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,clojure.string.capitalize(cljs.core.name(k))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.story.line,story,k,v,statuses,projects], null)], null));

var G__19995 = (i__19987 + (1));
i__19987 = G__19995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19988),whip$view$story$story_details_$_iter__19985(cljs.core.chunk_rest(s__19986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19988),null);
}
} else {
var vec__19994 = cljs.core.first(s__19986__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19994,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,clojure.string.capitalize(cljs.core.name(k))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.story.line,story,k,v,statuses,projects], null)], null),whip$view$story$story_details_$_iter__19985(cljs.core.rest(s__19986__$2)));
}
} else {
return null;
}
break;
}
});})(story,statuses,projects,map__19983,map__19983__$1,story_id))
,null,null));
});})(story,statuses,projects,map__19983,map__19983__$1,story_id))
;
return iter__5440__auto__(story);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null)], null));
});
