const fs = require('fs');

const rs = fs.createReadStream('./stream.txt', { encoding: 'utf8' });
rs.on('data', (data) => {
    console.log(`>> data: ${data.replace('\\n', '\\n')}`);
});
rs.on('end', (data) => {
    console.log('>> end');
});