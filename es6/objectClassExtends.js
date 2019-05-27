// 운송수단 클래스 
class Vehicle {
    constructor() {
        this.passengers = [];
        console.log('Vehicle created');
    }

    addPassengers(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log('Car created');
    }

    // eslint-disable-next-line class-methods-use-this
    deployAirbags() {
        console.log('에어백 터짐');
    }
}

const v = new Vehicle();
v.addPassengers('ryu');
v.addPassengers('won');
console.log(v.passengers);
const c = new Car();
c.addPassengers('hyuk');
c.addPassengers('handsome');
console.log(c.passengers);
// console.log(v.deployAirbags()); // v의 클래스에 존재하지 않는 함수 
console.log(c.deployAirbags());
