const obj = { foo: 'bar' };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

/*
value: 값
writalbe: 프로퍼티 값의 변경 가능여부 (true/false)
enumearable: 프로퍼티 나열 시 해당 프로퍼티를 포함 여부 (true/false)
configurable:프로퍼티를 객체에서 삭제하거나 수정 여부 (true/false)
*/