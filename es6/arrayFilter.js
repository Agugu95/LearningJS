/* filter() 테스트 함수를 통과하는 모든 배열 요소를 모아서 새로운 배열로 반환한다.

*/

// 10보다 작은 수 반환 
const arr1 = [10, 321, 5, 3, 123, 532];
function calculate(value) {
    return value >= 10;
}
const smallerTen = arr1.filter(calculate);
console.log(smallerTen);

// JSON에서 항목 거르기 
// 0이아닌 숫자 id만 거르기  
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' },
];

let invalidEntries = 0;

function isNumber(obj) {
    // eslint-disable-next-line no-restricted-globals
    return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries += 1;
    return false;
}

const arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5var arr = [
