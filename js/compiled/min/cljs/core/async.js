// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13367 = [];
var len__5726__auto___13373 = arguments.length;
var i__5727__auto___13374 = (0);
while(true){
if((i__5727__auto___13374 < len__5726__auto___13373)){
args13367.push((arguments[i__5727__auto___13374]));

var G__13375 = (i__5727__auto___13374 + (1));
i__5727__auto___13374 = G__13375;
continue;
} else {
}
break;
}

var G__13369 = args13367.length;
switch (G__13369) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13367.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13370 = (function (f,blockable,meta13371){
this.f = f;
this.blockable = blockable;
this.meta13371 = meta13371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13372,meta13371__$1){
var self__ = this;
var _13372__$1 = this;
return (new cljs.core.async.t_cljs$core$async13370(self__.f,self__.blockable,meta13371__$1));
});

cljs.core.async.t_cljs$core$async13370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13372){
var self__ = this;
var _13372__$1 = this;
return self__.meta13371;
});

cljs.core.async.t_cljs$core$async13370.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13370.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13371], null);
});

cljs.core.async.t_cljs$core$async13370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13370";

cljs.core.async.t_cljs$core$async13370.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13370");
});

cljs.core.async.__GT_t_cljs$core$async13370 = (function cljs$core$async$__GT_t_cljs$core$async13370(f__$1,blockable__$1,meta13371){
return (new cljs.core.async.t_cljs$core$async13370(f__$1,blockable__$1,meta13371));
});

}

return (new cljs.core.async.t_cljs$core$async13370(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13379 = [];
var len__5726__auto___13382 = arguments.length;
var i__5727__auto___13383 = (0);
while(true){
if((i__5727__auto___13383 < len__5726__auto___13382)){
args13379.push((arguments[i__5727__auto___13383]));

var G__13384 = (i__5727__auto___13383 + (1));
i__5727__auto___13383 = G__13384;
continue;
} else {
}
break;
}

var G__13381 = args13379.length;
switch (G__13381) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13379.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13386 = [];
var len__5726__auto___13389 = arguments.length;
var i__5727__auto___13390 = (0);
while(true){
if((i__5727__auto___13390 < len__5726__auto___13389)){
args13386.push((arguments[i__5727__auto___13390]));

var G__13391 = (i__5727__auto___13390 + (1));
i__5727__auto___13390 = G__13391;
continue;
} else {
}
break;
}

var G__13388 = args13386.length;
switch (G__13388) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13386.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13393 = [];
var len__5726__auto___13396 = arguments.length;
var i__5727__auto___13397 = (0);
while(true){
if((i__5727__auto___13397 < len__5726__auto___13396)){
args13393.push((arguments[i__5727__auto___13397]));

var G__13398 = (i__5727__auto___13397 + (1));
i__5727__auto___13397 = G__13398;
continue;
} else {
}
break;
}

var G__13395 = args13393.length;
switch (G__13395) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13393.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13400 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13400) : fn1.call(null,val_13400));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13400,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13400) : fn1.call(null,val_13400));
});})(val_13400,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13401 = [];
var len__5726__auto___13404 = arguments.length;
var i__5727__auto___13405 = (0);
while(true){
if((i__5727__auto___13405 < len__5726__auto___13404)){
args13401.push((arguments[i__5727__auto___13405]));

var G__13406 = (i__5727__auto___13405 + (1));
i__5727__auto___13405 = G__13406;
continue;
} else {
}
break;
}

var G__13403 = args13401.length;
switch (G__13403) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13401.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___13408 = n;
var x_13409 = (0);
while(true){
if((x_13409 < n__5571__auto___13408)){
(a[x_13409] = (0));

var G__13410 = (x_13409 + (1));
x_13409 = G__13410;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13411 = (i + (1));
i = G__13411;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13415 = (function (alt_flag,flag,meta13416){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13416 = meta13416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13417,meta13416__$1){
var self__ = this;
var _13417__$1 = this;
return (new cljs.core.async.t_cljs$core$async13415(self__.alt_flag,self__.flag,meta13416__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13417){
var self__ = this;
var _13417__$1 = this;
return self__.meta13416;
});})(flag))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13415.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13416], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13415";

cljs.core.async.t_cljs$core$async13415.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13415");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13415 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13415(alt_flag__$1,flag__$1,meta13416){
return (new cljs.core.async.t_cljs$core$async13415(alt_flag__$1,flag__$1,meta13416));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13415(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13421 = (function (alt_handler,flag,cb,meta13422){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13422 = meta13422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13423,meta13422__$1){
var self__ = this;
var _13423__$1 = this;
return (new cljs.core.async.t_cljs$core$async13421(self__.alt_handler,self__.flag,self__.cb,meta13422__$1));
});

cljs.core.async.t_cljs$core$async13421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13423){
var self__ = this;
var _13423__$1 = this;
return self__.meta13422;
});

cljs.core.async.t_cljs$core$async13421.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13422], null);
});

cljs.core.async.t_cljs$core$async13421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13421";

cljs.core.async.t_cljs$core$async13421.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13421");
});

cljs.core.async.__GT_t_cljs$core$async13421 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13421(alt_handler__$1,flag__$1,cb__$1,meta13422){
return (new cljs.core.async.t_cljs$core$async13421(alt_handler__$1,flag__$1,cb__$1,meta13422));
});

}

