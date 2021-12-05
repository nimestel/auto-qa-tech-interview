/**
 *  Let
 *
 *    область видимости – блок {...}
 *    видна только после объявления (не поднимается)
 *    нельзя повторно объявлять в том же блоке
 */

let a = 'variable a';
let b = 'variable b';

//Блочная область видимости
{
    a = 'local variable a'
    console.log('local scope a:', a); // local variable a

    let b = 'local variable b'
    console.log('local scope b:', b); // local variable b

    // Повторное объявление приведет к ошибке
    //let b = 'duplicate local variable b' // SyntaxError: Identifier 'b' has already been declared

    // Объявление переменной let не поднимается
    // console.log('local scope c:', c); //ReferenceError: Cannot access 'c' before initialization
    // let c = 'somth'
}

// Переназначенное внутри блока значение сохраняется
console.log('global scope a:', a); // local variable a
console.log('global scope b:', b); // variable b


/**
 *  Const
 *
 *    аналогична let,
 *    но нельзя переназначить целиком значение переменной
 *    отдельные поля внутри переназначить можно
 */

// Нельзя переназначать значение всей переменной
const port = 8080;
//port = 8081 // TypeError: Assignment to constant variable.

// Можно менять поля внутри
const arr = ['one', 'two'];
// нет ошибки при изменении полей
arr[0] = 'last'
arr.push('!')
console.log(arr); // [ 'last', 'two', '!' ]

const obj = {};
obj.name = 'Tanya'
console.log(obj); // { name: 'Tanya' }

delete obj.name
console.log(obj); // {}

//obj = ''; // TypeError: Assignment to constant variable.

/**
 *  Var
 *
 *    устаревший синтаксис
 *    область видимости - либо функция, либо глобальная
 *    можно объявлять повторно (игнор либо переназначение)
 *    видна до объявления (поднимается)
 *
 */

// Повторные var игнорируются:
var user = 'Peter';
var user; // игнорирует, переменная объявлена раньше, нет ошибки
console.log(user); // Peter

//Если дополнительно присвоить значение, то переменная примет новое значение:
var user = 'Peter';
var user = 'John';
console.log(user); // John
