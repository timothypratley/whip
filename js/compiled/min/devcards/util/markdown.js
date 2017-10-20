// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4425__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4425__auto__)){
var ws = temp__4425__auto__;
return ws.length;
} else {
return null;
}
});
var conv_class_17892 = Showdown.converter;
var converter_17893 = (new conv_class_17892());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_17892,converter_17893){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_17893.makeHtml(markdown_txt);
});})(conv_class_17892,converter_17893))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__5581__auto__ = (function (){var G__17894 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17894) : cljs.core.atom.call(null,G__17894));
})();
var prefer_table__5582__auto__ = (function (){var G__17895 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17895) : cljs.core.atom.call(null,G__17895));
})();
var method_cache__5583__auto__ = (function (){var G__17896 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17896) : cljs.core.atom.call(null,G__17896));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__17897 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17897) : cljs.core.atom.call(null,G__17897));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (p__17898,line){
var map__17899 = p__17898;
var map__17899__$1 = ((((!((map__17899 == null)))?((((map__17899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17899):map__17899);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17899__$1,cljs.core.cst$kw$stage);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?cljs.core.cst$kw$delim:cljs.core.cst$kw$line),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$markdown], null),(function (p__17901,line){
var map__17902 = p__17901;
var map__17902__$1 = ((((!((map__17902 == null)))?((((map__17902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17902):map__17902);
var st = map__17902__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17902__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,clojure.string.trim(line));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$code_DASH_block], null),(function (p__17904,line){
var map__17905 = p__17904;
var map__17905__$1 = ((((!((map__17905 == null)))?((((map__17905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17905):map__17905);
var st = map__17905__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17905__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,cljs.core.cst$kw$leading_DASH_spaces.cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$markdown], null),(function (p__17907,line){
var map__17908 = p__17907;
var map__17908__$1 = ((((!((map__17908 == null)))?((((map__17908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17908):map__17908);
var st = map__17908__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17908__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17908__$1,cljs.core.cst$kw$accum);
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$code_DASH_block,cljs.core.cst$kw$lang,((clojure.string.blank_QMARK_(lang))?null:lang),cljs.core.cst$kw$leading_DASH_spaces,devcards.util.markdown.leading_space_count(line),cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$code_DASH_block], null),(function (p__17910,line){
var map__17911 = p__17910;
var map__17911__$1 = ((((!((map__17911 == null)))?((((map__17911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17911):map__17911);
var st = map__17911__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911__$1,cljs.core.cst$kw$accum);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$accum,cljs.core.PersistentVector.EMPTY], null),clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n"));
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__17919 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__17919__$1 = ((((!((map__17919 == null)))?((((map__17919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17919):map__17919);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$accum);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__17919,map__17919__$1,stage,accum){
return (function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content], null),((function (map__17919,map__17919__$1,stage,accum){
return (function (p1__17913_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__17913_SHARP_);
});})(map__17919,map__17919__$1,stage,accum))
);
});})(map__17919,map__17919__$1,stage,accum))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__17919,map__17919__$1,stage,accum){
return (function (p__17921){
var map__17922 = p__17921;
var map__17922__$1 = ((((!((map__17922 == null)))?((((map__17922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17922):map__17922);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17922__$1,cljs.core.cst$kw$content);
return cljs.core.not_empty(content);
});})(map__17919,map__17919__$1,stage,accum))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});
