// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__4668__auto__ = (function (){var and__4656__auto__ = typeof Symbol !== 'undefined';
if(and__4656__auto__){
var and__4656__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__4656__auto____$1){
var and__4656__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__4656__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__4656__auto____$2;
}
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__17926_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__17926_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(){
devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__4656__auto__ = cljs.core.map_QMARK_(c);
if(and__4656__auto__){
var map__17933 = c;
var map__17933__$1 = ((((!((map__17933 == null)))?((((map__17933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17933):map__17933);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__4656__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$card_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__17006__auto___17945 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__17935 = "pre";
var G__17936 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":"")};
var G__17937 = (function (){var G__17938 = "code";
var G__17939 = {"className": (function (){var or__4668__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__17940 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__17938,G__17939,G__17940);
})();
return React.createElement(G__17935,G__17936,G__17937);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__17006__auto___17945);
}

var seq__17941_17946 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__17942_17947 = null;
var count__17943_17948 = (0);
var i__17944_17949 = (0);
while(true){
if((i__17944_17949 < count__17943_17948)){
var property__17007__auto___17950 = chunk__17942_17947.cljs$core$IIndexed$_nth$arity$2(null,i__17944_17949);
if(cljs.core.truth_((base__17006__auto___17945[property__17007__auto___17950]))){
(devcards.core.CodeHighlight.prototype[property__17007__auto___17950] = (base__17006__auto___17945[property__17007__auto___17950]));
} else {
}

var G__17951 = seq__17941_17946;
var G__17952 = chunk__17942_17947;
var G__17953 = count__17943_17948;
var G__17954 = (i__17944_17949 + (1));
seq__17941_17946 = G__17951;
chunk__17942_17947 = G__17952;
count__17943_17948 = G__17953;
i__17944_17949 = G__17954;
continue;
} else {
var temp__4425__auto___17955 = cljs.core.seq(seq__17941_17946);
if(temp__4425__auto___17955){
var seq__17941_17956__$1 = temp__4425__auto___17955;
if(cljs.core.chunked_seq_QMARK_(seq__17941_17956__$1)){
var c__5471__auto___17957 = cljs.core.chunk_first(seq__17941_17956__$1);
var G__17958 = cljs.core.chunk_rest(seq__17941_17956__$1);
var G__17959 = c__5471__auto___17957;
var G__17960 = cljs.core.count(c__5471__auto___17957);
var G__17961 = (0);
seq__17941_17946 = G__17958;
chunk__17942_17947 = G__17959;
count__17943_17948 = G__17960;
i__17944_17949 = G__17961;
continue;
} else {
var property__17007__auto___17962 = cljs.core.first(seq__17941_17956__$1);
if(cljs.core.truth_((base__17006__auto___17945[property__17007__auto___17962]))){
(devcards.core.CodeHighlight.prototype[property__17007__auto___17962] = (base__17006__auto___17945[property__17007__auto___17962]));
} else {
}

var G__17963 = cljs.core.next(seq__17941_17956__$1);
var G__17964 = null;
var G__17965 = (0);
var G__17966 = (0);
seq__17941_17946 = G__17963;
chunk__17942_17947 = G__17964;
count__17943_17948 = G__17965;
i__17944_17949 = G__17966;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__17969 = devcards.core.CodeHighlight;
var G__17970 = {"code": code_str, "lang": lang};
return React.createElement(G__17969,G__17970);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__5581__auto__ = (function (){var G__17971 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17971) : cljs.core.atom.call(null,G__17971));
})();
var prefer_table__5582__auto__ = (function (){var G__17972 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17972) : cljs.core.atom.call(null,G__17972));
})();
var method_cache__5583__auto__ = (function (){var G__17973 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17973) : cljs.core.atom.call(null,G__17973));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__17974 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17974) : cljs.core.atom.call(null,G__17974));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__17975){
var map__17976 = p__17975;
var map__17976__$1 = ((((!((map__17976 == null)))?((((map__17976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17976):map__17976);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17976__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__17978){
var map__17979 = p__17978;
var map__17979__$1 = ((((!((map__17979 == null)))?((((map__17979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17979):map__17979);
var block = map__17979__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17979__$1,cljs.core.cst$kw$content);
var G__17981 = devcards.core.CodeHighlight;
var G__17982 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__17981,G__17982);
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17988 = arguments.length;
var i__5727__auto___17989 = (0);
while(true){
if((i__5727__auto___17989 < len__5726__auto___17988)){
args__5733__auto__.push((arguments[i__5727__auto___17989]));

var G__17990 = (i__5727__auto___17989 + (1));
i__5727__auto___17989 = G__17990;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var attrs17984 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17984))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs17984], 0))):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17984))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17984)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__17985 = "div";
var G__17986 = {"style": {"color": "#a94442"}};
var G__17987 = sablono.interpreter.interpret(message);
return React.createElement(G__17985,G__17986,G__17987);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq17983){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17983));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__17997 = "div";
var G__17998 = {"className": (function (){var G__18000 = devcards.system.devcards_rendered_card_class;
var G__18000__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__18000),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__18000);
var G__18000__$2 = (cljs.core.truth_(cljs.core.not_empty(classname))?[cljs.core.str(G__18000__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__18000__$1);
return G__18000__$2;
})()};
var G__17999 = sablono.interpreter.interpret(children);
return React.createElement(G__17997,G__17998,G__17999);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args18001 = [];
var len__5726__auto___18021 = arguments.length;
var i__5727__auto___18022 = (0);
while(true){
if((i__5727__auto___18022 < len__5726__auto___18021)){
args18001.push((arguments[i__5727__auto___18022]));

var G__18023 = (i__5727__auto___18022 + (1));
i__5727__auto___18022 = G__18023;
continue;
} else {
}
break;
}

var G__18003 = args18001.length;
switch (G__18003) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18001.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__18004 = card;
var map__18004__$1 = ((((!((map__18004 == null)))?((((map__18004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18004):map__18004);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__18006 = "div";
var G__18007 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')};
var G__18008 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__18006,G__18007,G__18008);
} else {
var G__18010 = "div";
var G__18011 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__18012 = (function (){var attrs18009 = (cljs.core.truth_(path)?(function (){var G__18014 = "a";
var G__18015 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__18014,G__18010,G__18011,map__18004,map__18004__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__18014,G__18010,G__18011,map__18004,map__18004__$1,path,options))
)};
var G__18016 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__18017 = " ";
return React.createElement(G__18014,G__18015,G__18016,G__18017);
})():(function (){var attrs18018 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs18018))?sablono.interpreter.attributes(attrs18018):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18018))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18018)], null))));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18009))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs18009], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18009)], null))));
})();
var G__18013 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__18010,G__18011,G__18012,G__18013);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto__.call(null,this$,devcard_opts));
} else {
var m__5324__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (devcards.core._devcard[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto__.call(null,this$,devcard_opts));
} else {
var m__5324__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5324__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return React.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__4668__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.atom_like_QMARK_;
var base__17006__auto___18035 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__4668__auto__ = (function (){var and__4656__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__4656__auto__)){
return this$.state;
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data(this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__4656__auto__ = data_atom;
if(cljs.core.truth_(and__4656__auto__)){
return id;
} else {
return and__4656__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,this$) : m.call(null,data_atom,this$));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = main_obj;
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__4425__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs18027 = devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18027))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs18027], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18027))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18027)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__18028 = "div";
var G__18029 = {"className": "com-rigsomelight-devcards-frameless"};
var G__18030 = sablono.interpreter.interpret(children);
return React.createElement(G__18028,G__18029,G__18030);
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__17006__auto___18035);
}

