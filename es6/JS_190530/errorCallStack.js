// 함수가 호출 되는 순서를 call stack이라고 함 
// 에러도 callstack에서 캐치 가능 

function a() {
    console.log('a: calling b');
    b();
    console.log('a: done');
}

function b() {
    console.log('b: calling c');
    c();
    console.log('b: done');
}

function c() {
    console.log('c: throwing error');
    throw new Error('c is error');
    console.log('c: done');
}

function d() {
    console.log('d: calling c');
    c();
    console.log('d: done');
}

try {
    a();
} catch (err) {
    console.log(err.stack);
}

try {
    d();
} catch (err) {
    console.log(err.stack);
}