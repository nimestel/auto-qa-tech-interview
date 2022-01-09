/** Методы работы с массивом */

let arr = [0, 1, 2];

// for
for (let i = 0; i < arr.length; i++) {
    for (let person of people) {
        for (let key in people) {
        }
    }
}

// for in - перебор по ключам
for (let i in arr) {
}

// for of - перебор по значениям
for (let i in arr) {
}

// forEach
arr.forEach(function (person, index, arr) {});
arr.forEach((person) => console.log(person));

// map
const newArr = arr.map((person) => person + 'wow!');

// filter
const adults = arr.filter((person) => person.age >= 18);

// reduce
const amount = arr.reduce((total, person) => total + person.budget, 0);

// find
const man = arr.find((person) => person.age === 19);

// findIndex
const manIndex = arr.findIndex((person) => person.age === 19);

function isPositive(number) {
    return number > 0;
}

// every - все члены массива соответствуют условию
arr.every(isPositive); // false, не все положительные

// some - некоторые члены массива соответствуют условию
arr.some((num) => num > 0); // true, есть хоть одно положительное
