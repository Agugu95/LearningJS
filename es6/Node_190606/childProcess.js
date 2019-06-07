// exec = 실행 fork = 복사 
const { exec } = require('child_process');

exec('dir', { encoding: 'euc-kr' }, (err, stdout, stderr) => {
    if (err) return console.error('Error executing "dir"');
    this.stdout = stdout.toString(); // 버퍼를 문자열로 변환 
    console.log(`StdOut: ${stdout}`);
    this.stderr = stderr.toString();
    if (stderr !== '') {
        console.error(`Error: ${stderr}`);
    }
});

// 한글 깨짐 인코딩 문제인듯?