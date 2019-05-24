function f(obj) {
    obj.message = `f 함수 내에서 수정 함 (이전 값: ${obj.message})`; // 단순한 값 수정 
}
const obj = { message: '초기 값' };

console.log(`f 호출 전: obj.message= ${obj.message}`); // 초기 값
f(obj);
console.log(`f 호출 후: obj.message= ${obj.message}`); // 함수 내에서 수정 함


