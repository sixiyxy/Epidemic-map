(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92cf3bf4"],{"0283":function(i,e,t){"use strict";t("d6be")},d6be:function(i,e,t){},e5e0:function(i,e,t){"use strict";t.r(e);var n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("div",{staticClass:"harea"},[t("p",[i._v("高风险地区")]),t("ul",i._l(i.riskArea.high,(function(e){return t("li",{key:e.id},[i._v(i._s(e))])})),0)]),t("div",{staticClass:"marea"},[t("p",[i._v("中风险地区")]),t("ul",i._l(i.riskArea.mid,(function(e){return t("li",{key:e.id,staticClass:"harea"},[i._v(i._s(e))])})),0)])])},a=[],s={name:"Mharea",data:function(){return{riskArea:{},count:0}},methods:{load:function(){this.count+=2}},created:function(){var i=this;this.$api.getDataInfo({key:"0b2292c01bf100466bc2336564f17674"}).then((function(e){i.riskArea={high:e.newslist[0].riskarea.high,mid:e.newslist[0].riskarea.mid},console.log(i.riskArea)}))}},r=s,c=(t("0283"),t("2877")),u=Object(c["a"])(r,n,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-92cf3bf4.b73e5d63.js.map