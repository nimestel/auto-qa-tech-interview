/**
     [type, interface, и {} ]

     Типизировать можно через type, interface или { присвоение типов полей }.

     Класс может имплементировать как тип, так и интерфейс. Типы и интерфейсы можно смешивать с
 помощью объединения &.
     Отличие в том, что интерфейс всегда описывает объект, а type может описать примитив.

    - Старайтесь использовать интерфейсы, если дело касается объектов и сложных структур данных.
    - Используйте типы для создания алиасов (вторых названий) для примитивных типов или для
 типизации функций.
*/

/** Типы можно объединять через И/ИЛИ */
type Point = {
    x: number;
    y: number;
};

type SecondPoint = {
    sum: number;
};

// valid
const point1: Point = { x: 1, y: 1 };
const point2: SecondPoint = { sum: 2 };

type AndPoint = Point &
    SecondPoint & {
        smth: string;
    };

// нужны все свойства всех типов, невалидно:
const pointAnd1: AndPoint = { sum: 2 };
const pointAnd2: AndPoint = { x: 1, y: 1 };
const pointAnd3: AndPoint = { x: 1, y: 1, sum: 2 };

// корректно:
const pointAndAll: AndPoint = { x: 1, y: 1, sum: 2, smth: 'hello' };

type OrPoint =
    | Point
    | SecondPoint
    | {
          smth: string;
      };

// нужно указать свойства любого из трех типов, валидно:
const pointOr1: OrPoint = { sum: 2 };
const pointOr2: OrPoint = { x: 1, y: 1 };
const pointOr3: OrPoint = { x: 1, y: 1, sum: 2 };
const pointOrAll: OrPoint = { x: 1, y: 1, sum: 2, smth: 'hello' };

const pointOrFunc1 = (): OrPoint => ({ sum: 1 + 2 });
const pointOrFunc2 = (): OrPoint => {
    return { smth: 'some text' };
};

// но нужно указать все свойства одного из типов, иначе невалидно:
const pointOr4: OrPoint = { x: 1 }; // need 'y' filed

// типизировать можно функции
type signature = (first: number, second: number) => number;

const functionWithType: signature = (one, two) => one + two;
functionWithType(1, 2);


/** Интерфейсы */
interface IPoint {
    x: number;
    y: number;
}

const point2442: IPoint = { x: 1, y: 1 };

const point34325432: {
    x: number;
    y: number;
} = { x: 1, y: 1 };

/**
 *  Наследование нескольких интерфейсов
 *
 *   При слиянии поле, которое по разному определено в наследуемых интерфейсах, может получиться
 *   что-то типа field: string & boolean, что идентично never.
 */

interface IStudent {}
interface IWorker {}

interface IStudentWorker extends IStudent, IWorker {
    // тут можно расширить или переопределить базовые интерфейсы
}