var seq__18031_18036 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__18032_18037 = null;
var count__18033_18038 = (0);
var i__18034_18039 = (0);
while(true){
if((i__18034_18039 < count__18033_18038)){
var property__17007__auto___18040 = chunk__18032_18037.cljs$core$IIndexed$_nth$arity$2(null,i__18034_18039);
if(cljs.core.truth_((base__17006__auto___18035[property__17007__auto___18040]))){
(devcards.core.DevcardBase.prototype[property__17007__auto___18040] = (base__17006__auto___18035[property__17007__auto___18040]));
} else {
}

var G__18041 = seq__18031_18036;
var G__18042 = chunk__18032_18037;
var G__18043 = count__18033_18038;
var G__18044 = (i__18034_18039 + (1));
seq__18031_18036 = G__18041;
chunk__18032_18037 = G__18042;
count__18033_18038 = G__18043;
i__18034_18039 = G__18044;
continue;
} else {
var temp__4425__auto___18045 = cljs.core.seq(seq__18031_18036);
if(temp__4425__auto___18045){
var seq__18031_18046__$1 = temp__4425__auto___18045;
if(cljs.core.chunked_seq_QMARK_(seq__18031_18046__$1)){
var c__5471__auto___18047 = cljs.core.chunk_first(seq__18031_18046__$1);
var G__18048 = cljs.core.chunk_rest(seq__18031_18046__$1);
var G__18049 = c__5471__auto___18047;
var G__18050 = cljs.core.count(c__5471__auto___18047);
var G__18051 = (0);
seq__18031_18036 = G__18048;
chunk__18032_18037 = G__18049;
count__18033_18038 = G__18050;
i__18034_18039 = G__18051;
continue;
} else {
var property__17007__auto___18052 = cljs.core.first(seq__18031_18046__$1);
if(cljs.core.truth_((base__17006__auto___18035[property__17007__auto___18052]))){
(devcards.core.DevcardBase.prototype[property__17007__auto___18052] = (base__17006__auto___18035[property__17007__auto___18052]));
} else {
}

var G__18053 = cljs.core.next(seq__18031_18046__$1);
var G__18054 = null;
var G__18055 = (0);
var G__18056 = (0);
seq__18031_18036 = G__18053;
chunk__18032_18037 = G__18054;
count__18033_18038 = G__18055;
i__18034_18039 = G__18056;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
var G__18057 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18058 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__18057,G__18058) : node_fn.call(null,G__18057,G__18058));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__17006__auto___18065 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__4656__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return React.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__18059 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__18060 = "Card has not mounted DOM node.";
return React.DOM.div(G__18059,G__18060);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__17006__auto___18065);
}

