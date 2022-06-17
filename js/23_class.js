/**
 *   Классы
 *    - это синтаксический сахар над функцией и механизмом прототипного наследования
 *
 *   На самом деле классы — это "специальные функции", поэтому точно также, как вы определяете функции
 *   (function expressions и function declarations),
 *   вы можете определять и классы с помощью: class declarations и class expressions.
 */

/** Первый способ — class declaration (объявление класса) */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

/** Второй способ — class expression (выражение класса).
 *  Можно создавать именованные и безымянные выражения.
 *   В первом случае имя выражения класса находится в локальной области видимости класса
 *   и может быть получено через свойства самого класса, а не его экземпляра.
 */
// безымянный
const Rectangle1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle1.name); // "Rectangle"

// именованный
const Rectangle2 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle2.name);// "Rectangle2"

/**
 *  Разница между объявлением функции и объявлением класса в том, что
 *   функции совершает подъём (hoisting), в то время как класс — нет.
*/
//const p = new Rectangle3(); // ReferenceError
class Rectangle3 {}

const l = func();
console.log(l); // 10
function func() { return 10}

/** Наследование
 *
 *    Если в дочернем классе конструктор не меняется, можем его не определять дополнительно
 *    Если есть дополнение/ изменение логики, первым вызываем super(), затем остальное
*/
class Cat {
    legs = 4;

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издаёт звук.`);
    }
}

class Lion extends Cat {
    color;

    constructor(name, color = 'yellow') {
        // this.color = 'yellow'; // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name);
        this.name = name;
        this.color = color;
    }

    speak() {
        super.speak();
        console.log(`${this.name} рычит.`);
    }

    getMe() {
        return this;
    }

    static getSmth() {
        return 'Lions love meet'
    }
}

let leo = new Lion('Фаззи');
leo.speak();
// Фаззи издаёт звук.
// Фаззи рычит.

console.log(Lion.getSmth()) // Lions love meet
console.log(leo.getMe()) // Lion { legs: 4, name: 'Фаззи', color: 'yellow' }


