/**
 *  Поднятие или hoisting
 *
 *   — это механизм в JavaScript, в котором объявления переменных и функций
 *   передвигаются вверх своей области видимости перед тем, как код будет выполнен.
 *
 *  (!) "Поднимаются" только объявления функции или переменной.
 *  Назначения переменным остаются на своих местах.
 *
 *  Когда мы одновременно объявляем и инициализируем переменную,
 *   JS поднимает ее объявление, но не поднимает инициализацию
 *
 *   var (es5) - при поднятии будет undefined
 *   let, const (es6) - при поднятии будет ReferenceError
 */

// Пример с var

console.log(i); // undefined
var i = 42;
console.log(i); // 42

// аналогично следующей записи:
// var i;
// console.log(i); // undefined
// i = 42;
// console.log(i); // 42


// Пример с let и const

// console.log(j); // ReferenceError: Cannot access 'j' before initialization
// const j = 42;

// console.log(k); // ReferenceError: Cannot access 'k' before initialization
// let k = 42;

/**
 *  Поднятие функций
 *
 *  1. Объявленные функции (Function Declaration)
 *    function hoisted() { ...
 *
 *   - полностью поднимаются вверх кода
 *
 *  2. Функциональные выражения (Function Expression)
 *    const hoisted = () => { ...
 *
 *   - поднимается объявление переменной,
 *     но не поднимается инициализация
 */

// Объявленная функция
console.log(sum2(41, 42)); // 84
function sum2 (a, b) { return a + b}

// Функциональное выражение
console.log(sum1(41, 1)); // ReferenceError: Cannot access 'sum' before initialization
const sum1 = (a, b) => a + b;
// аналогично:
// const sum1 = function(a, b){return a + b};

