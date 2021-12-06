/** Вычисляемые типы данных в отличие от простых */

/**
 * Примитивные типы данных передаются как значения
 * Вычисляемые типы данных (объекты, массивы, функции) передаются как ссылка
 */

// Примитивы
let a = 42;
let b = a; // копирование значения
b++;

console.log('a', a); // 42
console.log('b', b); // 43

// Вычисляемые
let c = [1, 2, 3];
let d = c; // копирование ссылки на объект
d.push(4);

let i = [1, 2, 3, 4];

console.log('c', c); // c [ 1, 2, 3, 4 ]
console.log('d', d); // d [ 1, 2, 3, 4 ]

console.log(c === d); // true, по сути одинаковый объект
console.log(c === i); // false, разные объекты

// Пример копирования объекта для вычисляемых типов
// let e = [1, 2, 3];
// let f = e.concat(); // возвращает независимую копию объекта
