const obj = { foo: 'bar' };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
Object.defineProperty(obj, 'foo', { writable: false });
obj.foo = 'abc';
console.log(obj.foo);
Object.defineProperty(obj, 'color', {
    get() { return this._color; },
    set(value) { this._color = value; },
});
Object.defineProperty(obj, 'name', {
    value: 'Cyntina',
    enumerable: true, // 프로퍼티의 나열 (보이게하기) 설정, false시 보이지 않음
});
Object.defineProperty(obj, 'greet', {
    value() { return `Hello, my name is ${this.name}`; },
});

console.log(obj.name);
console.log(obj.greet());

/*
value: 값
writalbe: 프로퍼티 값의 변경 가능여부 (true/false)
enumearable: 프로퍼티 나열 시 해당 프로퍼티를 포함 여부 (true/false)
configurable:프로퍼티를 객체에서 삭제하거나 수정 여부 (true/false)
*/