

// es6 기능: 블럭 스코프 변수 선언
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' },
];
// es6 기능: 객체 분해
function say({ subject, verb, object }) {
  // es6 기능: 템플릿 문자열
  // 아래 사용한 것은 따옴표(quote)가 아닌 backtick(`)
  console.log(`${subject} ${verb} ${object}`);
}
// es6기능: for of loop
// eslint-disable-next-line no-restricted-syntax
for (let s of sentences) {
  say(s);
}
