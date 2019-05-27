function hello(name) {
    const _name = name;
    return function () {
        console.log(`Hello ${_name}`);
    };
}

const hello1 = hello('');
const hello2 = hello('closure');
const hello3 = hello('memories scope');

hello1('really'); // 객체의 호출
hello2();
hello3();