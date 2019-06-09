// 자바스크립트의 객체는 유연하긴하지만, 어디서나 접근할 수 있기에 보호가 필요
// freezing, sealing, preventing extension을 설정 

// freezing 동결, 객체를 말 그대로 얼려버려 다른 동작(메소드) 불가 마치 상수같이 불변.
// strict 모드가 아니라면 에러는 뜨지 않지만, 역시 작동은 되지 않음.
const appInfo = { // 회사 정보에 대한 프로그램(변경이 없는) 정보를 객체에 저장한다고 할 시
    company: 'White Knight Sofware, Inc',
    version: '1, 3, 5',
    buildId: '0aa9332-ead34-4215a-r352v-24ad353ca21',
    copyright() {
        return `${new Date().getFullYear}, ${this.company}`;
    },
};
Object.freeze(appInfo);
console.log(`Object Frozen: ${Object.isFrozen(appInfo)}`); // 객체의 동결여부 확인 true

appInfo.newProp = 'test';
console.log(appInfo);

delete appInfo.company;

appInfo.company = 'tets';
console.log(appInfo);
// Object.defineProperty(appInfo, 'company', { enumerable: false });

// //////////////////////////////////////////////////////////////////
// sealing은 freeze에서 인스턴스의 사용과 메소드의 동작은 허용 
class Logger {
    constructor(name) {
        this.name = name;
        this.log = [];
    }

    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),

        });
    }
}

const log = new Logger('Captain\'s Log');
Object.seal(log);
console.log(`Object seaild: ${Object.isSealed(log)}`);

log.name = 'Captain\'s Boring Log';
log.add('Another boring day at sea');
console.log(log);

console.log(log.newProp = 'test' === true ? 'newProp success' : 'newProp fail');

log.name = 'test';

delete log.name;

// console.log(Object.defineProperty(log, 'log', { enumerable: false })); 아예 프로퍼티 접근 불가 
console.log(log);
