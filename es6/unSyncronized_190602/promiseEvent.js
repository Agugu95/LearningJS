// 이벤트를 이용한 프로미스 사용 
const { EventEmitter } = require('events');

class CountDown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = superstitious;
    }

    go() {
        const countDown = this; // this 할당 
        return new Promise((resolve, reject) => { // 콜백 안에서 this값을 알아야함
            for (let i = countDown.seconds; i >= 0; i--) {
                setTimeout(() => {
                    if (countDown.superstitious && i === 13) {
                        return reject(new Error('OMG'));
                    }
                    countDown.emit('tick', i); // i값에 따라 tick 발생 
                    if (i === 0) resolve();
                }, (countDown.seconds - i) * 1000);
            }
        });
    }
}

// 프로미스를 13 때 파기했지만 카운트는 계속 됨 
const c = new CountDown(15);

c.on('tick', (i) => { // tick 주시 i의 값 받음, 0이 아니면 출력
    if (i > 0) console.log(`${i}...`);
});
c.go()
    .then(() => {
        console.log('go');
    })
    .catch((err) => {
        console.error(err.message);
    });