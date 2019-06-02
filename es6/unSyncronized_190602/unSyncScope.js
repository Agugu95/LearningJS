// 비동기 실행에 클로저가 영향을 미치는 부분 
// 함수를 호출 시 클로저 생성 
function countdown() {
    // let i;
    console.log('CountDown:');
    // for (i = 5; i >= 0; i--) { // don't make function within the loop
    //     setTimeout(() => {
    //         console.log(i === 0 ? 'go' : i);
    //     }, (5 - i) * 1000);
    // }
    for (let i = 5; i >= 0; i--) { // 블럭 스코프 변수로 선언 
        setTimeout(() => {
            console.log(i === 0 ? 'go' : i); // 콜백은 자신을 선언한 스코프에만 접근 가능 
        }, (5 - i) * 1000);
    }
}
countdown();