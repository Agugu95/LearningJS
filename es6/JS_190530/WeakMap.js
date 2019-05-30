/*
map과 weakMap의 차이점 
1. 키는 반드시 객체 
2. weakMap의 키는 가비지 콜렉션에 포함 가능(메모리 정리가능)
3. weakMap은 이터러블이 아니며 clear() 없음
*/

const SecretHolder = (() => {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }

        getSecret() {
            return secrets.get(this);
        }
    };
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());