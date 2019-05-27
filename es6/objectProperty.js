const SYM = Symbol();
const obj = {
    a: 1, b: 2, c: 3, SYM: 4,
};

// for...in문을 통한 프로퍼티 출력 
for (const prop in obj) {
    if (!obj.hasOwnProperty(prop)) continue; console.log(`${prop}: ${obj[prop]}`);
}

// Object.keys를 이용한 프로퍼티 출력
Object.keys(obj).forEach(prop => console.log(`${prop}: ${obj[prop]}`));