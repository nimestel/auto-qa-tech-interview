/**
 *  Перегрузка функций
    - возможность создавать несколько одноименных функций с разными реализациями

      Сигнатура имплементации всегда последняя и обобщает предыдущие сигнатуры.

      Это позволяет ограничить варианты использования функции, например, в примере ниже, мы
    разрешили 2 или 3 аргумента с определенным порядком.
 */

function sum(a: number, b: string): string;
function sum(a: number, b: number, c: string): string;
function sum(a: string, b: number): string;

function sum(...args: (string | number)[]): number {
    let result = 0;
    for (let n of args) {
        result += Number(n);
    }
    return result;
}

console.log(sum(1, '2'));
console.log(sum(1, 2, '3'));
console.log(sum('1', 2));