return (new cljs.core.async.t_cljs$core$async13421(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13424_SHARP_){
var G__13428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13424_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13428) : fret.call(null,G__13428));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13425_SHARP_){
var G__13429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13425_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13429) : fret.call(null,G__13429));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13430 = (i + (1));
i = G__13430;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___13436 = arguments.length;
var i__5727__auto___13437 = (0);
while(true){
if((i__5727__auto___13437 < len__5726__auto___13436)){
args__5733__auto__.push((arguments[i__5727__auto___13437]));

var G__13438 = (i__5727__auto___13437 + (1));
i__5727__auto___13437 = G__13438;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13433){
var map__13434 = p__13433;
var map__13434__$1 = ((((!((map__13434 == null)))?((((map__13434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13434):map__13434);
var opts = map__13434__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13431){
var G__13432 = cljs.core.first(seq13431);
var seq13431__$1 = cljs.core.next(seq13431);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13432,seq13431__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13439 = [];
var len__5726__auto___13489 = arguments.length;
var i__5727__auto___13490 = (0);
while(true){
if((i__5727__auto___13490 < len__5726__auto___13489)){
args13439.push((arguments[i__5727__auto___13490]));

var G__13491 = (i__5727__auto___13490 + (1));
i__5727__auto___13490 = G__13491;
continue;
} else {
}
break;
}

var G__13441 = args13439.length;
switch (G__13441) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13439.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13322__auto___13493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___13493){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___13493){
return (function (state_13465){
var state_val_13466 = (state_13465[(1)]);
if((state_val_13466 === (7))){
var inst_13461 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
var statearr_13467_13494 = state_13465__$1;
(statearr_13467_13494[(2)] = inst_13461);

(statearr_13467_13494[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (1))){
var state_13465__$1 = state_13465;
var statearr_13468_13495 = state_13465__$1;
(statearr_13468_13495[(2)] = null);

(statearr_13468_13495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (4))){
var inst_13444 = (state_13465[(7)]);
var inst_13444__$1 = (state_13465[(2)]);
var inst_13445 = (inst_13444__$1 == null);
var state_13465__$1 = (function (){var statearr_13469 = state_13465;
(statearr_13469[(7)] = inst_13444__$1);

return statearr_13469;
})();
if(cljs.core.truth_(inst_13445)){
var statearr_13470_13496 = state_13465__$1;
(statearr_13470_13496[(1)] = (5));

} else {
var statearr_13471_13497 = state_13465__$1;
(statearr_13471_13497[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (13))){
var state_13465__$1 = state_13465;
var statearr_13472_13498 = state_13465__$1;
(statearr_13472_13498[(2)] = null);

(statearr_13472_13498[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (6))){
var inst_13444 = (state_13465[(7)]);
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13465__$1,(11),to,inst_13444);
} else {
if((state_val_13466 === (3))){
var inst_13463 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13465__$1,inst_13463);
} else {
if((state_val_13466 === (12))){
var state_13465__$1 = state_13465;
var statearr_13473_13499 = state_13465__$1;
(statearr_13473_13499[(2)] = null);

(statearr_13473_13499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (2))){
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13465__$1,(4),from);
} else {
if((state_val_13466 === (11))){
var inst_13454 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
if(cljs.core.truth_(inst_13454)){
var statearr_13474_13500 = state_13465__$1;
(statearr_13474_13500[(1)] = (12));

} else {
var statearr_13475_13501 = state_13465__$1;
(statearr_13475_13501[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (9))){
var state_13465__$1 = state_13465;
var statearr_13476_13502 = state_13465__$1;
(statearr_13476_13502[(2)] = null);

(statearr_13476_13502[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (5))){
var state_13465__$1 = state_13465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13477_13503 = state_13465__$1;
(statearr_13477_13503[(1)] = (8));

} else {
var statearr_13478_13504 = state_13465__$1;
(statearr_13478_13504[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (14))){
var inst_13459 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
var statearr_13479_13505 = state_13465__$1;
(statearr_13479_13505[(2)] = inst_13459);

(statearr_13479_13505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (10))){
var inst_13451 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
var statearr_13480_13506 = state_13465__$1;
(statearr_13480_13506[(2)] = inst_13451);

(statearr_13480_13506[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13466 === (8))){
var inst_13448 = cljs.core.async.close_BANG_(to);
var state_13465__$1 = state_13465;
var statearr_13481_13507 = state_13465__$1;
(statearr_13481_13507[(2)] = inst_13448);

(statearr_13481_13507[(1)] = (10));


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
});})(c__13322__auto___13493))
;
return ((function (switch__13208__auto__,c__13322__auto___13493){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_13485 = [null,null,null,null,null,null,null,null];
(statearr_13485[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_13485[(1)] = (1));

return statearr_13485;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_13465){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_13465);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e13486){if((e13486 instanceof Object)){
var ex__13212__auto__ = e13486;
var statearr_13487_13508 = state_13465;
(statearr_13487_13508[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13465);

return cljs.core.cst$kw$recur;
} else {
throw e13486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__13509 = state_13465;
state_13465 = G__13509;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_13465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_13465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___13493))
})();
var state__13324__auto__ = (function (){var statearr_13488 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_13488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___13493);

return statearr_13488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___13493))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13693){
var vec__13694 = p__13693;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(1),null);
var job = vec__13694;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13322__auto___13876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___13876,res,vec__13694,v,p,job,jobs,results){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___13876,res,vec__13694,v,p,job,jobs,results){
return (function (state_13699){
var state_val_13700 = (state_13699[(1)]);
if((state_val_13700 === (1))){
var state_13699__$1 = state_13699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13699__$1,(2),res,v);
} else {
if((state_val_13700 === (2))){
var inst_13696 = (state_13699[(2)]);
var inst_13697 = cljs.core.async.close_BANG_(res);
var state_13699__$1 = (function (){var statearr_13701 = state_13699;
(statearr_13701[(7)] = inst_13696);

return statearr_13701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13699__$1,inst_13697);
} else {
return null;
}
}
});})(c__13322__auto___13876,res,vec__13694,v,p,job,jobs,results))
;
return ((function (switch__13208__auto__,c__13322__auto___13876,res,vec__13694,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0 = (function (){
var statearr_13705 = [null,null,null,null,null,null,null,null];
(statearr_13705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__);

(statearr_13705[(1)] = (1));

return statearr_13705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1 = (function (state_13699){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_13699);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e13706){if((e13706 instanceof Object)){
var ex__13212__auto__ = e13706;
var statearr_13707_13877 = state_13699;
(statearr_13707_13877[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13699);

return cljs.core.cst$kw$recur;
} else {
throw e13706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__13878 = state_13699;
state_13699 = G__13878;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = function(state_13699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1.call(this,state_13699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___13876,res,vec__13694,v,p,job,jobs,results))
})();
var state__13324__auto__ = (function (){var statearr_13708 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_13708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___13876);

return statearr_13708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___13876,res,vec__13694,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13709){
var vec__13710 = p__13709;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(1),null);
var job = vec__13710;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___13879 = n;
var __13880 = (0);
while(true){
if((__13880 < n__5571__auto___13879)){
var G__13711_13881 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13711_13881) {
case "compute":
var c__13322__auto___13883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13880,c__13322__auto___13883,G__13711_13881,n__5571__auto___13879,jobs,results,process,async){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (__13880,c__13322__auto___13883,G__13711_13881,n__5571__auto___13879,jobs,results,process,async){
return (function (state_13724){
var state_val_13725 = (state_13724[(1)]);
if((state_val_13725 === (1))){
var state_13724__$1 = state_13724;
var statearr_13726_13884 = state_13724__$1;
(statearr_13726_13884[(2)] = null);

(statearr_13726_13884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13725 === (2))){
var state_13724__$1 = state_13724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13724__$1,(4),jobs);
} else {
if((state_val_13725 === (3))){
var inst_13722 = (state_13724[(2)]);
var state_13724__$1 = state_13724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13724__$1,inst_13722);
} else {
if((state_val_13725 === (4))){
var inst_13714 = (state_13724[(2)]);
var inst_13715 = process(inst_13714);
var state_13724__$1 = state_13724;
if(cljs.core.truth_(inst_13715)){
var statearr_13727_13885 = state_13724__$1;
(statearr_13727_13885[(1)] = (5));

} else {
var statearr_13728_13886 = state_13724__$1;
(statearr_13728_13886[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13725 === (5))){
var state_13724__$1 = state_13724;
var statearr_13729_13887 = state_13724__$1;
(statearr_13729_13887[(2)] = null);

(statearr_13729_13887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13725 === (6))){
var state_13724__$1 = state_13724;
var statearr_13730_13888 = state_13724__$1;
(statearr_13730_13888[(2)] = null);

(statearr_13730_13888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13725 === (7))){
var inst_13720 = (state_13724[(2)]);
var state_13724__$1 = state_13724;
var statearr_13731_13889 = state_13724__$1;
(statearr_13731_13889[(2)] = inst_13720);

(statearr_13731_13889[(1)] = (3));


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
});})(__13880,c__13322__auto___13883,G__13711_13881,n__5571__auto___13879,jobs,results,process,async))
;
return ((function (__13880,switch__13208__auto__,c__13322__auto___13883,G__13711_13881,n__5571__auto___13879,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0 = (function (){
var statearr_13735 = [null,null,null,null,null,null,null];
(statearr_13735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__);

(statearr_13735[(1)] = (1));

return statearr_13735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1 = (function (state_13724){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_13724);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e13736){if((e13736 instanceof Object)){
var ex__13212__auto__ = e13736;
var statearr_13737_13890 = state_13724;
(statearr_13737_13890[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13724);

return cljs.core.cst$kw$recur;
} else {
throw e13736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__13891 = state_13724;
state_13724 = G__13891;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = function(state_13724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1.call(this,state_13724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__;
})()
;})(__13880,switch__13208__auto__,c__13322__auto___13883,G__13711_13881,n__5571__auto___13879,jobs,results,process,async))
})();
var state__13324__auto__ = (function (){var statearr_13738 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_13738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___13883);

return statearr_13738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(__13880,c__13322__auto___13883,G__13711_13881,n__5571__auto___13879,jobs,results,process,async))
);


break;
case "async":
var c__13322__auto___13892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13880,c__13322__auto___13892,G__13711_13881,n__5571__auto___13879,jobs,results,process,async){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (__13880,c__13322__auto___13892,G__13711_13881,n__5571__auto___13879,jobs,results,process,async){
return (function (state_13751){
var state_val_13752 = (state_13751[(1)]);
if((state_val_13752 === (1))){
var state_13751__$1 = state_13751;
var statearr_13753_13893 = state_13751__$1;
(statearr_13753_13893[(2)] = null);

(statearr_13753_13893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13752 === (2))){
var state_13751__$1 = state_13751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13751__$1,(4),jobs);
} else {
if((state_val_13752 === (3))){
var inst_13749 = (state_13751[(2)]);
var state_13751__$1 = state_13751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13751__$1,inst_13749);
} else {
if((state_val_13752 === (4))){
var inst_13741 = (state_13751[(2)]);
var inst_13742 = async(inst_13741);
var state_13751__$1 = state_13751;
if(cljs.core.truth_(inst_13742)){
var statearr_13754_13894 = state_13751__$1;
(statearr_13754_13894[(1)] = (5));

} else {
var statearr_13755_13895 = state_13751__$1;
(statearr_13755_13895[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13752 === (5))){
var state_13751__$1 = state_13751;
var statearr_13756_13896 = state_13751__$1;
(statearr_13756_13896[(2)] = null);

(statearr_13756_13896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13752 === (6))){
var state_13751__$1 = state_13751;
var statearr_13757_13897 = state_13751__$1;
(statearr_13757_13897[(2)] = null);

(statearr_13757_13897[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13752 === (7))){
var inst_13747 = (state_13751[(2)]);
var state_13751__$1 = state_13751;
var statearr_13758_13898 = state_13751__$1;
(statearr_13758_13898[(2)] = inst_13747);

(statearr_13758_13898[(1)] = (3));


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
});})(__13880,c__13322__auto___13892,G__13711_13881,n__5571__auto___13879,jobs,results,process,async))
;
return ((function (__13880,switch__13208__auto__,c__13322__auto___13892,G__13711_13881,n__5571__auto___13879,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0 = (function (){
var statearr_13762 = [null,null,null,null,null,null,null];
(statearr_13762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__);

(statearr_13762[(1)] = (1));

return statearr_13762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1 = (function (state_13751){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_13751);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e13763){if((e13763 instanceof Object)){
var ex__13212__auto__ = e13763;
var statearr_13764_13899 = state_13751;
(statearr_13764_13899[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13751);

return cljs.core.cst$kw$recur;
} else {
throw e13763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__13900 = state_13751;
state_13751 = G__13900;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = function(state_13751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1.call(this,state_13751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__;
})()
;})(__13880,switch__13208__auto__,c__13322__auto___13892,G__13711_13881,n__5571__auto___13879,jobs,results,process,async))
})();
var state__13324__auto__ = (function (){var statearr_13765 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_13765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___13892);

return statearr_13765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(__13880,c__13322__auto___13892,G__13711_13881,n__5571__auto___13879,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13901 = (__13880 + (1));
__13880 = G__13901;
continue;
} else {
}
break;
}

var c__13322__auto___13902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___13902,jobs,results,process,async){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___13902,jobs,results,process,async){
return (function (state_13787){
var state_val_13788 = (state_13787[(1)]);
if((state_val_13788 === (1))){
var state_13787__$1 = state_13787;
var statearr_13789_13903 = state_13787__$1;
(statearr_13789_13903[(2)] = null);

(statearr_13789_13903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13788 === (2))){
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13787__$1,(4),from);
} else {
if((state_val_13788 === (3))){
var inst_13785 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13787__$1,inst_13785);
} else {
if((state_val_13788 === (4))){
var inst_13768 = (state_13787[(7)]);
var inst_13768__$1 = (state_13787[(2)]);
var inst_13769 = (inst_13768__$1 == null);
var state_13787__$1 = (function (){var statearr_13790 = state_13787;
(statearr_13790[(7)] = inst_13768__$1);

return statearr_13790;
})();
if(cljs.core.truth_(inst_13769)){
var statearr_13791_13904 = state_13787__$1;
(statearr_13791_13904[(1)] = (5));

} else {
var statearr_13792_13905 = state_13787__$1;
(statearr_13792_13905[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13788 === (5))){
var inst_13771 = cljs.core.async.close_BANG_(jobs);
var state_13787__$1 = state_13787;
var statearr_13793_13906 = state_13787__$1;
(statearr_13793_13906[(2)] = inst_13771);

(statearr_13793_13906[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13788 === (6))){
var inst_13773 = (state_13787[(8)]);
var inst_13768 = (state_13787[(7)]);
var inst_13773__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13775 = [inst_13768,inst_13773__$1];
var inst_13776 = (new cljs.core.PersistentVector(null,2,(5),inst_13774,inst_13775,null));
var state_13787__$1 = (function (){var statearr_13794 = state_13787;
(statearr_13794[(8)] = inst_13773__$1);

return statearr_13794;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13787__$1,(8),jobs,inst_13776);
} else {
if((state_val_13788 === (7))){
var inst_13783 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13795_13907 = state_13787__$1;
(statearr_13795_13907[(2)] = inst_13783);

(statearr_13795_13907[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13788 === (8))){
var inst_13773 = (state_13787[(8)]);
var inst_13778 = (state_13787[(2)]);
var state_13787__$1 = (function (){var statearr_13796 = state_13787;
(statearr_13796[(9)] = inst_13778);

return statearr_13796;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13787__$1,(9),results,inst_13773);
} else {
if((state_val_13788 === (9))){
var inst_13780 = (state_13787[(2)]);
var state_13787__$1 = (function (){var statearr_13797 = state_13787;
(statearr_13797[(10)] = inst_13780);

return statearr_13797;
})();
var statearr_13798_13908 = state_13787__$1;
(statearr_13798_13908[(2)] = null);

(statearr_13798_13908[(1)] = (2));


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
});})(c__13322__auto___13902,jobs,results,process,async))
;
return ((function (switch__13208__auto__,c__13322__auto___13902,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0 = (function (){
var statearr_13802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__);

(statearr_13802[(1)] = (1));

return statearr_13802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1 = (function (state_13787){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_13787);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e13803){if((e13803 instanceof Object)){
var ex__13212__auto__ = e13803;
var statearr_13804_13909 = state_13787;
(statearr_13804_13909[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13787);

return cljs.core.cst$kw$recur;
} else {
throw e13803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__13910 = state_13787;
state_13787 = G__13910;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = function(state_13787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1.call(this,state_13787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___13902,jobs,results,process,async))
})();
var state__13324__auto__ = (function (){var statearr_13805 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_13805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___13902);

return statearr_13805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___13902,jobs,results,process,async))
);


var c__13322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto__,jobs,results,process,async){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto__,jobs,results,process,async){
return (function (state_13843){
var state_val_13844 = (state_13843[(1)]);
if((state_val_13844 === (7))){
var inst_13839 = (state_13843[(2)]);
var state_13843__$1 = state_13843;
var statearr_13845_13911 = state_13843__$1;
(statearr_13845_13911[(2)] = inst_13839);

(statearr_13845_13911[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (20))){
var state_13843__$1 = state_13843;
var statearr_13846_13912 = state_13843__$1;
(statearr_13846_13912[(2)] = null);

(statearr_13846_13912[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (1))){
var state_13843__$1 = state_13843;
var statearr_13847_13913 = state_13843__$1;
(statearr_13847_13913[(2)] = null);

(statearr_13847_13913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (4))){
var inst_13808 = (state_13843[(7)]);
var inst_13808__$1 = (state_13843[(2)]);
var inst_13809 = (inst_13808__$1 == null);
var state_13843__$1 = (function (){var statearr_13848 = state_13843;
(statearr_13848[(7)] = inst_13808__$1);

return statearr_13848;
})();
if(cljs.core.truth_(inst_13809)){
var statearr_13849_13914 = state_13843__$1;
(statearr_13849_13914[(1)] = (5));

} else {
var statearr_13850_13915 = state_13843__$1;
(statearr_13850_13915[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (15))){
var inst_13821 = (state_13843[(8)]);
var state_13843__$1 = state_13843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13843__$1,(18),to,inst_13821);
} else {
if((state_val_13844 === (21))){
var inst_13834 = (state_13843[(2)]);
var state_13843__$1 = state_13843;
var statearr_13851_13916 = state_13843__$1;
(statearr_13851_13916[(2)] = inst_13834);

(statearr_13851_13916[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (13))){
var inst_13836 = (state_13843[(2)]);
var state_13843__$1 = (function (){var statearr_13852 = state_13843;
(statearr_13852[(9)] = inst_13836);

return statearr_13852;
})();
var statearr_13853_13917 = state_13843__$1;
(statearr_13853_13917[(2)] = null);

(statearr_13853_13917[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (6))){
var inst_13808 = (state_13843[(7)]);
var state_13843__$1 = state_13843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13843__$1,(11),inst_13808);
} else {
if((state_val_13844 === (17))){
var inst_13829 = (state_13843[(2)]);
var state_13843__$1 = state_13843;
if(cljs.core.truth_(inst_13829)){
var statearr_13854_13918 = state_13843__$1;
(statearr_13854_13918[(1)] = (19));

} else {
var statearr_13855_13919 = state_13843__$1;
(statearr_13855_13919[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (3))){
var inst_13841 = (state_13843[(2)]);
var state_13843__$1 = state_13843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13843__$1,inst_13841);
} else {
if((state_val_13844 === (12))){
var inst_13818 = (state_13843[(10)]);
var state_13843__$1 = state_13843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13843__$1,(14),inst_13818);
} else {
if((state_val_13844 === (2))){
var state_13843__$1 = state_13843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13843__$1,(4),results);
} else {
if((state_val_13844 === (19))){
var state_13843__$1 = state_13843;
var statearr_13856_13920 = state_13843__$1;
(statearr_13856_13920[(2)] = null);

(statearr_13856_13920[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (11))){
var inst_13818 = (state_13843[(2)]);
var state_13843__$1 = (function (){var statearr_13857 = state_13843;
(statearr_13857[(10)] = inst_13818);

return statearr_13857;
})();
var statearr_13858_13921 = state_13843__$1;
(statearr_13858_13921[(2)] = null);

(statearr_13858_13921[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (9))){
var state_13843__$1 = state_13843;
var statearr_13859_13922 = state_13843__$1;
(statearr_13859_13922[(2)] = null);

(statearr_13859_13922[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (5))){
var state_13843__$1 = state_13843;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13860_13923 = state_13843__$1;
(statearr_13860_13923[(1)] = (8));

} else {
var statearr_13861_13924 = state_13843__$1;
(statearr_13861_13924[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (14))){
var inst_13821 = (state_13843[(8)]);
var inst_13823 = (state_13843[(11)]);
var inst_13821__$1 = (state_13843[(2)]);
var inst_13822 = (inst_13821__$1 == null);
var inst_13823__$1 = cljs.core.not(inst_13822);
var state_13843__$1 = (function (){var statearr_13862 = state_13843;
(statearr_13862[(8)] = inst_13821__$1);

(statearr_13862[(11)] = inst_13823__$1);

return statearr_13862;
})();
if(inst_13823__$1){
var statearr_13863_13925 = state_13843__$1;
(statearr_13863_13925[(1)] = (15));

} else {
var statearr_13864_13926 = state_13843__$1;
(statearr_13864_13926[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (16))){
var inst_13823 = (state_13843[(11)]);
var state_13843__$1 = state_13843;
var statearr_13865_13927 = state_13843__$1;
(statearr_13865_13927[(2)] = inst_13823);

(statearr_13865_13927[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (10))){
var inst_13815 = (state_13843[(2)]);
var state_13843__$1 = state_13843;
var statearr_13866_13928 = state_13843__$1;
(statearr_13866_13928[(2)] = inst_13815);

(statearr_13866_13928[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (18))){
var inst_13826 = (state_13843[(2)]);
var state_13843__$1 = state_13843;
var statearr_13867_13929 = state_13843__$1;
(statearr_13867_13929[(2)] = inst_13826);

(statearr_13867_13929[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13844 === (8))){
var inst_13812 = cljs.core.async.close_BANG_(to);
var state_13843__$1 = state_13843;
var statearr_13868_13930 = state_13843__$1;
(statearr_13868_13930[(2)] = inst_13812);

(statearr_13868_13930[(1)] = (10));


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
});})(c__13322__auto__,jobs,results,process,async))
;
return ((function (switch__13208__auto__,c__13322__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0 = (function (){
var statearr_13872 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__);

(statearr_13872[(1)] = (1));

return statearr_13872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1 = (function (state_13843){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_13843);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e13873){if((e13873 instanceof Object)){
var ex__13212__auto__ = e13873;
var statearr_13874_13931 = state_13843;
(statearr_13874_13931[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13843);

return cljs.core.cst$kw$recur;
} else {
throw e13873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__13932 = state_13843;
state_13843 = G__13932;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__ = function(state_13843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1.call(this,state_13843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto__,jobs,results,process,async))
})();
var state__13324__auto__ = (function (){var statearr_13875 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_13875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto__);

return statearr_13875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto__,jobs,results,process,async))
);

return c__13322__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13933 = [];
var len__5726__auto___13936 = arguments.length;
var i__5727__auto___13937 = (0);
while(true){
if((i__5727__auto___13937 < len__5726__auto___13936)){
args13933.push((arguments[i__5727__auto___13937]));

var G__13938 = (i__5727__auto___13937 + (1));
i__5727__auto___13937 = G__13938;
continue;
} else {
}
break;
}

var G__13935 = args13933.length;
switch (G__13935) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13933.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13940 = [];
var len__5726__auto___13943 = arguments.length;
var i__5727__auto___13944 = (0);
while(true){
if((i__5727__auto___13944 < len__5726__auto___13943)){
args13940.push((arguments[i__5727__auto___13944]));

var G__13945 = (i__5727__auto___13944 + (1));
i__5727__auto___13944 = G__13945;
continue;
} else {
}
break;
}

var G__13942 = args13940.length;
switch (G__13942) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13940.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13947 = [];
var len__5726__auto___14000 = arguments.length;
var i__5727__auto___14001 = (0);
while(true){
if((i__5727__auto___14001 < len__5726__auto___14000)){
args13947.push((arguments[i__5727__auto___14001]));

var G__14002 = (i__5727__auto___14001 + (1));
i__5727__auto___14001 = G__14002;
continue;
} else {
}
break;
}

var G__13949 = args13947.length;
switch (G__13949) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13947.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13322__auto___14004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___14004,tc,fc){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___14004,tc,fc){
return (function (state_13975){
var state_val_13976 = (state_13975[(1)]);
if((state_val_13976 === (7))){
var inst_13971 = (state_13975[(2)]);
var state_13975__$1 = state_13975;
var statearr_13977_14005 = state_13975__$1;
(statearr_13977_14005[(2)] = inst_13971);

(statearr_13977_14005[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (1))){
var state_13975__$1 = state_13975;
var statearr_13978_14006 = state_13975__$1;
(statearr_13978_14006[(2)] = null);

(statearr_13978_14006[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (4))){
var inst_13952 = (state_13975[(7)]);
var inst_13952__$1 = (state_13975[(2)]);
var inst_13953 = (inst_13952__$1 == null);
var state_13975__$1 = (function (){var statearr_13979 = state_13975;
(statearr_13979[(7)] = inst_13952__$1);

return statearr_13979;
})();
if(cljs.core.truth_(inst_13953)){
var statearr_13980_14007 = state_13975__$1;
(statearr_13980_14007[(1)] = (5));

} else {
var statearr_13981_14008 = state_13975__$1;
(statearr_13981_14008[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (13))){
var state_13975__$1 = state_13975;
var statearr_13982_14009 = state_13975__$1;
(statearr_13982_14009[(2)] = null);

(statearr_13982_14009[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (6))){
var inst_13952 = (state_13975[(7)]);
var inst_13958 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13952) : p.call(null,inst_13952));
var state_13975__$1 = state_13975;
if(cljs.core.truth_(inst_13958)){
var statearr_13983_14010 = state_13975__$1;
(statearr_13983_14010[(1)] = (9));

} else {
var statearr_13984_14011 = state_13975__$1;
(statearr_13984_14011[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (3))){
var inst_13973 = (state_13975[(2)]);
var state_13975__$1 = state_13975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13975__$1,inst_13973);
} else {
if((state_val_13976 === (12))){
var state_13975__$1 = state_13975;
var statearr_13985_14012 = state_13975__$1;
(statearr_13985_14012[(2)] = null);

(statearr_13985_14012[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (2))){
var state_13975__$1 = state_13975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13975__$1,(4),ch);
} else {
if((state_val_13976 === (11))){
var inst_13952 = (state_13975[(7)]);
var inst_13962 = (state_13975[(2)]);
var state_13975__$1 = state_13975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13975__$1,(8),inst_13962,inst_13952);
} else {
if((state_val_13976 === (9))){
var state_13975__$1 = state_13975;
var statearr_13986_14013 = state_13975__$1;
(statearr_13986_14013[(2)] = tc);

(statearr_13986_14013[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (5))){
var inst_13955 = cljs.core.async.close_BANG_(tc);
var inst_13956 = cljs.core.async.close_BANG_(fc);
var state_13975__$1 = (function (){var statearr_13987 = state_13975;
(statearr_13987[(8)] = inst_13955);

return statearr_13987;
})();
var statearr_13988_14014 = state_13975__$1;
(statearr_13988_14014[(2)] = inst_13956);

(statearr_13988_14014[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (14))){
var inst_13969 = (state_13975[(2)]);
var state_13975__$1 = state_13975;
var statearr_13989_14015 = state_13975__$1;
(statearr_13989_14015[(2)] = inst_13969);

(statearr_13989_14015[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (10))){
var state_13975__$1 = state_13975;
var statearr_13990_14016 = state_13975__$1;
(statearr_13990_14016[(2)] = fc);

(statearr_13990_14016[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13976 === (8))){
var inst_13964 = (state_13975[(2)]);
var state_13975__$1 = state_13975;
if(cljs.core.truth_(inst_13964)){
var statearr_13991_14017 = state_13975__$1;
(statearr_13991_14017[(1)] = (12));

} else {
var statearr_13992_14018 = state_13975__$1;
(statearr_13992_14018[(1)] = (13));

}

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
});})(c__13322__auto___14004,tc,fc))
;
return ((function (switch__13208__auto__,c__13322__auto___14004,tc,fc){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_13996 = [null,null,null,null,null,null,null,null,null];
(statearr_13996[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_13996[(1)] = (1));

return statearr_13996;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_13975){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_13975);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e13997){if((e13997 instanceof Object)){
var ex__13212__auto__ = e13997;
var statearr_13998_14019 = state_13975;
(statearr_13998_14019[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13975);

return cljs.core.cst$kw$recur;
} else {
throw e13997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__14020 = state_13975;
state_13975 = G__14020;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_13975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_13975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___14004,tc,fc))
})();
var state__13324__auto__ = (function (){var statearr_13999 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_13999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___14004);

return statearr_13999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___14004,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto__){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto__){
return (function (state_14084){
var state_val_14085 = (state_14084[(1)]);
if((state_val_14085 === (7))){
var inst_14080 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
var statearr_14086_14107 = state_14084__$1;
(statearr_14086_14107[(2)] = inst_14080);

(statearr_14086_14107[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14085 === (1))){
var inst_14064 = init;
var state_14084__$1 = (function (){var statearr_14087 = state_14084;
(statearr_14087[(7)] = inst_14064);

return statearr_14087;
})();
var statearr_14088_14108 = state_14084__$1;
(statearr_14088_14108[(2)] = null);

(statearr_14088_14108[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14085 === (4))){
var inst_14067 = (state_14084[(8)]);
var inst_14067__$1 = (state_14084[(2)]);
var inst_14068 = (inst_14067__$1 == null);
var state_14084__$1 = (function (){var statearr_14089 = state_14084;
(statearr_14089[(8)] = inst_14067__$1);

return statearr_14089;
})();
if(cljs.core.truth_(inst_14068)){
var statearr_14090_14109 = state_14084__$1;
(statearr_14090_14109[(1)] = (5));

} else {
var statearr_14091_14110 = state_14084__$1;
(statearr_14091_14110[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14085 === (6))){
var inst_14067 = (state_14084[(8)]);
var inst_14071 = (state_14084[(9)]);
var inst_14064 = (state_14084[(7)]);
var inst_14071__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14064,inst_14067) : f.call(null,inst_14064,inst_14067));
var inst_14072 = cljs.core.reduced_QMARK_(inst_14071__$1);
var state_14084__$1 = (function (){var statearr_14092 = state_14084;
(statearr_14092[(9)] = inst_14071__$1);

return statearr_14092;
})();
if(inst_14072){
var statearr_14093_14111 = state_14084__$1;
(statearr_14093_14111[(1)] = (8));

} else {
var statearr_14094_14112 = state_14084__$1;
(statearr_14094_14112[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14085 === (3))){
var inst_14082 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14084__$1,inst_14082);
} else {
if((state_val_14085 === (2))){
var state_14084__$1 = state_14084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14084__$1,(4),ch);
} else {
if((state_val_14085 === (9))){
var inst_14071 = (state_14084[(9)]);
var inst_14064 = inst_14071;
var state_14084__$1 = (function (){var statearr_14095 = state_14084;
(statearr_14095[(7)] = inst_14064);

return statearr_14095;
})();
var statearr_14096_14113 = state_14084__$1;
(statearr_14096_14113[(2)] = null);

(statearr_14096_14113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14085 === (5))){
var inst_14064 = (state_14084[(7)]);
var state_14084__$1 = state_14084;
var statearr_14097_14114 = state_14084__$1;
(statearr_14097_14114[(2)] = inst_14064);

(statearr_14097_14114[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14085 === (10))){
var inst_14078 = (state_14084[(2)]);
var state_14084__$1 = state_14084;
var statearr_14098_14115 = state_14084__$1;
(statearr_14098_14115[(2)] = inst_14078);

(statearr_14098_14115[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14085 === (8))){
var inst_14071 = (state_14084[(9)]);
var inst_14074 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14071) : cljs.core.deref.call(null,inst_14071));
var state_14084__$1 = state_14084;
var statearr_14099_14116 = state_14084__$1;
(statearr_14099_14116[(2)] = inst_14074);

(statearr_14099_14116[(1)] = (10));


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
});})(c__13322__auto__))
;
return ((function (switch__13208__auto__,c__13322__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13209__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13209__auto____0 = (function (){
var statearr_14103 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14103[(0)] = cljs$core$async$reduce_$_state_machine__13209__auto__);

(statearr_14103[(1)] = (1));

return statearr_14103;
});
var cljs$core$async$reduce_$_state_machine__13209__auto____1 = (function (state_14084){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_14084);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e14104){if((e14104 instanceof Object)){
var ex__13212__auto__ = e14104;
var statearr_14105_14117 = state_14084;
(statearr_14105_14117[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14084);

return cljs.core.cst$kw$recur;
} else {
throw e14104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__14118 = state_14084;
state_14084 = G__14118;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13209__auto__ = function(state_14084){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13209__auto____1.call(this,state_14084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13209__auto____0;
cljs$core$async$reduce_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13209__auto____1;
return cljs$core$async$reduce_$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto__))
})();
var state__13324__auto__ = (function (){var statearr_14106 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_14106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto__);

return statearr_14106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto__))
);

return c__13322__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14119 = [];
var len__5726__auto___14171 = arguments.length;
var i__5727__auto___14172 = (0);
while(true){
if((i__5727__auto___14172 < len__5726__auto___14171)){
args14119.push((arguments[i__5727__auto___14172]));

var G__14173 = (i__5727__auto___14172 + (1));
i__5727__auto___14172 = G__14173;
continue;
} else {
}
break;
}

var G__14121 = args14119.length;
switch (G__14121) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14119.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto__){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto__){
return (function (state_14146){
var state_val_14147 = (state_14146[(1)]);
if((state_val_14147 === (7))){
var inst_14128 = (state_14146[(2)]);
var state_14146__$1 = state_14146;
var statearr_14148_14175 = state_14146__$1;
(statearr_14148_14175[(2)] = inst_14128);

(statearr_14148_14175[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (1))){
var inst_14122 = cljs.core.seq(coll);
var inst_14123 = inst_14122;
var state_14146__$1 = (function (){var statearr_14149 = state_14146;
(statearr_14149[(7)] = inst_14123);

return statearr_14149;
})();
var statearr_14150_14176 = state_14146__$1;
(statearr_14150_14176[(2)] = null);

(statearr_14150_14176[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (4))){
var inst_14123 = (state_14146[(7)]);
var inst_14126 = cljs.core.first(inst_14123);
var state_14146__$1 = state_14146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14146__$1,(7),ch,inst_14126);
} else {
if((state_val_14147 === (13))){
var inst_14140 = (state_14146[(2)]);
var state_14146__$1 = state_14146;
var statearr_14151_14177 = state_14146__$1;
(statearr_14151_14177[(2)] = inst_14140);

(statearr_14151_14177[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (6))){
var inst_14131 = (state_14146[(2)]);
var state_14146__$1 = state_14146;
if(cljs.core.truth_(inst_14131)){
var statearr_14152_14178 = state_14146__$1;
(statearr_14152_14178[(1)] = (8));

} else {
var statearr_14153_14179 = state_14146__$1;
(statearr_14153_14179[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (3))){
var inst_14144 = (state_14146[(2)]);
var state_14146__$1 = state_14146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14146__$1,inst_14144);
} else {
if((state_val_14147 === (12))){
var state_14146__$1 = state_14146;
var statearr_14154_14180 = state_14146__$1;
(statearr_14154_14180[(2)] = null);

(statearr_14154_14180[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (2))){
var inst_14123 = (state_14146[(7)]);
var state_14146__$1 = state_14146;
if(cljs.core.truth_(inst_14123)){
var statearr_14155_14181 = state_14146__$1;
(statearr_14155_14181[(1)] = (4));

} else {
var statearr_14156_14182 = state_14146__$1;
(statearr_14156_14182[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (11))){
var inst_14137 = cljs.core.async.close_BANG_(ch);
var state_14146__$1 = state_14146;
var statearr_14157_14183 = state_14146__$1;
(statearr_14157_14183[(2)] = inst_14137);

(statearr_14157_14183[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (9))){
var state_14146__$1 = state_14146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14158_14184 = state_14146__$1;
(statearr_14158_14184[(1)] = (11));

} else {
var statearr_14159_14185 = state_14146__$1;
(statearr_14159_14185[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (5))){
var inst_14123 = (state_14146[(7)]);
var state_14146__$1 = state_14146;
var statearr_14160_14186 = state_14146__$1;
(statearr_14160_14186[(2)] = inst_14123);

(statearr_14160_14186[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (10))){
var inst_14142 = (state_14146[(2)]);
var state_14146__$1 = state_14146;
var statearr_14161_14187 = state_14146__$1;
(statearr_14161_14187[(2)] = inst_14142);

(statearr_14161_14187[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14147 === (8))){
var inst_14123 = (state_14146[(7)]);
var inst_14133 = cljs.core.next(inst_14123);
var inst_14123__$1 = inst_14133;
var state_14146__$1 = (function (){var statearr_14162 = state_14146;
(statearr_14162[(7)] = inst_14123__$1);

return statearr_14162;
})();
var statearr_14163_14188 = state_14146__$1;
(statearr_14163_14188[(2)] = null);

(statearr_14163_14188[(1)] = (2));


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
});})(c__13322__auto__))
;
return ((function (switch__13208__auto__,c__13322__auto__){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_14167 = [null,null,null,null,null,null,null,null];
(statearr_14167[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_14167[(1)] = (1));

return statearr_14167;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_14146){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_14146);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e14168){if((e14168 instanceof Object)){
var ex__13212__auto__ = e14168;
var statearr_14169_14189 = state_14146;
(statearr_14169_14189[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14146);

return cljs.core.cst$kw$recur;
} else {
throw e14168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__14190 = state_14146;
state_14146 = G__14190;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_14146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_14146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto__))
})();
var state__13324__auto__ = (function (){var statearr_14170 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_14170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto__);

return statearr_14170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto__))
);

return c__13322__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5324__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5324__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto__.call(null,m));
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__14415 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14415) : cljs.core.atom.call(null,G__14415));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14416 = (function (mult,ch,cs,meta14417){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14417 = meta14417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14418,meta14417__$1){
var self__ = this;
var _14418__$1 = this;
return (new cljs.core.async.t_cljs$core$async14416(self__.mult,self__.ch,self__.cs,meta14417__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14418){
var self__ = this;
var _14418__$1 = this;
return self__.meta14417;
});})(cs))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14419_14639 = self__.cs;
var G__14420_14640 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14419_14639,G__14420_14640) : cljs.core.reset_BANG_.call(null,G__14419_14639,G__14420_14640));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14416.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14417], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14416";

cljs.core.async.t_cljs$core$async14416.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14416");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14416 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14416(mult__$1,ch__$1,cs__$1,meta14417){
return (new cljs.core.async.t_cljs$core$async14416(mult__$1,ch__$1,cs__$1,meta14417));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14416(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13322__auto___14641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___14641,cs,m,dchan,dctr,done){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___14641,cs,m,dchan,dctr,done){
return (function (state_14551){
var state_val_14552 = (state_14551[(1)]);
if((state_val_14552 === (7))){
var inst_14547 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14553_14642 = state_14551__$1;
(statearr_14553_14642[(2)] = inst_14547);

(statearr_14553_14642[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (20))){
var inst_14452 = (state_14551[(7)]);
var inst_14462 = cljs.core.first(inst_14452);
var inst_14463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14462,(0),null);
var inst_14464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14462,(1),null);
var state_14551__$1 = (function (){var statearr_14554 = state_14551;
(statearr_14554[(8)] = inst_14463);

return statearr_14554;
})();
if(cljs.core.truth_(inst_14464)){
var statearr_14555_14643 = state_14551__$1;
(statearr_14555_14643[(1)] = (22));

} else {
var statearr_14556_14644 = state_14551__$1;
(statearr_14556_14644[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (27))){
var inst_14423 = (state_14551[(9)]);
var inst_14494 = (state_14551[(10)]);
var inst_14499 = (state_14551[(11)]);
var inst_14492 = (state_14551[(12)]);
var inst_14499__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14492,inst_14494);
var inst_14500 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14499__$1,inst_14423,done);
var state_14551__$1 = (function (){var statearr_14557 = state_14551;
(statearr_14557[(11)] = inst_14499__$1);

return statearr_14557;
})();
if(cljs.core.truth_(inst_14500)){
var statearr_14558_14645 = state_14551__$1;
(statearr_14558_14645[(1)] = (30));

} else {
var statearr_14559_14646 = state_14551__$1;
(statearr_14559_14646[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (1))){
var state_14551__$1 = state_14551;
var statearr_14560_14647 = state_14551__$1;
(statearr_14560_14647[(2)] = null);

(statearr_14560_14647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (24))){
var inst_14452 = (state_14551[(7)]);
var inst_14469 = (state_14551[(2)]);
var inst_14470 = cljs.core.next(inst_14452);
var inst_14432 = inst_14470;
var inst_14433 = null;
var inst_14434 = (0);
var inst_14435 = (0);
var state_14551__$1 = (function (){var statearr_14561 = state_14551;
(statearr_14561[(13)] = inst_14435);

(statearr_14561[(14)] = inst_14434);

(statearr_14561[(15)] = inst_14469);

(statearr_14561[(16)] = inst_14432);

(statearr_14561[(17)] = inst_14433);

return statearr_14561;
})();
var statearr_14562_14648 = state_14551__$1;
(statearr_14562_14648[(2)] = null);

(statearr_14562_14648[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (39))){
var state_14551__$1 = state_14551;
var statearr_14566_14649 = state_14551__$1;
(statearr_14566_14649[(2)] = null);

(statearr_14566_14649[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (4))){
var inst_14423 = (state_14551[(9)]);
var inst_14423__$1 = (state_14551[(2)]);
var inst_14424 = (inst_14423__$1 == null);
var state_14551__$1 = (function (){var statearr_14567 = state_14551;
(statearr_14567[(9)] = inst_14423__$1);

return statearr_14567;
})();
if(cljs.core.truth_(inst_14424)){
var statearr_14568_14650 = state_14551__$1;
(statearr_14568_14650[(1)] = (5));

} else {
var statearr_14569_14651 = state_14551__$1;
(statearr_14569_14651[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (15))){
var inst_14435 = (state_14551[(13)]);
var inst_14434 = (state_14551[(14)]);
var inst_14432 = (state_14551[(16)]);
var inst_14433 = (state_14551[(17)]);
var inst_14448 = (state_14551[(2)]);
var inst_14449 = (inst_14435 + (1));
var tmp14563 = inst_14434;
var tmp14564 = inst_14432;
var tmp14565 = inst_14433;
var inst_14432__$1 = tmp14564;
var inst_14433__$1 = tmp14565;
var inst_14434__$1 = tmp14563;
var inst_14435__$1 = inst_14449;
var state_14551__$1 = (function (){var statearr_14570 = state_14551;
(statearr_14570[(13)] = inst_14435__$1);

(statearr_14570[(14)] = inst_14434__$1);

(statearr_14570[(16)] = inst_14432__$1);

(statearr_14570[(18)] = inst_14448);

(statearr_14570[(17)] = inst_14433__$1);

return statearr_14570;
})();
var statearr_14571_14652 = state_14551__$1;
(statearr_14571_14652[(2)] = null);

(statearr_14571_14652[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (21))){
var inst_14473 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14575_14653 = state_14551__$1;
(statearr_14575_14653[(2)] = inst_14473);

(statearr_14575_14653[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (31))){
var inst_14499 = (state_14551[(11)]);
var inst_14503 = done(null);
var inst_14504 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14499);
var state_14551__$1 = (function (){var statearr_14576 = state_14551;
(statearr_14576[(19)] = inst_14503);

return statearr_14576;
})();
var statearr_14577_14654 = state_14551__$1;
(statearr_14577_14654[(2)] = inst_14504);

(statearr_14577_14654[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (32))){
var inst_14491 = (state_14551[(20)]);
var inst_14494 = (state_14551[(10)]);
var inst_14493 = (state_14551[(21)]);
var inst_14492 = (state_14551[(12)]);
var inst_14506 = (state_14551[(2)]);
var inst_14507 = (inst_14494 + (1));
var tmp14572 = inst_14491;
var tmp14573 = inst_14493;
var tmp14574 = inst_14492;
var inst_14491__$1 = tmp14572;
var inst_14492__$1 = tmp14574;
var inst_14493__$1 = tmp14573;
var inst_14494__$1 = inst_14507;
var state_14551__$1 = (function (){var statearr_14578 = state_14551;
(statearr_14578[(20)] = inst_14491__$1);

(statearr_14578[(22)] = inst_14506);

(statearr_14578[(10)] = inst_14494__$1);

(statearr_14578[(21)] = inst_14493__$1);

(statearr_14578[(12)] = inst_14492__$1);

return statearr_14578;
})();
var statearr_14579_14655 = state_14551__$1;
(statearr_14579_14655[(2)] = null);

(statearr_14579_14655[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (40))){
var inst_14519 = (state_14551[(23)]);
var inst_14523 = done(null);
var inst_14524 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14519);
var state_14551__$1 = (function (){var statearr_14580 = state_14551;
(statearr_14580[(24)] = inst_14523);

return statearr_14580;
})();
var statearr_14581_14656 = state_14551__$1;
(statearr_14581_14656[(2)] = inst_14524);

(statearr_14581_14656[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (33))){
var inst_14510 = (state_14551[(25)]);
var inst_14512 = cljs.core.chunked_seq_QMARK_(inst_14510);
var state_14551__$1 = state_14551;
if(inst_14512){
var statearr_14582_14657 = state_14551__$1;
(statearr_14582_14657[(1)] = (36));

} else {
var statearr_14583_14658 = state_14551__$1;
(statearr_14583_14658[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (13))){
var inst_14442 = (state_14551[(26)]);
var inst_14445 = cljs.core.async.close_BANG_(inst_14442);
var state_14551__$1 = state_14551;
var statearr_14584_14659 = state_14551__$1;
(statearr_14584_14659[(2)] = inst_14445);

(statearr_14584_14659[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (22))){
var inst_14463 = (state_14551[(8)]);
var inst_14466 = cljs.core.async.close_BANG_(inst_14463);
var state_14551__$1 = state_14551;
var statearr_14585_14660 = state_14551__$1;
(statearr_14585_14660[(2)] = inst_14466);

(statearr_14585_14660[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (36))){
var inst_14510 = (state_14551[(25)]);
var inst_14514 = cljs.core.chunk_first(inst_14510);
var inst_14515 = cljs.core.chunk_rest(inst_14510);
var inst_14516 = cljs.core.count(inst_14514);
var inst_14491 = inst_14515;
var inst_14492 = inst_14514;
var inst_14493 = inst_14516;
var inst_14494 = (0);
var state_14551__$1 = (function (){var statearr_14586 = state_14551;
(statearr_14586[(20)] = inst_14491);

(statearr_14586[(10)] = inst_14494);

(statearr_14586[(21)] = inst_14493);

(statearr_14586[(12)] = inst_14492);

return statearr_14586;
})();
var statearr_14587_14661 = state_14551__$1;
(statearr_14587_14661[(2)] = null);

(statearr_14587_14661[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (41))){
var inst_14510 = (state_14551[(25)]);
var inst_14526 = (state_14551[(2)]);
var inst_14527 = cljs.core.next(inst_14510);
var inst_14491 = inst_14527;
var inst_14492 = null;
var inst_14493 = (0);
var inst_14494 = (0);
var state_14551__$1 = (function (){var statearr_14588 = state_14551;
(statearr_14588[(20)] = inst_14491);

(statearr_14588[(10)] = inst_14494);

(statearr_14588[(27)] = inst_14526);

(statearr_14588[(21)] = inst_14493);

(statearr_14588[(12)] = inst_14492);

return statearr_14588;
})();
var statearr_14589_14662 = state_14551__$1;
(statearr_14589_14662[(2)] = null);

(statearr_14589_14662[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (43))){
var state_14551__$1 = state_14551;
var statearr_14590_14663 = state_14551__$1;
(statearr_14590_14663[(2)] = null);

(statearr_14590_14663[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (29))){
var inst_14535 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14591_14664 = state_14551__$1;
(statearr_14591_14664[(2)] = inst_14535);

(statearr_14591_14664[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (44))){
var inst_14544 = (state_14551[(2)]);
var state_14551__$1 = (function (){var statearr_14592 = state_14551;
(statearr_14592[(28)] = inst_14544);

return statearr_14592;
})();
var statearr_14593_14665 = state_14551__$1;
(statearr_14593_14665[(2)] = null);

(statearr_14593_14665[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (6))){
var inst_14483 = (state_14551[(29)]);
var inst_14482 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14483__$1 = cljs.core.keys(inst_14482);
var inst_14484 = cljs.core.count(inst_14483__$1);
var inst_14485 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14484) : cljs.core.reset_BANG_.call(null,dctr,inst_14484));
var inst_14490 = cljs.core.seq(inst_14483__$1);
var inst_14491 = inst_14490;
var inst_14492 = null;
var inst_14493 = (0);
var inst_14494 = (0);
var state_14551__$1 = (function (){var statearr_14594 = state_14551;
(statearr_14594[(20)] = inst_14491);

(statearr_14594[(10)] = inst_14494);

(statearr_14594[(30)] = inst_14485);

(statearr_14594[(29)] = inst_14483__$1);

(statearr_14594[(21)] = inst_14493);

(statearr_14594[(12)] = inst_14492);

return statearr_14594;
})();
var statearr_14595_14666 = state_14551__$1;
(statearr_14595_14666[(2)] = null);

(statearr_14595_14666[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (28))){
var inst_14491 = (state_14551[(20)]);
var inst_14510 = (state_14551[(25)]);
var inst_14510__$1 = cljs.core.seq(inst_14491);
var state_14551__$1 = (function (){var statearr_14596 = state_14551;
(statearr_14596[(25)] = inst_14510__$1);

return statearr_14596;
})();
if(inst_14510__$1){
var statearr_14597_14667 = state_14551__$1;
(statearr_14597_14667[(1)] = (33));

} else {
var statearr_14598_14668 = state_14551__$1;
(statearr_14598_14668[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (25))){
var inst_14494 = (state_14551[(10)]);
var inst_14493 = (state_14551[(21)]);
var inst_14496 = (inst_14494 < inst_14493);
var inst_14497 = inst_14496;
var state_14551__$1 = state_14551;
if(cljs.core.truth_(inst_14497)){
var statearr_14599_14669 = state_14551__$1;
(statearr_14599_14669[(1)] = (27));

} else {
var statearr_14600_14670 = state_14551__$1;
(statearr_14600_14670[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (34))){
var state_14551__$1 = state_14551;
var statearr_14601_14671 = state_14551__$1;
(statearr_14601_14671[(2)] = null);

(statearr_14601_14671[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (17))){
var state_14551__$1 = state_14551;
var statearr_14602_14672 = state_14551__$1;
(statearr_14602_14672[(2)] = null);

(statearr_14602_14672[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (3))){
var inst_14549 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14551__$1,inst_14549);
} else {
if((state_val_14552 === (12))){
var inst_14478 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14603_14673 = state_14551__$1;
(statearr_14603_14673[(2)] = inst_14478);

(statearr_14603_14673[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (2))){
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14551__$1,(4),ch);
} else {
if((state_val_14552 === (23))){
var state_14551__$1 = state_14551;
var statearr_14604_14674 = state_14551__$1;
(statearr_14604_14674[(2)] = null);

(statearr_14604_14674[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (35))){
var inst_14533 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14605_14675 = state_14551__$1;
(statearr_14605_14675[(2)] = inst_14533);

(statearr_14605_14675[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (19))){
var inst_14452 = (state_14551[(7)]);
var inst_14456 = cljs.core.chunk_first(inst_14452);
var inst_14457 = cljs.core.chunk_rest(inst_14452);
var inst_14458 = cljs.core.count(inst_14456);
var inst_14432 = inst_14457;
var inst_14433 = inst_14456;
var inst_14434 = inst_14458;
var inst_14435 = (0);
var state_14551__$1 = (function (){var statearr_14606 = state_14551;
(statearr_14606[(13)] = inst_14435);

(statearr_14606[(14)] = inst_14434);

(statearr_14606[(16)] = inst_14432);

(statearr_14606[(17)] = inst_14433);

return statearr_14606;
})();
var statearr_14607_14676 = state_14551__$1;
(statearr_14607_14676[(2)] = null);

(statearr_14607_14676[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (11))){
var inst_14452 = (state_14551[(7)]);
var inst_14432 = (state_14551[(16)]);
var inst_14452__$1 = cljs.core.seq(inst_14432);
var state_14551__$1 = (function (){var statearr_14608 = state_14551;
(statearr_14608[(7)] = inst_14452__$1);

return statearr_14608;
})();
if(inst_14452__$1){
var statearr_14609_14677 = state_14551__$1;
(statearr_14609_14677[(1)] = (16));

} else {
var statearr_14610_14678 = state_14551__$1;
(statearr_14610_14678[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (9))){
var inst_14480 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14611_14679 = state_14551__$1;
(statearr_14611_14679[(2)] = inst_14480);

(statearr_14611_14679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (5))){
var inst_14430 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14431 = cljs.core.seq(inst_14430);
var inst_14432 = inst_14431;
var inst_14433 = null;
var inst_14434 = (0);
var inst_14435 = (0);
var state_14551__$1 = (function (){var statearr_14612 = state_14551;
(statearr_14612[(13)] = inst_14435);

(statearr_14612[(14)] = inst_14434);

(statearr_14612[(16)] = inst_14432);

(statearr_14612[(17)] = inst_14433);

return statearr_14612;
})();
var statearr_14613_14680 = state_14551__$1;
(statearr_14613_14680[(2)] = null);

(statearr_14613_14680[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (14))){
var state_14551__$1 = state_14551;
var statearr_14614_14681 = state_14551__$1;
(statearr_14614_14681[(2)] = null);

(statearr_14614_14681[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (45))){
var inst_14541 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14615_14682 = state_14551__$1;
(statearr_14615_14682[(2)] = inst_14541);

(statearr_14615_14682[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (26))){
var inst_14483 = (state_14551[(29)]);
var inst_14537 = (state_14551[(2)]);
var inst_14538 = cljs.core.seq(inst_14483);
var state_14551__$1 = (function (){var statearr_14616 = state_14551;
(statearr_14616[(31)] = inst_14537);

return statearr_14616;
})();
if(inst_14538){
var statearr_14617_14683 = state_14551__$1;
(statearr_14617_14683[(1)] = (42));

} else {
var statearr_14618_14684 = state_14551__$1;
(statearr_14618_14684[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (16))){
var inst_14452 = (state_14551[(7)]);
var inst_14454 = cljs.core.chunked_seq_QMARK_(inst_14452);
var state_14551__$1 = state_14551;
if(inst_14454){
var statearr_14619_14685 = state_14551__$1;
(statearr_14619_14685[(1)] = (19));

} else {
var statearr_14620_14686 = state_14551__$1;
(statearr_14620_14686[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (38))){
var inst_14530 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14621_14687 = state_14551__$1;
(statearr_14621_14687[(2)] = inst_14530);

(statearr_14621_14687[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (30))){
var state_14551__$1 = state_14551;
var statearr_14622_14688 = state_14551__$1;
(statearr_14622_14688[(2)] = null);

(statearr_14622_14688[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (10))){
var inst_14435 = (state_14551[(13)]);
var inst_14433 = (state_14551[(17)]);
var inst_14441 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14433,inst_14435);
var inst_14442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14441,(0),null);
var inst_14443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14441,(1),null);
var state_14551__$1 = (function (){var statearr_14623 = state_14551;
(statearr_14623[(26)] = inst_14442);

return statearr_14623;
})();
if(cljs.core.truth_(inst_14443)){
var statearr_14624_14689 = state_14551__$1;
(statearr_14624_14689[(1)] = (13));

} else {
var statearr_14625_14690 = state_14551__$1;
(statearr_14625_14690[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (18))){
var inst_14476 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14626_14691 = state_14551__$1;
(statearr_14626_14691[(2)] = inst_14476);

(statearr_14626_14691[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (42))){
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14551__$1,(45),dchan);
} else {
if((state_val_14552 === (37))){
var inst_14423 = (state_14551[(9)]);
var inst_14519 = (state_14551[(23)]);
var inst_14510 = (state_14551[(25)]);
var inst_14519__$1 = cljs.core.first(inst_14510);
var inst_14520 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14519__$1,inst_14423,done);
var state_14551__$1 = (function (){var statearr_14627 = state_14551;
(statearr_14627[(23)] = inst_14519__$1);

return statearr_14627;
})();
if(cljs.core.truth_(inst_14520)){
var statearr_14628_14692 = state_14551__$1;
(statearr_14628_14692[(1)] = (39));

} else {
var statearr_14629_14693 = state_14551__$1;
(statearr_14629_14693[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14552 === (8))){
var inst_14435 = (state_14551[(13)]);
var inst_14434 = (state_14551[(14)]);
var inst_14437 = (inst_14435 < inst_14434);
var inst_14438 = inst_14437;
var state_14551__$1 = state_14551;
if(cljs.core.truth_(inst_14438)){
var statearr_14630_14694 = state_14551__$1;
(statearr_14630_14694[(1)] = (10));

} else {
var statearr_14631_14695 = state_14551__$1;
(statearr_14631_14695[(1)] = (11));

}

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
});})(c__13322__auto___14641,cs,m,dchan,dctr,done))
;
return ((function (switch__13208__auto__,c__13322__auto___14641,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13209__auto__ = null;
var cljs$core$async$mult_$_state_machine__13209__auto____0 = (function (){
var statearr_14635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14635[(0)] = cljs$core$async$mult_$_state_machine__13209__auto__);

(statearr_14635[(1)] = (1));

return statearr_14635;
});
var cljs$core$async$mult_$_state_machine__13209__auto____1 = (function (state_14551){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_14551);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e14636){if((e14636 instanceof Object)){
var ex__13212__auto__ = e14636;
var statearr_14637_14696 = state_14551;
(statearr_14637_14696[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14551);

return cljs.core.cst$kw$recur;
} else {
throw e14636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__14697 = state_14551;
state_14551 = G__14697;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13209__auto__ = function(state_14551){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13209__auto____1.call(this,state_14551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13209__auto____0;
cljs$core$async$mult_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13209__auto____1;
return cljs$core$async$mult_$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___14641,cs,m,dchan,dctr,done))
})();
var state__13324__auto__ = (function (){var statearr_14638 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_14638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___14641);

return statearr_14638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___14641,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14698 = [];
var len__5726__auto___14701 = arguments.length;
var i__5727__auto___14702 = (0);
while(true){
if((i__5727__auto___14702 < len__5726__auto___14701)){
args14698.push((arguments[i__5727__auto___14702]));

var G__14703 = (i__5727__auto___14702 + (1));
i__5727__auto___14702 = G__14703;
continue;
} else {
}
break;
}

var G__14700 = args14698.length;
switch (G__14700) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14698.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto__.call(null,m));
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5324__auto__.call(null,m,state_map));
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5324__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5324__auto__.call(null,m,mode));
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5324__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___14715 = arguments.length;
var i__5727__auto___14716 = (0);
while(true){
if((i__5727__auto___14716 < len__5726__auto___14715)){
args__5733__auto__.push((arguments[i__5727__auto___14716]));

var G__14717 = (i__5727__auto___14716 + (1));
i__5727__auto___14716 = G__14717;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14709){
var map__14710 = p__14709;
var map__14710__$1 = ((((!((map__14710 == null)))?((((map__14710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14710):map__14710);
var opts = map__14710__$1;
var statearr_14712_14718 = state;
(statearr_14712_14718[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__14710,map__14710__$1,opts){
return (function (val){
var statearr_14713_14719 = state;
(statearr_14713_14719[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14710,map__14710__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14714_14720 = state;
(statearr_14714_14720[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14705){
var G__14706 = cljs.core.first(seq14705);
var seq14705__$1 = cljs.core.next(seq14705);
var G__14707 = cljs.core.first(seq14705__$1);
var seq14705__$2 = cljs.core.next(seq14705__$1);
var G__14708 = cljs.core.first(seq14705__$2);
var seq14705__$3 = cljs.core.next(seq14705__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14706,G__14707,G__14708,seq14705__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__14887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14887) : cljs.core.atom.call(null,G__14887));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14888 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14889){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14889 = meta14889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14890,meta14889__$1){
var self__ = this;
var _14890__$1 = this;
return (new cljs.core.async.t_cljs$core$async14888(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14889__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14890){
var self__ = this;
var _14890__$1 = this;
return self__.meta14889;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14891_15053 = self__.cs;
var G__14892_15054 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14891_15053,G__14892_15054) : cljs.core.reset_BANG_.call(null,G__14891_15053,G__14892_15054));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14889], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14888";

cljs.core.async.t_cljs$core$async14888.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14888");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14888 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14888(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14889){
return (new cljs.core.async.t_cljs$core$async14888(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14889));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14888(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13322__auto___15055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___15055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___15055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14990){
var state_val_14991 = (state_14990[(1)]);
if((state_val_14991 === (7))){
var inst_14908 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_14992_15056 = state_14990__$1;
(statearr_14992_15056[(2)] = inst_14908);

(statearr_14992_15056[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (20))){
var inst_14920 = (state_14990[(7)]);
var state_14990__$1 = state_14990;
var statearr_14993_15057 = state_14990__$1;
(statearr_14993_15057[(2)] = inst_14920);

(statearr_14993_15057[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (27))){
var state_14990__$1 = state_14990;
var statearr_14994_15058 = state_14990__$1;
(statearr_14994_15058[(2)] = null);

(statearr_14994_15058[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (1))){
var inst_14896 = (state_14990[(8)]);
var inst_14896__$1 = calc_state();
var inst_14898 = (inst_14896__$1 == null);
var inst_14899 = cljs.core.not(inst_14898);
var state_14990__$1 = (function (){var statearr_14995 = state_14990;
(statearr_14995[(8)] = inst_14896__$1);

return statearr_14995;
})();
if(inst_14899){
var statearr_14996_15059 = state_14990__$1;
(statearr_14996_15059[(1)] = (2));

} else {
var statearr_14997_15060 = state_14990__$1;
(statearr_14997_15060[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (24))){
var inst_14950 = (state_14990[(9)]);
var inst_14943 = (state_14990[(10)]);
var inst_14964 = (state_14990[(11)]);
var inst_14964__$1 = (inst_14943.cljs$core$IFn$_invoke$arity$1 ? inst_14943.cljs$core$IFn$_invoke$arity$1(inst_14950) : inst_14943.call(null,inst_14950));
var state_14990__$1 = (function (){var statearr_14998 = state_14990;
(statearr_14998[(11)] = inst_14964__$1);

return statearr_14998;
})();
if(cljs.core.truth_(inst_14964__$1)){
var statearr_14999_15061 = state_14990__$1;
(statearr_14999_15061[(1)] = (29));

} else {
var statearr_15000_15062 = state_14990__$1;
(statearr_15000_15062[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (4))){
var inst_14911 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14911)){
var statearr_15001_15063 = state_14990__$1;
(statearr_15001_15063[(1)] = (8));

} else {
var statearr_15002_15064 = state_14990__$1;
(statearr_15002_15064[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (15))){
var inst_14937 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14937)){
var statearr_15003_15065 = state_14990__$1;
(statearr_15003_15065[(1)] = (19));

} else {
var statearr_15004_15066 = state_14990__$1;
(statearr_15004_15066[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (21))){
var inst_14942 = (state_14990[(12)]);
var inst_14942__$1 = (state_14990[(2)]);
var inst_14943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14942__$1,cljs.core.cst$kw$solos);
var inst_14944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14942__$1,cljs.core.cst$kw$mutes);
var inst_14945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14942__$1,cljs.core.cst$kw$reads);
var state_14990__$1 = (function (){var statearr_15005 = state_14990;
(statearr_15005[(10)] = inst_14943);

(statearr_15005[(13)] = inst_14944);

(statearr_15005[(12)] = inst_14942__$1);

return statearr_15005;
})();
return cljs.core.async.ioc_alts_BANG_(state_14990__$1,(22),inst_14945);
} else {
if((state_val_14991 === (31))){
var inst_14972 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14972)){
var statearr_15006_15067 = state_14990__$1;
(statearr_15006_15067[(1)] = (32));

} else {
var statearr_15007_15068 = state_14990__$1;
(statearr_15007_15068[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (32))){
var inst_14949 = (state_14990[(14)]);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14990__$1,(35),out,inst_14949);
} else {
if((state_val_14991 === (33))){
var inst_14942 = (state_14990[(12)]);
var inst_14920 = inst_14942;
var state_14990__$1 = (function (){var statearr_15008 = state_14990;
(statearr_15008[(7)] = inst_14920);

return statearr_15008;
})();
var statearr_15009_15069 = state_14990__$1;
(statearr_15009_15069[(2)] = null);

(statearr_15009_15069[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (13))){
var inst_14920 = (state_14990[(7)]);
var inst_14927 = inst_14920.cljs$lang$protocol_mask$partition0$;
var inst_14928 = (inst_14927 & (64));
var inst_14929 = inst_14920.cljs$core$ISeq$;
var inst_14930 = (inst_14928) || (inst_14929);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14930)){
var statearr_15010_15070 = state_14990__$1;
(statearr_15010_15070[(1)] = (16));

} else {
var statearr_15011_15071 = state_14990__$1;
(statearr_15011_15071[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (22))){
var inst_14950 = (state_14990[(9)]);
var inst_14949 = (state_14990[(14)]);
var inst_14948 = (state_14990[(2)]);
var inst_14949__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14948,(0),null);
var inst_14950__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14948,(1),null);
var inst_14951 = (inst_14949__$1 == null);
var inst_14952 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14950__$1,change);
var inst_14953 = (inst_14951) || (inst_14952);
var state_14990__$1 = (function (){var statearr_15012 = state_14990;
(statearr_15012[(9)] = inst_14950__$1);

(statearr_15012[(14)] = inst_14949__$1);

return statearr_15012;
})();
if(cljs.core.truth_(inst_14953)){
var statearr_15013_15072 = state_14990__$1;
(statearr_15013_15072[(1)] = (23));

} else {
var statearr_15014_15073 = state_14990__$1;
(statearr_15014_15073[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (36))){
var inst_14942 = (state_14990[(12)]);
var inst_14920 = inst_14942;
var state_14990__$1 = (function (){var statearr_15015 = state_14990;
(statearr_15015[(7)] = inst_14920);

return statearr_15015;
})();
var statearr_15016_15074 = state_14990__$1;
(statearr_15016_15074[(2)] = null);

(statearr_15016_15074[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (29))){
var inst_14964 = (state_14990[(11)]);
var state_14990__$1 = state_14990;
var statearr_15017_15075 = state_14990__$1;
(statearr_15017_15075[(2)] = inst_14964);

(statearr_15017_15075[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (6))){
var state_14990__$1 = state_14990;
var statearr_15018_15076 = state_14990__$1;
(statearr_15018_15076[(2)] = false);

(statearr_15018_15076[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (28))){
var inst_14960 = (state_14990[(2)]);
var inst_14961 = calc_state();
var inst_14920 = inst_14961;
var state_14990__$1 = (function (){var statearr_15019 = state_14990;
(statearr_15019[(15)] = inst_14960);

(statearr_15019[(7)] = inst_14920);

return statearr_15019;
})();
var statearr_15020_15077 = state_14990__$1;
(statearr_15020_15077[(2)] = null);

(statearr_15020_15077[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (25))){
var inst_14986 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15021_15078 = state_14990__$1;
(statearr_15021_15078[(2)] = inst_14986);

(statearr_15021_15078[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (34))){
var inst_14984 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15022_15079 = state_14990__$1;
(statearr_15022_15079[(2)] = inst_14984);

(statearr_15022_15079[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (17))){
var state_14990__$1 = state_14990;
var statearr_15023_15080 = state_14990__$1;
(statearr_15023_15080[(2)] = false);

(statearr_15023_15080[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (3))){
var state_14990__$1 = state_14990;
var statearr_15024_15081 = state_14990__$1;
(statearr_15024_15081[(2)] = false);

(statearr_15024_15081[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (12))){
var inst_14988 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14990__$1,inst_14988);
} else {
if((state_val_14991 === (2))){
var inst_14896 = (state_14990[(8)]);
var inst_14901 = inst_14896.cljs$lang$protocol_mask$partition0$;
var inst_14902 = (inst_14901 & (64));
var inst_14903 = inst_14896.cljs$core$ISeq$;
var inst_14904 = (inst_14902) || (inst_14903);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14904)){
var statearr_15025_15082 = state_14990__$1;
(statearr_15025_15082[(1)] = (5));

} else {
var statearr_15026_15083 = state_14990__$1;
(statearr_15026_15083[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (23))){
var inst_14949 = (state_14990[(14)]);
var inst_14955 = (inst_14949 == null);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14955)){
var statearr_15027_15084 = state_14990__$1;
(statearr_15027_15084[(1)] = (26));

} else {
var statearr_15028_15085 = state_14990__$1;
(statearr_15028_15085[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (35))){
var inst_14975 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14975)){
var statearr_15029_15086 = state_14990__$1;
(statearr_15029_15086[(1)] = (36));

} else {
var statearr_15030_15087 = state_14990__$1;
(statearr_15030_15087[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (19))){
var inst_14920 = (state_14990[(7)]);
var inst_14939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14920);
var state_14990__$1 = state_14990;
var statearr_15031_15088 = state_14990__$1;
(statearr_15031_15088[(2)] = inst_14939);

(statearr_15031_15088[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (11))){
var inst_14920 = (state_14990[(7)]);
var inst_14924 = (inst_14920 == null);
var inst_14925 = cljs.core.not(inst_14924);
var state_14990__$1 = state_14990;
if(inst_14925){
var statearr_15032_15089 = state_14990__$1;
(statearr_15032_15089[(1)] = (13));

} else {
var statearr_15033_15090 = state_14990__$1;
(statearr_15033_15090[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (9))){
var inst_14896 = (state_14990[(8)]);
var state_14990__$1 = state_14990;
var statearr_15034_15091 = state_14990__$1;
(statearr_15034_15091[(2)] = inst_14896);

(statearr_15034_15091[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (5))){
var state_14990__$1 = state_14990;
var statearr_15035_15092 = state_14990__$1;
(statearr_15035_15092[(2)] = true);

(statearr_15035_15092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (14))){
var state_14990__$1 = state_14990;
var statearr_15036_15093 = state_14990__$1;
(statearr_15036_15093[(2)] = false);

(statearr_15036_15093[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (26))){
var inst_14950 = (state_14990[(9)]);
var inst_14957 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14950);
var state_14990__$1 = state_14990;
var statearr_15037_15094 = state_14990__$1;
(statearr_15037_15094[(2)] = inst_14957);

(statearr_15037_15094[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (16))){
var state_14990__$1 = state_14990;
var statearr_15038_15095 = state_14990__$1;
(statearr_15038_15095[(2)] = true);

(statearr_15038_15095[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (38))){
var inst_14980 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15039_15096 = state_14990__$1;
(statearr_15039_15096[(2)] = inst_14980);

(statearr_15039_15096[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (30))){
var inst_14950 = (state_14990[(9)]);
var inst_14943 = (state_14990[(10)]);
var inst_14944 = (state_14990[(13)]);
var inst_14967 = cljs.core.empty_QMARK_(inst_14943);
var inst_14968 = (inst_14944.cljs$core$IFn$_invoke$arity$1 ? inst_14944.cljs$core$IFn$_invoke$arity$1(inst_14950) : inst_14944.call(null,inst_14950));
var inst_14969 = cljs.core.not(inst_14968);
var inst_14970 = (inst_14967) && (inst_14969);
var state_14990__$1 = state_14990;
var statearr_15040_15097 = state_14990__$1;
(statearr_15040_15097[(2)] = inst_14970);

(statearr_15040_15097[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (10))){
var inst_14896 = (state_14990[(8)]);
var inst_14916 = (state_14990[(2)]);
var inst_14917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14916,cljs.core.cst$kw$solos);
var inst_14918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14916,cljs.core.cst$kw$mutes);
var inst_14919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14916,cljs.core.cst$kw$reads);
var inst_14920 = inst_14896;
var state_14990__$1 = (function (){var statearr_15041 = state_14990;
(statearr_15041[(16)] = inst_14917);

(statearr_15041[(17)] = inst_14919);

(statearr_15041[(18)] = inst_14918);

(statearr_15041[(7)] = inst_14920);

return statearr_15041;
})();
var statearr_15042_15098 = state_14990__$1;
(statearr_15042_15098[(2)] = null);

(statearr_15042_15098[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (18))){
var inst_14934 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15043_15099 = state_14990__$1;
(statearr_15043_15099[(2)] = inst_14934);

(statearr_15043_15099[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (37))){
var state_14990__$1 = state_14990;
var statearr_15044_15100 = state_14990__$1;
(statearr_15044_15100[(2)] = null);

(statearr_15044_15100[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14991 === (8))){
var inst_14896 = (state_14990[(8)]);
var inst_14913 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14896);
var state_14990__$1 = state_14990;
var statearr_15045_15101 = state_14990__$1;
(statearr_15045_15101[(2)] = inst_14913);

(statearr_15045_15101[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__13322__auto___15055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13208__auto__,c__13322__auto___15055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13209__auto__ = null;
var cljs$core$async$mix_$_state_machine__13209__auto____0 = (function (){
var statearr_15049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15049[(0)] = cljs$core$async$mix_$_state_machine__13209__auto__);

(statearr_15049[(1)] = (1));

return statearr_15049;
});
var cljs$core$async$mix_$_state_machine__13209__auto____1 = (function (state_14990){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_14990);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15050){if((e15050 instanceof Object)){
var ex__13212__auto__ = e15050;
var statearr_15051_15102 = state_14990;
(statearr_15051_15102[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14990);

return cljs.core.cst$kw$recur;
} else {
throw e15050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15103 = state_14990;
state_14990 = G__15103;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13209__auto__ = function(state_14990){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13209__auto____1.call(this,state_14990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13209__auto____0;
cljs$core$async$mix_$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13209__auto____1;
return cljs$core$async$mix_$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___15055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13324__auto__ = (function (){var statearr_15052 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___15055);

return statearr_15052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___15055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5324__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5324__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5324__auto__.call(null,p,v,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5324__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15104 = [];
var len__5726__auto___15107 = arguments.length;
var i__5727__auto___15108 = (0);
while(true){
if((i__5727__auto___15108 < len__5726__auto___15107)){
args15104.push((arguments[i__5727__auto___15108]));

var G__15109 = (i__5727__auto___15108 + (1));
i__5727__auto___15108 = G__15109;
continue;
} else {
}
break;
}

var G__15106 = args15104.length;
switch (G__15106) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15104.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5324__auto__.call(null,p));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5324__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5324__auto__.call(null,p,v));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5324__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15112 = [];
var len__5726__auto___15240 = arguments.length;
var i__5727__auto___15241 = (0);
while(true){
if((i__5727__auto___15241 < len__5726__auto___15240)){
args15112.push((arguments[i__5727__auto___15241]));

var G__15242 = (i__5727__auto___15241 + (1));
i__5727__auto___15241 = G__15242;
continue;
} else {
}
break;
}

var G__15114 = args15112.length;
switch (G__15114) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15112.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15115 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15115) : cljs.core.atom.call(null,G__15115));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4668__auto__,mults){
return (function (p1__15111_SHARP_){
if(cljs.core.truth_((p1__15111_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15111_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15111_SHARP_.call(null,topic)))){
return p1__15111_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15111_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15116 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15117){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15117 = meta15117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15118,meta15117__$1){
var self__ = this;
var _15118__$1 = this;
return (new cljs.core.async.t_cljs$core$async15116(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15117__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15118){
var self__ = this;
var _15118__$1 = this;
return self__.meta15117;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15119 = self__.mults;
var G__15120 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15119,G__15120) : cljs.core.reset_BANG_.call(null,G__15119,G__15120));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15117], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15116";

cljs.core.async.t_cljs$core$async15116.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15116");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15116 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15116(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15117){
return (new cljs.core.async.t_cljs$core$async15116(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15117));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15116(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13322__auto___15244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___15244,mults,ensure_mult,p){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___15244,mults,ensure_mult,p){
return (function (state_15192){
var state_val_15193 = (state_15192[(1)]);
if((state_val_15193 === (7))){
var inst_15188 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15194_15245 = state_15192__$1;
(statearr_15194_15245[(2)] = inst_15188);

(statearr_15194_15245[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (20))){
var state_15192__$1 = state_15192;
var statearr_15195_15246 = state_15192__$1;
(statearr_15195_15246[(2)] = null);

(statearr_15195_15246[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (1))){
var state_15192__$1 = state_15192;
var statearr_15196_15247 = state_15192__$1;
(statearr_15196_15247[(2)] = null);

(statearr_15196_15247[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (24))){
var inst_15171 = (state_15192[(7)]);
var inst_15180 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15171);
var state_15192__$1 = state_15192;
var statearr_15197_15248 = state_15192__$1;
(statearr_15197_15248[(2)] = inst_15180);

(statearr_15197_15248[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (4))){
var inst_15123 = (state_15192[(8)]);
var inst_15123__$1 = (state_15192[(2)]);
var inst_15124 = (inst_15123__$1 == null);
var state_15192__$1 = (function (){var statearr_15198 = state_15192;
(statearr_15198[(8)] = inst_15123__$1);

return statearr_15198;
})();
if(cljs.core.truth_(inst_15124)){
var statearr_15199_15249 = state_15192__$1;
(statearr_15199_15249[(1)] = (5));

} else {
var statearr_15200_15250 = state_15192__$1;
(statearr_15200_15250[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (15))){
var inst_15165 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15201_15251 = state_15192__$1;
(statearr_15201_15251[(2)] = inst_15165);

(statearr_15201_15251[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (21))){
var inst_15185 = (state_15192[(2)]);
var state_15192__$1 = (function (){var statearr_15202 = state_15192;
(statearr_15202[(9)] = inst_15185);

return statearr_15202;
})();
var statearr_15203_15252 = state_15192__$1;
(statearr_15203_15252[(2)] = null);

(statearr_15203_15252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (13))){
var inst_15147 = (state_15192[(10)]);
var inst_15149 = cljs.core.chunked_seq_QMARK_(inst_15147);
var state_15192__$1 = state_15192;
if(inst_15149){
var statearr_15204_15253 = state_15192__$1;
(statearr_15204_15253[(1)] = (16));

} else {
var statearr_15205_15254 = state_15192__$1;
(statearr_15205_15254[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (22))){
var inst_15177 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
if(cljs.core.truth_(inst_15177)){
var statearr_15206_15255 = state_15192__$1;
(statearr_15206_15255[(1)] = (23));

} else {
var statearr_15207_15256 = state_15192__$1;
(statearr_15207_15256[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (6))){
var inst_15171 = (state_15192[(7)]);
var inst_15173 = (state_15192[(11)]);
var inst_15123 = (state_15192[(8)]);
var inst_15171__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15123) : topic_fn.call(null,inst_15123));
var inst_15172 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15173__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15172,inst_15171__$1);
var state_15192__$1 = (function (){var statearr_15208 = state_15192;
(statearr_15208[(7)] = inst_15171__$1);

(statearr_15208[(11)] = inst_15173__$1);

return statearr_15208;
})();
if(cljs.core.truth_(inst_15173__$1)){
var statearr_15209_15257 = state_15192__$1;
(statearr_15209_15257[(1)] = (19));

} else {
var statearr_15210_15258 = state_15192__$1;
(statearr_15210_15258[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (25))){
var inst_15182 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15211_15259 = state_15192__$1;
(statearr_15211_15259[(2)] = inst_15182);

(statearr_15211_15259[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (17))){
var inst_15147 = (state_15192[(10)]);
var inst_15156 = cljs.core.first(inst_15147);
var inst_15157 = cljs.core.async.muxch_STAR_(inst_15156);
var inst_15158 = cljs.core.async.close_BANG_(inst_15157);
var inst_15159 = cljs.core.next(inst_15147);
var inst_15133 = inst_15159;
var inst_15134 = null;
var inst_15135 = (0);
var inst_15136 = (0);
var state_15192__$1 = (function (){var statearr_15212 = state_15192;
(statearr_15212[(12)] = inst_15158);

(statearr_15212[(13)] = inst_15133);

(statearr_15212[(14)] = inst_15134);

(statearr_15212[(15)] = inst_15136);

(statearr_15212[(16)] = inst_15135);

return statearr_15212;
})();
var statearr_15213_15260 = state_15192__$1;
(statearr_15213_15260[(2)] = null);

(statearr_15213_15260[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (3))){
var inst_15190 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15192__$1,inst_15190);
} else {
if((state_val_15193 === (12))){
var inst_15167 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15214_15261 = state_15192__$1;
(statearr_15214_15261[(2)] = inst_15167);

(statearr_15214_15261[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (2))){
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15192__$1,(4),ch);
} else {
if((state_val_15193 === (23))){
var state_15192__$1 = state_15192;
var statearr_15215_15262 = state_15192__$1;
(statearr_15215_15262[(2)] = null);

(statearr_15215_15262[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (19))){
var inst_15173 = (state_15192[(11)]);
var inst_15123 = (state_15192[(8)]);
var inst_15175 = cljs.core.async.muxch_STAR_(inst_15173);
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15192__$1,(22),inst_15175,inst_15123);
} else {
if((state_val_15193 === (11))){
var inst_15147 = (state_15192[(10)]);
var inst_15133 = (state_15192[(13)]);
var inst_15147__$1 = cljs.core.seq(inst_15133);
var state_15192__$1 = (function (){var statearr_15216 = state_15192;
(statearr_15216[(10)] = inst_15147__$1);

return statearr_15216;
})();
if(inst_15147__$1){
var statearr_15217_15263 = state_15192__$1;
(statearr_15217_15263[(1)] = (13));

} else {
var statearr_15218_15264 = state_15192__$1;
(statearr_15218_15264[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (9))){
var inst_15169 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15219_15265 = state_15192__$1;
(statearr_15219_15265[(2)] = inst_15169);

(statearr_15219_15265[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (5))){
var inst_15130 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15131 = cljs.core.vals(inst_15130);
var inst_15132 = cljs.core.seq(inst_15131);
var inst_15133 = inst_15132;
var inst_15134 = null;
var inst_15135 = (0);
var inst_15136 = (0);
var state_15192__$1 = (function (){var statearr_15220 = state_15192;
(statearr_15220[(13)] = inst_15133);

(statearr_15220[(14)] = inst_15134);

(statearr_15220[(15)] = inst_15136);

(statearr_15220[(16)] = inst_15135);

return statearr_15220;
})();
var statearr_15221_15266 = state_15192__$1;
(statearr_15221_15266[(2)] = null);

(statearr_15221_15266[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (14))){
var state_15192__$1 = state_15192;
var statearr_15225_15267 = state_15192__$1;
(statearr_15225_15267[(2)] = null);

(statearr_15225_15267[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (16))){
var inst_15147 = (state_15192[(10)]);
var inst_15151 = cljs.core.chunk_first(inst_15147);
var inst_15152 = cljs.core.chunk_rest(inst_15147);
var inst_15153 = cljs.core.count(inst_15151);
var inst_15133 = inst_15152;
var inst_15134 = inst_15151;
var inst_15135 = inst_15153;
var inst_15136 = (0);
var state_15192__$1 = (function (){var statearr_15226 = state_15192;
(statearr_15226[(13)] = inst_15133);

(statearr_15226[(14)] = inst_15134);

(statearr_15226[(15)] = inst_15136);

(statearr_15226[(16)] = inst_15135);

return statearr_15226;
})();
var statearr_15227_15268 = state_15192__$1;
(statearr_15227_15268[(2)] = null);

(statearr_15227_15268[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (10))){
var inst_15133 = (state_15192[(13)]);
var inst_15134 = (state_15192[(14)]);
var inst_15136 = (state_15192[(15)]);
var inst_15135 = (state_15192[(16)]);
var inst_15141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15134,inst_15136);
var inst_15142 = cljs.core.async.muxch_STAR_(inst_15141);
var inst_15143 = cljs.core.async.close_BANG_(inst_15142);
var inst_15144 = (inst_15136 + (1));
var tmp15222 = inst_15133;
var tmp15223 = inst_15134;
var tmp15224 = inst_15135;
var inst_15133__$1 = tmp15222;
var inst_15134__$1 = tmp15223;
var inst_15135__$1 = tmp15224;
var inst_15136__$1 = inst_15144;
var state_15192__$1 = (function (){var statearr_15228 = state_15192;
(statearr_15228[(17)] = inst_15143);

(statearr_15228[(13)] = inst_15133__$1);

(statearr_15228[(14)] = inst_15134__$1);

(statearr_15228[(15)] = inst_15136__$1);

(statearr_15228[(16)] = inst_15135__$1);

return statearr_15228;
})();
var statearr_15229_15269 = state_15192__$1;
(statearr_15229_15269[(2)] = null);

(statearr_15229_15269[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (18))){
var inst_15162 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15230_15270 = state_15192__$1;
(statearr_15230_15270[(2)] = inst_15162);

(statearr_15230_15270[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (8))){
var inst_15136 = (state_15192[(15)]);
var inst_15135 = (state_15192[(16)]);
var inst_15138 = (inst_15136 < inst_15135);
var inst_15139 = inst_15138;
var state_15192__$1 = state_15192;
if(cljs.core.truth_(inst_15139)){
var statearr_15231_15271 = state_15192__$1;
(statearr_15231_15271[(1)] = (10));

} else {
var statearr_15232_15272 = state_15192__$1;
(statearr_15232_15272[(1)] = (11));

}

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
});})(c__13322__auto___15244,mults,ensure_mult,p))
;
return ((function (switch__13208__auto__,c__13322__auto___15244,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_15236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15236[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_15236[(1)] = (1));

return statearr_15236;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_15192){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15192);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15237){if((e15237 instanceof Object)){
var ex__13212__auto__ = e15237;
var statearr_15238_15273 = state_15192;
(statearr_15238_15273[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15192);

return cljs.core.cst$kw$recur;
} else {
throw e15237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15274 = state_15192;
state_15192 = G__15274;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_15192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_15192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___15244,mults,ensure_mult,p))
})();
var state__13324__auto__ = (function (){var statearr_15239 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___15244);

return statearr_15239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___15244,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15275 = [];
var len__5726__auto___15278 = arguments.length;
var i__5727__auto___15279 = (0);
while(true){
if((i__5727__auto___15279 < len__5726__auto___15278)){
args15275.push((arguments[i__5727__auto___15279]));

var G__15280 = (i__5727__auto___15279 + (1));
i__5727__auto___15279 = G__15280;
continue;
} else {
}
break;
}

var G__15277 = args15275.length;
switch (G__15277) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15275.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15282 = [];
var len__5726__auto___15285 = arguments.length;
var i__5727__auto___15286 = (0);
while(true){
if((i__5727__auto___15286 < len__5726__auto___15285)){
args15282.push((arguments[i__5727__auto___15286]));

var G__15287 = (i__5727__auto___15286 + (1));
i__5727__auto___15286 = G__15287;
continue;
} else {
}
break;
}

var G__15284 = args15282.length;
switch (G__15284) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15282.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15289 = [];
var len__5726__auto___15360 = arguments.length;
var i__5727__auto___15361 = (0);
while(true){
if((i__5727__auto___15361 < len__5726__auto___15360)){
args15289.push((arguments[i__5727__auto___15361]));

var G__15362 = (i__5727__auto___15361 + (1));
i__5727__auto___15361 = G__15362;
continue;
} else {
}
break;
}

var G__15291 = args15289.length;
switch (G__15291) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15289.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13322__auto___15364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___15364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___15364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15330){
var state_val_15331 = (state_15330[(1)]);
if((state_val_15331 === (7))){
var state_15330__$1 = state_15330;
var statearr_15332_15365 = state_15330__$1;
(statearr_15332_15365[(2)] = null);

(statearr_15332_15365[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (1))){
var state_15330__$1 = state_15330;
var statearr_15333_15366 = state_15330__$1;
(statearr_15333_15366[(2)] = null);

(statearr_15333_15366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (4))){
var inst_15294 = (state_15330[(7)]);
var inst_15296 = (inst_15294 < cnt);
var state_15330__$1 = state_15330;
if(cljs.core.truth_(inst_15296)){
var statearr_15334_15367 = state_15330__$1;
(statearr_15334_15367[(1)] = (6));

} else {
var statearr_15335_15368 = state_15330__$1;
(statearr_15335_15368[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (15))){
var inst_15326 = (state_15330[(2)]);
var state_15330__$1 = state_15330;
var statearr_15336_15369 = state_15330__$1;
(statearr_15336_15369[(2)] = inst_15326);

(statearr_15336_15369[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (13))){
var inst_15319 = cljs.core.async.close_BANG_(out);
var state_15330__$1 = state_15330;
var statearr_15337_15370 = state_15330__$1;
(statearr_15337_15370[(2)] = inst_15319);

(statearr_15337_15370[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (6))){
var state_15330__$1 = state_15330;
var statearr_15338_15371 = state_15330__$1;
(statearr_15338_15371[(2)] = null);

(statearr_15338_15371[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (3))){
var inst_15328 = (state_15330[(2)]);
var state_15330__$1 = state_15330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15330__$1,inst_15328);
} else {
if((state_val_15331 === (12))){
var inst_15316 = (state_15330[(8)]);
var inst_15316__$1 = (state_15330[(2)]);
var inst_15317 = cljs.core.some(cljs.core.nil_QMARK_,inst_15316__$1);
var state_15330__$1 = (function (){var statearr_15339 = state_15330;
(statearr_15339[(8)] = inst_15316__$1);

return statearr_15339;
})();
if(cljs.core.truth_(inst_15317)){
var statearr_15340_15372 = state_15330__$1;
(statearr_15340_15372[(1)] = (13));

} else {
var statearr_15341_15373 = state_15330__$1;
(statearr_15341_15373[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (2))){
var inst_15293 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15294 = (0);
var state_15330__$1 = (function (){var statearr_15342 = state_15330;
(statearr_15342[(9)] = inst_15293);

(statearr_15342[(7)] = inst_15294);

return statearr_15342;
})();
var statearr_15343_15374 = state_15330__$1;
(statearr_15343_15374[(2)] = null);

(statearr_15343_15374[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (11))){
var inst_15294 = (state_15330[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15330,(10),Object,null,(9));
var inst_15303 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15294) : chs__$1.call(null,inst_15294));
var inst_15304 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15294) : done.call(null,inst_15294));
var inst_15305 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15303,inst_15304);
var state_15330__$1 = state_15330;
var statearr_15344_15375 = state_15330__$1;
(statearr_15344_15375[(2)] = inst_15305);


cljs.core.async.impl.ioc_helpers.process_exception(state_15330__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (9))){
var inst_15294 = (state_15330[(7)]);
var inst_15307 = (state_15330[(2)]);
var inst_15308 = (inst_15294 + (1));
var inst_15294__$1 = inst_15308;
var state_15330__$1 = (function (){var statearr_15345 = state_15330;
(statearr_15345[(10)] = inst_15307);

(statearr_15345[(7)] = inst_15294__$1);

return statearr_15345;
})();
var statearr_15346_15376 = state_15330__$1;
(statearr_15346_15376[(2)] = null);

(statearr_15346_15376[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (5))){
var inst_15314 = (state_15330[(2)]);
var state_15330__$1 = (function (){var statearr_15347 = state_15330;
(statearr_15347[(11)] = inst_15314);

return statearr_15347;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15330__$1,(12),dchan);
} else {
if((state_val_15331 === (14))){
var inst_15316 = (state_15330[(8)]);
var inst_15321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15316);
var state_15330__$1 = state_15330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15330__$1,(16),out,inst_15321);
} else {
if((state_val_15331 === (16))){
var inst_15323 = (state_15330[(2)]);
var state_15330__$1 = (function (){var statearr_15348 = state_15330;
(statearr_15348[(12)] = inst_15323);

return statearr_15348;
})();
var statearr_15349_15377 = state_15330__$1;
(statearr_15349_15377[(2)] = null);

(statearr_15349_15377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (10))){
var inst_15298 = (state_15330[(2)]);
var inst_15299 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15330__$1 = (function (){var statearr_15350 = state_15330;
(statearr_15350[(13)] = inst_15298);

return statearr_15350;
})();
var statearr_15351_15378 = state_15330__$1;
(statearr_15351_15378[(2)] = inst_15299);


cljs.core.async.impl.ioc_helpers.process_exception(state_15330__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15331 === (8))){
var inst_15312 = (state_15330[(2)]);
var state_15330__$1 = state_15330;
var statearr_15352_15379 = state_15330__$1;
(statearr_15352_15379[(2)] = inst_15312);

(statearr_15352_15379[(1)] = (5));


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
});})(c__13322__auto___15364,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13208__auto__,c__13322__auto___15364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_15356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15356[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_15356[(1)] = (1));

return statearr_15356;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_15330){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15330);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15357){if((e15357 instanceof Object)){
var ex__13212__auto__ = e15357;
var statearr_15358_15380 = state_15330;
(statearr_15358_15380[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15330);

return cljs.core.cst$kw$recur;
} else {
throw e15357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15381 = state_15330;
state_15330 = G__15381;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_15330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_15330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___15364,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13324__auto__ = (function (){var statearr_15359 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___15364);

return statearr_15359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___15364,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15383 = [];
var len__5726__auto___15439 = arguments.length;
var i__5727__auto___15440 = (0);
while(true){
if((i__5727__auto___15440 < len__5726__auto___15439)){
args15383.push((arguments[i__5727__auto___15440]));

var G__15441 = (i__5727__auto___15440 + (1));
i__5727__auto___15440 = G__15441;
continue;
} else {
}
break;
}

var G__15385 = args15383.length;
switch (G__15385) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15383.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13322__auto___15443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___15443,out){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___15443,out){
return (function (state_15415){
var state_val_15416 = (state_15415[(1)]);
if((state_val_15416 === (7))){
var inst_15394 = (state_15415[(7)]);
var inst_15395 = (state_15415[(8)]);
var inst_15394__$1 = (state_15415[(2)]);
var inst_15395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15394__$1,(0),null);
var inst_15396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15394__$1,(1),null);
var inst_15397 = (inst_15395__$1 == null);
var state_15415__$1 = (function (){var statearr_15417 = state_15415;
(statearr_15417[(7)] = inst_15394__$1);

(statearr_15417[(9)] = inst_15396);

(statearr_15417[(8)] = inst_15395__$1);

return statearr_15417;
})();
if(cljs.core.truth_(inst_15397)){
var statearr_15418_15444 = state_15415__$1;
(statearr_15418_15444[(1)] = (8));

} else {
var statearr_15419_15445 = state_15415__$1;
(statearr_15419_15445[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15416 === (1))){
var inst_15386 = cljs.core.vec(chs);
var inst_15387 = inst_15386;
var state_15415__$1 = (function (){var statearr_15420 = state_15415;
(statearr_15420[(10)] = inst_15387);

return statearr_15420;
})();
var statearr_15421_15446 = state_15415__$1;
(statearr_15421_15446[(2)] = null);

(statearr_15421_15446[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15416 === (4))){
var inst_15387 = (state_15415[(10)]);
var state_15415__$1 = state_15415;
return cljs.core.async.ioc_alts_BANG_(state_15415__$1,(7),inst_15387);
} else {
if((state_val_15416 === (6))){
var inst_15411 = (state_15415[(2)]);
var state_15415__$1 = state_15415;
var statearr_15422_15447 = state_15415__$1;
(statearr_15422_15447[(2)] = inst_15411);

(statearr_15422_15447[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15416 === (3))){
var inst_15413 = (state_15415[(2)]);
var state_15415__$1 = state_15415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15415__$1,inst_15413);
} else {
if((state_val_15416 === (2))){
var inst_15387 = (state_15415[(10)]);
var inst_15389 = cljs.core.count(inst_15387);
var inst_15390 = (inst_15389 > (0));
var state_15415__$1 = state_15415;
if(cljs.core.truth_(inst_15390)){
var statearr_15424_15448 = state_15415__$1;
(statearr_15424_15448[(1)] = (4));

} else {
var statearr_15425_15449 = state_15415__$1;
(statearr_15425_15449[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15416 === (11))){
var inst_15387 = (state_15415[(10)]);
var inst_15404 = (state_15415[(2)]);
var tmp15423 = inst_15387;
var inst_15387__$1 = tmp15423;
var state_15415__$1 = (function (){var statearr_15426 = state_15415;
(statearr_15426[(11)] = inst_15404);

(statearr_15426[(10)] = inst_15387__$1);

return statearr_15426;
})();
var statearr_15427_15450 = state_15415__$1;
(statearr_15427_15450[(2)] = null);

(statearr_15427_15450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15416 === (9))){
var inst_15395 = (state_15415[(8)]);
var state_15415__$1 = state_15415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15415__$1,(11),out,inst_15395);
} else {
if((state_val_15416 === (5))){
var inst_15409 = cljs.core.async.close_BANG_(out);
var state_15415__$1 = state_15415;
var statearr_15428_15451 = state_15415__$1;
(statearr_15428_15451[(2)] = inst_15409);

(statearr_15428_15451[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15416 === (10))){
var inst_15407 = (state_15415[(2)]);
var state_15415__$1 = state_15415;
var statearr_15429_15452 = state_15415__$1;
(statearr_15429_15452[(2)] = inst_15407);

(statearr_15429_15452[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15416 === (8))){
var inst_15394 = (state_15415[(7)]);
var inst_15396 = (state_15415[(9)]);
var inst_15395 = (state_15415[(8)]);
var inst_15387 = (state_15415[(10)]);
var inst_15399 = (function (){var cs = inst_15387;
var vec__15392 = inst_15394;
var v = inst_15395;
var c = inst_15396;
return ((function (cs,vec__15392,v,c,inst_15394,inst_15396,inst_15395,inst_15387,state_val_15416,c__13322__auto___15443,out){
return (function (p1__15382_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15382_SHARP_);
});
;})(cs,vec__15392,v,c,inst_15394,inst_15396,inst_15395,inst_15387,state_val_15416,c__13322__auto___15443,out))
})();
var inst_15400 = cljs.core.filterv(inst_15399,inst_15387);
var inst_15387__$1 = inst_15400;
var state_15415__$1 = (function (){var statearr_15430 = state_15415;
(statearr_15430[(10)] = inst_15387__$1);

return statearr_15430;
})();
var statearr_15431_15453 = state_15415__$1;
(statearr_15431_15453[(2)] = null);

(statearr_15431_15453[(1)] = (2));


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
});})(c__13322__auto___15443,out))
;
return ((function (switch__13208__auto__,c__13322__auto___15443,out){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_15435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15435[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_15435[(1)] = (1));

return statearr_15435;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_15415){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15415);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15436){if((e15436 instanceof Object)){
var ex__13212__auto__ = e15436;
var statearr_15437_15454 = state_15415;
(statearr_15437_15454[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15415);

return cljs.core.cst$kw$recur;
} else {
throw e15436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15455 = state_15415;
state_15415 = G__15455;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_15415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_15415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___15443,out))
})();
var state__13324__auto__ = (function (){var statearr_15438 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___15443);

return statearr_15438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___15443,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15456 = [];
var len__5726__auto___15505 = arguments.length;
var i__5727__auto___15506 = (0);
while(true){
if((i__5727__auto___15506 < len__5726__auto___15505)){
args15456.push((arguments[i__5727__auto___15506]));

var G__15507 = (i__5727__auto___15506 + (1));
i__5727__auto___15506 = G__15507;
continue;
} else {
}
break;
}

var G__15458 = args15456.length;
switch (G__15458) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15456.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13322__auto___15509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___15509,out){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___15509,out){
return (function (state_15482){
var state_val_15483 = (state_15482[(1)]);
if((state_val_15483 === (7))){
var inst_15464 = (state_15482[(7)]);
var inst_15464__$1 = (state_15482[(2)]);
var inst_15465 = (inst_15464__$1 == null);
var inst_15466 = cljs.core.not(inst_15465);
var state_15482__$1 = (function (){var statearr_15484 = state_15482;
(statearr_15484[(7)] = inst_15464__$1);

return statearr_15484;
})();
if(inst_15466){
var statearr_15485_15510 = state_15482__$1;
(statearr_15485_15510[(1)] = (8));

} else {
var statearr_15486_15511 = state_15482__$1;
(statearr_15486_15511[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (1))){
var inst_15459 = (0);
var state_15482__$1 = (function (){var statearr_15487 = state_15482;
(statearr_15487[(8)] = inst_15459);

return statearr_15487;
})();
var statearr_15488_15512 = state_15482__$1;
(statearr_15488_15512[(2)] = null);

(statearr_15488_15512[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (4))){
var state_15482__$1 = state_15482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15482__$1,(7),ch);
} else {
if((state_val_15483 === (6))){
var inst_15477 = (state_15482[(2)]);
var state_15482__$1 = state_15482;
var statearr_15489_15513 = state_15482__$1;
(statearr_15489_15513[(2)] = inst_15477);

(statearr_15489_15513[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (3))){
var inst_15479 = (state_15482[(2)]);
var inst_15480 = cljs.core.async.close_BANG_(out);
var state_15482__$1 = (function (){var statearr_15490 = state_15482;
(statearr_15490[(9)] = inst_15479);

return statearr_15490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15482__$1,inst_15480);
} else {
if((state_val_15483 === (2))){
var inst_15459 = (state_15482[(8)]);
var inst_15461 = (inst_15459 < n);
var state_15482__$1 = state_15482;
if(cljs.core.truth_(inst_15461)){
var statearr_15491_15514 = state_15482__$1;
(statearr_15491_15514[(1)] = (4));

} else {
var statearr_15492_15515 = state_15482__$1;
(statearr_15492_15515[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (11))){
var inst_15459 = (state_15482[(8)]);
var inst_15469 = (state_15482[(2)]);
var inst_15470 = (inst_15459 + (1));
var inst_15459__$1 = inst_15470;
var state_15482__$1 = (function (){var statearr_15493 = state_15482;
(statearr_15493[(8)] = inst_15459__$1);

(statearr_15493[(10)] = inst_15469);

return statearr_15493;
})();
var statearr_15494_15516 = state_15482__$1;
(statearr_15494_15516[(2)] = null);

(statearr_15494_15516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (9))){
var state_15482__$1 = state_15482;
var statearr_15495_15517 = state_15482__$1;
(statearr_15495_15517[(2)] = null);

(statearr_15495_15517[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (5))){
var state_15482__$1 = state_15482;
var statearr_15496_15518 = state_15482__$1;
(statearr_15496_15518[(2)] = null);

(statearr_15496_15518[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (10))){
var inst_15474 = (state_15482[(2)]);
var state_15482__$1 = state_15482;
var statearr_15497_15519 = state_15482__$1;
(statearr_15497_15519[(2)] = inst_15474);

(statearr_15497_15519[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15483 === (8))){
var inst_15464 = (state_15482[(7)]);
var state_15482__$1 = state_15482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15482__$1,(11),out,inst_15464);
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
});})(c__13322__auto___15509,out))
;
return ((function (switch__13208__auto__,c__13322__auto___15509,out){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_15501 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15501[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_15501[(1)] = (1));

return statearr_15501;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_15482){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15482);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15502){if((e15502 instanceof Object)){
var ex__13212__auto__ = e15502;
var statearr_15503_15520 = state_15482;
(statearr_15503_15520[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15482);

return cljs.core.cst$kw$recur;
} else {
throw e15502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15521 = state_15482;
state_15482 = G__15521;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_15482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_15482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___15509,out))
})();
var state__13324__auto__ = (function (){var statearr_15504 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___15509);

return statearr_15504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___15509,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15531 = (function (map_LT_,f,ch,meta15532){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15532 = meta15532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15533,meta15532__$1){
var self__ = this;
var _15533__$1 = this;
return (new cljs.core.async.t_cljs$core$async15531(self__.map_LT_,self__.f,self__.ch,meta15532__$1));
});

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15533){
var self__ = this;
var _15533__$1 = this;
return self__.meta15532;
});

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15534 = (function (map_LT_,f,ch,meta15532,_,fn1,meta15535){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15532 = meta15532;
this._ = _;
this.fn1 = fn1;
this.meta15535 = meta15535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15536,meta15535__$1){
var self__ = this;
var _15536__$1 = this;
return (new cljs.core.async.t_cljs$core$async15534(self__.map_LT_,self__.f,self__.ch,self__.meta15532,self__._,self__.fn1,meta15535__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15536){
var self__ = this;
var _15536__$1 = this;
return self__.meta15535;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15522_SHARP_){
var G__15537 = (((p1__15522_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15522_SHARP_) : self__.f.call(null,p1__15522_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15537) : f1.call(null,G__15537));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15534.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15532,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15531], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15535], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15534";

cljs.core.async.t_cljs$core$async15534.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15534");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15534 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15534(map_LT___$1,f__$1,ch__$1,meta15532__$1,___$2,fn1__$1,meta15535){
return (new cljs.core.async.t_cljs$core$async15534(map_LT___$1,f__$1,ch__$1,meta15532__$1,___$2,fn1__$1,meta15535));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15534(self__.map_LT_,self__.f,self__.ch,self__.meta15532,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15538 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15538) : self__.f.call(null,G__15538));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15532], null);
});

cljs.core.async.t_cljs$core$async15531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15531";

cljs.core.async.t_cljs$core$async15531.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15531");
});

cljs.core.async.__GT_t_cljs$core$async15531 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15531(map_LT___$1,f__$1,ch__$1,meta15532){
return (new cljs.core.async.t_cljs$core$async15531(map_LT___$1,f__$1,ch__$1,meta15532));
});

}

return (new cljs.core.async.t_cljs$core$async15531(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15542 = (function (map_GT_,f,ch,meta15543){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15543 = meta15543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15544,meta15543__$1){
var self__ = this;
var _15544__$1 = this;
return (new cljs.core.async.t_cljs$core$async15542(self__.map_GT_,self__.f,self__.ch,meta15543__$1));
});

cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15544){
var self__ = this;
var _15544__$1 = this;
return self__.meta15543;
});

cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15543], null);
});

cljs.core.async.t_cljs$core$async15542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15542";

cljs.core.async.t_cljs$core$async15542.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15542");
});

cljs.core.async.__GT_t_cljs$core$async15542 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15542(map_GT___$1,f__$1,ch__$1,meta15543){
return (new cljs.core.async.t_cljs$core$async15542(map_GT___$1,f__$1,ch__$1,meta15543));
});

}

return (new cljs.core.async.t_cljs$core$async15542(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15548 = (function (filter_GT_,p,ch,meta15549){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15549 = meta15549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15550,meta15549__$1){
var self__ = this;
var _15550__$1 = this;
return (new cljs.core.async.t_cljs$core$async15548(self__.filter_GT_,self__.p,self__.ch,meta15549__$1));
});

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15550){
var self__ = this;
var _15550__$1 = this;
return self__.meta15549;
});

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15549], null);
});

cljs.core.async.t_cljs$core$async15548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15548";

cljs.core.async.t_cljs$core$async15548.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async15548");
});

cljs.core.async.__GT_t_cljs$core$async15548 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15548(filter_GT___$1,p__$1,ch__$1,meta15549){
return (new cljs.core.async.t_cljs$core$async15548(filter_GT___$1,p__$1,ch__$1,meta15549));
});

}

return (new cljs.core.async.t_cljs$core$async15548(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15551 = [];
var len__5726__auto___15595 = arguments.length;
var i__5727__auto___15596 = (0);
while(true){
if((i__5727__auto___15596 < len__5726__auto___15595)){
args15551.push((arguments[i__5727__auto___15596]));

var G__15597 = (i__5727__auto___15596 + (1));
i__5727__auto___15596 = G__15597;
continue;
} else {
}
break;
}

var G__15553 = args15551.length;
switch (G__15553) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15551.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13322__auto___15599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___15599,out){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___15599,out){
return (function (state_15574){
var state_val_15575 = (state_15574[(1)]);
if((state_val_15575 === (7))){
var inst_15570 = (state_15574[(2)]);
var state_15574__$1 = state_15574;
var statearr_15576_15600 = state_15574__$1;
(statearr_15576_15600[(2)] = inst_15570);

(statearr_15576_15600[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (1))){
var state_15574__$1 = state_15574;
var statearr_15577_15601 = state_15574__$1;
(statearr_15577_15601[(2)] = null);

(statearr_15577_15601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (4))){
var inst_15556 = (state_15574[(7)]);
var inst_15556__$1 = (state_15574[(2)]);
var inst_15557 = (inst_15556__$1 == null);
var state_15574__$1 = (function (){var statearr_15578 = state_15574;
(statearr_15578[(7)] = inst_15556__$1);

return statearr_15578;
})();
if(cljs.core.truth_(inst_15557)){
var statearr_15579_15602 = state_15574__$1;
(statearr_15579_15602[(1)] = (5));

} else {
var statearr_15580_15603 = state_15574__$1;
(statearr_15580_15603[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (6))){
var inst_15556 = (state_15574[(7)]);
var inst_15561 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15556) : p.call(null,inst_15556));
var state_15574__$1 = state_15574;
if(cljs.core.truth_(inst_15561)){
var statearr_15581_15604 = state_15574__$1;
(statearr_15581_15604[(1)] = (8));

} else {
var statearr_15582_15605 = state_15574__$1;
(statearr_15582_15605[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (3))){
var inst_15572 = (state_15574[(2)]);
var state_15574__$1 = state_15574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15574__$1,inst_15572);
} else {
if((state_val_15575 === (2))){
var state_15574__$1 = state_15574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15574__$1,(4),ch);
} else {
if((state_val_15575 === (11))){
var inst_15564 = (state_15574[(2)]);
var state_15574__$1 = state_15574;
var statearr_15583_15606 = state_15574__$1;
(statearr_15583_15606[(2)] = inst_15564);

(statearr_15583_15606[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (9))){
var state_15574__$1 = state_15574;
var statearr_15584_15607 = state_15574__$1;
(statearr_15584_15607[(2)] = null);

(statearr_15584_15607[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (5))){
var inst_15559 = cljs.core.async.close_BANG_(out);
var state_15574__$1 = state_15574;
var statearr_15585_15608 = state_15574__$1;
(statearr_15585_15608[(2)] = inst_15559);

(statearr_15585_15608[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (10))){
var inst_15567 = (state_15574[(2)]);
var state_15574__$1 = (function (){var statearr_15586 = state_15574;
(statearr_15586[(8)] = inst_15567);

return statearr_15586;
})();
var statearr_15587_15609 = state_15574__$1;
(statearr_15587_15609[(2)] = null);

(statearr_15587_15609[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (8))){
var inst_15556 = (state_15574[(7)]);
var state_15574__$1 = state_15574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15574__$1,(11),out,inst_15556);
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
});})(c__13322__auto___15599,out))
;
return ((function (switch__13208__auto__,c__13322__auto___15599,out){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_15591 = [null,null,null,null,null,null,null,null,null];
(statearr_15591[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_15591[(1)] = (1));

return statearr_15591;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_15574){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15574);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15592){if((e15592 instanceof Object)){
var ex__13212__auto__ = e15592;
var statearr_15593_15610 = state_15574;
(statearr_15593_15610[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15574);

return cljs.core.cst$kw$recur;
} else {
throw e15592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15611 = state_15574;
state_15574 = G__15611;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_15574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_15574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___15599,out))
})();
var state__13324__auto__ = (function (){var statearr_15594 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___15599);

return statearr_15594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___15599,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15612 = [];
var len__5726__auto___15615 = arguments.length;
var i__5727__auto___15616 = (0);
while(true){
if((i__5727__auto___15616 < len__5726__auto___15615)){
args15612.push((arguments[i__5727__auto___15616]));

var G__15617 = (i__5727__auto___15616 + (1));
i__5727__auto___15616 = G__15617;
continue;
} else {
}
break;
}

var G__15614 = args15612.length;
switch (G__15614) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15612.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto__){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto__){
return (function (state_15784){
var state_val_15785 = (state_15784[(1)]);
if((state_val_15785 === (7))){
var inst_15780 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15786_15827 = state_15784__$1;
(statearr_15786_15827[(2)] = inst_15780);

(statearr_15786_15827[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (20))){
var inst_15750 = (state_15784[(7)]);
var inst_15761 = (state_15784[(2)]);
var inst_15762 = cljs.core.next(inst_15750);
var inst_15736 = inst_15762;
var inst_15737 = null;
var inst_15738 = (0);
var inst_15739 = (0);
var state_15784__$1 = (function (){var statearr_15787 = state_15784;
(statearr_15787[(8)] = inst_15739);

(statearr_15787[(9)] = inst_15736);

(statearr_15787[(10)] = inst_15761);

(statearr_15787[(11)] = inst_15737);

(statearr_15787[(12)] = inst_15738);

return statearr_15787;
})();
var statearr_15788_15828 = state_15784__$1;
(statearr_15788_15828[(2)] = null);

(statearr_15788_15828[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (1))){
var state_15784__$1 = state_15784;
var statearr_15789_15829 = state_15784__$1;
(statearr_15789_15829[(2)] = null);

(statearr_15789_15829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (4))){
var inst_15725 = (state_15784[(13)]);
var inst_15725__$1 = (state_15784[(2)]);
var inst_15726 = (inst_15725__$1 == null);
var state_15784__$1 = (function (){var statearr_15790 = state_15784;
(statearr_15790[(13)] = inst_15725__$1);

return statearr_15790;
})();
if(cljs.core.truth_(inst_15726)){
var statearr_15791_15830 = state_15784__$1;
(statearr_15791_15830[(1)] = (5));

} else {
var statearr_15792_15831 = state_15784__$1;
(statearr_15792_15831[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (15))){
var state_15784__$1 = state_15784;
var statearr_15796_15832 = state_15784__$1;
(statearr_15796_15832[(2)] = null);

(statearr_15796_15832[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (21))){
var state_15784__$1 = state_15784;
var statearr_15797_15833 = state_15784__$1;
(statearr_15797_15833[(2)] = null);

(statearr_15797_15833[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (13))){
var inst_15739 = (state_15784[(8)]);
var inst_15736 = (state_15784[(9)]);
var inst_15737 = (state_15784[(11)]);
var inst_15738 = (state_15784[(12)]);
var inst_15746 = (state_15784[(2)]);
var inst_15747 = (inst_15739 + (1));
var tmp15793 = inst_15736;
var tmp15794 = inst_15737;
var tmp15795 = inst_15738;
var inst_15736__$1 = tmp15793;
var inst_15737__$1 = tmp15794;
var inst_15738__$1 = tmp15795;
var inst_15739__$1 = inst_15747;
var state_15784__$1 = (function (){var statearr_15798 = state_15784;
(statearr_15798[(8)] = inst_15739__$1);

(statearr_15798[(9)] = inst_15736__$1);

(statearr_15798[(11)] = inst_15737__$1);

(statearr_15798[(14)] = inst_15746);

(statearr_15798[(12)] = inst_15738__$1);

return statearr_15798;
})();
var statearr_15799_15834 = state_15784__$1;
(statearr_15799_15834[(2)] = null);

(statearr_15799_15834[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (22))){
var state_15784__$1 = state_15784;
var statearr_15800_15835 = state_15784__$1;
(statearr_15800_15835[(2)] = null);

(statearr_15800_15835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (6))){
var inst_15725 = (state_15784[(13)]);
var inst_15734 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15725) : f.call(null,inst_15725));
var inst_15735 = cljs.core.seq(inst_15734);
var inst_15736 = inst_15735;
var inst_15737 = null;
var inst_15738 = (0);
var inst_15739 = (0);
var state_15784__$1 = (function (){var statearr_15801 = state_15784;
(statearr_15801[(8)] = inst_15739);

(statearr_15801[(9)] = inst_15736);

(statearr_15801[(11)] = inst_15737);

(statearr_15801[(12)] = inst_15738);

return statearr_15801;
})();
var statearr_15802_15836 = state_15784__$1;
(statearr_15802_15836[(2)] = null);

(statearr_15802_15836[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (17))){
var inst_15750 = (state_15784[(7)]);
var inst_15754 = cljs.core.chunk_first(inst_15750);
var inst_15755 = cljs.core.chunk_rest(inst_15750);
var inst_15756 = cljs.core.count(inst_15754);
var inst_15736 = inst_15755;
var inst_15737 = inst_15754;
var inst_15738 = inst_15756;
var inst_15739 = (0);
var state_15784__$1 = (function (){var statearr_15803 = state_15784;
(statearr_15803[(8)] = inst_15739);

(statearr_15803[(9)] = inst_15736);

(statearr_15803[(11)] = inst_15737);

(statearr_15803[(12)] = inst_15738);

return statearr_15803;
})();
var statearr_15804_15837 = state_15784__$1;
(statearr_15804_15837[(2)] = null);

(statearr_15804_15837[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (3))){
var inst_15782 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15784__$1,inst_15782);
} else {
if((state_val_15785 === (12))){
var inst_15770 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15805_15838 = state_15784__$1;
(statearr_15805_15838[(2)] = inst_15770);

(statearr_15805_15838[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (2))){
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15784__$1,(4),in$);
} else {
if((state_val_15785 === (23))){
var inst_15778 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15806_15839 = state_15784__$1;
(statearr_15806_15839[(2)] = inst_15778);

(statearr_15806_15839[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (19))){
var inst_15765 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15807_15840 = state_15784__$1;
(statearr_15807_15840[(2)] = inst_15765);

(statearr_15807_15840[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (11))){
var inst_15750 = (state_15784[(7)]);
var inst_15736 = (state_15784[(9)]);
var inst_15750__$1 = cljs.core.seq(inst_15736);
var state_15784__$1 = (function (){var statearr_15808 = state_15784;
(statearr_15808[(7)] = inst_15750__$1);

return statearr_15808;
})();
if(inst_15750__$1){
var statearr_15809_15841 = state_15784__$1;
(statearr_15809_15841[(1)] = (14));

} else {
var statearr_15810_15842 = state_15784__$1;
(statearr_15810_15842[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (9))){
var inst_15772 = (state_15784[(2)]);
var inst_15773 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15784__$1 = (function (){var statearr_15811 = state_15784;
(statearr_15811[(15)] = inst_15772);

return statearr_15811;
})();
if(cljs.core.truth_(inst_15773)){
var statearr_15812_15843 = state_15784__$1;
(statearr_15812_15843[(1)] = (21));

} else {
var statearr_15813_15844 = state_15784__$1;
(statearr_15813_15844[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (5))){
var inst_15728 = cljs.core.async.close_BANG_(out);
var state_15784__$1 = state_15784;
var statearr_15814_15845 = state_15784__$1;
(statearr_15814_15845[(2)] = inst_15728);

(statearr_15814_15845[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (14))){
var inst_15750 = (state_15784[(7)]);
var inst_15752 = cljs.core.chunked_seq_QMARK_(inst_15750);
var state_15784__$1 = state_15784;
if(inst_15752){
var statearr_15815_15846 = state_15784__$1;
(statearr_15815_15846[(1)] = (17));

} else {
var statearr_15816_15847 = state_15784__$1;
(statearr_15816_15847[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (16))){
var inst_15768 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15817_15848 = state_15784__$1;
(statearr_15817_15848[(2)] = inst_15768);

(statearr_15817_15848[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15785 === (10))){
var inst_15739 = (state_15784[(8)]);
var inst_15737 = (state_15784[(11)]);
var inst_15744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15737,inst_15739);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15784__$1,(13),out,inst_15744);
} else {
if((state_val_15785 === (18))){
var inst_15750 = (state_15784[(7)]);
var inst_15759 = cljs.core.first(inst_15750);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15784__$1,(20),out,inst_15759);
} else {
if((state_val_15785 === (8))){
var inst_15739 = (state_15784[(8)]);
var inst_15738 = (state_15784[(12)]);
var inst_15741 = (inst_15739 < inst_15738);
var inst_15742 = inst_15741;
var state_15784__$1 = state_15784;
if(cljs.core.truth_(inst_15742)){
var statearr_15818_15849 = state_15784__$1;
(statearr_15818_15849[(1)] = (10));

} else {
var statearr_15819_15850 = state_15784__$1;
(statearr_15819_15850[(1)] = (11));

}

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
});})(c__13322__auto__))
;
return ((function (switch__13208__auto__,c__13322__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13209__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13209__auto____0 = (function (){
var statearr_15823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15823[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13209__auto__);

(statearr_15823[(1)] = (1));

return statearr_15823;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13209__auto____1 = (function (state_15784){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15784);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15824){if((e15824 instanceof Object)){
var ex__13212__auto__ = e15824;
var statearr_15825_15851 = state_15784;
(statearr_15825_15851[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15784);

return cljs.core.cst$kw$recur;
} else {
throw e15824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15852 = state_15784;
state_15784 = G__15852;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13209__auto__ = function(state_15784){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13209__auto____1.call(this,state_15784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13209__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13209__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto__))
})();
var state__13324__auto__ = (function (){var statearr_15826 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto__);

return statearr_15826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto__))
);

return c__13322__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15853 = [];
var len__5726__auto___15856 = arguments.length;
var i__5727__auto___15857 = (0);
while(true){
if((i__5727__auto___15857 < len__5726__auto___15856)){
args15853.push((arguments[i__5727__auto___15857]));

var G__15858 = (i__5727__auto___15857 + (1));
i__5727__auto___15857 = G__15858;
continue;
} else {
}
break;
}

var G__15855 = args15853.length;
switch (G__15855) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15853.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15860 = [];
var len__5726__auto___15863 = arguments.length;
var i__5727__auto___15864 = (0);
while(true){
if((i__5727__auto___15864 < len__5726__auto___15863)){
args15860.push((arguments[i__5727__auto___15864]));

var G__15865 = (i__5727__auto___15864 + (1));
i__5727__auto___15864 = G__15865;
continue;
} else {
}
break;
}

var G__15862 = args15860.length;
switch (G__15862) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15860.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15867 = [];
var len__5726__auto___15918 = arguments.length;
var i__5727__auto___15919 = (0);
while(true){
if((i__5727__auto___15919 < len__5726__auto___15918)){
args15867.push((arguments[i__5727__auto___15919]));

var G__15920 = (i__5727__auto___15919 + (1));
i__5727__auto___15919 = G__15920;
continue;
} else {
}
break;
}

var G__15869 = args15867.length;
switch (G__15869) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15867.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13322__auto___15922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___15922,out){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___15922,out){
return (function (state_15893){
var state_val_15894 = (state_15893[(1)]);
if((state_val_15894 === (7))){
var inst_15888 = (state_15893[(2)]);
var state_15893__$1 = state_15893;
var statearr_15895_15923 = state_15893__$1;
(statearr_15895_15923[(2)] = inst_15888);

(statearr_15895_15923[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15894 === (1))){
var inst_15870 = null;
var state_15893__$1 = (function (){var statearr_15896 = state_15893;
(statearr_15896[(7)] = inst_15870);

return statearr_15896;
})();
var statearr_15897_15924 = state_15893__$1;
(statearr_15897_15924[(2)] = null);

(statearr_15897_15924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15894 === (4))){
var inst_15873 = (state_15893[(8)]);
var inst_15873__$1 = (state_15893[(2)]);
var inst_15874 = (inst_15873__$1 == null);
var inst_15875 = cljs.core.not(inst_15874);
var state_15893__$1 = (function (){var statearr_15898 = state_15893;
(statearr_15898[(8)] = inst_15873__$1);

return statearr_15898;
})();
if(inst_15875){
var statearr_15899_15925 = state_15893__$1;
(statearr_15899_15925[(1)] = (5));

} else {
var statearr_15900_15926 = state_15893__$1;
(statearr_15900_15926[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15894 === (6))){
var state_15893__$1 = state_15893;
var statearr_15901_15927 = state_15893__$1;
(statearr_15901_15927[(2)] = null);

(statearr_15901_15927[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15894 === (3))){
var inst_15890 = (state_15893[(2)]);
var inst_15891 = cljs.core.async.close_BANG_(out);
var state_15893__$1 = (function (){var statearr_15902 = state_15893;
(statearr_15902[(9)] = inst_15890);

return statearr_15902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15893__$1,inst_15891);
} else {
if((state_val_15894 === (2))){
var state_15893__$1 = state_15893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15893__$1,(4),ch);
} else {
if((state_val_15894 === (11))){
var inst_15873 = (state_15893[(8)]);
var inst_15882 = (state_15893[(2)]);
var inst_15870 = inst_15873;
var state_15893__$1 = (function (){var statearr_15903 = state_15893;
(statearr_15903[(10)] = inst_15882);

(statearr_15903[(7)] = inst_15870);

return statearr_15903;
})();
var statearr_15904_15928 = state_15893__$1;
(statearr_15904_15928[(2)] = null);

(statearr_15904_15928[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15894 === (9))){
var inst_15873 = (state_15893[(8)]);
var state_15893__$1 = state_15893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15893__$1,(11),out,inst_15873);
} else {
if((state_val_15894 === (5))){
var inst_15873 = (state_15893[(8)]);
var inst_15870 = (state_15893[(7)]);
var inst_15877 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15873,inst_15870);
var state_15893__$1 = state_15893;
if(inst_15877){
var statearr_15906_15929 = state_15893__$1;
(statearr_15906_15929[(1)] = (8));

} else {
var statearr_15907_15930 = state_15893__$1;
(statearr_15907_15930[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15894 === (10))){
var inst_15885 = (state_15893[(2)]);
var state_15893__$1 = state_15893;
var statearr_15908_15931 = state_15893__$1;
(statearr_15908_15931[(2)] = inst_15885);

(statearr_15908_15931[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15894 === (8))){
var inst_15870 = (state_15893[(7)]);
var tmp15905 = inst_15870;
var inst_15870__$1 = tmp15905;
var state_15893__$1 = (function (){var statearr_15909 = state_15893;
(statearr_15909[(7)] = inst_15870__$1);

return statearr_15909;
})();
var statearr_15910_15932 = state_15893__$1;
(statearr_15910_15932[(2)] = null);

(statearr_15910_15932[(1)] = (2));


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
});})(c__13322__auto___15922,out))
;
return ((function (switch__13208__auto__,c__13322__auto___15922,out){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_15914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15914[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_15914[(1)] = (1));

return statearr_15914;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_15893){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15893);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e15915){if((e15915 instanceof Object)){
var ex__13212__auto__ = e15915;
var statearr_15916_15933 = state_15893;
(statearr_15916_15933[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15893);

return cljs.core.cst$kw$recur;
} else {
throw e15915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__15934 = state_15893;
state_15893 = G__15934;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_15893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_15893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___15922,out))
})();
var state__13324__auto__ = (function (){var statearr_15917 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_15917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___15922);

return statearr_15917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___15922,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15935 = [];
var len__5726__auto___16005 = arguments.length;
var i__5727__auto___16006 = (0);
while(true){
if((i__5727__auto___16006 < len__5726__auto___16005)){
args15935.push((arguments[i__5727__auto___16006]));

var G__16007 = (i__5727__auto___16006 + (1));
i__5727__auto___16006 = G__16007;
continue;
} else {
}
break;
}

var G__15937 = args15935.length;
switch (G__15937) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15935.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13322__auto___16009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___16009,out){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___16009,out){
return (function (state_15975){
var state_val_15976 = (state_15975[(1)]);
if((state_val_15976 === (7))){
var inst_15971 = (state_15975[(2)]);
var state_15975__$1 = state_15975;
var statearr_15977_16010 = state_15975__$1;
(statearr_15977_16010[(2)] = inst_15971);

(statearr_15977_16010[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (1))){
var inst_15938 = (new Array(n));
var inst_15939 = inst_15938;
var inst_15940 = (0);
var state_15975__$1 = (function (){var statearr_15978 = state_15975;
(statearr_15978[(7)] = inst_15940);

(statearr_15978[(8)] = inst_15939);

return statearr_15978;
})();
var statearr_15979_16011 = state_15975__$1;
(statearr_15979_16011[(2)] = null);

(statearr_15979_16011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (4))){
var inst_15943 = (state_15975[(9)]);
var inst_15943__$1 = (state_15975[(2)]);
var inst_15944 = (inst_15943__$1 == null);
var inst_15945 = cljs.core.not(inst_15944);
var state_15975__$1 = (function (){var statearr_15980 = state_15975;
(statearr_15980[(9)] = inst_15943__$1);

return statearr_15980;
})();
if(inst_15945){
var statearr_15981_16012 = state_15975__$1;
(statearr_15981_16012[(1)] = (5));

} else {
var statearr_15982_16013 = state_15975__$1;
(statearr_15982_16013[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (15))){
var inst_15965 = (state_15975[(2)]);
var state_15975__$1 = state_15975;
var statearr_15983_16014 = state_15975__$1;
(statearr_15983_16014[(2)] = inst_15965);

(statearr_15983_16014[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (13))){
var state_15975__$1 = state_15975;
var statearr_15984_16015 = state_15975__$1;
(statearr_15984_16015[(2)] = null);

(statearr_15984_16015[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (6))){
var inst_15940 = (state_15975[(7)]);
var inst_15961 = (inst_15940 > (0));
var state_15975__$1 = state_15975;
if(cljs.core.truth_(inst_15961)){
var statearr_15985_16016 = state_15975__$1;
(statearr_15985_16016[(1)] = (12));

} else {
var statearr_15986_16017 = state_15975__$1;
(statearr_15986_16017[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (3))){
var inst_15973 = (state_15975[(2)]);
var state_15975__$1 = state_15975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15975__$1,inst_15973);
} else {
if((state_val_15976 === (12))){
var inst_15939 = (state_15975[(8)]);
var inst_15963 = cljs.core.vec(inst_15939);
var state_15975__$1 = state_15975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15975__$1,(15),out,inst_15963);
} else {
if((state_val_15976 === (2))){
var state_15975__$1 = state_15975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15975__$1,(4),ch);
} else {
if((state_val_15976 === (11))){
var inst_15955 = (state_15975[(2)]);
var inst_15956 = (new Array(n));
var inst_15939 = inst_15956;
var inst_15940 = (0);
var state_15975__$1 = (function (){var statearr_15987 = state_15975;
(statearr_15987[(10)] = inst_15955);

(statearr_15987[(7)] = inst_15940);

(statearr_15987[(8)] = inst_15939);

return statearr_15987;
})();
var statearr_15988_16018 = state_15975__$1;
(statearr_15988_16018[(2)] = null);

(statearr_15988_16018[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (9))){
var inst_15939 = (state_15975[(8)]);
var inst_15953 = cljs.core.vec(inst_15939);
var state_15975__$1 = state_15975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15975__$1,(11),out,inst_15953);
} else {
if((state_val_15976 === (5))){
var inst_15940 = (state_15975[(7)]);
var inst_15943 = (state_15975[(9)]);
var inst_15948 = (state_15975[(11)]);
var inst_15939 = (state_15975[(8)]);
var inst_15947 = (inst_15939[inst_15940] = inst_15943);
var inst_15948__$1 = (inst_15940 + (1));
var inst_15949 = (inst_15948__$1 < n);
var state_15975__$1 = (function (){var statearr_15989 = state_15975;
(statearr_15989[(12)] = inst_15947);

(statearr_15989[(11)] = inst_15948__$1);

return statearr_15989;
})();
if(cljs.core.truth_(inst_15949)){
var statearr_15990_16019 = state_15975__$1;
(statearr_15990_16019[(1)] = (8));

} else {
var statearr_15991_16020 = state_15975__$1;
(statearr_15991_16020[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (14))){
var inst_15968 = (state_15975[(2)]);
var inst_15969 = cljs.core.async.close_BANG_(out);
var state_15975__$1 = (function (){var statearr_15993 = state_15975;
(statearr_15993[(13)] = inst_15968);

return statearr_15993;
})();
var statearr_15994_16021 = state_15975__$1;
(statearr_15994_16021[(2)] = inst_15969);

(statearr_15994_16021[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (10))){
var inst_15959 = (state_15975[(2)]);
var state_15975__$1 = state_15975;
var statearr_15995_16022 = state_15975__$1;
(statearr_15995_16022[(2)] = inst_15959);

(statearr_15995_16022[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15976 === (8))){
var inst_15948 = (state_15975[(11)]);
var inst_15939 = (state_15975[(8)]);
var tmp15992 = inst_15939;
var inst_15939__$1 = tmp15992;
var inst_15940 = inst_15948;
var state_15975__$1 = (function (){var statearr_15996 = state_15975;
(statearr_15996[(7)] = inst_15940);

(statearr_15996[(8)] = inst_15939__$1);

return statearr_15996;
})();
var statearr_15997_16023 = state_15975__$1;
(statearr_15997_16023[(2)] = null);

(statearr_15997_16023[(1)] = (2));


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
});})(c__13322__auto___16009,out))
;
return ((function (switch__13208__auto__,c__13322__auto___16009,out){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_16001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16001[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_16001[(1)] = (1));

return statearr_16001;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_15975){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_15975);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e16002){if((e16002 instanceof Object)){
var ex__13212__auto__ = e16002;
var statearr_16003_16024 = state_15975;
(statearr_16003_16024[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15975);

return cljs.core.cst$kw$recur;
} else {
throw e16002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__16025 = state_15975;
state_15975 = G__16025;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_15975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_15975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___16009,out))
})();
var state__13324__auto__ = (function (){var statearr_16004 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_16004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___16009);

return statearr_16004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___16009,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16026 = [];
var len__5726__auto___16100 = arguments.length;
var i__5727__auto___16101 = (0);
while(true){
if((i__5727__auto___16101 < len__5726__auto___16100)){
args16026.push((arguments[i__5727__auto___16101]));

var G__16102 = (i__5727__auto___16101 + (1));
i__5727__auto___16101 = G__16102;
continue;
} else {
}
break;
}

var G__16028 = args16026.length;
switch (G__16028) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16026.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13322__auto___16104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13322__auto___16104,out){
return (function (){
var f__13323__auto__ = (function (){var switch__13208__auto__ = ((function (c__13322__auto___16104,out){
return (function (state_16070){
var state_val_16071 = (state_16070[(1)]);
if((state_val_16071 === (7))){
var inst_16066 = (state_16070[(2)]);
var state_16070__$1 = state_16070;
var statearr_16072_16105 = state_16070__$1;
(statearr_16072_16105[(2)] = inst_16066);

(statearr_16072_16105[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (1))){
var inst_16029 = [];
var inst_16030 = inst_16029;
var inst_16031 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16070__$1 = (function (){var statearr_16073 = state_16070;
(statearr_16073[(7)] = inst_16030);

(statearr_16073[(8)] = inst_16031);

return statearr_16073;
})();
var statearr_16074_16106 = state_16070__$1;
(statearr_16074_16106[(2)] = null);

(statearr_16074_16106[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (4))){
var inst_16034 = (state_16070[(9)]);
var inst_16034__$1 = (state_16070[(2)]);
var inst_16035 = (inst_16034__$1 == null);
var inst_16036 = cljs.core.not(inst_16035);
var state_16070__$1 = (function (){var statearr_16075 = state_16070;
(statearr_16075[(9)] = inst_16034__$1);

return statearr_16075;
})();
if(inst_16036){
var statearr_16076_16107 = state_16070__$1;
(statearr_16076_16107[(1)] = (5));

} else {
var statearr_16077_16108 = state_16070__$1;
(statearr_16077_16108[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (15))){
var inst_16060 = (state_16070[(2)]);
var state_16070__$1 = state_16070;
var statearr_16078_16109 = state_16070__$1;
(statearr_16078_16109[(2)] = inst_16060);

(statearr_16078_16109[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (13))){
var state_16070__$1 = state_16070;
var statearr_16079_16110 = state_16070__$1;
(statearr_16079_16110[(2)] = null);

(statearr_16079_16110[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (6))){
var inst_16030 = (state_16070[(7)]);
var inst_16055 = inst_16030.length;
var inst_16056 = (inst_16055 > (0));
var state_16070__$1 = state_16070;
if(cljs.core.truth_(inst_16056)){
var statearr_16080_16111 = state_16070__$1;
(statearr_16080_16111[(1)] = (12));

} else {
var statearr_16081_16112 = state_16070__$1;
(statearr_16081_16112[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (3))){
var inst_16068 = (state_16070[(2)]);
var state_16070__$1 = state_16070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16070__$1,inst_16068);
} else {
if((state_val_16071 === (12))){
var inst_16030 = (state_16070[(7)]);
var inst_16058 = cljs.core.vec(inst_16030);
var state_16070__$1 = state_16070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16070__$1,(15),out,inst_16058);
} else {
if((state_val_16071 === (2))){
var state_16070__$1 = state_16070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16070__$1,(4),ch);
} else {
if((state_val_16071 === (11))){
var inst_16038 = (state_16070[(10)]);
var inst_16034 = (state_16070[(9)]);
var inst_16048 = (state_16070[(2)]);
var inst_16049 = [];
var inst_16050 = inst_16049.push(inst_16034);
var inst_16030 = inst_16049;
var inst_16031 = inst_16038;
var state_16070__$1 = (function (){var statearr_16082 = state_16070;
(statearr_16082[(11)] = inst_16048);

(statearr_16082[(12)] = inst_16050);

(statearr_16082[(7)] = inst_16030);

(statearr_16082[(8)] = inst_16031);

return statearr_16082;
})();
var statearr_16083_16113 = state_16070__$1;
(statearr_16083_16113[(2)] = null);

(statearr_16083_16113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (9))){
var inst_16030 = (state_16070[(7)]);
var inst_16046 = cljs.core.vec(inst_16030);
var state_16070__$1 = state_16070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16070__$1,(11),out,inst_16046);
} else {
if((state_val_16071 === (5))){
var inst_16038 = (state_16070[(10)]);
var inst_16034 = (state_16070[(9)]);
var inst_16031 = (state_16070[(8)]);
var inst_16038__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16034) : f.call(null,inst_16034));
var inst_16039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16038__$1,inst_16031);
var inst_16040 = cljs.core.keyword_identical_QMARK_(inst_16031,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16041 = (inst_16039) || (inst_16040);
var state_16070__$1 = (function (){var statearr_16084 = state_16070;
(statearr_16084[(10)] = inst_16038__$1);

return statearr_16084;
})();
if(cljs.core.truth_(inst_16041)){
var statearr_16085_16114 = state_16070__$1;
(statearr_16085_16114[(1)] = (8));

} else {
var statearr_16086_16115 = state_16070__$1;
(statearr_16086_16115[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (14))){
var inst_16063 = (state_16070[(2)]);
var inst_16064 = cljs.core.async.close_BANG_(out);
var state_16070__$1 = (function (){var statearr_16088 = state_16070;
(statearr_16088[(13)] = inst_16063);

return statearr_16088;
})();
var statearr_16089_16116 = state_16070__$1;
(statearr_16089_16116[(2)] = inst_16064);

(statearr_16089_16116[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (10))){
var inst_16053 = (state_16070[(2)]);
var state_16070__$1 = state_16070;
var statearr_16090_16117 = state_16070__$1;
(statearr_16090_16117[(2)] = inst_16053);

(statearr_16090_16117[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16071 === (8))){
var inst_16038 = (state_16070[(10)]);
var inst_16034 = (state_16070[(9)]);
var inst_16030 = (state_16070[(7)]);
var inst_16043 = inst_16030.push(inst_16034);
var tmp16087 = inst_16030;
var inst_16030__$1 = tmp16087;
var inst_16031 = inst_16038;
var state_16070__$1 = (function (){var statearr_16091 = state_16070;
(statearr_16091[(14)] = inst_16043);

(statearr_16091[(7)] = inst_16030__$1);

(statearr_16091[(8)] = inst_16031);

return statearr_16091;
})();
var statearr_16092_16118 = state_16070__$1;
(statearr_16092_16118[(2)] = null);

(statearr_16092_16118[(1)] = (2));


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
});})(c__13322__auto___16104,out))
;
return ((function (switch__13208__auto__,c__13322__auto___16104,out){
return (function() {
var cljs$core$async$state_machine__13209__auto__ = null;
var cljs$core$async$state_machine__13209__auto____0 = (function (){
var statearr_16096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16096[(0)] = cljs$core$async$state_machine__13209__auto__);

(statearr_16096[(1)] = (1));

return statearr_16096;
});
var cljs$core$async$state_machine__13209__auto____1 = (function (state_16070){
while(true){
var ret_value__13210__auto__ = (function (){try{while(true){
var result__13211__auto__ = switch__13208__auto__(state_16070);
if(cljs.core.keyword_identical_QMARK_(result__13211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13211__auto__;
}
break;
}
}catch (e16097){if((e16097 instanceof Object)){
var ex__13212__auto__ = e16097;
var statearr_16098_16119 = state_16070;
(statearr_16098_16119[(5)] = ex__13212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16070);

return cljs.core.cst$kw$recur;
} else {
throw e16097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13210__auto__,cljs.core.cst$kw$recur)){
var G__16120 = state_16070;
state_16070 = G__16120;
continue;
} else {
return ret_value__13210__auto__;
}
break;
}
});
cljs$core$async$state_machine__13209__auto__ = function(state_16070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13209__auto____1.call(this,state_16070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13209__auto____0;
cljs$core$async$state_machine__13209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13209__auto____1;
return cljs$core$async$state_machine__13209__auto__;
})()
;})(switch__13208__auto__,c__13322__auto___16104,out))
})();
var state__13324__auto__ = (function (){var statearr_16099 = (f__13323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13323__auto__.cljs$core$IFn$_invoke$arity$0() : f__13323__auto__.call(null));
(statearr_16099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13322__auto___16104);

return statearr_16099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13324__auto__);
});})(c__13322__auto___16104,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
