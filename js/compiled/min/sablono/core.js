// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16623__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__16622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16622,(0),null);
var body = cljs.core.nthnext(vec__16622,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16624__i = 0, G__16624__a = new Array(arguments.length -  0);
while (G__16624__i < G__16624__a.length) {G__16624__a[G__16624__i] = arguments[G__16624__i + 0]; ++G__16624__i;}
  args = new cljs.core.IndexedSeq(G__16624__a,0);
} 
return G__16623__delegate.call(this,args);};
G__16623.cljs$lang$maxFixedArity = 0;
G__16623.cljs$lang$applyTo = (function (arglist__16625){
var args = cljs.core.seq(arglist__16625);
return G__16623__delegate(args);
});
G__16623.cljs$core$IFn$_invoke$arity$variadic = G__16623__delegate;
return G__16623;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5440__auto__ = (function sablono$core$update_arglists_$_iter__16632(s__16633){
return (new cljs.core.LazySeq(null,(function (){
var s__16633__$1 = s__16633;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16633__$1);
if(temp__4425__auto__){
var s__16633__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16633__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16633__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16635 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16634 = (0);
while(true){
if((i__16634 < size__5439__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16634);
cljs.core.chunk_append(b__16635,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__16638 = (i__16634 + (1));
i__16634 = G__16638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16635),sablono$core$update_arglists_$_iter__16632(cljs.core.chunk_rest(s__16633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16635),null);
}
} else {
var args = cljs.core.first(s__16633__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__16632(cljs.core.rest(s__16633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16646 = arguments.length;
var i__5727__auto___16647 = (0);
while(true){
if((i__5727__auto___16647 < len__5726__auto___16646)){
args__5733__auto__.push((arguments[i__5727__auto___16647]));

var G__16648 = (i__5727__auto___16647 + (1));
i__5727__auto___16647 = G__16648;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5440__auto__ = (function sablono$core$iter__16640(s__16641){
return (new cljs.core.LazySeq(null,(function (){
var s__16641__$1 = s__16641;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16641__$1);
if(temp__4425__auto__){
var s__16641__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16641__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16641__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16643 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16642 = (0);
while(true){
if((i__16642 < size__5439__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16642);
cljs.core.chunk_append(b__16643,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__16649 = (i__16642 + (1));
i__16642 = G__16649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16643),sablono$core$iter__16640(cljs.core.chunk_rest(s__16641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16643),null);
}
} else {
var style = cljs.core.first(s__16641__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__16640(cljs.core.rest(s__16641__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq16639){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16639));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__16654 = goog.dom.getDocument().body;
var G__16655 = (function (){var G__16656 = "script";
var G__16657 = {"src": src};
return goog.dom.createDom(G__16656,G__16657);
})();
return goog.dom.appendChild(G__16654,G__16655);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to16658 = (function sablono$core$link_to16658(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16661 = arguments.length;
var i__5727__auto___16662 = (0);
while(true){
if((i__5727__auto___16662 < len__5726__auto___16661)){
args__5733__auto__.push((arguments[i__5727__auto___16662]));

var G__16663 = (i__5727__auto___16662 + (1));
i__5727__auto___16662 = G__16663;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.link_to16658.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.link_to16658.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to16658.cljs$lang$maxFixedArity = (1);

sablono.core.link_to16658.cljs$lang$applyTo = (function (seq16659){
var G__16660 = cljs.core.first(seq16659);
var seq16659__$1 = cljs.core.next(seq16659);
return sablono.core.link_to16658.cljs$core$IFn$_invoke$arity$variadic(G__16660,seq16659__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16658);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16664 = (function sablono$core$mail_to16664(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16669 = arguments.length;
var i__5727__auto___16670 = (0);
while(true){
if((i__5727__auto___16670 < len__5726__auto___16669)){
args__5733__auto__.push((arguments[i__5727__auto___16670]));

var G__16671 = (i__5727__auto___16670 + (1));
i__5727__auto___16670 = G__16671;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.mail_to16664.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.mail_to16664.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16667){
var vec__16668 = p__16667;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16668,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4668__auto__ = content;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to16664.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to16664.cljs$lang$applyTo = (function (seq16665){
var G__16666 = cljs.core.first(seq16665);
var seq16665__$1 = cljs.core.next(seq16665);
return sablono.core.mail_to16664.cljs$core$IFn$_invoke$arity$variadic(G__16666,seq16665__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16664);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16672 = (function sablono$core$unordered_list16672(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5440__auto__ = (function sablono$core$unordered_list16672_$_iter__16679(s__16680){
return (new cljs.core.LazySeq(null,(function (){
var s__16680__$1 = s__16680;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16680__$1);
if(temp__4425__auto__){
var s__16680__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16680__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16680__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16682 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16681 = (0);
while(true){
if((i__16681 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16681);
cljs.core.chunk_append(b__16682,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__16685 = (i__16681 + (1));
i__16681 = G__16685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16682),sablono$core$unordered_list16672_$_iter__16679(cljs.core.chunk_rest(s__16680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16682),null);
}
} else {
var x = cljs.core.first(s__16680__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list16672_$_iter__16679(cljs.core.rest(s__16680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16672);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16686 = (function sablono$core$ordered_list16686(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5440__auto__ = (function sablono$core$ordered_list16686_$_iter__16693(s__16694){
return (new cljs.core.LazySeq(null,(function (){
var s__16694__$1 = s__16694;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16694__$1);
if(temp__4425__auto__){
var s__16694__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16694__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16694__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16696 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16695 = (0);
while(true){
if((i__16695 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16695);
cljs.core.chunk_append(b__16696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__16699 = (i__16695 + (1));
i__16695 = G__16699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16696),sablono$core$ordered_list16686_$_iter__16693(cljs.core.chunk_rest(s__16694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16696),null);
}
} else {
var x = cljs.core.first(s__16694__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list16686_$_iter__16693(cljs.core.rest(s__16694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16686);
/**
 * Create an image element.
 */
sablono.core.image16700 = (function sablono$core$image16700(var_args){
var args16701 = [];
var len__5726__auto___16704 = arguments.length;
var i__5727__auto___16705 = (0);
while(true){
if((i__5727__auto___16705 < len__5726__auto___16704)){
args16701.push((arguments[i__5727__auto___16705]));

var G__16706 = (i__5727__auto___16705 + (1));
i__5727__auto___16705 = G__16706;
continue;
} else {
}
break;
}

var G__16703 = args16701.length;
switch (G__16703) {
case 1:
return sablono.core.image16700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16701.length)].join('')));

}
});

sablono.core.image16700.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image16700.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image16700.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16700);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16708_SHARP_,p2__16709_SHARP_){
return [cljs.core.str(p1__16708_SHARP_),cljs.core.str("["),cljs.core.str(p2__16709_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16710_SHARP_,p2__16711_SHARP_){
return [cljs.core.str(p1__16710_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16711_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field16712 = (function sablono$core$color_field16712(var_args){
var args16713 = [];
var len__5726__auto___16780 = arguments.length;
var i__5727__auto___16781 = (0);
while(true){
if((i__5727__auto___16781 < len__5726__auto___16780)){
args16713.push((arguments[i__5727__auto___16781]));

var G__16782 = (i__5727__auto___16781 + (1));
i__5727__auto___16781 = G__16782;
continue;
} else {
}
break;
}

var G__16715 = args16713.length;
switch (G__16715) {
case 1:
return sablono.core.color_field16712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16713.length)].join('')));

}
});

sablono.core.color_field16712.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.color_field16712.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.color_field16712.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.color_field16712.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16712);

/**
 * Creates a date input field.
 */
sablono.core.date_field16716 = (function sablono$core$date_field16716(var_args){
var args16717 = [];
var len__5726__auto___16784 = arguments.length;
var i__5727__auto___16785 = (0);
while(true){
if((i__5727__auto___16785 < len__5726__auto___16784)){
args16717.push((arguments[i__5727__auto___16785]));

var G__16786 = (i__5727__auto___16785 + (1));
i__5727__auto___16785 = G__16786;
continue;
} else {
}
break;
}

var G__16719 = args16717.length;
switch (G__16719) {
case 1:
return sablono.core.date_field16716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16717.length)].join('')));

}
});

sablono.core.date_field16716.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.date_field16716.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.date_field16716.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.date_field16716.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16716);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16720 = (function sablono$core$datetime_field16720(var_args){
var args16721 = [];
var len__5726__auto___16788 = arguments.length;
var i__5727__auto___16789 = (0);
while(true){
if((i__5727__auto___16789 < len__5726__auto___16788)){
args16721.push((arguments[i__5727__auto___16789]));

var G__16790 = (i__5727__auto___16789 + (1));
i__5727__auto___16789 = G__16790;
continue;
} else {
}
break;
}

var G__16723 = args16721.length;
switch (G__16723) {
case 1:
return sablono.core.datetime_field16720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16721.length)].join('')));

}
});

sablono.core.datetime_field16720.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.datetime_field16720.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.datetime_field16720.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.datetime_field16720.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16720);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16724 = (function sablono$core$datetime_local_field16724(var_args){
var args16725 = [];
var len__5726__auto___16792 = arguments.length;
var i__5727__auto___16793 = (0);
while(true){
if((i__5727__auto___16793 < len__5726__auto___16792)){
args16725.push((arguments[i__5727__auto___16793]));

var G__16794 = (i__5727__auto___16793 + (1));
i__5727__auto___16793 = G__16794;
continue;
} else {
}
break;
}

var G__16727 = args16725.length;
switch (G__16727) {
case 1:
return sablono.core.datetime_local_field16724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16725.length)].join('')));

}
});

sablono.core.datetime_local_field16724.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.datetime_local_field16724.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.datetime_local_field16724.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.datetime_local_field16724.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16724);

/**
 * Creates a email input field.
 */
sablono.core.email_field16728 = (function sablono$core$email_field16728(var_args){
var args16729 = [];
var len__5726__auto___16796 = arguments.length;
var i__5727__auto___16797 = (0);
while(true){
if((i__5727__auto___16797 < len__5726__auto___16796)){
args16729.push((arguments[i__5727__auto___16797]));

var G__16798 = (i__5727__auto___16797 + (1));
i__5727__auto___16797 = G__16798;
continue;
} else {
}
break;
}

var G__16731 = args16729.length;
switch (G__16731) {
case 1:
return sablono.core.email_field16728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16729.length)].join('')));

}
});

sablono.core.email_field16728.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.email_field16728.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.email_field16728.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.email_field16728.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16728);

/**
 * Creates a file input field.
 */
sablono.core.file_field16732 = (function sablono$core$file_field16732(var_args){
var args16733 = [];
var len__5726__auto___16800 = arguments.length;
var i__5727__auto___16801 = (0);
while(true){
if((i__5727__auto___16801 < len__5726__auto___16800)){
args16733.push((arguments[i__5727__auto___16801]));

var G__16802 = (i__5727__auto___16801 + (1));
i__5727__auto___16801 = G__16802;
continue;
} else {
}
break;
}

var G__16735 = args16733.length;
switch (G__16735) {
case 1:
return sablono.core.file_field16732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16733.length)].join('')));

}
});

sablono.core.file_field16732.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.file_field16732.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.file_field16732.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.file_field16732.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16732);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16736 = (function sablono$core$hidden_field16736(var_args){
var args16737 = [];
var len__5726__auto___16804 = arguments.length;
var i__5727__auto___16805 = (0);
while(true){
if((i__5727__auto___16805 < len__5726__auto___16804)){
args16737.push((arguments[i__5727__auto___16805]));

var G__16806 = (i__5727__auto___16805 + (1));
i__5727__auto___16805 = G__16806;
continue;
} else {
}
break;
}

var G__16739 = args16737.length;
switch (G__16739) {
case 1:
return sablono.core.hidden_field16736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16737.length)].join('')));

}
});

sablono.core.hidden_field16736.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.hidden_field16736.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.hidden_field16736.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.hidden_field16736.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16736);

/**
 * Creates a month input field.
 */
sablono.core.month_field16740 = (function sablono$core$month_field16740(var_args){
var args16741 = [];
var len__5726__auto___16808 = arguments.length;
var i__5727__auto___16809 = (0);
while(true){
if((i__5727__auto___16809 < len__5726__auto___16808)){
args16741.push((arguments[i__5727__auto___16809]));

var G__16810 = (i__5727__auto___16809 + (1));
i__5727__auto___16809 = G__16810;
continue;
} else {
}
break;
}

var G__16743 = args16741.length;
switch (G__16743) {
case 1:
return sablono.core.month_field16740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16741.length)].join('')));

}
});

sablono.core.month_field16740.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.month_field16740.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.month_field16740.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.month_field16740.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16740);

/**
 * Creates a number input field.
 */
sablono.core.number_field16744 = (function sablono$core$number_field16744(var_args){
var args16745 = [];
var len__5726__auto___16812 = arguments.length;
var i__5727__auto___16813 = (0);
while(true){
if((i__5727__auto___16813 < len__5726__auto___16812)){
args16745.push((arguments[i__5727__auto___16813]));

var G__16814 = (i__5727__auto___16813 + (1));
i__5727__auto___16813 = G__16814;
continue;
} else {
}
break;
}

var G__16747 = args16745.length;
switch (G__16747) {
case 1:
return sablono.core.number_field16744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16745.length)].join('')));

}
});

sablono.core.number_field16744.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.number_field16744.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.number_field16744.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.number_field16744.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16744);

/**
 * Creates a password input field.
 */
sablono.core.password_field16748 = (function sablono$core$password_field16748(var_args){
var args16749 = [];
var len__5726__auto___16816 = arguments.length;
var i__5727__auto___16817 = (0);
while(true){
if((i__5727__auto___16817 < len__5726__auto___16816)){
args16749.push((arguments[i__5727__auto___16817]));

var G__16818 = (i__5727__auto___16817 + (1));
i__5727__auto___16817 = G__16818;
continue;
} else {
}
break;
}

var G__16751 = args16749.length;
switch (G__16751) {
case 1:
return sablono.core.password_field16748.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16748.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16749.length)].join('')));

}
});

sablono.core.password_field16748.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.password_field16748.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.password_field16748.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.password_field16748.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16748);

/**
 * Creates a range input field.
 */
sablono.core.range_field16752 = (function sablono$core$range_field16752(var_args){
var args16753 = [];
var len__5726__auto___16820 = arguments.length;
var i__5727__auto___16821 = (0);
while(true){
if((i__5727__auto___16821 < len__5726__auto___16820)){
args16753.push((arguments[i__5727__auto___16821]));

var G__16822 = (i__5727__auto___16821 + (1));
i__5727__auto___16821 = G__16822;
continue;
} else {
}
break;
}

var G__16755 = args16753.length;
switch (G__16755) {
case 1:
return sablono.core.range_field16752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16753.length)].join('')));

}
});

