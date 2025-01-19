/**
 TypeScript предоставляет нам все те же классы, однако с некоторыми улучшениями:

 - Поля
 - Параметры только для чтения
 - Модификаторы доступа
 - Перегрузка конструкторов
 - Наследование классов, а также имплементация интерфейсов
 - Расширение классов
 - Дженерики в классах
 - Параметризированные свойства
 - Абстрактные классы и инстансы
 */

class Person {
    protected readonly name: string;
    protected readonly age: number;

    constructor(
        protected readonly name: string,
        protected readonly age: number
    ) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `My name is ${this.name}, i'm ${this.age} years old`;
    }
}

let somePerson = new Person('Any', 26);
somePerson.sayHello();
