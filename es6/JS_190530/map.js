// Map은 키:값을 하기 위하여 객체를 사용해야하는 불편을 해소 
const o1 = { name: 'ryu' };
const o2 = { name: 'won' };
const o3 = { name: 'hyuk' };

const userTable = new Map();

// Map의 set키워드를 사용하여 정보를 할당 
userTable.set(o1, 'any');
userTable // 체인으로 연결 가능 
    .set(o2, 'vaule')
    .set(o3, 'insert');

console.log(userTable.get(o2)); // value


// 생성자에 배열의 배열을 넘기는 형태로 사용 가능
const u1 = { name: '' };
const u2 = {};
const u3 = {};
const userTable2 = new Map([
    [u1, 'user'],
    [u2, 'admin'],
    [u3, 'user'],
]);

console.log(userTable2.get(u2)); // admin

// 맵의 존재를 확인하는 has() 메소드 
console.log(userTable.has(o2)); // true
// console.log(userTable.get(o4)); not defined 에러 

// 값이 존재하는 키에 set() 호출 시 값 교체 
console.log(userTable.set(o2, 'change')); // name: won => change 

console.log(userTable.size); // 3 맵의 크기 반환 
console.log(userTable.keys()); // 이터러블 객체, 키 반환 ryu won hyuk
console.log(userTable.values()); // 이터러블 객체, 값 반환 any change insert
console.log(userTable.entries()); // 이터러블 객체, 첫 번째가 키 두번째가 값인 요소 반환 
console.log(...userTable.values()); // 이터러블 객체가 아닌 배열 값 반환
console.log(userTable.delete(o2)); // 맵 요소 삭제 
userTable.clear();
console.log(userTable); // 맵 요소 전부 삭제