sablono.core.range_field16752.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.range_field16752.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.range_field16752.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.range_field16752.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16752);

/**
 * Creates a search input field.
 */
sablono.core.search_field16756 = (function sablono$core$search_field16756(var_args){
var args16757 = [];
var len__5726__auto___16824 = arguments.length;
var i__5727__auto___16825 = (0);
while(true){
if((i__5727__auto___16825 < len__5726__auto___16824)){
args16757.push((arguments[i__5727__auto___16825]));

var G__16826 = (i__5727__auto___16825 + (1));
i__5727__auto___16825 = G__16826;
continue;
} else {
}
break;
}

var G__16759 = args16757.length;
switch (G__16759) {
case 1:
return sablono.core.search_field16756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16757.length)].join('')));

}
});

sablono.core.search_field16756.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.search_field16756.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.search_field16756.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.search_field16756.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16756);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16760 = (function sablono$core$tel_field16760(var_args){
var args16761 = [];
var len__5726__auto___16828 = arguments.length;
var i__5727__auto___16829 = (0);
while(true){
if((i__5727__auto___16829 < len__5726__auto___16828)){
args16761.push((arguments[i__5727__auto___16829]));

var G__16830 = (i__5727__auto___16829 + (1));
i__5727__auto___16829 = G__16830;
continue;
} else {
}
break;
}

var G__16763 = args16761.length;
switch (G__16763) {
case 1:
return sablono.core.tel_field16760.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16760.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16761.length)].join('')));

}
});

