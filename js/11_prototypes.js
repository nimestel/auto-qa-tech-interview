/**
 *  Прототипы
 *
 *    каждый объект имеет прототип, который берется от родителя
 *    Prototype - скрытое свойство объектов, имеет значение null либо ссылается на др объект
 *    если JS не находит нужное свойство в объекте, то ищет в его прототипе
 *
 *    Мы можем задать прототип:
 *    - ключевое слово __proto__ является геттером/сеттером (es6)
 *    - Object.getPrototypeOf()/Object.setPrototypeOf (es5)
 */

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// через prototype можем расширить функционал Cat
Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says meow!`);
}

const cat = new Cat('Murka', 'red')
console.log(cat); // Cat { name: 'Murka', color: 'red' }

// не находит ф-ю в Cat, но находит в его прототипе
cat.voice(); // Cat Murka says meow!

console.log(Cat); // [Function: Cat]
console.log(Cat.prototype); // { voice: [Function (anonymous)] }
console.log(cat.__proto__); // { voice: [Function (anonymous)] }
console.log(cat.__proto__ === Cat.prototype); // true

console.log(cat.constructor); // [Function: Cat]

/** Собственные свойства vs свойства из прототипа */

function Person(){}
Person.prototype.legs = 2;
Person.prototype.eyesColor = 'green';

const person = new Person()
person.name = 'Tanya'

// Свойства legs нет в объекте, но есть в его прототипе
console.log(person); // Person { name: 'Tanya' }
console.log('legs' in person); //true
console.log(person.legs); //2

// Собственные свойства объекта
console.log(person.hasOwnProperty('legs')) //false
console.log(person.hasOwnProperty('name')) //true

/**
 *  Object.create()
 *   - создает объекты, используя существующий прототип
 */
let proto = {season: 'winter'}
const mySeason = Object.create(proto)

console.log(mySeason.season); // winter
console.log(mySeason.hasOwnProperty('season')); //false
console.log(mySeason.__proto__ === proto); // true

// Меняя значение в поле прототипа - оно изменится в дочерних объектах
console.log(mySeason.season); // winter
proto.season = 'spring'
console.log(mySeason.season); // spring

// Меняя значение всего прототипа - в дочерних объектах созданных ранее оно не меняется
proto = {season: 'summer'}
console.log(mySeason.season); // все еще spring
