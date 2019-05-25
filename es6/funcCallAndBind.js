const bruce = { name: 'Bruce' };
const madelin = { name: 'Madeline' };

// 객체와 연결되지 않은 함수
function greet() {
    return `hello, i'm${this.name}`;
}

greet(); // 함수 호출 
greet.call(bruce); // call을 통한 함수 호출 
greet.call(madelin); // call을 통한 함수 호출 

function update(birth, occupation) {
    this.birth = birth;
    this.occupation = occupation;
}

update.call(bruce, 1010, 'singer');
update.call(madelin, 1212, 'actress');