sablono.core.tel_field16760.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.tel_field16760.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.tel_field16760.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.tel_field16760.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16760);

/**
 * Creates a text input field.
 */
sablono.core.text_field16764 = (function sablono$core$text_field16764(var_args){
var args16765 = [];
var len__5726__auto___16832 = arguments.length;
var i__5727__auto___16833 = (0);
while(true){
if((i__5727__auto___16833 < len__5726__auto___16832)){
args16765.push((arguments[i__5727__auto___16833]));

var G__16834 = (i__5727__auto___16833 + (1));
i__5727__auto___16833 = G__16834;
continue;
} else {
}
break;
}

var G__16767 = args16765.length;
switch (G__16767) {
case 1:
return sablono.core.text_field16764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16765.length)].join('')));

}
});

sablono.core.text_field16764.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.text_field16764.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.text_field16764.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.text_field16764.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16764);

/**
 * Creates a time input field.
 */
sablono.core.time_field16768 = (function sablono$core$time_field16768(var_args){
var args16769 = [];
var len__5726__auto___16836 = arguments.length;
var i__5727__auto___16837 = (0);
while(true){
if((i__5727__auto___16837 < len__5726__auto___16836)){
args16769.push((arguments[i__5727__auto___16837]));

var G__16838 = (i__5727__auto___16837 + (1));
i__5727__auto___16837 = G__16838;
continue;
} else {
}
break;
}

var G__16771 = args16769.length;
switch (G__16771) {
case 1:
return sablono.core.time_field16768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16769.length)].join('')));

}
});

