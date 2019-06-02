var a = 10;
function funcScope1() {
    var b = 20;
    funcScope2();
    function funcScope2() {
        var c = 30;
        console.log(a, b, c);
    }
}

funcScope1();

var i;
for (i = 5; i >= 0; i--) {
    ((i) => {
        setTimeout(function () {
            console.count(i === 0 ? "go" : i);
        }, (5 - i) * 1000);
    })(i);
}
