// 배열 메소드인 Map 과 filter 

// MAP 
// 배열.map((요소, 인덱스, 배열) => {return 요소});
// 반복무을 돌며 배열 안의 요소를 1:1 매핑

const oneTwoTree = [1, 2, 3];
const result = oneTwoTree.map((v) => {
    console.log(v);
    return v;
}); // 1, 2, 3 출력 
console.log(result); // [1,2,3]
console.log(oneTwoTree === result); // false

const resultAdd1 = oneTwoTree.map(v => v + 1); // 매핑한 요소에 + 1 
console.log(resultAdd1); // [2, 3, 4]
console.log(oneTwoTree === resultAdd1); // false

const resultModi = oneTwoTree.map((v) => {
    if (v % 2) {
        return '홀수';
    }
    return '짝수';
});
console.log(resultModi); // [홀수, 짝수, 홀수]
console.log(oneTwoTree); // [1, 2, 3]

// map은 배열의 요소를 1:1로 매핑할 수 있다
// 기존의 객체(배열)을 수정하지 않는다.
// 새로운 배열을 생성한다.
// 반환 값은 함수 안에 적은 무엇이든 될 수 있다.