// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.view.project');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('whip.model');
goog.require('whip.communication');
goog.require('goog.events.KeyCodes');
whip.view.project.gravatar_img = (function whip$view$project$gravatar_img(email){
return [cljs.core.str("//www.gravatar.com/avatar/"),cljs.core.str(whip.communication.md5_hash(email)),cljs.core.str("?s=30&d=wavatar")].join('');
});
whip.view.project.member = (function whip$view$project$member(email,details){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$member,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,whip.view.project.gravatar_img(email),cljs.core.cst$kw$title,details], null)], null)], null);
});
whip.view.project.story_card = (function whip$view$project$story_card(app_state,story_id,p__23221){
var map__23230 = p__23221;
var map__23230__$1 = ((((!((map__23230 == null)))?((((map__23230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23230):map__23230);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230__$1,cljs.core.cst$kw$title);
var members = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230__$1,cljs.core.cst$kw$members);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$story,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$draggable,"true",cljs.core.cst$kw$on_DASH_drag_DASH_start,((function (map__23230,map__23230__$1,title,members){
return (function whip$view$project$story_card_$_card_drag_start(e){
e.dataTransfer.setData("text/plain",story_id);

return e.dataTransfer.dropEffect = "move";
});})(map__23230,map__23230__$1,title,members))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/story/"),cljs.core.str(story_id)].join('')], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$members], null),(function (){var iter__5440__auto__ = ((function (map__23230,map__23230__$1,title,members){
return (function whip$view$project$story_card_$_iter__23232(s__23233){
return (new cljs.core.LazySeq(null,((function (map__23230,map__23230__$1,title,members){
return (function (){
var s__23233__$1 = s__23233;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23233__$1);
if(temp__4425__auto__){
var s__23233__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23233__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__23233__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__23235 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__23234 = (0);
while(true){
if((i__23234 < size__5439__auto__)){
var m = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__23234);
var email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,m], null),m);
var details = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,email,cljs.core.cst$kw$details], null));
cljs.core.chunk_append(b__23235,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.member,email,details], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,email], null)));

var G__23238 = (i__23234 + (1));
i__23234 = G__23238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23235),whip$view$project$story_card_$_iter__23232(cljs.core.chunk_rest(s__23233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23235),null);
}
} else {
var m = cljs.core.first(s__23233__$2);
var email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,m], null),m);
var details = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$team,email,cljs.core.cst$kw$details], null));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.member,email,details], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,email], null)),whip$view$project$story_card_$_iter__23232(cljs.core.rest(s__23233__$2)));
}
} else {
return null;
}
break;
}
});})(map__23230,map__23230__$1,title,members))
,null,null));
});})(map__23230,map__23230__$1,title,members))
;
return iter__5440__auto__(members);
})())], null);
});
whip.view.project.story_card_example_component = (function whip$view$project$story_card_example_component(){
var app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(whip.model.app_state) : cljs.core.deref.call(null,whip.model.app_state)));
return ((function (app_state){
return (function whip$view$project$story_card_example_component_$_a_story_card_example_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.story_card,app_state,(2),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stories,(2)], null))], null);
});
;})(app_state))
});
whip.view.project.add_story_form = (function whip$view$project$add_story_form(app_state,project_id,status,adding_QMARK_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function whip$view$project$add_story_form_$_add_story_submit(e){
e.preventDefault();

whip.model.add_story_BANG_(app_state,project_id,status,(function (){var G__23245 = e.target;
var G__23246 = "story-title";
return goog.dom.forms.getValueByName(G__23245,G__23246);
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(adding_QMARK_,cljs.core.not);

return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$rows,(2),cljs.core.cst$kw$required,"required",cljs.core.cst$kw$auto_DASH_focus,"autofocus",cljs.core.cst$kw$name,"story-title",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"96%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,"Add",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#A1B56C"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(adding_QMARK_,cljs.core.not);

return null;
})], null),"Cancel"], null)], null);
});
whip.view.project.maybe_add_story_form = (function whip$view$project$maybe_add_story_form(app_state,project_id,status){
var adding_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (adding_QMARK_){
return (function whip$view$project$maybe_add_story_form_$_a_maybe_add_story_form(app_state__$1,project_id__$1,status__$1){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(adding_QMARK_) : cljs.core.deref.call(null,adding_QMARK_)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.add_story_form,app_state__$1,project_id__$1,status__$1,adding_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (adding_QMARK_){
return (function whip$view$project$maybe_add_story_form_$_a_maybe_add_story_form_$_add_story_click(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(adding_QMARK_,cljs.core.not);

return null;
});})(adding_QMARK_))
], null),"Add a story"], null);
}
});
;})(adding_QMARK_))
});
whip.view.project.project_title_input = (function whip$view$project$project_title_input(title,editing_QMARK_){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"project-title",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function whip$view$project$project_title_input_$_project_title_input_did_mount(this$){
var G__23250 = this$.getDOMNode();
G__23250.setSelectionRange((10000),(10000));

return G__23250;
}),cljs.core.cst$kw$reagent_DASH_render,(function whip$view$project$project_title_input_$_project_title_input_render(title__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$default_DASH_value,title__$1,cljs.core.cst$kw$required,"required",cljs.core.cst$kw$auto_DASH_focus,"autofocus",cljs.core.cst$kw$name,"project-title",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"95%",cljs.core.cst$kw$font_DASH_size,"2em",cljs.core.cst$kw$padding,"20px"], null),cljs.core.cst$kw$on_DASH_key_DASH_down,(function whip$view$project$project_title_input_$_project_title_input_render_$_project_title_input_key_down(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,goog.events.KeyCodes.ESC)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(editing_QMARK_,cljs.core.not);

return null;
} else {
return null;
}
})], null)], null);
})], null));
});
whip.view.project.project_title = (function whip$view$project$project_title(app_state,project_id){
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (editing_QMARK_){
return (function whip$view$project$project_title_$_a_project_title(app_state__$1,project_id__$1){
var title = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state__$1) : cljs.core.deref.call(null,app_state__$1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects,project_id__$1,cljs.core.cst$kw$title], null));
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing_QMARK_) : cljs.core.deref.call(null,editing_QMARK_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_submit,((function (title,editing_QMARK_){
return (function whip$view$project$project_title_$_a_project_title_$_project_title_submit(e){
e.preventDefault();

whip.model.set_project_title_BANG_(app_state__$1,project_id__$1,(function (){var G__23265 = e.target;
var G__23266 = "project-title";
return goog.dom.forms.getValueByName(G__23265,G__23266);
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(editing_QMARK_,cljs.core.not);

return null;
});})(title,editing_QMARK_))
,cljs.core.cst$kw$on_DASH_blur,((function (title,editing_QMARK_){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(editing_QMARK_,cljs.core.not);

return null;
});})(title,editing_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.project_title_input,title,editing_QMARK_], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (title,editing_QMARK_){
return (function whip$view$project$project_title_$_a_project_title_$_project_title_click(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(editing_QMARK_,cljs.core.not);

return null;
});})(title,editing_QMARK_))
], null),title], null);
}
});
;})(editing_QMARK_))
});
whip.view.project.project_board = (function whip$view$project$project_board(app_state,p__23267){
var map__23316 = p__23267;
var map__23316__$1 = ((((!((map__23316 == null)))?((((map__23316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23316):map__23316);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23316__$1,cljs.core.cst$kw$project_DASH_id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.project_title,app_state,project_id], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (map__23316,map__23316__$1,project_id){
return (function whip$view$project$project_board_$_iter__23318(s__23319){
return (new cljs.core.LazySeq(null,((function (map__23316,map__23316__$1,project_id){
return (function (){
var s__23319__$1 = s__23319;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23319__$1);
if(temp__4425__auto__){
var s__23319__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23319__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__23319__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__23321 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__23320 = (0);
while(true){
if((i__23320 < size__5439__auto__)){
var status = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__23320);
cljs.core.chunk_append(b__23321,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$column,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_drop,((function (i__23320,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function whip$view$project$project_board_$_iter__23318_$_drop_on_column(e){
e.preventDefault();

var story_id = e.dataTransfer.getData("text");
return whip.model.set_story_status_BANG_(app_state,story_id,status);
});})(i__23320,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
,cljs.core.cst$kw$on_DASH_drag_DASH_over,((function (i__23320,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function whip$view$project$project_board_$_iter__23318_$_drag_over_column(e){
e.preventDefault();

return e.dataTransfer.dropEffect = "move";
});})(i__23320,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,status], null),(function (){var stories = whip.model.stories_by_project_status(app_state,project_id,status);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (i__23320,stories,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function whip$view$project$project_board_$_iter__23318_$_iter__23344(s__23345){
return (new cljs.core.LazySeq(null,((function (i__23320,stories,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function (){
var s__23345__$1 = s__23345;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__23345__$1);
if(temp__4425__auto____$1){
var s__23345__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23345__$2)){
var c__5438__auto____$1 = cljs.core.chunk_first(s__23345__$2);
var size__5439__auto____$1 = cljs.core.count(c__5438__auto____$1);
var b__23347 = cljs.core.chunk_buffer(size__5439__auto____$1);
if((function (){var i__23346 = (0);
while(true){
if((i__23346 < size__5439__auto____$1)){
var vec__23352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto____$1,i__23346);
var story_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23352,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23352,(1),null);
cljs.core.chunk_append(b__23347,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.story_card,app_state,story_id,story], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,story_id], null)));

var G__23364 = (i__23346 + (1));
i__23346 = G__23364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23347),whip$view$project$project_board_$_iter__23318_$_iter__23344(cljs.core.chunk_rest(s__23345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23347),null);
}
} else {
var vec__23353 = cljs.core.first(s__23345__$2);
var story_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23353,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.story_card,app_state,story_id,story], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,story_id], null)),whip$view$project$project_board_$_iter__23318_$_iter__23344(cljs.core.rest(s__23345__$2)));
}
} else {
return null;
}
break;
}
});})(i__23320,stories,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
,null,null));
});})(i__23320,stories,status,c__5438__auto__,size__5439__auto__,b__23321,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
;
return iter__5440__auto__(stories);
})());
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.maybe_add_story_form,app_state,project_id,status], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,status], null)));

