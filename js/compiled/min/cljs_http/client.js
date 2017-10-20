// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4656__auto__ = v;
if(cljs.core.truth_(and__4656__auto__)){
return (v > (0));
} else {
return and__4656__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22969_SHARP_,p2__22968_SHARP_){
var vec__22971 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22968_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22971,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22971,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22969_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22972_SHARP_){
return cljs_http.client.encode_val(k,p1__22972_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__22973){
var vec__22975 = p__22973;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__22976_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22976_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__4656__auto__){
var and__4656__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__4656__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__22978 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22978) : client.call(null,G__22978));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22979_SHARP_){
return cljs_http.client.decode_body(p1__22979_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5733__auto__ = [];
var len__5726__auto___22985 = arguments.length;
var i__5727__auto___22986 = (0);
while(true){
if((i__5727__auto___22986 < len__5726__auto___22985)){
args__5733__auto__.push((arguments[i__5727__auto___22986]));

var G__22987 = (i__5727__auto___22986 + (1));
i__5727__auto___22986 = G__22987;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22982){
var vec__22983 = p__22982;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22983,(0),null);
return ((function (vec__22983,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__4668__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
var G__22984 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22984) : client.call(null,G__22984));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__22983,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq22980){
var G__22981 = cljs.core.first(seq22980);
var seq22980__$1 = cljs.core.next(seq22980);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__22981,seq22980__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5733__auto__ = [];
var len__5726__auto___22993 = arguments.length;
var i__5727__auto___22994 = (0);
while(true){
if((i__5727__auto___22994 < len__5726__auto___22993)){
args__5733__auto__.push((arguments[i__5727__auto___22994]));

var G__22995 = (i__5727__auto___22994 + (1));
i__5727__auto___22994 = G__22995;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22990){
var vec__22991 = p__22990;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22991,(0),null);
return ((function (vec__22991,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4668__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
var G__22992 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22992) : client.call(null,G__22992));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__22991,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq22988){
var G__22989 = cljs.core.first(seq22988);
var seq22988__$1 = cljs.core.next(seq22988);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__22989,seq22988__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23001 = arguments.length;
var i__5727__auto___23002 = (0);
while(true){
if((i__5727__auto___23002 < len__5726__auto___23001)){
args__5733__auto__.push((arguments[i__5727__auto___23002]));

var G__23003 = (i__5727__auto___23002 + (1));
i__5727__auto___23002 = G__23003;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22998){
var vec__22999 = p__22998;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22999,(0),null);
return ((function (vec__22999,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4668__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
var G__23000 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23000) : client.call(null,G__23000));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__22999,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq22996){
var G__22997 = cljs.core.first(seq22996);
var seq22996__$1 = cljs.core.next(seq22996);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__22997,seq22996__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__23007 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23007__$1 = ((((!((map__23007 == null)))?((((map__23007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23007):map__23007);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23007__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23007__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__23009 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23009) : client.call(null,G__23009));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__23014 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23014__$1 = ((((!((map__23014 == null)))?((((map__23014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23014):map__23014);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__23014,map__23014__$1,decoding,decoding_opts){
return (function (p1__23010_SHARP_){
return cljs_http.util.transit_decode(p1__23010_SHARP_,decoding,decoding_opts);
});})(map__23014,map__23014__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__23014,map__23014__$1,decoding,decoding_opts,transit_decode){
return (function (p1__23011_SHARP_){
return cljs_http.client.decode_body(p1__23011_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__23014,map__23014__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__23017 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23017) : client.call(null,G__23017));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23018_SHARP_){
return cljs_http.client.decode_body(p1__23018_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__23023){
var map__23024 = p__23023;
var map__23024__$1 = ((((!((map__23024 == null)))?((((map__23024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23024):map__23024);
var req = map__23024__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__23026 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23026) : client.call(null,G__23026));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__23031){
var map__23032 = p__23031;
var map__23032__$1 = ((((!((map__23032 == null)))?((((map__23032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23032):map__23032);
var request = map__23032__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23032__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__4656__auto__ = form_params;
if(cljs.core.truth_(and__4656__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__4656__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__23034 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23034) : client.call(null,G__23034));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__23041_23047 = cljs.core.seq(params);
var chunk__23042_23048 = null;
var count__23043_23049 = (0);
var i__23044_23050 = (0);
while(true){
if((i__23044_23050 < count__23043_23049)){
var vec__23045_23051 = chunk__23042_23048.cljs$core$IIndexed$_nth$arity$2(null,i__23044_23050);
var k_23052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23045_23051,(0),null);
var v_23053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23045_23051,(1),null);
if(cljs.core.coll_QMARK_(v_23053)){
form_data.append(cljs.core.name(k_23052),cljs.core.first(v_23053),cljs.core.second(v_23053));
} else {
form_data.append(cljs.core.name(k_23052),v_23053);
}

var G__23054 = seq__23041_23047;
var G__23055 = chunk__23042_23048;
var G__23056 = count__23043_23049;
var G__23057 = (i__23044_23050 + (1));
seq__23041_23047 = G__23054;
chunk__23042_23048 = G__23055;
count__23043_23049 = G__23056;
i__23044_23050 = G__23057;
continue;
} else {
var temp__4425__auto___23058 = cljs.core.seq(seq__23041_23047);
if(temp__4425__auto___23058){
var seq__23041_23059__$1 = temp__4425__auto___23058;
if(cljs.core.chunked_seq_QMARK_(seq__23041_23059__$1)){
var c__5471__auto___23060 = cljs.core.chunk_first(seq__23041_23059__$1);
var G__23061 = cljs.core.chunk_rest(seq__23041_23059__$1);
var G__23062 = c__5471__auto___23060;
var G__23063 = cljs.core.count(c__5471__auto___23060);
var G__23064 = (0);
seq__23041_23047 = G__23061;
chunk__23042_23048 = G__23062;
count__23043_23049 = G__23063;
i__23044_23050 = G__23064;
continue;
} else {
var vec__23046_23065 = cljs.core.first(seq__23041_23059__$1);
var k_23066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046_23065,(0),null);
var v_23067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046_23065,(1),null);
if(cljs.core.coll_QMARK_(v_23067)){
form_data.append(cljs.core.name(k_23066),cljs.core.first(v_23067),cljs.core.second(v_23067));
} else {
form_data.append(cljs.core.name(k_23066),v_23067);
}

var G__23068 = cljs.core.next(seq__23041_23059__$1);
var G__23069 = null;
var G__23070 = (0);
var G__23071 = (0);
seq__23041_23047 = G__23068;
chunk__23042_23048 = G__23069;
count__23043_23049 = G__23070;
i__23044_23050 = G__23071;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__23076){
var map__23077 = p__23076;
var map__23077__$1 = ((((!((map__23077 == null)))?((((map__23077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23077):map__23077);
var request = map__23077__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23077__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23077__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__4656__auto__ = multipart_params;
if(cljs.core.truth_(and__4656__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__4656__auto__;
}
})())){
var G__23079 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23079) : client.call(null,G__23079));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var G__23081 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23081) : client.call(null,G__23081));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__23082_SHARP_){
var G__23084 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23082_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23084) : client.call(null,G__23084));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__23090){
var map__23091 = p__23090;
var map__23091__$1 = ((((!((map__23091 == null)))?((((map__23091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23091):map__23091);
var req = map__23091__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23091__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4423__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
var G__23093 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4423__auto__,map__23091,map__23091__$1,req,query_params){
return (function (p1__23085_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23085_SHARP_,query_params], 0));
});})(spec,temp__4423__auto__,map__23091,map__23091__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23093) : client.call(null,G__23093));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23099 = arguments.length;
var i__5727__auto___23100 = (0);
while(true){
if((i__5727__auto___23100 < len__5726__auto___23099)){
args__5733__auto__.push((arguments[i__5727__auto___23100]));

var G__23101 = (i__5727__auto___23100 + (1));
i__5727__auto___23100 = G__23101;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__23096){
var vec__23097 = p__23096;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23097,(0),null);
return ((function (vec__23097,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4668__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__23098 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23098) : client.call(null,G__23098));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__23097,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq23094){
var G__23095 = cljs.core.first(seq23094);
var seq23094__$1 = cljs.core.next(seq23094);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__23095,seq23094__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
var G__23103 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23103) : client.call(null,G__23103));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23109 = arguments.length;
var i__5727__auto___23110 = (0);
while(true){
if((i__5727__auto___23110 < len__5726__auto___23109)){
args__5733__auto__.push((arguments[i__5727__auto___23110]));

var G__23111 = (i__5727__auto___23110 + (1));
i__5727__auto___23110 = G__23111;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23106){
var vec__23107 = p__23106;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23107,(0),null);
var G__23108 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23108) : cljs_http.client.request.call(null,G__23108));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq23104){
var G__23105 = cljs.core.first(seq23104);
var seq23104__$1 = cljs.core.next(seq23104);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__23105,seq23104__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23117 = arguments.length;
var i__5727__auto___23118 = (0);
while(true){
if((i__5727__auto___23118 < len__5726__auto___23117)){
args__5733__auto__.push((arguments[i__5727__auto___23118]));

var G__23119 = (i__5727__auto___23118 + (1));
i__5727__auto___23118 = G__23119;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23114){
var vec__23115 = p__23114;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23115,(0),null);
var G__23116 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23116) : cljs_http.client.request.call(null,G__23116));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq23112){
var G__23113 = cljs.core.first(seq23112);
var seq23112__$1 = cljs.core.next(seq23112);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__23113,seq23112__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23125 = arguments.length;
var i__5727__auto___23126 = (0);
while(true){
if((i__5727__auto___23126 < len__5726__auto___23125)){
args__5733__auto__.push((arguments[i__5727__auto___23126]));

var G__23127 = (i__5727__auto___23126 + (1));
i__5727__auto___23126 = G__23127;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23122){
var vec__23123 = p__23122;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23123,(0),null);
var G__23124 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23124) : cljs_http.client.request.call(null,G__23124));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq23120){
var G__23121 = cljs.core.first(seq23120);
var seq23120__$1 = cljs.core.next(seq23120);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__23121,seq23120__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23133 = arguments.length;
var i__5727__auto___23134 = (0);
while(true){
if((i__5727__auto___23134 < len__5726__auto___23133)){
args__5733__auto__.push((arguments[i__5727__auto___23134]));

var G__23135 = (i__5727__auto___23134 + (1));
i__5727__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23130){
var vec__23131 = p__23130;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23131,(0),null);
var G__23132 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23132) : cljs_http.client.request.call(null,G__23132));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq23128){
var G__23129 = cljs.core.first(seq23128);
var seq23128__$1 = cljs.core.next(seq23128);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__23129,seq23128__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23141 = arguments.length;
var i__5727__auto___23142 = (0);
while(true){
if((i__5727__auto___23142 < len__5726__auto___23141)){
args__5733__auto__.push((arguments[i__5727__auto___23142]));

var G__23143 = (i__5727__auto___23142 + (1));
i__5727__auto___23142 = G__23143;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23138){
var vec__23139 = p__23138;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139,(0),null);
var G__23140 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23140) : cljs_http.client.request.call(null,G__23140));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq23136){
var G__23137 = cljs.core.first(seq23136);
var seq23136__$1 = cljs.core.next(seq23136);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__23137,seq23136__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23149 = arguments.length;
var i__5727__auto___23150 = (0);
while(true){
if((i__5727__auto___23150 < len__5726__auto___23149)){
args__5733__auto__.push((arguments[i__5727__auto___23150]));

var G__23151 = (i__5727__auto___23150 + (1));
i__5727__auto___23150 = G__23151;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23146){
var vec__23147 = p__23146;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23147,(0),null);
var G__23148 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23148) : cljs_http.client.request.call(null,G__23148));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq23144){
var G__23145 = cljs.core.first(seq23144);
var seq23144__$1 = cljs.core.next(seq23144);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__23145,seq23144__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23157 = arguments.length;
var i__5727__auto___23158 = (0);
while(true){
if((i__5727__auto___23158 < len__5726__auto___23157)){
args__5733__auto__.push((arguments[i__5727__auto___23158]));

var G__23159 = (i__5727__auto___23158 + (1));
i__5727__auto___23158 = G__23159;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23154){
var vec__23155 = p__23154;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23155,(0),null);
var G__23156 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23156) : cljs_http.client.request.call(null,G__23156));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq23152){
var G__23153 = cljs.core.first(seq23152);
var seq23152__$1 = cljs.core.next(seq23152);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__23153,seq23152__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23165 = arguments.length;
var i__5727__auto___23166 = (0);
while(true){
if((i__5727__auto___23166 < len__5726__auto___23165)){
args__5733__auto__.push((arguments[i__5727__auto___23166]));

var G__23167 = (i__5727__auto___23166 + (1));
i__5727__auto___23166 = G__23167;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23162){
var vec__23163 = p__23162;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23163,(0),null);
var G__23164 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23164) : cljs_http.client.request.call(null,G__23164));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq23160){
var G__23161 = cljs.core.first(seq23160);
var seq23160__$1 = cljs.core.next(seq23160);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__23161,seq23160__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5733__auto__ = [];
var len__5726__auto___23173 = arguments.length;
var i__5727__auto___23174 = (0);
while(true){
if((i__5727__auto___23174 < len__5726__auto___23173)){
args__5733__auto__.push((arguments[i__5727__auto___23174]));

var G__23175 = (i__5727__auto___23174 + (1));
i__5727__auto___23174 = G__23175;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23170){
var vec__23171 = p__23170;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171,(0),null);
var G__23172 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23172) : cljs_http.client.request.call(null,G__23172));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq23168){
var G__23169 = cljs.core.first(seq23168);
var seq23168__$1 = cljs.core.next(seq23168);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__23169,seq23168__$1);
});