sablono.core.time_field16768.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.time_field16768.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.time_field16768.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.time_field16768.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16768);

/**
 * Creates a url input field.
 */
sablono.core.url_field16772 = (function sablono$core$url_field16772(var_args){
var args16773 = [];
var len__5726__auto___16840 = arguments.length;
var i__5727__auto___16841 = (0);
while(true){
if((i__5727__auto___16841 < len__5726__auto___16840)){
args16773.push((arguments[i__5727__auto___16841]));

var G__16842 = (i__5727__auto___16841 + (1));
i__5727__auto___16841 = G__16842;
continue;
} else {
}
break;
}

var G__16775 = args16773.length;
switch (G__16775) {
case 1:
return sablono.core.url_field16772.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16773.length)].join('')));

}
});

sablono.core.url_field16772.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.url_field16772.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.url_field16772.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.url_field16772.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16772);

/**
 * Creates a week input field.
 */
sablono.core.week_field16776 = (function sablono$core$week_field16776(var_args){
var args16777 = [];
var len__5726__auto___16844 = arguments.length;
var i__5727__auto___16845 = (0);
while(true){
if((i__5727__auto___16845 < len__5726__auto___16844)){
args16777.push((arguments[i__5727__auto___16845]));

var G__16846 = (i__5727__auto___16845 + (1));
i__5727__auto___16845 = G__16846;
continue;
} else {
}
break;
}

var G__16779 = args16777.length;
switch (G__16779) {
case 1:
return sablono.core.week_field16776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16777.length)].join('')));

}
});

