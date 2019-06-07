const fs = require('fs');

console.log(process.argv);

const fileName = process.argv.slice(2);
console.log(fileName);
fs.readdir('data', (err, files) => {
    if (err) {
        console.error(`Fatal error:${err}`);
        process.exit(1);
    }
    const txtFiles = files.filter(f => /\.txt$/i.test(f));
    if (txtFiles.length === 0) {
        console.log('No .txt files to process');
        process.exit(0);
    }
});
