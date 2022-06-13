/**
 *
 *    Полифил и транспиляция позволяет использовать новые функции в старых стандартах языка.
 *
 *     JS может транспилировать код в указанный стандарт. Но не весь код может быть
 *     транспилирован полностью.
 *
 *   - полифил используют там, где возможно нативно реализовать новые функции через старый
 *   синтаксис. выполняется во время выполнения программы
 *
 *  - транспиляция используется там, где старый синтаксис не позволяет реализовать нативно новую
 *       фукциональность через полифилы. выполняется во время компиляции
 *
 *   Транспилирование — это сочетание двух слов:
 *      - transforming — преобразование
 *      - compiling— компиляция
 *
 *     Транспилятор берет новый синтаксис, который старые браузеры не понимают, и превращает его в
 *  синтаксис, который они понимают.
 *     Ключевым моментом здесь является то, что транспиляторы необходимы для синтаксиса, который
 *   браузер не может понять.
 *     Вы можете заполнить отсутствующие объекты или методы полифилом, но не можете заполнить
 *   синтаксис полифилом.
 *
 *     IE11, например, не поддерживает стрелочные функции и не понимает синтаксиса =>.
 *  Вы не можете использовать полифиловый синтаксис, и нет способа заставить IE11 понимать,
 *  что вы имеете в виду, когда пишете:
 *
 *     const add = (a, b) => a + b.
 *
 *  Вместо этого вы должны преобразовать, транспилировать код, чтобы преобразовать его в другой
 *  старый синтаксис, понятный IE11:
 *
 *     function add(a, b) { return a + b; }.
 *
*/

// Полифил имитирует функцию isNaN из ES6 на ES5
if (!Number.isNan) { //если ещё не доступно
    Number.prototype.isNaN = function isNaN(n) {
        return n !== n;
    };
}
let myNumber = 100;
console.log(myNumber.isNaN(100));

/***
 *    Babel - самый распространенный транспилятор для JavaScript
 *
 *    - создан для помощи в переносе кода между различными версиями JavaScript
 *    - для компиляции приложений новейших ECMAScript в версию устаревших ECMAScript, для
 *    браузеров, которые не поддерживают новые приложения
 *    - может также компилировать другие версии ECMAScript, такие как React JSX
 *
 *   Babel состоит из двух частей:
 *
 *   1) транспилер, который переписывает код
 *   2) полифил
 *
 */