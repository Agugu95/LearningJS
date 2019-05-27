/* 배열 자체를 변형하는 reduce 
reduce는 map과 filter의 기능을 대신가능 
*/

// 배열.reduce((누적값, 현재값, 현재 인덱스,현재 요소) => { return 결과 }, 초기값);
const arr = [1, 2, 3];
const reuslt = arr.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0); // 초기값 미설정시 0번 인덱스가 초기값
console.log(reuslt);

const resultRight = arr.reduceRight((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);
console.log(resultRight);

// map구현 push 사용 
const arrMap = [1, 2, 3];
const resultMap = arrMap.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
}, []);
console.log(resultMap);
console.log(arrMap);
// filter 구현 조건부 push 사용 
const resultFilter = arrMap.reduce((acc, cur) => {
    if (cur % 2 === 1) acc.push(cur);
    return acc;
}, []);
console.log(resultFilter);

// reduce를 이용한 비동기 프로그래밍 
const promiseFactory = time => new Promise((Resolve, Rejects) => {
    console.log(time);
    setTimeout(Resolve, time);
});
[1000, 2000, 3000, 4000].reduce((acc, cur) => acc.then(() => promiseFactory(cur)), Promise.resolve());

// 반복되는 모든 것에는 reduce를 사용할 수 있다 !!!!!! 
