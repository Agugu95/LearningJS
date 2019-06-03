const fs = require('fs');

function nfcall(f, ...args) {
    return new Promise((resolve, reject) => {
        f.call(null, ...args, (err, ...args) => {
            if (err) return reject(err);
            resolve(args.length < 2 ? args[0] : args);
        });
    });
}

function ptimeout(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}

function* theFutureIsNow() {
    let data;
    try {
        data = yield Promise.all([
            nfcall(fs.readFile, 'a.txt'),
            nfcall(fs.readFile, 'b.txt'),
            nfcall(fs.readFile, 'c.txt'),
        ]);
    } catch (err) {
        console.error(`Unable to read one or more input files:${err.mssage}`);
        throw err;
    }
    yield ptimeout(10 * 1000);
    try {
        yield nfcall(fs.readFile, 'd.txt', data[0] + data[1] + data[2]);
    } catch (err) {
        console.error(`Unable to write output file:${err.mssage}`);
        throw err;
    }
}

theFutureIsNow();