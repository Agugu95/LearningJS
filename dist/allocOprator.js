"use strict";

var a1;
var a2;
a1 = a2 = 9.8;
var nums = [3, 5, 15, 7, 5];
var n;
var i = 0; // eslint-disable-next-line no-cond-assign 

while ((n = nums[i]) < 10 && i++ < nums.length) {
  // eslint-disable-next-line no-console
  console.log("Number less than 10: ".concat(n));
}

console.log("Number greater than 10 found".concat(n));
console.log("".concat(nums.length - i - 1, " numbers remain"));