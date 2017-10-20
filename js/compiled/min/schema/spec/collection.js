// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker(e,params);
return ((function (parser,c){
return (function (res,x){
var G__20832 = res;
var G__20833 = (function (){var G__20834 = ((function (G__20832,parser,c){
return (function (t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_(t))?t:(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(t) : c.call(null,t))));
});})(G__20832,parser,c))
;
var G__20835 = x;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__20834,G__20835) : parser.call(null,G__20834,G__20835));
})();
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__20832,G__20833) : then.call(null,G__20832,G__20833));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some(schema.utils.error_QMARK_,l);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.collection.CollectionSpec = (function (pre,constructor,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor = constructor;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k20837,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__20839 = (((k20837 instanceof cljs.core.Keyword))?k20837.fqn:null);
switch (G__20839) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20837,else__5285__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor__$1 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?self__.constructor:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (constructor__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer(e,params,f);
});})(constructor__$1,this$__$1))
,((function (constructor__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor__$1,this$__$1))
,cljs.core.reverse(self__.elements));
return ((function (constructor__$1,t,this$__$1){
return (function (x){
var or__4668__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var res = (function (){var G__20840 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20840) : cljs.core.atom.call(null,G__20840));
})();
var remaining = (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(res,x) : t.call(null,res,x));
var res__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(res) : cljs.core.deref.call(null,res));
if(cljs.core.truth_((function (){var or__4668__auto____$1 = cljs.core.seq(remaining);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_(res__$1);
}
})())){
return schema.utils.error((self__.on_error.cljs$core$IFn$_invoke$arity$3 ? self__.on_error.cljs$core$IFn$_invoke$arity$3(x,res__$1,remaining) : self__.on_error.call(null,x,res__$1,remaining)));
} else {
return (constructor__$1.cljs$core$IFn$_invoke$arity$1 ? constructor__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : constructor__$1.call(null,res__$1));
}
}
});
;})(constructor__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20836){
var self__ = this;
var G__20836__$1 = this;
return (new cljs.core.RecordIter((0),G__20836__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$elements,null,cljs.core.cst$kw$constructor,null,cljs.core.cst$kw$on_DASH_error,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__20836){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__20841 = cljs.core.keyword_identical_QMARK_;
var expr__20842 = k__5290__auto__;
if(cljs.core.truth_((pred__20841.cljs$core$IFn$_invoke$arity$2 ? pred__20841.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__20842) : pred__20841.call(null,cljs.core.cst$kw$pre,expr__20842)))){
return (new schema.spec.collection.CollectionSpec(G__20836,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20841.cljs$core$IFn$_invoke$arity$2 ? pred__20841.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constructor,expr__20842) : pred__20841.call(null,cljs.core.cst$kw$constructor,expr__20842)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__20836,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20841.cljs$core$IFn$_invoke$arity$2 ? pred__20841.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$elements,expr__20842) : pred__20841.call(null,cljs.core.cst$kw$elements,expr__20842)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,G__20836,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20841.cljs$core$IFn$_invoke$arity$2 ? pred__20841.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_error,expr__20842) : pred__20841.call(null,cljs.core.cst$kw$on_DASH_error,expr__20842)))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,G__20836,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__20836),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__20836){
var self__ = this;
var this__5281__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,G__20836,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$constructor,cljs.core.cst$sym$elements,cljs.core.cst$sym$on_DASH_error], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__20838){
return (new schema.spec.collection.CollectionSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__20838),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(G__20838),cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__20838),cljs.core.cst$kw$on_DASH_error.cljs$core$IFn$_invoke$arity$1(G__20838),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20838,cljs.core.cst$kw$pre,cljs.core.array_seq([cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], 0)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec(pre,constructor,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$cardinality,cljs.core.cst$kw$zero_DASH_or_DASH_more,cljs.core.cst$kw$parser,(function (item_fn,coll){
var seq__20849_20853 = cljs.core.seq(coll);
var chunk__20850_20854 = null;
var count__20851_20855 = (0);
var i__20852_20856 = (0);
while(true){
if((i__20852_20856 < count__20851_20855)){
var x_20857 = chunk__20850_20854.cljs$core$IIndexed$_nth$arity$2(null,i__20852_20856);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(x_20857) : item_fn.call(null,x_20857));

var G__20858 = seq__20849_20853;
var G__20859 = chunk__20850_20854;
var G__20860 = count__20851_20855;
var G__20861 = (i__20852_20856 + (1));
seq__20849_20853 = G__20858;
chunk__20850_20854 = G__20859;
count__20851_20855 = G__20860;
i__20852_20856 = G__20861;
continue;
} else {
var temp__4425__auto___20862 = cljs.core.seq(seq__20849_20853);
if(temp__4425__auto___20862){
var seq__20849_20863__$1 = temp__4425__auto___20862;
if(cljs.core.chunked_seq_QMARK_(seq__20849_20863__$1)){
var c__5471__auto___20864 = cljs.core.chunk_first(seq__20849_20863__$1);
var G__20865 = cljs.core.chunk_rest(seq__20849_20863__$1);
var G__20866 = c__5471__auto___20864;
var G__20867 = cljs.core.count(c__5471__auto___20864);
var G__20868 = (0);
seq__20849_20853 = G__20865;
chunk__20850_20854 = G__20866;
count__20851_20855 = G__20867;
i__20852_20856 = G__20868;
continue;
} else {
var x_20869 = cljs.core.first(seq__20849_20863__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(x_20869) : item_fn.call(null,x_20869));

var G__20870 = cljs.core.next(seq__20849_20863__$1);
var G__20871 = null;
var G__20872 = (0);
var G__20873 = (0);
seq__20849_20853 = G__20870;
chunk__20850_20854 = G__20871;
count__20851_20855 = G__20872;
i__20852_20856 = G__20873;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$cardinality,(cljs.core.truth_(required_QMARK_)?cljs.core.cst$kw$exactly_DASH_one:cljs.core.cst$kw$at_DASH_most_DASH_one),cljs.core.cst$kw$parser,parser], null);
});
