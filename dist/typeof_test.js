"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// eslint-disable-next-line no-unused-expressions
console.log("typeof true".concat('\n'));
console.log("typeof Symbol()".concat('\n'));
console.log("typeof function(){}".concat('\n'));
var arr = [undefined, null, {}, 1, 'a']; // eslint-disable-next-line no-plusplus

for (var i = 0; i < 6; i++) {
  console.log(_typeof(arr[i]));
}