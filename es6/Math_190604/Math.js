// Digit after vertex 
// 자바스크립트의 모든 숫자 메소드 반환 형식은 문자열 

// 자릿수 반올림
const x = 19.51;
x.toFixed(3); // 19.510
x.toFixed(2); // 19.51
x.toFixed(1); // 19.5
x.toFixed(0); // 20

// 지수 표기 반올림 
console.log(x.toExponential(4)); // 9510e+1
console.log(x.toExponential(3)); // 951e+1
console.log(x.toExponential(2)); // 95e+1
console.log(x.toExponential(1)); // 0e+1
console.log(x.toExponential(0)); // 2e+1

// 단순 숫자표시 (고정 전체 자리수 반올림)
console.log(x.toPrecision(3));

// 진수 변환
console.log(x.toString(2));
console.log(x.toString(8));
console.log(x.toString(10));
console.log(x.toString(16));