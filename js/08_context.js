/**
 *   Контекст
 *    - определяет, как функция была вызвана
 *    - указывает на ключевое слово this
 *    - представляет собой уровень области действия кода
 *
 */

const pet = {
    sound: 'AUTH',
    say: function (animal) {
        console.log(`All my ${animal} says ${this.sound}!`);
    },
};

pet.say('wolves', 'AUTH'); // All my wolves says AUTH!

/**
 *   Call, Bind, Apply
 *
 *   Call
 *     func.call(context, arg1, arg2, ...)
 *     func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this
 *
 *   Apply
 *
 *     Если нам неизвестно, с каким количеством аргументов понадобится вызвать функцию, можно использовать метод apply.
 *     Вызов func.apply аналогичен func.call, но принимает массив аргументов вместо списка.
 *
 *     func.call(context, arg1, arg2);
 *     // идентичен вызову
 *     func.apply(context, [arg1, arg2]);
 *
 *   Bind
 *
 *     Передаем контекст и список аргументов.
 *     Возвращает функцию, не вызывая ее
 *
 *     let bound = func.bind(context, arg1, arg2, ...);
 *     bound();
 */

const cat = {
    sound: 'meow',
};

pet.say.call(cat, 'cats'); // All my cats says meow!
pet.say.apply(cat, ['cats']); // All my cats says meow!
pet.say.call(cat, ...['cats']); // All my cats says meow!
pet.say.bind(cat, 'cats')(); // All my cats says meow!

function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

// Person { name: 'Vasya', age: 20 }
const vasya = new Person('Vasya', 20);

/** Явная передача контекста */
function logThis() {
    console.log(this);
}

const obj1 = { num: 42 };
logThis.call(obj1); // { num: 42 }
logThis.apply(obj1); // { num: 42 }
logThis.bind(obj1)(); // { num: 42 }

/** Неявная передача контекста */
const animal = {
    ears: 2,
    logThis: function () {
        console.log(this);
    },
};
animal.logThis(); // { ears: 2, logThis: [Function: logThis] }


/** This */

//При вызове функции как метода:
//obj.func(...);    // this = obj
//obj["func"](...);

//При обычном вызове:
//func(...) // this = window (ES3) /undefined (ES5)

//В new:
//new func() // this = {} (новый объект)

/**
 *   Заимствование метода
 *
 *    Представим, что вместо arguments у нас – произвольный объект.
 *    У него тоже есть числовые индексы, length и мы хотим вызвать в его контексте метод [].join.
 *    Но вполне возможно, что у объекта есть свой метод join.
 *
 *    Поэтому копировать чужой метод [].join нельзя: если он перезапишет собственный join
 *    объекта, то будет путаница.
 *
 *    Вместо этого вызовем этот метод, передавая через call наш контекст
 */

function printArgs() {
    var join = [].join; // скопируем ссылку на функцию join массивов в переменную

    // вызовем join с this=arguments
    var argStr = join.call(arguments, ':');

    console.log(argStr); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3); // 1:2:3
