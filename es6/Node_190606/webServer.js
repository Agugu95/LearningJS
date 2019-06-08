// 기본적으로 http/https 모듈은 createServer 메소드를 지원 
// 요청을 처리 할 콜백함수를 만드는 것이 핵심 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/favicon.ico') {
        res.end(); // end 대신 사용
    } else {
        console.log(`${req.method} ${req.url}`);
        res.end('Hello world');
    }
});

const port = 8080;
server.listen(port, () => {
    // 서버가 시작됐을 때 호출될 콜백을 넘길 수 있다.
    console.log(`server started on port ${port}`);
});