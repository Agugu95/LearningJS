"use strict";

// 객체 선언
var obj = {
  b: 2,
  c: 3,
  d: 4
}; // 해체 할당

var a = obj.a,
    b = obj.b,
    c = obj.c; // console.log(a, b, c, d);  d는 해체 할당에 선언조차 되지 않음 

console.log(a, b, c);