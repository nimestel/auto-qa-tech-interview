/**
 *  Примитивные типы: строки, числа, логические значения – присваиваются и копируются «по значению».
 *  Отличие объектов от примитивных типов данных в том, что они хранятся и копируются «по ссылке».
 *
 *    Переменная хранит не сам объект, а его «адрес в памяти»
 *    Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется.
 */

/**
 *   Object.assign()
 *
 *    - копирует значения всех _собственных_ перечисляемых свойств из одного или более исходных
 *    объектов в целевой объект.
 *    После копирования возвращает целевой объект.
 *    Создает клон, а не копирует ссылку на исходный объект.
 *
 *    ! Не делает глубокое клонирование объекта.
 *    Если внутри копируемого объекта есть свойство, значение которого является не примитивом, а
 *    объектом, оно будет передано по ссылке.
 *
 */

let girl = {
    name: 'Tanya',
    language: {
        speak: 'russian',
        code: 'JS',
    },
};

let newGirlWithObjAssign = Object.assign({}, girl);
console.log('obj assign:', newGirlWithObjAssign); // { name: 'Tanya', language: { speak: 'russian',
// code:
// 'JS' } }

/**
 *  Глубокое клонирование из либы lodash
 *
 *   - использовать готовую реализацию — метод _.cloneDeep(obj) из JavaScript-библиотеки lodash.
 */
//let objects = [{ 'a': 1 }, { 'b': 2 }];

//let deep = _.cloneDeep(objects);
//console.log(deep[0] === objects[0]); // => false

/**
 *  JSON.parse, JSON.stringify
 *
 *   JSON.parse() берет строку JSON и трансформирует ее в объект JavaScript.
 *   JSON.stringify() берет объект JavaScript и трансформирует его в строку JSON.
 *
 *   Этот способ предоставляет глубокую копию, но считается не лучшим.
 *
 *   Работает только с литералом Number, String и Object без функции или свойства Symbol.
 */

let newGirlWithJsonParse = JSON.parse(JSON.stringify(girl));
console.log('JSON: ', newGirlWithJsonParse); // { name: 'Tanya', language: { speak: 'russian',code: 'JS' }}

/**
 *  Spread operator "..."
 *
 *    — оператор, который копирует свойства одного объекта в новый объект.
 *    Создает не глубокую копию объекта.
 */

let newGirlWithSpread = { ...girl };
// { name: 'Tanya', language: { speak: 'russian', code: 'JS' } }
console.log('spread: ', newGirlWithSpread);

// Отличие глубокой и не глубокой копии:

console.log('меняем ссылочное свойство!');
girl.language.speak = 'ENGLISH';

// глубокое копирование - скопированное свойство не зависимо от исходника и не подверглось изменению
console.log('JSON: ', newGirlWithJsonParse); // { name: 'Tanya', language: { speak: 'russian', code: 'JS' } }

// неглубокое копирование - скопированное свойство копировалось по ссылке и изменилось вместе с исходным
console.log('obj assign:', newGirlWithObjAssign); // { name: 'Tanya', language: { speak: 'ENGLISH', code: 'JS' } }
console.log('spread:', newGirlWithSpread); // { name: 'Tanya', language: { speak: 'ENGLISH', code: 'JS' } }
