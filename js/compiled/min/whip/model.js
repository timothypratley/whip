// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.model');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('cljs.test');
goog.require('reagent.core');
goog.require('clojure.string');
if(typeof whip.model.app_state !== 'undefined'){
} else {
whip.model.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$view,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$project_DASH_list], null),cljs.core.cst$kw$team,new cljs.core.PersistentArrayMap(null, 6, ["Jeremy","jeremy@code-adept.com","Jordan","jordan@biserkov.com","Justin","justin.h.holguin@gmail.com","Michael","michael.gaare@gmail.com","Nick","nickmbailey@gmail.com","Timothy","timothypratley@gmail.com"], null),cljs.core.cst$kw$projects,new cljs.core.PersistentArrayMap(null, 2, ["aaa",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Build a project management tool",cljs.core.cst$kw$statuses,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Planned","In Progress","Done"], null)], null),"bbb",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Examples",cljs.core.cst$kw$statuses,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Planned","Pending"], null)], null)], null),cljs.core.cst$kw$stories,new cljs.core.PersistentArrayMap(null, 6, ["1",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Design a data model for projects and stories",cljs.core.cst$kw$status,"Done",cljs.core.cst$kw$project_DASH_id,"aaa",cljs.core.cst$kw$members,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Timothy",null,"Michael",null], null), null),cljs.core.cst$kw$order,(1)], null),"2",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Create a story title entry form",cljs.core.cst$kw$status,"In Progress",cljs.core.cst$kw$project_DASH_id,"aaa",cljs.core.cst$kw$members,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Timothy",null], null), null),cljs.core.cst$kw$order,(2)], null),"3",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Implement a way to finish stories",cljs.core.cst$kw$status,"In Progress",cljs.core.cst$kw$project_DASH_id,"aaa",cljs.core.cst$kw$members,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Nick",null,"Justin",null,"Jordan",null], null), null),cljs.core.cst$kw$order,(3)], null),"4",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Build a todo list",cljs.core.cst$kw$status,"Planned",cljs.core.cst$kw$project_DASH_id,"aaa",cljs.core.cst$kw$members,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Jeremy",null,"Jordan",null], null), null),cljs.core.cst$kw$order,(4)], null),"5",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Draw cards to represent stories",cljs.core.cst$kw$status,"Planned",cljs.core.cst$kw$project_DASH_id,"aaa",cljs.core.cst$kw$members,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Justin",null], null), null),cljs.core.cst$kw$order,(5)], null),"6",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Create lanes to represent story status",cljs.core.cst$kw$status,"Planned",cljs.core.cst$kw$project_DASH_id,"aaa",cljs.core.cst$kw$members,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Michael",null], null), null),cljs.core.cst$kw$order,(6)], null)], null)], null));
}
/**
 * For a true uuid, call (random-uuid) instead.
 *   Id assignment is usually handled on the server.
 *   This function creates a random base 36 number.
 *   There are 45k possible 3 letter codes.
 */
whip.model.unique = (function whip$model$unique(){
return cljs.core.rand_int(Math.pow((36),(3))).toString((36));
});
whip.model.add_project_BANG_ = (function whip$model$add_project_BANG_(app_state,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects,whip.model.unique()], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,title,cljs.core.cst$kw$order,(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$order,cljs.core.vals(cljs.core.cst$kw$projects.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))) + (1))], null));
});
whip.model.max_order = (function whip$model$max_order(app_state,project_id){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$order,cljs.core.vals(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19889_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$project_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__19889_SHARP_),project_id);
}),cljs.core.cst$kw$stories.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)))))));
});

whip.model.max_order_test = (function whip$model$max_order_test(){
return cljs.test.test_var(whip$model$max_order_test.cljs$lang$var);
});
whip.model.max_order_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.conj,cljs.core.array_seq(["blah"], 0));

var ret__17681__auto__ = (function (){try{var values__17623__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),(1));
var result__17624__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17623__auto__);
if(cljs.core.truth_(result__17624__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(2)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17623__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(2)),cljs.core.cst$kw$actual,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17623__auto__)),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17624__auto__;
}catch (e19890){var t__17661__auto__ = e19890;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(2)),cljs.core.cst$kw$actual,t__17661__auto__,cljs.core.cst$kw$message,null], null));
}})();
cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.rest);

