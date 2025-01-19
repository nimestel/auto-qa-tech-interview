/** Встроенные структуры данных в TypeScript/JavaScript */

/** 1. Массив (Array)

Массивы — это упорядоченные коллекции элементов. Они поддерживают методы для добавления, удаления и поиска элементов.

#### Основные методы:

- push(): Добавляет элемент в конец массива.
- pop(): Удаляет последний элемент массива.
- shift(): Удаляет первый элемент массива.
- unshift(): Добавляет элемент в начало массива.
- slice(): Возвращает новый массив, содержащий часть исходного.
- splice(): Изменяет массив, удаляя или добавляя элементы.
*/

/** Пример задачи: Найти второй максимальный элемент в массиве. */
function secondMax(arr: number[]): number {
    const sorted = [...arr].sort((a, b) => b - a);
    return sorted[1];
}

console.log(secondMax([3, 5, 1, 7, 2])); // 5

/** 2. Set

Set — это коллекция уникальных значений. Он полезен для удаления дубликатов и проверки наличия элемента.

#### Основные методы:
- add(): Добавляет элемент.
- has(): Проверяет, есть ли элемент.
- delete(): Удаляет элемент.
- size: Возвращает количество элементов.
*/

/** Пример задачи: Удалить дубликаты из массива. */
function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

/** 3. Map

Map — это коллекция пар ключ-значение. Ключи могут быть любого типа (в отличие от объектов, где ключи — только строки или символы).

#### Основные методы:
- set(): Добавляет пару ключ-значение.
- get(): Возвращает значение по ключу.
- has(): Проверяет, есть ли ключ в Map.
- delete(): Удаляет пару по ключу.
- size: Возвращает количество пар.
*/

/** Пример задачи:  Подсчитать количество вхождений каждого элемента в массиве. */
function countOccurrences(arr: number[]): Map<number, number> {
    const map = new Map<number, number>();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return map;
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3])); // Map { 1 => 1, 2 => 2, 3 => 3 }

/** 4. Объект (Object)

Объекты — это коллекции пар ключ-значение, где ключи — это строки или символы. Они часто используются как простые хэш-таблицы.

#### Основные методы:
- Доступ через точку или квадратные скобки: obj.key или obj["key"].
- Object.keys(obj): Возвращает массив ключей.
- Object.values(obj): Возвращает массив значений.
- Object.entries(obj): Возвращает массив пар [ключ, значение].
*/

/** Пример задачи: Найти ключ с максимальным значением в объекте. */
function keyWithMaxValue(obj: { [key: string]: number }): string | null {
    let maxKey: string | null = null;
    let maxValue = -Infinity;

    // @ts-ignore
    for (const [key, value] of Object.entries(obj)) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }

    return maxKey;
}

console.log(keyWithMaxValue({ a: 1, b: 2, c: 3 })); // "c"

/** 5. WeakMap и WeakSet

- WeakMap: Аналог Map, но ключи могут быть только объектами. Элементы автоматически удаляются, если на них больше нет ссылок.
- WeakSet: Аналог Set, но хранит только объекты. Элементы также автоматически удаляются, если на них больше нет ссылок.

/** Пример использования WeakMap: */
const weakMap = new WeakMap<object, string>();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // "value"

/** 6. TypedArray (например, Int32Array, Uint8Array)

TypedArray — это массивоподобные структуры для работы с бинарными данными. Они полезны для задач, связанных с производительностью.

/** Пример использования TypedArray: */
const intArray = new Int32Array([1, 2, 3]);
console.log(intArray[1]); // 2

/** Итог:

- Массивы - для работы с упорядоченными данными.
- Set - для хранения уникальных значений.
- Map - для хранения пар ключ-значение с любыми типами ключей.
- Объект - для простых пар ключ-значение (ключи — строки или символы).
- WeakMap/WeakSet - для хранения объектов с автоматической очисткой.
- TypedArray - для работы с бинарными данными.

*/

/** Пример задачи с использованием Map и Set:  Проверить, является ли строка анаграммой другой строки. */

function isAnagram(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;

    const map = new Map<string, number>();

    for (const char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of s2) {
        if (!map.has(char)) return false;

        map.set(char, map.get(char)! - 1);

        if (map.get(char)! === 0) map.delete(char);
    }

    return map.size === 0;
}

console.log(isAnagram('anagram', 'nagaram')); // true
