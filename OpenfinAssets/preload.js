(()=>{var e={142:e=>{self,e.exports=(()=>{"use strict";var e={607:function(e,n,i){var r=this&&this.__createBinding||(Object.create?function(e,n,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[i]}})}:function(e,n,i,r){void 0===r&&(r=i),e[r]=n[i]}),t=this&&this.__exportStar||function(e,n){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(n,i)||r(n,e,i)};Object.defineProperty(n,"__esModule",{value:!0}),t(i(527),n)},527:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.initFinApiInLwc=n.prepareFinApiInPreload=void 0,n.prepareFinApiInPreload=()=>{void 0!==window.fin&&(CustomEvent.prototype.fin=window.fin)},n.initFinApiInLwc=()=>{const e=new CustomEvent("").fin;if(void 0===e)throw new Error("fin API is undefined. Ensure 'prepareFinApiInPreload' is run in a preload script before attempting to call 'initFinApiInLwc'.");void 0===window.fin?window.fin=e:Object.assign(window.fin,e)}}},n={};return function i(r){var t=n[r];if(void 0!==t)return t.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,i),o.exports}(607)})()}},n={};function i(r){var t=n[r];if(void 0!==t)return t.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,i),o.exports}(()=>{"use strict";const e=i(142);window===window.top&&e.prepareFinApiInPreload()})()})();