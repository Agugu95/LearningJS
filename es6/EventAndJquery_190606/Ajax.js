// HTTP 요청을 통해 데이터를 JSON 형식으로 받는 비동기 통신 

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({
        platform: process.platform,
        nodeVersion: process.version,
        uptime: Math.round(process.uptime()),

    }));
});

const port = 8080;
server.listen(port, () => {
    console.log(`Ajax server started on port${port}`);
});