var seq__18061_18066 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__18062_18067 = null;
var count__18063_18068 = (0);
var i__18064_18069 = (0);
while(true){
if((i__18064_18069 < count__18063_18068)){
var property__17007__auto___18070 = chunk__18062_18067.cljs$core$IIndexed$_nth$arity$2(null,i__18064_18069);
if(cljs.core.truth_((base__17006__auto___18065[property__17007__auto___18070]))){
(devcards.core.DomComponent.prototype[property__17007__auto___18070] = (base__17006__auto___18065[property__17007__auto___18070]));
} else {
}

var G__18071 = seq__18061_18066;
var G__18072 = chunk__18062_18067;
var G__18073 = count__18063_18068;
var G__18074 = (i__18064_18069 + (1));
seq__18061_18066 = G__18071;
chunk__18062_18067 = G__18072;
count__18063_18068 = G__18073;
i__18064_18069 = G__18074;
continue;
} else {
var temp__4425__auto___18075 = cljs.core.seq(seq__18061_18066);
if(temp__4425__auto___18075){
var seq__18061_18076__$1 = temp__4425__auto___18075;
if(cljs.core.chunked_seq_QMARK_(seq__18061_18076__$1)){
var c__5471__auto___18077 = cljs.core.chunk_first(seq__18061_18076__$1);
var G__18078 = cljs.core.chunk_rest(seq__18061_18076__$1);
var G__18079 = c__5471__auto___18077;
var G__18080 = cljs.core.count(c__5471__auto___18077);
var G__18081 = (0);
seq__18061_18066 = G__18078;
chunk__18062_18067 = G__18079;
count__18063_18068 = G__18080;
i__18064_18069 = G__18081;
continue;
} else {
var property__17007__auto___18082 = cljs.core.first(seq__18061_18076__$1);
if(cljs.core.truth_((base__17006__auto___18065[property__17007__auto___18082]))){
(devcards.core.DomComponent.prototype[property__17007__auto___18082] = (base__17006__auto___18065[property__17007__auto___18082]));
} else {
}

var G__18083 = cljs.core.next(seq__18061_18076__$1);
var G__18084 = null;
var G__18085 = (0);
var G__18086 = (0);
seq__18061_18066 = G__18083;
chunk__18062_18067 = G__18084;
count__18063_18068 = G__18085;
i__18064_18069 = G__18086;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4668__auto__ = x === true;
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = x === false;
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
var or__4668__auto____$2 = (x == null);
if(or__4668__auto____$2){
return or__4668__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4668__auto__ = typeof x === 'string';
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = (x == null);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4668__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__18087_SHARP_){
return !(p1__18087_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__18096 = opts;
var map__18096__$1 = ((((!((map__18096 == null)))?((((map__18096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18096):map__18096);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4668__auto__ = cljs.core.map_QMARK_(options);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = (options == null);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__4668__auto__ = (initial_data == null);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
var or__4668__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__4668__auto____$2){
return or__4668__auto____$2;
} else {
var or__4668__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__4668__auto____$3){
return or__4668__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__18096,map__18096__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__18088_SHARP_){
return devcards.core.booler_QMARK_(p1__18088_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__18096,map__18096__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__18120 = "div";
var G__18121 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__18122 = sablono.interpreter.interpret((function (){var G__18125 = "code";
var G__18126 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__18127 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__18125,G__18126,G__18127);
})());
var G__18123 = (function (){var G__18128 = "span";
var G__18129 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__18130 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__18128,G__18129,G__18130);
})();
var G__18124 = (function (){var G__18131 = "span";
var G__18132 = {"style": {"flex": "1 100px"}};
var G__18133 = " Received: ";
var G__18134 = (function (){var attrs18119 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs18119))?sablono.interpreter.attributes(attrs18119):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18119))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18119)], null))));
})();
return React.createElement(G__18131,G__18132,G__18133,G__18134);
})();
return React.createElement(G__18120,G__18121,G__18122,G__18123,G__18124);
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__18148 = "div";
var G__18149 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__18150 = (function (){var attrs18147 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18147))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs18147], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18147))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18147)], null))));
})();
var G__18151 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__18154 = "div";
var G__18155 = null;
var G__18156 = (function (){var attrs18152 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18152))?sablono.interpreter.attributes(attrs18152):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18152))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18152)], null))));
})();
var G__18157 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs18158 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18158))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs18158], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18158))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18158)], null))));
})():null));
return React.createElement(G__18154,G__18155,G__18156,G__18157);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__18148,G__18149,G__18150,G__18151);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__18159_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__18159_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__18162 = devcards.core.DevcardBase;
var G__18163 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__18162,G__18163);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k18165,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__18167 = (((k18165 instanceof cljs.core.Keyword))?k18165.fqn:null);
switch (G__18167) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18165,else__5285__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18164){
var self__ = this;
var G__18164__$1 = this;
return (new cljs.core.RecordIter((0),G__18164__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__18164){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__18168 = cljs.core.keyword_identical_QMARK_;
var expr__18169 = k__5290__auto__;
if(cljs.core.truth_((pred__18168.cljs$core$IFn$_invoke$arity$2 ? pred__18168.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18169) : pred__18168.call(null,cljs.core.cst$kw$obj,expr__18169)))){
return (new devcards.core.IdentiyOptions(G__18164,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__18164),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__18164){
var self__ = this;
var this__5281__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__18164,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__18166){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18166),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18166,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__18172){
var map__18175 = p__18172;
var map__18175__$1 = ((((!((map__18175 == null)))?((((map__18175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18175):map__18175);
var devcard_opts = map__18175__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18175__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__18175,map__18175__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__18175,map__18175__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k18178,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__18180 = (((k18178 instanceof cljs.core.Keyword))?k18178.fqn:null);
switch (G__18180) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18178,else__5285__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18177){
var self__ = this;
var G__18177__$1 = this;
return (new cljs.core.RecordIter((0),G__18177__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__18177){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__18181 = cljs.core.keyword_identical_QMARK_;
var expr__18182 = k__5290__auto__;
if(cljs.core.truth_((pred__18181.cljs$core$IFn$_invoke$arity$2 ? pred__18181.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18182) : pred__18181.call(null,cljs.core.cst$kw$obj,expr__18182)))){
return (new devcards.core.AtomLikeOptions(G__18177,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__18177),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__18177){
var self__ = this;
var this__5281__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__18177,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__18179){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18179),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18179,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k18188,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__18190 = (((k18188 instanceof cljs.core.Keyword))?k18188.fqn:null);
switch (G__18190) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18188,else__5285__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18187){
var self__ = this;
var G__18187__$1 = this;
return (new cljs.core.RecordIter((0),G__18187__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__18187){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__18191 = cljs.core.keyword_identical_QMARK_;
var expr__18192 = k__5290__auto__;
if(cljs.core.truth_((pred__18191.cljs$core$IFn$_invoke$arity$2 ? pred__18191.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__18192) : pred__18191.call(null,cljs.core.cst$kw$obj,expr__18192)))){
return (new devcards.core.EdnLikeOptions(G__18187,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__18187),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__18187){
var self__ = this;
var this__5281__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__18187,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__18189){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__18189),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18189,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__4656__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__4656__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__4656__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__18206 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__18206 == null))){
if((false) || (G__18206.devcards$core$IDevcard$)){
return true;
} else {
if((!G__18206.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18206);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__18206);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__18209 = devcards.core.DomComponent;
var G__18210 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__18209,G__18210);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__18214 = (function (){var G__18215 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18215) : cljs.core.deref.call(null,G__18215));
})();
var map__18214__$1 = ((((!((map__18214 == null)))?((((map__18214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18214):map__18214);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18214__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18214__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__18218 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18218) : cljs.core.deref.call(null,G__18218));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__18220 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18220) : cljs.core.deref.call(null,G__18220));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18225 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18225__$1 = ((((!((map__18225 == null)))?((((map__18225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18225):map__18225);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18227_18229 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18228_18230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18227_18229,G__18228_18230) : cljs.core.reset_BANG_.call(null,G__18227_18229,G__18228_18230));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18235 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18235__$1 = ((((!((map__18235 == null)))?((((map__18235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18235):map__18235);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18235__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18235__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18237_18239 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18238_18240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18237_18239,G__18238_18240) : cljs.core.reset_BANG_.call(null,G__18237_18239,G__18238_18240));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__18245 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__18245__$1 = ((((!((map__18245 == null)))?((((map__18245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18245):map__18245);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18245__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__18247_18249 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18248_18250 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18247_18249,G__18248_18250) : cljs.core.reset_BANG_.call(null,G__18247_18249,G__18248_18250));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__18305 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__18306 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18306) : cljs.core.atom.call(null,G__18306));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__18307 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18307) : cljs.core.deref.call(null,G__18307));
})()));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__4656__auto__ = data_atom;
if(cljs.core.truth_(and__4656__auto__)){
return id;
} else {
return and__4656__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__18308){
var map__18309 = p__18308;
var map__18309__$1 = ((((!((map__18309 == null)))?((((map__18309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18309):map__18309);
var ha = map__18309__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18309__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18309__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18309__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__4668__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__18311 = "div";
var G__18312 = {"style": {"display": (cljs.core.truth_((function (){var or__4668__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__18313 = sablono.interpreter.interpret((function (){var action = ((function (G__18311,G__18312,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__18311,G__18312,this$))
;
var G__18319 = "button";
var G__18320 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__18321 = (function (){var G__18322 = "span";
var G__18323 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__18324 = "";
return React.createElement(G__18322,G__18323,G__18324);
})();
return React.createElement(G__18319,G__18320,G__18321);
})());
var G__18314 = sablono.interpreter.interpret((function (){var action = ((function (G__18311,G__18312,G__18313,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__18325 = data_atom;
var G__18326 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18325,G__18326) : cljs.core.reset_BANG_.call(null,G__18325,G__18326));
});})(G__18311,G__18312,G__18313,this$))
;
var G__18329 = "button";
var G__18330 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__18331 = (function (){var G__18332 = "span";
var G__18333 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__18334 = "";
return React.createElement(G__18332,G__18333,G__18334);
})();
return React.createElement(G__18329,G__18330,G__18331);
})());
var G__18315 = sablono.interpreter.interpret((function (){var action = ((function (G__18311,G__18312,G__18313,G__18314,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__18311,G__18312,G__18313,G__18314,this$))
;
var G__18337 = "button";
var G__18338 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__18339 = (function (){var G__18340 = "span";
var G__18341 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__18342 = "";
return React.createElement(G__18340,G__18341,G__18342);
})();
return React.createElement(G__18337,G__18338,G__18339);
})());
var G__18316 = sablono.interpreter.interpret((function (){var listener = ((function (G__18311,G__18312,G__18313,G__18314,G__18315,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__18311,G__18312,G__18313,G__18314,G__18315,this$))
;
var G__18349 = "button";
var G__18350 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__18351 = (function (){var G__18354 = "span";
var G__18355 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__18354,G__18355);
})();
var G__18352 = (function (){var G__18356 = "span";
var G__18357 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__18356,G__18357);
})();
var G__18353 = (function (){var G__18358 = "span";
var G__18359 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__18358,G__18359);
})();
return React.createElement(G__18349,G__18350,G__18351,G__18352,G__18353);
})());
return React.createElement(G__18311,G__18312,G__18313,G__18314,G__18315,G__18316);
} else {
return null;
}
})};
return React.createClass(G__18305);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__18362 = devcards.core.HistoryComponent;
var G__18363 = {"data_atom": data_atom};
return React.createElement(G__18362,G__18363);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_18365 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_18365;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__5581__auto__ = (function (){var G__18366 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18366) : cljs.core.atom.call(null,G__18366));
})();
var prefer_table__5582__auto__ = (function (){var G__18367 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18367) : cljs.core.atom.call(null,G__18367));
})();
var method_cache__5583__auto__ = (function (){var G__18368 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18368) : cljs.core.atom.call(null,G__18368));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__18369 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18369) : cljs.core.atom.call(null,G__18369));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs18370 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18370))?sablono.interpreter.attributes(attrs18370):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18370))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18370)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__18371,body){
var map__18379 = p__18371;
var map__18379__$1 = ((((!((map__18379 == null)))?((((map__18379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18379):map__18379);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18379__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__18382 = "div";
var G__18383 = null;
var G__18384 = (function (){var attrs18381 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs18381))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs18381], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18381))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18381)], null))));
})();
var G__18385 = sablono.interpreter.interpret(body);
return React.createElement(G__18382,G__18383,G__18384,G__18385);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__18386){
var map__18391 = p__18386;
var map__18391__$1 = ((((!((map__18391 == null)))?((((map__18391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18391):map__18391);
var m = map__18391__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18391__$1,cljs.core.cst$kw$expected);
return devcards.core.display_message(m,(function (){var G__18393 = devcards.core.CodeHighlight;
var G__18394 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__18393,G__18394);
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__18398 = "div";
var G__18399 = null;
var G__18400 = React.createElement("strong",null,"Error: ");
var G__18401 = (function (){var attrs18397 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs18397))?sablono.interpreter.attributes(attrs18397):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18397))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18397)], null))));
})();
return React.createElement(G__18398,G__18399,G__18400,G__18401);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs18402 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18402))?sablono.interpreter.attributes(attrs18402):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18402))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18402)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__18403){
var map__18404 = p__18403;
var map__18404__$1 = ((((!((map__18404 == null)))?((((map__18404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18404):map__18404);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18404__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs18406 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__18404,map__18404__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__18404,map__18404__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.first(testing_contexts)], null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18406))?sablono.interpreter.attributes(attrs18406):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18406))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18406)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__18408 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__18408) : cljs.test.report.call(null,G__18408));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs18413 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__18414,t){
var map__18415 = p__18414;
var map__18415__$1 = ((((!((map__18415 == null)))?((((map__18415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18415):map__18415);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18415__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18415__$1,cljs.core.cst$kw$html_DASH_list);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = cljs.core._conj(cljs.core.List.EMPTY,devcards.core.test_renderer(t));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0))),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(tests)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18413))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs18413], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18413))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18413)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__18460){
var map__18461 = p__18460;
var map__18461__$1 = ((((!((map__18461 == null)))?((((map__18461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18461):map__18461);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__18459 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__18459__$1 = ((((!((map__18459 == null)))?((((map__18459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18459):map__18459);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18459__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18459__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18459__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__18464 = "div";
var G__18465 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__18466 = (function (){var G__18468 = "div";
var G__18469 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__18470 = (function (){var G__18474 = "a";
var G__18475 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__18474,G__18468,G__18469,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__18474,G__18468,G__18469,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1))
)};
var G__18476 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__18474,G__18475,G__18476);
})();
var G__18471 = (function (){var G__18477 = "button";
var G__18478 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__18477,G__18468,G__18469,G__18470,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__18477,G__18468,G__18469,G__18470,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__18479 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__18477,G__18478,G__18479);
})();
var G__18472 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__18483 = "button";
var G__18484 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__18483,G__18468,G__18469,G__18470,G__18471,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__18483,G__18468,G__18469,G__18470,G__18471,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1){
return (function (p__18486){
var map__18487 = p__18486;
var map__18487__$1 = ((((!((map__18487 == null)))?((((map__18487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18487):map__18487);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__18483,G__18468,G__18469,G__18470,G__18471,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1))
});
});})(G__18483,G__18468,G__18469,G__18470,G__18471,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__18485 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__18483,G__18484,G__18485);
})()));
var G__18473 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__18492 = "button";
var G__18493 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__18492,G__18468,G__18469,G__18470,G__18471,G__18472,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__18492,G__18468,G__18469,G__18470,G__18471,G__18472,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1){
return (function (p__18495){
var map__18496 = p__18495;
var map__18496__$1 = ((((!((map__18496 == null)))?((((map__18496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18496):map__18496);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18496__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__18492,G__18468,G__18469,G__18470,G__18471,G__18472,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1))
});
});})(G__18492,G__18468,G__18469,G__18470,G__18471,G__18472,G__18464,G__18465,error_QMARK_,tests,some_tests,total_tests,map__18459,map__18459__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__18494 = sablono.interpreter.interpret(pass);
return React.createElement(G__18492,G__18493,G__18494);
})()));
return React.createElement(G__18468,G__18469,G__18470,G__18471,G__18472,G__18473);
})();
var G__18467 = (function (){var G__18498 = "div";
var G__18499 = {"className": devcards.system.devcards_rendered_card_class};
var G__18500 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__4668__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__18498,G__18499,G__18500);
})();
return React.createElement(G__18464,G__18465,G__18466,G__18467);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__13322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto__){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto__){
return (function (state_18587){
var state_val_18588 = (state_18587[(1)]);
if((state_val_18588 === (7))){
var state_18587__$1 = state_18587;
var statearr_18589_18638 = state_18587__$1;
(statearr_18589_18638[(2)] = false);

(statearr_18589_18638[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (20))){
var inst_18528 = (state_18587[(7)]);
var inst_18547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18528);
var state_18587__$1 = state_18587;
var statearr_18590_18639 = state_18587__$1;
(statearr_18590_18639[(2)] = inst_18547);

(statearr_18590_18639[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (27))){
var inst_18552 = (state_18587[(8)]);
var inst_18562 = (state_18587[(9)]);
var inst_18566 = (inst_18552.cljs$core$IFn$_invoke$arity$1 ? inst_18552.cljs$core$IFn$_invoke$arity$1(inst_18562) : inst_18552.call(null,inst_18562));
var state_18587__$1 = state_18587;
var statearr_18591_18640 = state_18587__$1;
(statearr_18591_18640[(2)] = inst_18566);

(statearr_18591_18640[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (1))){
var state_18587__$1 = state_18587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18587__$1,(2),devcards.core.test_channel);
} else {
if((state_val_18588 === (24))){
var state_18587__$1 = state_18587;
var statearr_18592_18641 = state_18587__$1;
(statearr_18592_18641[(2)] = null);

(statearr_18592_18641[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (4))){
var state_18587__$1 = state_18587;
var statearr_18593_18642 = state_18587__$1;
(statearr_18593_18642[(2)] = false);

(statearr_18593_18642[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (15))){
var state_18587__$1 = state_18587;
var statearr_18594_18643 = state_18587__$1;
(statearr_18594_18643[(2)] = false);

(statearr_18594_18643[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (21))){
var inst_18528 = (state_18587[(7)]);
var state_18587__$1 = state_18587;
var statearr_18595_18644 = state_18587__$1;
(statearr_18595_18644[(2)] = inst_18528);

(statearr_18595_18644[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (13))){
var inst_18585 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18587__$1,inst_18585);
} else {
if((state_val_18588 === (22))){
var inst_18551 = (state_18587[(10)]);
var inst_18550 = (state_18587[(2)]);
var inst_18551__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18550,cljs.core.cst$kw$tests);
var inst_18552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18550,cljs.core.cst$kw$callback);
var state_18587__$1 = (function (){var statearr_18596 = state_18587;
(statearr_18596[(10)] = inst_18551__$1);

(statearr_18596[(8)] = inst_18552);

return statearr_18596;
})();
if(cljs.core.truth_(inst_18551__$1)){
var statearr_18597_18645 = state_18587__$1;
(statearr_18597_18645[(1)] = (23));

} else {
var statearr_18598_18646 = state_18587__$1;
(statearr_18598_18646[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (29))){
var inst_18576 = (state_18587[(2)]);
var inst_18577 = cljs.test.clear_env_BANG_();
var state_18587__$1 = (function (){var statearr_18599 = state_18587;
(statearr_18599[(11)] = inst_18577);

(statearr_18599[(12)] = inst_18576);

return statearr_18599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18587__$1,(30),devcards.core.test_channel);
} else {
if((state_val_18588 === (6))){
var state_18587__$1 = state_18587;
var statearr_18600_18647 = state_18587__$1;
(statearr_18600_18647[(2)] = true);

(statearr_18600_18647[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (28))){
var inst_18552 = (state_18587[(8)]);
var inst_18568 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_18569 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_18570 = cljs.core.PersistentHashMap.fromArrays(inst_18568,inst_18569);
var inst_18571 = devcards.core.collect_test(inst_18570);
var inst_18572 = cljs.test.get_current_env();
var inst_18573 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18572,cljs.core.cst$kw$error,"Execution timed out!");
var inst_18574 = (inst_18552.cljs$core$IFn$_invoke$arity$1 ? inst_18552.cljs$core$IFn$_invoke$arity$1(inst_18573) : inst_18552.call(null,inst_18573));
var state_18587__$1 = (function (){var statearr_18601 = state_18587;
(statearr_18601[(13)] = inst_18571);

return statearr_18601;
})();
var statearr_18602_18648 = state_18587__$1;
(statearr_18602_18648[(2)] = inst_18574);

(statearr_18602_18648[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (25))){
var inst_18583 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18603_18649 = state_18587__$1;
(statearr_18603_18649[(2)] = inst_18583);

(statearr_18603_18649[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (17))){
var state_18587__$1 = state_18587;
var statearr_18604_18650 = state_18587__$1;
(statearr_18604_18650[(2)] = true);

(statearr_18604_18650[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (3))){
var inst_18505 = (state_18587[(14)]);
var inst_18510 = inst_18505.cljs$lang$protocol_mask$partition0$;
var inst_18511 = (inst_18510 & (64));
var inst_18512 = inst_18505.cljs$core$ISeq$;
var inst_18513 = (inst_18511) || (inst_18512);
var state_18587__$1 = state_18587;
if(cljs.core.truth_(inst_18513)){
var statearr_18605_18651 = state_18587__$1;
(statearr_18605_18651[(1)] = (6));

} else {
var statearr_18606_18652 = state_18587__$1;
(statearr_18606_18652[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (12))){
var inst_18528 = (state_18587[(7)]);
var inst_18532 = (inst_18528 == null);
var inst_18533 = cljs.core.not(inst_18532);
var state_18587__$1 = state_18587;
if(inst_18533){
var statearr_18607_18653 = state_18587__$1;
(statearr_18607_18653[(1)] = (14));

} else {
var statearr_18608_18654 = state_18587__$1;
(statearr_18608_18654[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (2))){
var inst_18505 = (state_18587[(14)]);
var inst_18505__$1 = (state_18587[(2)]);
var inst_18507 = (inst_18505__$1 == null);
var inst_18508 = cljs.core.not(inst_18507);
var state_18587__$1 = (function (){var statearr_18609 = state_18587;
(statearr_18609[(14)] = inst_18505__$1);

return statearr_18609;
})();
if(inst_18508){
var statearr_18610_18655 = state_18587__$1;
(statearr_18610_18655[(1)] = (3));

} else {
var statearr_18611_18656 = state_18587__$1;
(statearr_18611_18656[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (23))){
var inst_18551 = (state_18587[(10)]);
var inst_18555 = (state_18587[(15)]);
var inst_18555__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_18556 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18557 = devcards.core.run_card_tests(inst_18551);
var inst_18558 = [inst_18557,inst_18555__$1];
var inst_18559 = (new cljs.core.PersistentVector(null,2,(5),inst_18556,inst_18558,null));
var state_18587__$1 = (function (){var statearr_18612 = state_18587;
(statearr_18612[(15)] = inst_18555__$1);

return statearr_18612;
})();
return cljs.core.async.ioc_alts_BANG_(state_18587__$1,(26),inst_18559);
} else {
if((state_val_18588 === (19))){
var inst_18542 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18613_18657 = state_18587__$1;
(statearr_18613_18657[(2)] = inst_18542);

(statearr_18613_18657[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (11))){
var inst_18505 = (state_18587[(14)]);
var inst_18525 = (state_18587[(2)]);
var inst_18526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18525,cljs.core.cst$kw$tests);
var inst_18527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18525,cljs.core.cst$kw$callback);
var inst_18528 = inst_18505;
var state_18587__$1 = (function (){var statearr_18614 = state_18587;
(statearr_18614[(16)] = inst_18526);

(statearr_18614[(17)] = inst_18527);

(statearr_18614[(7)] = inst_18528);

return statearr_18614;
})();
var statearr_18615_18658 = state_18587__$1;
(statearr_18615_18658[(2)] = null);

(statearr_18615_18658[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (9))){
var inst_18505 = (state_18587[(14)]);
var inst_18522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18505);
var state_18587__$1 = state_18587;
var statearr_18616_18659 = state_18587__$1;
(statearr_18616_18659[(2)] = inst_18522);

(statearr_18616_18659[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (5))){
var inst_18520 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
if(cljs.core.truth_(inst_18520)){
var statearr_18617_18660 = state_18587__$1;
(statearr_18617_18660[(1)] = (9));

} else {
var statearr_18618_18661 = state_18587__$1;
(statearr_18618_18661[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (14))){
var inst_18528 = (state_18587[(7)]);
var inst_18535 = inst_18528.cljs$lang$protocol_mask$partition0$;
var inst_18536 = (inst_18535 & (64));
var inst_18537 = inst_18528.cljs$core$ISeq$;
var inst_18538 = (inst_18536) || (inst_18537);
var state_18587__$1 = state_18587;
if(cljs.core.truth_(inst_18538)){
var statearr_18619_18662 = state_18587__$1;
(statearr_18619_18662[(1)] = (17));

} else {
var statearr_18620_18663 = state_18587__$1;
(statearr_18620_18663[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (26))){
var inst_18555 = (state_18587[(15)]);
var inst_18561 = (state_18587[(2)]);
var inst_18562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18561,(0),null);
var inst_18563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18561,(1),null);
var inst_18564 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_18563,inst_18555);
var state_18587__$1 = (function (){var statearr_18621 = state_18587;
(statearr_18621[(9)] = inst_18562);

return statearr_18621;
})();
if(inst_18564){
var statearr_18622_18664 = state_18587__$1;
(statearr_18622_18664[(1)] = (27));

} else {
var statearr_18623_18665 = state_18587__$1;
(statearr_18623_18665[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (16))){
var inst_18545 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
if(cljs.core.truth_(inst_18545)){
var statearr_18624_18666 = state_18587__$1;
(statearr_18624_18666[(1)] = (20));

} else {
var statearr_18625_18667 = state_18587__$1;
(statearr_18625_18667[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (30))){
var inst_18579 = (state_18587[(2)]);
var inst_18528 = inst_18579;
var state_18587__$1 = (function (){var statearr_18626 = state_18587;
(statearr_18626[(7)] = inst_18528);

return statearr_18626;
})();
var statearr_18627_18668 = state_18587__$1;
(statearr_18627_18668[(2)] = null);

(statearr_18627_18668[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (10))){
var inst_18505 = (state_18587[(14)]);
var state_18587__$1 = state_18587;
var statearr_18628_18669 = state_18587__$1;
(statearr_18628_18669[(2)] = inst_18505);

(statearr_18628_18669[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (18))){
var state_18587__$1 = state_18587;
var statearr_18629_18670 = state_18587__$1;
(statearr_18629_18670[(2)] = false);

(statearr_18629_18670[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18588 === (8))){
var inst_18517 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18630_18671 = state_18587__$1;
(statearr_18630_18671[(2)] = inst_18517);

(statearr_18630_18671[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13322__auto__))
;
return ((function (switch__13208__auto__,c__13322__auto__){
return (function() {
var devcards$core$state_machine__13209__auto__ = null;
var devcards$core$state_machine__13209__auto____0 = (function (){
var statearr_18634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18634[(0)] = devcards$core$state_machine__13209__auto__);

(statearr_18634[(1)] = (1));

return statearr_18634;
});
var devcards$core$state_machine__13209__auto____1 = (function (state_18587){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_18587);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e18635){if((e18635 instanceof Object)){
var ex__13212__auto__ = e18635;
var statearr_18636_18672 = state_18587;
(statearr_18636_18672[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18587);

return cljs.core.cst$kw$recur;
} else {
throw e18635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__18673 = state_18587;
state_18587 = G__18673;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
devcards$core$state_machine__13209__auto__ = function(state_18587){
switch(arguments.length){
case 0:
return devcards$core$state_machine__13209__auto____0.call(this);
case 1:
return devcards$core$state_machine__13209__auto____1.call(this,state_18587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__13209__auto____0;
devcards$core$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__13209__auto____1;
return devcards$core$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto__))
})();
var state__13324__auto__ = (function (){var statearr_18637 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_18637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto__);

return statearr_18637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto__))
);

return c__13322__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__17006__auto___18678 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__17006__auto___18678);
}

var seq__18674_18679 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__18675_18680 = null;
var count__18676_18681 = (0);
var i__18677_18682 = (0);
while(true){
if((i__18677_18682 < count__18676_18681)){
var property__17007__auto___18683 = chunk__18675_18680.cljs$core$IIndexed$_nth$arity$2(null,i__18677_18682);
if(cljs.core.truth_((base__17006__auto___18678[property__17007__auto___18683]))){
(devcards.core.TestDevcard.prototype[property__17007__auto___18683] = (base__17006__auto___18678[property__17007__auto___18683]));
} else {
}

var G__18684 = seq__18674_18679;
var G__18685 = chunk__18675_18680;
var G__18686 = count__18676_18681;
var G__18687 = (i__18677_18682 + (1));
seq__18674_18679 = G__18684;
chunk__18675_18680 = G__18685;
count__18676_18681 = G__18686;
i__18677_18682 = G__18687;
continue;
} else {
var temp__4425__auto___18688 = cljs.core.seq(seq__18674_18679);
if(temp__4425__auto___18688){
var seq__18674_18689__$1 = temp__4425__auto___18688;
if(cljs.core.chunked_seq_QMARK_(seq__18674_18689__$1)){
var c__5471__auto___18690 = cljs.core.chunk_first(seq__18674_18689__$1);
var G__18691 = cljs.core.chunk_rest(seq__18674_18689__$1);
var G__18692 = c__5471__auto___18690;
var G__18693 = cljs.core.count(c__5471__auto___18690);
var G__18694 = (0);
seq__18674_18679 = G__18691;
chunk__18675_18680 = G__18692;
count__18676_18681 = G__18693;
i__18677_18682 = G__18694;
continue;
} else {
var property__17007__auto___18695 = cljs.core.first(seq__18674_18689__$1);
if(cljs.core.truth_((base__17006__auto___18678[property__17007__auto___18695]))){
(devcards.core.TestDevcard.prototype[property__17007__auto___18695] = (base__17006__auto___18678[property__17007__auto___18695]));
} else {
}

var G__18696 = cljs.core.next(seq__18674_18689__$1);
var G__18697 = null;
var G__18698 = (0);
var G__18699 = (0);
seq__18674_18679 = G__18696;
chunk__18675_18680 = G__18697;
count__18676_18681 = G__18698;
i__18677_18682 = G__18699;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__5733__auto__ = [];
var len__5726__auto___18706 = arguments.length;
var i__5727__auto___18707 = (0);
while(true){
if((i__5727__auto___18707 < len__5726__auto___18706)){
args__5733__auto__.push((arguments[i__5727__auto___18707]));

var G__18708 = (i__5727__auto___18707 + (1));
i__5727__auto___18707 = G__18708;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core18701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core18701 = (function (test_thunks,meta18702){
this.test_thunks = test_thunks;
this.meta18702 = meta18702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core18701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18703,meta18702__$1){
var self__ = this;
var _18703__$1 = this;
return (new devcards.core.t_devcards$core18701(self__.test_thunks,meta18702__$1));
});

devcards.core.t_devcards$core18701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18703){
var self__ = this;
var _18703__$1 = this;
return self__.meta18702;
});

devcards.core.t_devcards$core18701.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core18701.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__18704 = devcards.core.TestDevcard;
var G__18705 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__18704,G__18705);
});

devcards.core.t_devcards$core18701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta18702], null);
});

devcards.core.t_devcards$core18701.cljs$lang$type = true;

devcards.core.t_devcards$core18701.cljs$lang$ctorStr = "devcards.core/t_devcards$core18701";

devcards.core.t_devcards$core18701.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"devcards.core/t_devcards$core18701");
});

devcards.core.__GT_t_devcards$core18701 = (function devcards$core$__GT_t_devcards$core18701(test_thunks__$1,meta18702){
return (new devcards.core.t_devcards$core18701(test_thunks__$1,meta18702));
});

}

return (new devcards.core.t_devcards$core18701(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq18700){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18700));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__18713 = (function (){var attrs18714 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18714))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs18714], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18714))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18714)], null))));
})();
return React.renderToString(G__18713);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
var G__18720 = (function (){var attrs18722 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18722))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs18722], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18722))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18722)], null))));
})();
var G__18721 = devcards.system.devcards_app_node();
return React.render(G__18720,G__18721);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__13322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto__){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto__){
return (function (state_18752){
var state_val_18753 = (state_18752[(1)]);
if((state_val_18753 === (1))){
var inst_18743 = devcards.core.load_data_from_channel_BANG_();
var state_18752__$1 = state_18752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18752__$1,(2),inst_18743);
} else {
if((state_val_18753 === (2))){
var inst_18745 = (state_18752[(2)]);
var inst_18746 = cljs.core.async.timeout((100));
var state_18752__$1 = (function (){var statearr_18754 = state_18752;
(statearr_18754[(7)] = inst_18745);

return statearr_18754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18752__$1,(3),inst_18746);
} else {
if((state_val_18753 === (3))){
var inst_18748 = (state_18752[(2)]);
var inst_18749 = (function (){return ((function (inst_18748,state_val_18753,c__13322__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_18748,state_val_18753,c__13322__auto__))
})();
var inst_18750 = setTimeout(inst_18749,(0));
var state_18752__$1 = (function (){var statearr_18755 = state_18752;
(statearr_18755[(8)] = inst_18748);

return statearr_18755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18752__$1,inst_18750);
} else {
return null;
}
}
}
});})(c__13322__auto__))
;
return ((function (switch__13208__auto__,c__13322__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__13209__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__13209__auto____0 = (function (){
var statearr_18759 = [null,null,null,null,null,null,null,null,null];
(statearr_18759[(0)] = devcards$core$mount_namespace_$_state_machine__13209__auto__);

(statearr_18759[(1)] = (1));

return statearr_18759;
});
var devcards$core$mount_namespace_$_state_machine__13209__auto____1 = (function (state_18752){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_18752);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e18760){if((e18760 instanceof Object)){
var ex__13212__auto__ = e18760;
var statearr_18761_18763 = state_18752;
(statearr_18761_18763[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18752);

return cljs.core.cst$kw$recur;
} else {
throw e18760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__18764 = state_18752;
state_18752 = G__18764;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__13209__auto__ = function(state_18752){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__13209__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__13209__auto____1.call(this,state_18752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__13209__auto____0;
devcards$core$mount_namespace_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__13209__auto____1;
return devcards$core$mount_namespace_$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto__))
})();
var state__13324__auto__ = (function (){var statearr_18762 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_18762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto__);

return statearr_18762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto__))
);

return c__13322__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
