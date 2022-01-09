/**
 ====================
 Generic, дженерики
 ====================

 Generic - это аргумент для типа. Как у функции есть аргумент, так и у типа может быть аргумент.

 Generic types работают с:
 - интерфейсами, (interface)
 - типами, (type)
 - алиасами,
 - функциями, (function)
 - классами (class)

*/

//Здесь мы сказали, что интерфейс IAccount принимает некий тип, и присваивает его полю id.

interface IAccount<ID> {
    id: ID; // допустим, в зависимости от бд id может быть либо числом, либо строкой
    name: string;
}

//Как видим, передав подходящий тип, теперь можно динамически гибко описывать новые типы:

const admin: IAccount<string> = {
    id: 'kfdsjlJKLlkdf332df',
    name: 'root',
};

//Ограничение generic типов extends:

interface IAccount<ID extends number | string> {
    id: ID; // допустим, в зависимости от бд id может быть либо числом, либо строкой
    name: string;
}

/** Condition type */

// T extends U ? X : N

type notUndefined<T> = T extends undefined | null ? never : T;

// корректно, строка есть в Generic и строка не undefined или null.
const notUnd: notUndefined<string | undefined | null> = 'abcd';
