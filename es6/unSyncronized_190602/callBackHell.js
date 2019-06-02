// 콜백 지옥이라고 하는 콜백이 콜백을 무는 현상 
// 콜백은 두번 호출 되거나, 호출되지 않는 경우를 방지하는 안전장치가 없음
const fs = require('fs');

fs.readFile('a.txt', (err, dataA) => {
    if (err) console.error(err);
    fs.readFile('b.txt', (err, dataB) => {
        if (err) console.error(err);
        fs.readFile('c.txt', (err, dataC) => {
            if (err) console.error(err);
            setTimeout(() => {
                fs.writeFile('d.txt', dataA + dataB + dataC, () => {
                    if (err) console.error(err);
                });
            }, 10 * 1000);
        });
    });
});