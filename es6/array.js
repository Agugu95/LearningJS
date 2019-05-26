// 배열 리터럴
const arr1 = [1, 2, 3]; // 숫자 구성
const arr2 = ['one', 2, 'three']; // 수와 문자열
const arr3 = [[1, 2, 3], ['one', 2, 'three']]; // 두개의 배열로 구성 
const arr4 = [
    { name: 'Fred', type: 'object', luck: [5, 7, 3] },
    [
        { name: 'susa', type: 'object' },
        { name: 'pizza', type: 'object' },
    ],
    1,
    function () {
        return 'array can do anything';
    },
];

// 배열 요소에 접근 
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

// 배열 길이
console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

// 배열 길이 늘리기 
console.log(arr1[4] = 5);
console.log(arr1);
console.log(arr1.length);

// 배열의 접근만으로는 길이가 늘지 않음
console.log(arr2[10]);
console.log(arr2.length);