// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('whip.communication');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('cljs.pprint');
goog.require('goog.net.XhrIo');
goog.require('whip.model');
goog.require('cljs_http.client');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('clojure.string');
whip.communication.md5_hash = (function whip$communication$md5_hash(s){
var md5 = (new goog.crypt.Md5());
md5.update(clojure.string.trim(s));

var G__23181 = md5.digest();
return goog.crypt.byteArrayToHex(G__23181);
});
var G__23182_23184 = "data.edn";
var G__23183_23185 = ((function (G__23182_23184){
return (function (e){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e.target.getResponseText()], 0));
});})(G__23182_23184))
;
goog.net.XhrIo.send(G__23182_23184,G__23183_23185);
whip.communication.member_details = (function whip$communication$member_details(email){
var G__23191 = (new goog.net.Jsonp([cljs.core.str("//www.gravatar.com/"),cljs.core.str(whip.communication.md5_hash(email)),cljs.core.str(".json")].join('')));
G__23191.send(null,((function (G__23191){
return (function whip$communication$member_details_$_profile_success(result){
return whip.model.set_member_BANG_(whip.model.app_state,email,(function (){var sb__5642__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23194_23196 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23195_23197 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23194_23196,_STAR_print_fn_STAR_23195_23197,sb__5642__auto__,G__23191){
return (function (x__5643__auto__){
return sb__5642__auto__.append(x__5643__auto__);
});})(_STAR_print_newline_STAR_23194_23196,_STAR_print_fn_STAR_23195_23197,sb__5642__auto__,G__23191))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(result).call(null,"entry"));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23195_23197;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23194_23196;
}
return [cljs.core.str(sb__5642__auto__)].join('');
})());
});})(G__23191))
,((function (G__23191){
return (function whip$communication$member_details_$_profile_error(error){
return whip.model.set_member_BANG_(whip.model.app_state,email,"No profile");
});})(G__23191))
);

return G__23191;
});
whip.communication.member_details("timothypratley@gmail.com");
var c__13322__auto___23216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___23216){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___23216){
return (function (state_23206){
var state_val_23207 = (state_23206[(1)]);
if((state_val_23207 === (1))){
var inst_23198 = cljs_http.client.get("data.edn");
var state_23206__$1 = state_23206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23206__$1,(2),inst_23198);
} else {
if((state_val_23207 === (2))){
var inst_23200 = (state_23206[(2)]);
var inst_23201 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_23200);
var inst_23202 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23201], 0));
var inst_23203 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_23200);
var inst_23204 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_23203], 0));
var state_23206__$1 = (function (){var statearr_23208 = state_23206;
(statearr_23208[(7)] = inst_23202);

return statearr_23208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23206__$1,inst_23204);
} else {
return null;
}
}
});})(c__13322__auto___23216))
;
return ((function (switch__13208__auto__,c__13322__auto___23216){
return (function() {
var whip$communication$state_machine__13209__auto__ = null;
var whip$communication$state_machine__13209__auto____0 = (function (){
var statearr_23212 = [null,null,null,null,null,null,null,null];
(statearr_23212[(0)] = whip$communication$state_machine__13209__auto__);

(statearr_23212[(1)] = (1));

return statearr_23212;
});
var whip$communication$state_machine__13209__auto____1 = (function (state_23206){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_23206);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e23213){if((e23213 instanceof Object)){
var ex__13212__auto__ = e23213;
var statearr_23214_23217 = state_23206;
(statearr_23214_23217[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23206);

return cljs.core.cst$kw$recur;
} else {
throw e23213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__23218 = state_23206;
state_23206 = G__23218;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
whip$communication$state_machine__13209__auto__ = function(state_23206){
switch(arguments.length){
case 0:
return whip$communication$state_machine__13209__auto____0.call(this);
case 1:
return whip$communication$state_machine__13209__auto____1.call(this,state_23206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
whip$communication$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = whip$communication$state_machine__13209__auto____0;
whip$communication$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = whip$communication$state_machine__13209__auto____1;
return whip$communication$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___23216))
})();
var state__13324__auto__ = (function (){var statearr_23215 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_23215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___23216);

return statearr_23215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___23216))
);

