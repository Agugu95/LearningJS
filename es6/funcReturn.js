function getGreething() {
    // eslint-disable-next-line no-useless-return
    return; // return을 명시해주지 않으면 undefined 반환 
}

console.log(getGreething()); // 함수 호출 undefined
console.log(getGreething); // 함수 참조 [Function: getGreeting]
// 자바스크립트에선 함수도 객체로 취급 

const v = getGreething;
console.log(v()); // 함수도 객체기에 변수에 할당 가능, 할당 된 변수 명으로 호출 

const o = {}; // 객체 프로퍼티 선언 
o.f = getGreething; // 객체 프로퍼티 f에 getGreething 함수 추가 
console.log(o.f()); // 객체의 프로퍼티 명으로 호출 가능 

const arr = [1, 2, 3]; // 배열 선언 
arr[0] = getGreething; // 배열 0번 인덱스에 함수 할당 
console.log(arr[0]()); // 배열인덱스() 로 함수 호출 가능 