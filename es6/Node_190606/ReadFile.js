const fs = require('fs');
const path = require('path');

// 
fs.readFile(`${__dirname}/hello.txt`, { encoding: 'utf-8' }, (err, data) => {
    if (err) return console.log('Error Read to file');
    console.log(`Read File content: ${data}`);
});