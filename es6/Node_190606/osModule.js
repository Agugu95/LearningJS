const os = require('os');

console.log(`HostName: ${os.hostname()}`);
console.log(`OsType: ${os.type()}`);
console.log(`OSplafrom: ${os.platform()}`);
console.log(`OSrelease: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch}, ${os.cpus().length}`);
console.log(`Memory: ${os.totalmem() / 1e6}MB, ${os.freemem() / 1e6}MB`);