// 프로미스는 프로미스 호출 시 프로미스 인스턴스를 반환 
// 성공과 실패만이 존재, 객체를 던지기에 어디서든  처리 가능 

// function countDown(seconds) {
//     return new Promise((resolve, rejects) => {
//         for (let i = seconds; i >= 0; i--) {
//             setTimeout(() => {
//                 i > 0 ? console.log(`${i}...`) : resolve('go');
//             }, (seconds - i) * 1000);
//         }
//     });
// } 실패가 없는 프로미스 

function countDown(seconds) {
    return new Promise((resolve, reject) => {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(() => {
                if (i === 13) return reject(new Error('OMG'));
                i > 0 ? console.log(`${i}...`) : resolve(console.log('go'));
            }, (seconds - i) * 1000);
        }
    });
}
countDown(15);