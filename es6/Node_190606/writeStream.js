const fs = require('fs');

const ws = fs.createWriteStream('stream.txt', { encoding: 'utf8' });
ws.write('lien 1\n');
ws.write('line 2\n');
ws.end();