var G__23365 = (i__23320 + (1));
i__23320 = G__23365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23321),whip$view$project$project_board_$_iter__23318(cljs.core.chunk_rest(s__23319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23321),null);
}
} else {
var status = cljs.core.first(s__23319__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$column,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_drop,((function (status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function whip$view$project$project_board_$_iter__23318_$_drop_on_column(e){
e.preventDefault();

var story_id = e.dataTransfer.getData("text");
return whip.model.set_story_status_BANG_(app_state,story_id,status);
});})(status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
,cljs.core.cst$kw$on_DASH_drag_DASH_over,((function (status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function whip$view$project$project_board_$_iter__23318_$_drag_over_column(e){
e.preventDefault();

return e.dataTransfer.dropEffect = "move";
});})(status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,status], null),(function (){var stories = whip.model.stories_by_project_status(app_state,project_id,status);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (stories,status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function whip$view$project$project_board_$_iter__23318_$_iter__23354(s__23355){
return (new cljs.core.LazySeq(null,((function (stories,status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id){
return (function (){
var s__23355__$1 = s__23355;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__23355__$1);
if(temp__4425__auto____$1){
var s__23355__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23355__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__23355__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__23357 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__23356 = (0);
while(true){
if((i__23356 < size__5439__auto__)){
var vec__23362 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__23356);
var story_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23362,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23362,(1),null);
cljs.core.chunk_append(b__23357,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.story_card,app_state,story_id,story], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,story_id], null)));

var G__23366 = (i__23356 + (1));
i__23356 = G__23366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23357),whip$view$project$project_board_$_iter__23318_$_iter__23354(cljs.core.chunk_rest(s__23355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23357),null);
}
} else {
var vec__23363 = cljs.core.first(s__23355__$2);
var story_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23363,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.story_card,app_state,story_id,story], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,story_id], null)),whip$view$project$project_board_$_iter__23318_$_iter__23354(cljs.core.rest(s__23355__$2)));
}
} else {
return null;
}
break;
}
});})(stories,status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
,null,null));
});})(stories,status,s__23319__$2,temp__4425__auto__,map__23316,map__23316__$1,project_id))
;
return iter__5440__auto__(stories);
})());
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.maybe_add_story_form,app_state,project_id,status], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,status], null)),whip$view$project$project_board_$_iter__23318(cljs.core.rest(s__23319__$2)));
}
} else {
return null;
}
break;
}
});})(map__23316,map__23316__$1,project_id))
,null,null));
});})(map__23316,map__23316__$1,project_id))
;
return iter__5440__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects,project_id,cljs.core.cst$kw$statuses], null)));
})())], null);
});
whip.view.project.project_board_reaction = (function whip$view$project$project_board_reaction(){
var stories = whip.model.stories_by_project_status_reaction(whip.model.app_state,"aaa","In Progress");
return ((function (stories){
return (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering in progress stories"], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (stories){
return (function whip$view$project$project_board_reaction_$_iter__23377(s__23378){
return (new cljs.core.LazySeq(null,((function (stories){
return (function (){
var s__23378__$1 = s__23378;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23378__$1);
if(temp__4425__auto__){
var s__23378__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23378__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__23378__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__23380 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__23379 = (0);
while(true){
if((i__23379 < size__5439__auto__)){
var vec__23385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__23379);
var story_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23385,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23385,(1),null);
cljs.core.chunk_append(b__23380,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.story_card,whip.model.app_state,story_id,story], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,story_id], null)));

var G__23387 = (i__23379 + (1));
i__23379 = G__23387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23380),whip$view$project$project_board_reaction_$_iter__23377(cljs.core.chunk_rest(s__23378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23380),null);
}
} else {
var vec__23386 = cljs.core.first(s__23378__$2);
var story_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23386,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23386,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [whip.view.project.story_card,whip.model.app_state,story_id,story], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,story_id], null)),whip$view$project$project_board_reaction_$_iter__23377(cljs.core.rest(s__23378__$2)));
}
} else {
return null;
}
break;
}
});})(stories))
,null,null));
});})(stories))
;
return iter__5440__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(stories) : cljs.core.deref.call(null,stories)));
})())], null);
});
;})(stories))
});
