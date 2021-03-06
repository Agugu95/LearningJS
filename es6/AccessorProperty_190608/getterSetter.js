const USER_EMAIL = Symbol();
// 프로퍼티에 심볼을 사용해서 직접 접근을 막음
class Users { // 왜 안될까?? 
    // 접근자 프로퍼티는 말 그대로 함수를 
    // 값으로 묶은 거 였음.. 프로퍼티로 접근해야함
    set email(value) {
        // @가 들어간 문자열은 모두 이메일이라고 생각하는 정규표현식
        if (!/@/.test(value)) throw new Error(`Invaild email: ${value}`);
        this[USER_EMAIL] = value;
    }

    get email() {
        return this[USER_EMAIL];
    }
}

const u = new Users();
u.email = 'jane@doe.com';
console.log(`User email: ${u.email}`);