// ES6의 클래스 생성
// _ 를 붙여 가짜 접근 제한 
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    shift(gear) {
        if (this._userGears.indexOf(gear) < 0) { throw new Error(`Invaild gear: ${gear}`); }
        this._userGear = gear;
    }
}

const car1 = new Car('Tesla', 'Model S');
const car2 = new Car('Mazda', '3i');
car1.shift('D');
car2.shift('R');

console.log(car1._userGear);
console.log(car2._userGear);

// 클래스의 객체 인스턴스인지 확인
console.log(car1 instanceof Car); // ture
console.log(car1 instanceof Array); // false

// 동적 디스패치 
const car3 = new Car();
const car4 = new Car();
console.log(car3.shift === Car.prototype.shift); // True
car3.shift('D');
console.log(car3._userGear); // D
console.log(car3.shift === car4.shift); // ture 

