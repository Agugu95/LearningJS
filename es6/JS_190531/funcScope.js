// var i;
// for (i = 5; i >= 0; i--) {
//     setTimeout(() => {
//         console.log(i === 0 ? 'go' : i);
//     });
// }

function scopeOne() {
    var i = 'first local';
    console.log(i);
    scopeTwo();
    function scopeTwo() {
        var i = 'second local';
        return console.log(i);
    }
}

scopeOne();
var i = 'b';
function A() {
    i = 'a';
    console.log(i);
}

A();