sablono.core.week_field16776.cljs$core$IFn$_invoke$arity$1 = (function (name__16611__auto__){
return sablono.core.week_field16776.cljs$core$IFn$_invoke$arity$2(name__16611__auto__,null);
});

sablono.core.week_field16776.cljs$core$IFn$_invoke$arity$2 = (function (name__16611__auto__,value__16612__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__16611__auto__,value__16612__auto__);
});

sablono.core.week_field16776.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16776);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16848 = (function sablono$core$check_box16848(var_args){
var args16849 = [];
var len__5726__auto___16852 = arguments.length;
var i__5727__auto___16853 = (0);
while(true){
if((i__5727__auto___16853 < len__5726__auto___16852)){
args16849.push((arguments[i__5727__auto___16853]));

var G__16854 = (i__5727__auto___16853 + (1));
i__5727__auto___16853 = G__16854;
continue;
} else {
}
break;
}

var G__16851 = args16849.length;
switch (G__16851) {
case 1:
return sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16849.length)].join('')));

}
});

sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box16848.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box16848.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16848);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16856 = (function sablono$core$radio_button16856(var_args){
var args16857 = [];
var len__5726__auto___16860 = arguments.length;
var i__5727__auto___16861 = (0);
while(true){
if((i__5727__auto___16861 < len__5726__auto___16860)){
args16857.push((arguments[i__5727__auto___16861]));

var G__16862 = (i__5727__auto___16861 + (1));
i__5727__auto___16861 = G__16862;
continue;
} else {
}
break;
}

var G__16859 = args16857.length;
switch (G__16859) {
case 1:
return sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16857.length)].join('')));

}
});

sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button16856.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button16856.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16856);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__16865 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__16865);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16866 = (function sablono$core$select_options16866(coll){
var iter__5440__auto__ = (function sablono$core$select_options16866_$_iter__16877(s__16878){
return (new cljs.core.LazySeq(null,(function (){
var s__16878__$1 = s__16878;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16878__$1);
if(temp__4425__auto__){
var s__16878__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16878__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16878__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16880 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16879 = (0);
while(true){
if((i__16879 < size__5439__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16879);
cljs.core.chunk_append(b__16880,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16885 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options16866(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__16887 = (i__16879 + (1));
i__16879 = G__16887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16880),sablono$core$select_options16866_$_iter__16877(cljs.core.chunk_rest(s__16878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16880),null);
}
} else {
var x = cljs.core.first(s__16878__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16886 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16886,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16886,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16886,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options16866(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options16866_$_iter__16877(cljs.core.rest(s__16878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16866);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16888 = (function sablono$core$drop_down16888(var_args){
var args16889 = [];
var len__5726__auto___16892 = arguments.length;
var i__5727__auto___16893 = (0);
while(true){
if((i__5727__auto___16893 < len__5726__auto___16892)){
args16889.push((arguments[i__5727__auto___16893]));

var G__16894 = (i__5727__auto___16893 + (1));
i__5727__auto___16893 = G__16894;
continue;
} else {
}
break;
}

var G__16891 = args16889.length;
switch (G__16891) {
case 2:
return sablono.core.drop_down16888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16888.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16889.length)].join('')));

}
});

sablono.core.drop_down16888.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16888.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down16888.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down16888.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16888);
/**
 * Creates a text area element.
 */
sablono.core.text_area16896 = (function sablono$core$text_area16896(var_args){
var args16897 = [];
var len__5726__auto___16900 = arguments.length;
var i__5727__auto___16901 = (0);
while(true){
if((i__5727__auto___16901 < len__5726__auto___16900)){
args16897.push((arguments[i__5727__auto___16901]));

var G__16902 = (i__5727__auto___16901 + (1));
i__5727__auto___16901 = G__16902;
continue;
} else {
}
break;
}

var G__16899 = args16897.length;
switch (G__16899) {
case 1:
return sablono.core.text_area16896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16897.length)].join('')));

}
});

sablono.core.text_area16896.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area16896.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area16896.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area16896.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16896);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16904 = (function sablono$core$label16904(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16904);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16905 = (function sablono$core$submit_button16905(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16905);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16906 = (function sablono$core$reset_button16906(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16906);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16907 = (function sablono$core$form_to16907(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16915 = arguments.length;
var i__5727__auto___16916 = (0);
while(true){
if((i__5727__auto___16916 < len__5726__auto___16915)){
args__5733__auto__.push((arguments[i__5727__auto___16916]));

var G__16917 = (i__5727__auto___16916 + (1));
i__5727__auto___16916 = G__16917;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.form_to16907.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.form_to16907.cljs$core$IFn$_invoke$arity$variadic = (function (p__16910,body){
var vec__16911 = p__16910;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16911,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16911,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__16912 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__16913 = "_method";
var G__16914 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__16912,G__16913,G__16914) : sablono.core.hidden_field.call(null,G__16912,G__16913,G__16914));
})()], null)),body));
});

sablono.core.form_to16907.cljs$lang$maxFixedArity = (1);

sablono.core.form_to16907.cljs$lang$applyTo = (function (seq16908){
var G__16909 = cljs.core.first(seq16908);
var seq16908__$1 = cljs.core.next(seq16908);
return sablono.core.form_to16907.cljs$core$IFn$_invoke$arity$variadic(G__16909,seq16908__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16907);
