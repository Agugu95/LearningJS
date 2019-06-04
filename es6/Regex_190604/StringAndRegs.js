// String.prototype을 이용한 부분 문자열 검색 
// 자바스크립트에서 문자열은 불변 (const니까 ㅋㅋ)
const input = 'AS i Was going to Saint Ives';
input.startsWith('As'); // ture
input.endsWith('Ives'); // ture
console.log(input.startsWith('going', 9)); // 9번 인덱스부터 true 
console.log(input.endsWith('As', 14)); // 인덱스 14를 문자열의 끝으로 간주 false
console.log(input.includes('I')); // 문자열 내에 I가 들어있다면 true

// 정규표현식 만들기
// 자바스크립트에서 정규표현식은 RegExp 클래스와 생성자, 리터럴 문법이 존재 
const re1 = /going/; // going을 찾는 정규식 
const re2 = new RegExp('going'); // going을 찾는 정규식 생성자 
const re3 = /\w{3,}/ig; // 세 글자 이상인 단어, 대소문자 상관없음 

console.log(input.match(re1)); // 단어, 인덱스,전체 문자열, 그룹 출력
console.log(input.match(re2)); // 동일 
console.log(input.match(re3)); // 세 글자 이상인 단어 출력 
console.log(input.search(re3)); // 세 글자 이상으로 이루어진 단어의 첫 인덱스는 5
console.log(re3.test(input)); // input 내에 세 글자 이상으로 이루어진 단어가 존재 

// 정규식 문자열 교체 
const change = input.replace(/\w{4,}/ig, '****'); // 4글자 이상의 단어를 모두 ****로 교체 
console.log(change);

// 정규식 문자셋  
const m1 = input.match(/[\S]/g); // 탭 스페이스 세로탭 줄바꿈을 제외한 모든 것 
console.log(m1);

// lazy 소극적 과 greedy 적극적 
const promo = 'Openingfor XAAX is the "dynamic GOOG"! aT THE BOX OFFICE NOW!';
const bacRef = promo.match(/'(["]).*?/g);
console.log(bacRef);