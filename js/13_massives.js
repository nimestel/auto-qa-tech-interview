/** Методы работы с массивом
 *
 *    forEach – для перебора массива.
 *    map – для трансформации массива в массив.
 *    filter – для фильтрации массива.
 *    find/findIndex – для поиска в массиве.
 *    every/some – для проверки массива.
 *    reduce – для прохода по массиву с вычислением значения.
 *    includes - содержится ли в массиве значение
 */

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
for (let i of arr) {
}

// forEach - операция над каждым элементом переданного массива
arr.forEach(function (person, index, arr) {});
arr.forEach((person) => console.log(person));

// map - операция над каждым элементом переданного массива, возвращает новый массив
const newArr = arr.map((person) => person.name + ' wow!');

// filter - возвращает новый массив, состоящий из элементов переданного массива, отвечающим
// заданному условию
const adults = arr.filter((person) => person.age >= 18);

// find - возвращает элемент переданного массива, отвечающий заданному условию
const man = arr.find((person) => person.age === 19);

// findIndex - возвращает индекс элемента переданного массива, отвечающего заданному условию
const manIndex = arr.findIndex((person) => person.age === 19);

function isPositive(number) {
    return number > 0;
}

// every - возвращает boolean проверки, что все члены массива соответствуют условию
arr.every(isPositive); // false, не все положительные

// some - возвращает boolean проверки, что некоторые члены массива соответствуют условию
arr.some((num) => num > 0); // true, есть хоть одно положительное

// includes - возвращает boolean, содержится ли поле в массиве
const array = [1, 2, 3];

array.includes(3); // true

/**
     reduce - берет массив и сжимает его содержимое в одно значение.
     Это значение может быть числом, строкой или даже объектом или новым массивом.

     Используется для последовательной обработки каждого элемента массива с сохранением
   промежуточного результата.
     Он применяет функцию callback по очереди к каждому элементу массива
   слева направо, сохраняя при этом промежуточный результат.

    Аргументы функции callback(previousValue, currentItem, index, arr):

    previousValue – последний результат вызова функции, он же «промежуточный результат».
    currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
    index – номер текущего элемента.
    arr – обрабатываемый массив.
*/

const amount = arr.reduce((total, person) => total + person.budget, 0);

// Суммирование чисел

//Здесь мы передаем 0 как наше начальное значение.
//В обратном вызове мы добавляем текущее значение к сумме, которая имеет начальное значение 0 в
// первом цикле, затем 1 (начальное значение 0 плюс значение элемента 1), затем 3 (суммарное значение 1 плюс значение элемента 2) и так далее.
let total = [1, 2, 3].reduce(function (sum, current) {
    return sum + current;
}, 0);

// Альтернатива комбинированию методов массива Array.map() и Array.filter() в одном шаге

let wizards = [
    {
        name: 'Harry Potter',
        house: 'Gryfindor',
    },
    {
        name: 'Cedric Diggory',
        house: 'Hufflepuff',
    },
    {
        name: 'Tonks',
        house: 'Hufflepuff',
    },
    {
        name: 'Ronald Weasley',
        house: 'Gryfindor',
    },
    {
        name: 'Hermione Granger',
        house: 'Gryfindor',
    },
];

// Получаем имена волшебников из Хаффлпафф
let hufflepuffNames = wizards.reduce(function (newArr, currentWizard) {
    if (currentWizard.house === 'Hufflepuff') {
        newArr.push(currentWizard.name);
    }
    return newArr;
}, []);

// Объединение данных из двух источников в массив

let points = {
    HarryPotter: 500,
    CedricDiggory: 750,
    RonaldWeasley: 100,
    HermioneGranger: 1270,
};

let wizardsWithPoints = wizards.reduce(function (arr, currentWizard) {
    // Получаем значение для объекта points, удалив пробелы из имени волшебника
    let key = currentWizard.name.replace(' ', '');

    // Если у волшебника есть очки, устанавливаем значение, иначе устанавливаем 0.
    if (points[key]) {
        currentWizard.points = points[key];
    } else {
        currentWizard.points = 0;
    }

    // Добавляем объект wizard в новый массив.
    arr.push(currentWizard);

    // Возвращаем массив.
    return arr;
}, []);

// Объединение данных из двух источников в объект

const wizardsAsAnObject = wizards.reduce(function (obj, wizard) {
    // Получаем значение ключа для объекта points, удалив пробелы из имени волшебника
    const key = wizard.name.replace(' ', '');

    // Если у волшебника есть очки, устанавливаем значение, иначе устанавливаем 0.
    if (points[key]) {
        wizard.points = points[key];
    } else {
        wizard.points = 0;
    }

    // Удаляем свойство name
    delete wizard.name;

    // Добавляем значение wizard в новый объект, где ключ - имя волшебника
    obj[key] = wizard;

    // Возвращаем объект
    return obj;
}, {});
