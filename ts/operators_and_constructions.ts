// source article:
// https://habr.com/ru/company/ruvds/blog/519136/

// !!, ??, ??=, ? : , ||, ...
// const { a, b } = obj
// constructor( private first_name: string ){}
// const f = () => a + b; //return a+b

/** ?? Оператор для проверки значений на null и undefined (nullish coalescing operator)
 * возвращает значение правого операнда в том случае, если значение левого равно null или undefined
 */
function myFn(variable: any) {
    let var2 = variable ?? 'default value';
}

/** ??= Оператор, используемый для назначения значения переменной только в том случае,
 * если она имеет значение null или undefined (logical nullish assignment operator)
 */
function myFn2(variable: any) {
    variable ??= 'default value';
}

/** || Оператор логического ИЛИ (logical OR operator)
 * возвращает значение правого операнда, если значение левого равно false
 */
const myFn4 = (variable: any) => {
    let var2 = variable || 'default value';
};

/** && Оператор логического И (logical AND operator)
 * возвращает значение правого операнда, если значение левого равно true
 */
function myFn6(variable: any) {
    let var2 = variable && 'default value';
}

/** ?  Тернарный оператор (conditional operator)
 * возвращает значение в зависимости от условия
 */
function myFn3(variable: any) {
    let isEven = variable % 2 == 0 ? 'yes' : 'no';
}

/** !! Оператор двойного отрицания (double negation operator)
 * преобразует значение в логический тип
 */
function myFn5(variable: any) {
    let var2 = !!variable;
}

/** ?. Optional chaining operator
 * позволяет получить доступ к свойствам объекта, если они существуют
 */
let a = {};

//before:
a.b.c; // Uncaught TypeError: a.b is undefined

//after:
a?.b; // undefined
a?.b?.c; // undefined
a.b; // undefined

// не будет выполнено ничего, если значение undefined или null:
const func = a?.b?.someFunc?.(data);
const smth = func(data);

/** Сокращённое объявление TypeScript-конструкторов (constructor shorthand)
 * позволяет объявлять и инициализировать поля класса в одном месте
 */

class Person2 {
    constructor(
        private first_name: string,
        private last_name: string,
        private age: number,
        private is_married: boolean
    ) {}
}

// spread + destructuring
/** Деструктурирование объектов (destructuring assignment)
 * запись множества значений свойств объекта в обычные переменные
 *
 * ... Оператор расширения (spread operator)
 * позволяет развернуть массив или объект в месте, где ожидается список аргументов или элементов
 */
const myList = [1, 2, 3, 4, 5, 6, 7];
const myObj = {
    name: 'Fernando',
    age: 37,
    country: 'Spain',
    gender: 'M',
};

const [head, ...tail] = myList;
const { name, age, ...others } = myObj;

console.log(head); //1
console.log(tail); //[2,3,4,5,6,7]
console.log(name); //Fernando
console.log(age); //37
console.log(others); //{country: "Spain", gender: "M"}
