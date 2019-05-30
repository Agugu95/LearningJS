// 자바스크립트 내장 error 객체 
const err = new Error('invalid error');

function validEmail(email) {
    return email.match(/@/) ? email : err;
}

const email = 'johndoe.com';

try {
    if (validEmail(email) === err) {
        throw new Error('Exception Error');
    }
} catch (Error) {
    console.log(`Error: ${err}`); // try-catch를 사용한 에러처리 
}