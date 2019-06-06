const fs = require('fs');
const path = require('path');

fs.writeFile(`${__dirname}/hello.txt`, 'hello from Node!', (err) => {
    // 노드는 자신이 실행 된 현재 작업 디렉터리를 __dirname에 보관 
    // __dirname(현재 작업 디렉터리) + hello.txt는 현재 작업 디렉터리에 hello.txt 생성
    if (err) return console.log('Error writing to file.');
});

fs.writeFile(path.join(__dirname, 'path.txt'), 'hello from path', (err) => {
    // path 모듈을 사용하면 모든 운영체제에 호환 가능 
    if (err) return console.log('Error writing to file.');
});