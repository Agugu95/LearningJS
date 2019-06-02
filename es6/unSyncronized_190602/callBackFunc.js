// callBack은 보통 익명 함수를 다른 함수에 넘기거나 프로퍼티로 사용 
console.log(`Before timeout:${new Date()}`);
setTimeout(() => { // 1번 콜백 호출 후 6초 간 정지 
    console.log(`After timeout ${new Date()}`);
}, 60 * 100);
console.log('I happen after setTimeout');
console.log('me too');

// setInterval 주기마다 실행 
const start = new Date();
let i = 0;
const intervalId = setInterval(() => {
    const now = new Date();
    if (now.getMinutes() !== start.getMinutes() || ++i > 10) { // 분이 넘어가거나, 10회째 종료
        return clearInterval(intervalId);
    }
    console.log(`${i}: ${now}`);
}, 5 * 1000);