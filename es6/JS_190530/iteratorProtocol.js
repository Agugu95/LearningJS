// 이터레이터 프로토콜은 모든 객체를 iterable 객체로 변환 
class Log {
    constructor() {
        this.message = [];
    }

    add(message) {
        this.message.push({ message, timestamp: Date.now() });
    }

    [Symbol.iterator]() {
        return this.message.values();
    }
}

const log = new Log();
log.add('first day at see');
log.add('spotted whale');

// 이터레이터를 이용한 순회 
for (const entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}

// 이터레이터를 이용한 무한한 데이터 순환 
class FibonacciSequnce {
    [Symbol.iterator]() {
        let a = 0;
        let b = 1;
        return {
            next() {
                const rval = { value: b, done: false };
                b += a;
                a = rval.value;
                return rval;
            },
        };
    }
}

const fib = new FibonacciSequnce();
let i = 0;
for (const n of fib) {
    console.log(n);
    if (++i > 19) break;
}
