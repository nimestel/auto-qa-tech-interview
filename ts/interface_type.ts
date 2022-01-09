/**
     [type, interface, и {} ]

     Типизировать можно через type, interface или { присвоение типов полей }.

     Класс может имплементировать как тип, так и интерфейс. Типы и интерфейсы можно смешивать с
 помощью объединения &.
     Отличие в том, что интерфейс всегда описывает объект, а type может описать примитив.
*/

type Point = {
    x: number;
    y: number;
};

interface IPoint {
    x: number;
    y: number;
}

const point1: Point = { x: 1, y: 1 };

const point2: IPoint = { x: 1, y: 1 };

const point3: {
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
