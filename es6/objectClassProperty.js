/* ES6에서는 클래스의 프로퍼티는 항상 인스턴스에 정의 되어야 한다.
하지만 강제 장치가 없으므로 확인을 위해 
hasOwnProperty()를 사용해서 확인 
객체.hasOwnProperty(프로퍼티)는 
객체 내에 프로퍼티가 존재하는지 검사하여 
있다면 true 없거나 체인에만 있다면 false */

class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for (const p in obj) {
    console.log(`${p}: ${obj[p]}` +
        (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
} // 전부 true 인스턴스에 정의 됨
