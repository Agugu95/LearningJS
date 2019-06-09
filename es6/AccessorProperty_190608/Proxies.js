// ES6에서 추가 된 메타프로그래밍(자기 자신을 수정)하는 기능 
// 객체 프록시 
const cofficients = {
    a: 1,
    b: 2,
    c: 5,
};

const worseCofficients = {
    a: 1,
    c: 5,
};

function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2);
}

console.log(evaluate(5, cofficients));
console.log(evaluate(5, worseCofficients)); // Math함수의 실패를 통한 NaN반환 

// 프록시를 통한 작업 가로채기 

const betterCoefficients = new Proxy(cofficients, {
    get(target, key) { // Proxy할 객체, 가로챌 동작을 가리키는 핸들러 (get 함수)
        return target[key] || 0; // 객체 내에 해당 키가 있는지 확인 후 없다면  0반환 
    },
});

console.log(betterCoefficients.a);
console.log(betterCoefficients.b);
console.log(betterCoefficients.c);
console.log(betterCoefficients.d);
console.log(betterCoefficients.anything);

// set 핸들러를 통한 할당, 호출 가로채기 
const noAccessProperty = new Proxy(cofficients, {
    set(target, key, value) {
        if (key === 'c') {
            if (target.allowDangerousOptions === true) {
                return target.c = value;
            }
            return console.log('Too dangerous');
        }
        target[key] = value;
    },
});

console.log(noAccessProperty.a = 100);
console.log(noAccessProperty.c = 150);
noAccessProperty.allowDangerousOptions = true;
console.log(noAccessProperty.c = 150);