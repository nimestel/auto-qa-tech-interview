/**
 *  Замыкания
 *   - функция имеет доступ до переменных из вышестоящего скоупа
 */

/**
 *  Лексическое окружение
 *
 *   В JavaScript у каждой выполняемой функции, блока кода и скрипта есть связанный с ними
 *  внутренний (скрытый) объект, называемый лексическим окружением (LexicalEnvironment).
 *
 *   Объект лексического окружения состоит из двух частей:
 *     1) Environment Record – объект, в котором как свойства хранятся все локальные переменные (а
 *   также некоторая другая информация, такая как значение this).
 *     2) Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи
 *   (снаружи от текущих фигурных скобок).

 *   Переменная – это свойство специального внутреннего объекта Environment Record, связанного с текущим
 *   выполняющимся блоком/функцией/скриптом.
 *
 *   Работа с переменными – это на самом деле работа со свойствами этого объекта.
 */

function sayHelloTo(name) {
    const message = `Hi, ${name}!`;

    return function () {
        console.log(message);
    };
}

const helloToMe = sayHelloTo('Tanya');
console.log(helloToMe); // [Function (anonymous)]

helloToMe(); // Hi, Tanya!
console.log(helloToMe()); // Hi, Tanya! + undefined т.к ф-я ничего не возвращает

function createFrameworkManager() {
    const frameworks = ['Vue', 'React'];

    return {
        // замкнутым функциям доступна переменная frameworks, недоступная снаружи
        print: function () {
            console.log(frameworks);
        },
        add: function (framework) {
            frameworks.push(framework);
        },
    };
}

const manager = createFrameworkManager();
console.log(manager); // { print: [Function: print], add: [Function: add] }
manager.print(); // [ 'Vue', 'React' ]
manager.add('Angular');
manager.print(); // [ 'Vue', 'React', 'Angular' ]
//console.log(frameworks); //ReferenceError: frameworks is not defined

// setTimeout

const fib = [1, 2, 3, 5, 8, 13];

// fib[6] - не существует, поэтому undefined
// for (var i = 0; i < fib.length; i++) {
//     setTimeout(() => {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1500)
// }
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined


for (var i = 0; i < fib.length; i++) {
    function printFib(j){
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 1500)
    }
    printFib(i)
}
// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 8
// fib[5] = 13