return ret__17681__auto__;
});

whip.model.max_order_test.cljs$lang$var = new cljs.core.Var(function(){return whip.model.max_order_test;},cljs.core.cst$sym$whip$model_SLASH_max_DASH_order_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$whip$model,cljs.core.cst$sym$max_DASH_order_DASH_test,"/home/timothy/git/whip/src/whip/model.cljs",24,1,79,79,cljs.core.List.EMPTY,null,(cljs.core.truth_(whip.model.max_order_test)?whip.model.max_order_test.cljs$lang$test:null)]));
whip.model.add_story_BANG_ = (function whip$model$add_story_BANG_(app_state,project_id,status,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app_state,cljs.core.update,cljs.core.cst$kw$stories,cljs.core.assoc,cljs.core.array_seq([whip.model.unique(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,title,cljs.core.cst$kw$status,status,cljs.core.cst$kw$project_DASH_id,project_id,cljs.core.cst$kw$order,(whip.model.max_order(app_state,project_id) + (1))], null)], 0));
});
whip.model.set_story_status_BANG_ = (function whip$model$set_story_status_BANG_(app_state,story_id,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stories,story_id,cljs.core.cst$kw$status], null),status);
});
whip.model.set_project_title_BANG_ = (function whip$model$set_project_title_BANG_(app_state,project_id,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects,project_id,cljs.core.cst$kw$title], null),title);
});
whip.model.navigation = (function whip$model$navigation(event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(whip.model.app_state,cljs.core.assoc,cljs.core.cst$kw$route,event.token);
});
whip.model.set_member_BANG_ = (function whip$model$set_member_BANG_(app_state,email,details){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,email,cljs.core.cst$kw$details], null),details);
});
whip.model.set_search_term_BANG_ = (function whip$model$set_search_term_BANG_(app_state,search_term){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,cljs.core.cst$kw$search_DASH_term,search_term);
});
whip.model.story_search_match = (function whip$model$story_search_match(search_term,story){
return (clojure.string.blank_QMARK_(search_term)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),clojure.string.lower_case(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.vals(story))).indexOf(clojure.string.lower_case(search_term))));
});
whip.model.filter_stories = (function whip$model$filter_stories(stories,search_term,project_id,status){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function whip$model$filter_stories_$_filter_match(p__19894){
var vec__19896 = p__19894;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19896,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19896,(1),null);
var and__4656__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$project_DASH_id.cljs$core$IFn$_invoke$arity$1(story),project_id);
if(and__4656__auto__){
var and__4656__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(story),status);
if(and__4656__auto____$1){
return whip.model.story_search_match(search_term,story);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
}),stories);
});
whip.model.stories_by_project_status = (function whip$model$stories_by_project_status(app_state,project_id,status){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$order,cljs.core.second),whip.model.filter_stories(cljs.core.cst$kw$stories.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state))),cljs.core.cst$kw$search_DASH_term.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state))),project_id,status));
});
whip.model.stories_by_project_status_reaction = (function whip$model$stories_by_project_status_reaction(app_state,project_id,status){
var search_term = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$search_DASH_term.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)));
}));
var all_stories = reagent.ratom.make_reaction(((function (search_term){
return (function (){
return cljs.core.cst$kw$stories.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)));
});})(search_term))
);
var a = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var filtered_stories = reagent.ratom.make_reaction(((function (search_term,all_stories,a){
return (function (){
var b = whip.model.filter_stories((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(all_stories) : cljs.core.deref.call(null,all_stories)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_term) : cljs.core.deref.call(null,search_term)),project_id,status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(a,b) : cljs.core.reset_BANG_.call(null,a,b));
}
});})(search_term,all_stories,a))
);
return reagent.ratom.make_reaction(((function (search_term,all_stories,a,filtered_stories){
return (function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$order,cljs.core.second),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(filtered_stories) : cljs.core.deref.call(null,filtered_stories)));
});})(search_term,all_stories,a,filtered_stories))
);
});
