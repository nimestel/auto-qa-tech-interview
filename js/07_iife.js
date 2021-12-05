/**
 * Immediate Invoked function Expression
 *   - функции, которые будут моментально вызваны
 *
 *   обычно окружены круглыми скобками (function(){})()
 */

// без iife
let result = [];
for (var i = 0; i < 5; i++) {
    result.push(function () {
        console.log(i);
    });
}

result[2](); // 5
result[4](); // 5 - не работает правильно

// c iife
let res = [];
for (var j = 0; j < 5; j++) {
    // будет вызвана сразу же
    (function () {
        var k = j;
        res.push(function () {
            console.log(k);
        });
    })();
}

res[2](); // 2
res[4](); // 4