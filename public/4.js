(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2+Mu":function(t,e,r){"use strict";r.r(e);var n=r("ma/q");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={props:{attrs:Object},data:function(){return{antv:null}},mounted:function(){this.antv=new n.a(this.attrs.canvasId,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({data:this.attrs.data},this.attrs.config)),this.antv.render()},updated:function(){this.antv.changeData(this.attrs.data)},destroyed:function(){}},o=r("KHd+"),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.attrs.canvasId}})}),[],!1,null,null,null);e.default=s.exports}}]);