/* 
fucntion 생략 가능
파라미터가 한개뿐이라면 괄호도 생략 가능 
함수 바디가 표현식 하나라면 중괄호 {}와 return도 생략 가능 
*/

const f1 = function () { return 'hello'; }; // 선언식
const f2 = () => 'hello'; // 표현식 함수 이름과 return문이 없음

console.log(f1());
console.log(f2());
// 선언식과 표현식은 동등한 기능을 함음

const o = {
    name: 'Juile',
    gereetBackwards() {
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) { // Cannot read property 'length' of undefiend d
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym, olleH`;
    },

};
console.log(o.gereetBackwards());