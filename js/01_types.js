/** All types:
 * null
 * undefined
 * boolean
 * number
 * string
 * object - non primitive type
 * symbol (ES6)
 */

console.log('null like an "object":', typeof null);
console.log('undefined: ', typeof nonDefinedConst); // undefined
console.log('boolean: ', typeof true);
console.log('number: ', typeof 0);
console.log('number: ', typeof NaN);
console.log('string ("", \'\', ``):', typeof 'JS is rock!');
console.log('object: ', typeof {});
console.log('symbol: ', typeof Symbol('JS'));

/**
 Undefined -
 - переменная не была объявлена
 - значение не было объявлено,
 - возвращает функция, которая не возвращает ничего
*/

/**
 null -
 - переменная объявлена, но отсутствует значение
 - значение было определено ранее, но затем туда записали null
*/

/** Приведение типов */
let language = 'JS';

// приводится к true
if (language) {
    console.log('The best language is', language);
}

// falsy значения в js:
// '', 0, null, NaN, undefined, false

// не falsy:
// [], {}, function(){}

// true:
console.log('not falsy values:');
console.log(Boolean('JS'));
console.log(Boolean(' '));
console.log(Boolean('0'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));
//false:
console.log('falsy values:');
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

/** Строки и числа */
console.log(1 + '2'); // "12"
console.log('2' + 1); // "21"
console.log(1 + 1 + '2'); // "22"
console.log('' + 1 + 0); // "10"
console.log('' - 1 + 0); // -1
console.log('3' * 8); // 24
console.log('42' - 40); // 2
console.log(null + 2); // 2
console.log(undefined + 2); // NaN
console.log(undefined - 2); // NaN
console.log(undefined + '2'); // "undefined2"
console.log(null + '2'); // "null2"

/** == или === */
// == сравнивает значения с приведением типов
// === сравнивает значения без приведения типов

console.log(2 == '2'); //true
console.log(2 === '2'); //false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN === null); // false
console.log('0' == false); //true, тк интерпретатор приводит к числу
console.log('0' == 0); //true

console.log('interest cases:');
console.log('' == false); // true
console.log([] == false); // true
console.log({} == false); //false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false