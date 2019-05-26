const arr = ['b', 'c', 'd'];

// 배열 인덱스 추가제거 (원본배열 수정)
console.log(arr.push('e')); // b c d  e
console.log(arr.pop()); // b c d 
console.log(arr.unshift('a')); // a b c d 
console.log(arr.shift()); // b c d
console.log(arr == arr.concat[4, 5, 6]); // false 

// 배열 일부 요소 가져오기 
console.log(arr.slice(-2)); // c d 
console.log(arr.slice(2)); // d 
console.log(arr.slice(1, 2)); // c
console.log(arr);

// 배열 수정하기 (원본배열 수정)
console.log(arr.splice(2, 0, 'f'));
console.log(arr);
console.log(arr.splice(1, 1, 2, 3, 4));
console.log(arr);

// 배열 인덱스 복사 (원본 배열 수정)
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.copyWithin(1, 3));

// 배열 값 채우기 
const arr2 = new Array(5).fill(1);
console.log(arr2);

// 배열 정렬과 역순 정렬
arr1.reverse();
console.log(arr1);
arr1.sort(); // 순서를 정렬 
console.log(arr1);

// 배열 검색 
if (arr1.indexOf(2) === -1) {
    console.log('indexof error');
} else {
    console.log(arr1.indexOf(2));
}

const arr3 = [{ id: 1 }, { name: 'Juile' }];
console.log(arr3.find(o => o.id === 5));

// 조건에 맞는 배열 요소 확인 
const arr4 = [1, 3, 5];
console.log(arr4.some(x => x % 2 === 0));
console.log(arr4.every(x => x % 2 === 1));
