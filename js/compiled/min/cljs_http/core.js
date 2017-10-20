// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__20379 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20379) : cljs.core.atom.call(null,G__20379));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__20382){
var vec__20383 = p__20382;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20383,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__20385 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__20385)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__20385)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__20385)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__20385)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__20385)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__20385)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__20386){
var map__20390 = p__20386;
var map__20390__$1 = ((((!((map__20390 == null)))?((((map__20390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20390):map__20390);
var request = map__20390__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20390__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20390__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20390__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4668__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__20392 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__20392,default_headers);

cljs_http.core.apply_response_type_BANG_(G__20392,response_type);

G__20392.setTimeoutInterval(timeout);

G__20392.setWithCredentials(send_credentials);

return G__20392;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__20393){
var map__20421 = p__20393;
var map__20421__$1 = ((((!((map__20421 == null)))?((((map__20421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20421):map__20421);
var request = map__20421__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4668__auto__ = request_method;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__20423 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__20423) : cljs_http.core.error_kw.call(null,G__20423));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13322__auto___20448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___20448,channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___20448,channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_20434){
var state_val_20435 = (state_20434[(1)]);
if((state_val_20435 === (1))){
var state_20434__$1 = state_20434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20434__$1,(2),cancel);
} else {
if((state_val_20435 === (2))){
var inst_20425 = (state_20434[(2)]);
var inst_20426 = xhr__$1.isComplete();
var inst_20427 = cljs.core.not(inst_20426);
var state_20434__$1 = (function (){var statearr_20436 = state_20434;
(statearr_20436[(7)] = inst_20425);

return statearr_20436;
})();
if(inst_20427){
var statearr_20437_20449 = state_20434__$1;
(statearr_20437_20449[(1)] = (3));

} else {
var statearr_20438_20450 = state_20434__$1;
(statearr_20438_20450[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20435 === (3))){
var inst_20429 = xhr__$1.abort();
var state_20434__$1 = state_20434;
var statearr_20439_20451 = state_20434__$1;
(statearr_20439_20451[(2)] = inst_20429);

(statearr_20439_20451[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20435 === (4))){
var state_20434__$1 = state_20434;
var statearr_20440_20452 = state_20434__$1;
(statearr_20440_20452[(2)] = null);

(statearr_20440_20452[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20435 === (5))){
var inst_20432 = (state_20434[(2)]);
var state_20434__$1 = state_20434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20434__$1,inst_20432);
} else {
return null;
}
}
}
}
}
});})(c__13322__auto___20448,channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__13208__auto__,c__13322__auto___20448,channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__13209__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13209__auto____0 = (function (){
var statearr_20444 = [null,null,null,null,null,null,null,null];
(statearr_20444[(0)] = cljs_http$core$xhr_$_state_machine__13209__auto__);

(statearr_20444[(1)] = (1));

return statearr_20444;
});
var cljs_http$core$xhr_$_state_machine__13209__auto____1 = (function (state_20434){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_20434);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e20445){if((e20445 instanceof Object)){
var ex__13212__auto__ = e20445;
var statearr_20446_20453 = state_20434;
(statearr_20446_20453[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20434);

return cljs.core.cst$kw$recur;
} else {
throw e20445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__20454 = state_20434;
state_20434 = G__20454;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13209__auto__ = function(state_20434){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13209__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13209__auto____1.call(this,state_20434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13209__auto____0;
cljs_http$core$xhr_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13209__auto____1;
return cljs_http$core$xhr_$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___20448,channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__13324__auto__ = (function (){var statearr_20447 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_20447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___20448);

return statearr_20447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___20448,channel,request_url,method,headers__$1,xhr__$1,map__20421,map__20421__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__20455){
var map__20472 = p__20455;
var map__20472__$1 = ((((!((map__20472 == null)))?((((map__20472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20472):map__20472);
var request = map__20472__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20472__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20472__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20472__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20472__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_20488 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_20488], null));

if(cljs.core.truth_(cancel)){
var c__13322__auto___20489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___20489,req_20488,channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___20489,req_20488,channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_20478){
var state_val_20479 = (state_20478[(1)]);
if((state_val_20479 === (1))){
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20478__$1,(2),cancel);
} else {
if((state_val_20479 === (2))){
var inst_20475 = (state_20478[(2)]);
var inst_20476 = jsonp__$1.cancel(req_20488);
var state_20478__$1 = (function (){var statearr_20480 = state_20478;
(statearr_20480[(7)] = inst_20475);

return statearr_20480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20478__$1,inst_20476);
} else {
return null;
}
}
});})(c__13322__auto___20489,req_20488,channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13208__auto__,c__13322__auto___20489,req_20488,channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13209__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13209__auto____0 = (function (){
var statearr_20484 = [null,null,null,null,null,null,null,null];
(statearr_20484[(0)] = cljs_http$core$jsonp_$_state_machine__13209__auto__);

(statearr_20484[(1)] = (1));

return statearr_20484;
});
var cljs_http$core$jsonp_$_state_machine__13209__auto____1 = (function (state_20478){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_20478);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e20485){if((e20485 instanceof Object)){
var ex__13212__auto__ = e20485;
var statearr_20486_20490 = state_20478;
(statearr_20486_20490[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20478);

return cljs.core.cst$kw$recur;
} else {
throw e20485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__20491 = state_20478;
state_20478 = G__20491;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13209__auto__ = function(state_20478){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13209__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13209__auto____1.call(this,state_20478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13209__auto____0;
cljs_http$core$jsonp_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13209__auto____1;
return cljs_http$core$jsonp_$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___20489,req_20488,channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13324__auto__ = (function (){var statearr_20487 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_20487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___20489);

return statearr_20487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___20489,req_20488,channel,jsonp__$1,map__20472,map__20472__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__20492){
var map__20495 = p__20492;
var map__20495__$1 = ((((!((map__20495 == null)))?((((map__20495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20495):map__20495);
var request__$1 = map__20495__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20495__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
