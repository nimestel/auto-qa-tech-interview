/**
 *   Стрелочные функции
 *     - не создают контекст
 *
 *    Не имеют this; его значение берётся снаружи, где вызывают функцию.
 *    Не имеют arguments; мы пробрасываем их сами (() => f.apply(this, arguments)).
 *    Не могут быть вызваны с new.
 *    У них также нет super; при обращении к super стрелочной функции он берётся из внешней функции
 *
 *  Предназначены для небольшого кода, который не имеет своего «контекста», выполняясь в текущем.
 */

// Пример 1
function Cat(color) {
    this.color = color;
    console.log('This', this);
    (() => console.log('arrow this', this))();
}

new Cat('red');
// This Cat { color: 'red' }
// arrow this Cat { color: 'red' } // тк стрелочная ф-я не создала контекст

// Пример 2
const dog = (color) => {
    this.color = color;
    console.log('This', this);
    (() => console.log('arrow this', this))();
};

//new dog('black') //TypeError: dog is not a constructor

dog('black');
//This { color: 'black' }
//arrow this { color: 'black' }

function Animal(color){
}