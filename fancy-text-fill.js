!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fancyTextFill=e():t.fancyTextFill=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(t){return l.measureText(t).width/10}function o(t){var e=window.getComputedStyle(t);return{font:e.fontFamily}}function i(t,e){void 0===e&&(e={});var n=e.minFontSize,i=void 0===n?4:n,a=e.maxFontSize,f=void 0===a?40:a,c=e.maxWidth,p=void 0===c?null:c,d=e.maxHeight,s=void 0===d?null:d,m=e.multiline,v=void 0===m||m;p=p||t.parentElement.clientWidth,s=s||t.parentElement.clientHeight,f=Number(f)>0?f:s;var x=t.textContent||"",y=o(t).font;l.font="10px "+y;var h=v?x.split(/(:? )/):[x],b=h.map(r),g=u(b,p,s,f,i);t.style.fontSize=g+"px"}function u(t,e,n,r,o){var i=o,u=Math.min.apply(Math,[n,r].concat(t.map(function(t){return e/t})));if(i>=u||a(u,t,e,n))return Math.max(i,u);for(;i<u&&u-i>.3;){var f=(i+u)/2;a(f,t,e,n)?i=f:u=f}return i}function a(t,e,n,r){var o=f(t,e,n);return o>0&&o+5<r}function f(t,e,n){for(var r=0,o=1,i=0,u=e;i<u.length;i++){var a=u[i],f=a*t;if(f>=n-5)return-1;r+f>=n-5&&(o++,r=0),r+=f}var c=t*o+(t>10?5:8)*(o-1);return c}Object.defineProperty(e,"__esModule",{value:!0}),e.fillParentContainer=i;var c=document.createElement("canvas"),l=c.getContext("2d");l.font="10px Arial,sans-serif"},,,function(t,e,n){t.exports=n(0)}])});