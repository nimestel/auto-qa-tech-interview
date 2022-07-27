import { expect } from 'chai';

function fizzbuzz1() {
    console.log('fizzbuzz 1:');
    for (let i = 0; i < 20; i++) {
        console.log(
            !(i % 5) && !(i % 3)
                ? 'fizzbuzz'
                : !(i % 5)
                ? 'fizz'
                : !(i % 3)
                ? 'buzz'
                : `${i}`
        );
    }
}

function fizzbuzz2() {
    console.log('fizzbuzz 2:');
    for (let i = 0; i < 20; i++) {
        let output = '';
        if (i % 5 === 0) output += 'fizz';
        if (i % 3 === 0) {
            output += 'buzz';
        } else !output ? (output = `${i}`) : output;
        console.log(output);
    }
}

function invert1() {
    console.log('invert string 1:');
    let str = 'tinkoff';
    let inverted = str.split('').reverse().join('');
    console.log(inverted);
}

function invert2() {
    console.log('invert string 2:');
    let str = 'tinkoff';
    let arrStr = str.split('');
    let inverted = [];
    for (let i = 0; i <= arrStr.length; i++) {
        inverted[i] = arrStr[arrStr.length - i];
    }
    console.log(inverted.join(''));
}

function bubbleSort() {
    let arr = [5, 10, 1, 0, 3, 4];
    console.log('arr before:', arr);

    for (let i = 0; i < arr.length - 1; i++) {
        console.log('* i:', i);
        // после первой (i=0) серии проходок наибольшее число всплывет в конец
        // поэтому в цикле j мы уменьшаем число проходок на кол-во вставших на свое место чисел
        for (let j = 0; j < arr.length - i; j++) {
            console.log('j:', j);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            console.log(arr);
        }
    }
    console.log('arr after:', arr);
}

function nativeSort() {
    let arr = [5, 10, 1, 0, 3, 4];
    console.log('arr before:', arr);

    // asc sort
    arr.sort((a, b) => a - b);

    console.log('arr asc sort:', arr);

    // desc sort
    arr.sort((a, b) => b - a);

    console.log('arr desc sort:', arr);
}

function countDuplicatedSymbols(str) {
    const arr = str.split('');
    let duplicatedSymbols = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j] && !checkExistingSymbol(arr[i]))
                duplicatedSymbols.push(arr[i]);
        }
    }
    console.log(duplicatedSymbols.length);
    console.log(duplicatedSymbols);

    function checkExistingSymbol(symbol) {
        return duplicatedSymbols.includes(symbol);
    }
}

function isTicketLucky(ticketNumber) {
    ticketNumber = String(ticketNumber);

    if (ticketNumber.length !== 6) return false;
    const [head, tail] = [
        ticketNumber.substr(0, 3).split(''),
        ticketNumber.substr(3, 6).split(''),
    ];

    function summ(arr) {
        try {
            return arr.reduce((sum, num) => {
                if (!Number.isInteger(Number(num)))
                    throw new Error('В номере билета содержится не цифра!');
                return sum + Number(num);
            }, 0);
        } catch (e) {
            console.log('Произошла ошибка! ', e);
        }
    }
    const headSum = summ(head);
    const tailSum = summ(tail);

    console.log(head, tail);
    console.log(headSum, tailSum);

    return headSum === tailSum;
}

function deleteDuplicatedSymbols(arr) {
    let distinctSymbolsArr = [];
    // for (let i = 0; i <= arr.length - 1; i++) {
    //     if (!checkExistingSymbol(arr[i])) distinctSymbolsArr.push(arr[i]);
    // }

    arr.map((symbol) => {
        if (!checkExistingSymbol(symbol)) distinctSymbolsArr.push(symbol);
    });

    function checkExistingSymbol(symbol) {
        return distinctSymbolsArr.includes(symbol);
    }

    return distinctSymbolsArr;
}

//fizzbuzz1();
//fizzbuzz2();
//invert1();
//invert2();
//bubbleSort();
//nativeSort();
//countDuplicatedSymbols('12q.323.q561'); // 5: 12q.3
//console.log(isTicketLucky(123006));
//console.log(deleteDuplicatedSymbols([1, 1, 2, 3, 3, 4]));

/** impl calculator and tests */

const ErrorMessages = Object.freeze({
    notNumber: 'Please enter args in integer format',
    isNull: 'Please enter second argument not a 0!',
});

class Calculator {
    add(num1, num2) {
        function addition(args) {
            let res = 0;
            [...args].forEach((arg) => (res += arg));
            return res;
        }

        let checkArgInvalid = this.checkArgsInvalid(...arguments);
        return checkArgInvalid ? checkArgInvalid : addition(arguments);
    }
    divide(num1, num2) {
        let checkArgInvalid = this.checkArgsInvalid(...arguments);
        return checkArgInvalid
            ? checkArgInvalid
            : num2 === 0
            ? ErrorMessages.isNull
            : num1 / num2;
    }
    multi(num1, num2) {
        function multiplication(args) {
            let res = 1;
            [...args].forEach((arg) => (res *= arg));
            return res;
        }

        let checkArgInvalid = this.checkArgsInvalid(...arguments);
        return checkArgInvalid ? checkArgInvalid : multiplication(arguments);
    }
    minus(num1, num2) {
        let checkArgInvalid = this.checkArgsInvalid(...arguments);
        return checkArgInvalid ? checkArgInvalid : num1 - num2;
    }

    checkArgsInvalid(...args) {
        function isValid(a) {
            return (Number.isInteger(a) && a) || a === 0;
        }
        if (args.every(isValid)) {
            return false;
        }
        return ErrorMessages.notNumber;
    }
}

const calc = new Calculator();

const data = {
    add: [
        {
            args: [1, 1, 1],
            result: 3,
        },
        {
            args: [0, 0],
            result: 0,
        },
        {
            args: [NaN, 4],
            result: ErrorMessages.notNumber,
        },
        {
            args: [undefined, 0],
            result: ErrorMessages.notNumber,
        },
        {
            args: [null, 5],
            result: ErrorMessages.notNumber,
        },
        {
            args: [99999999, 3],
            result: 100000002,
        },
    ],
    divide: [
        {
            args: [1, 1],
            result: 1,
        },
        {
            args: [1, 0],
            result: ErrorMessages.isNull,
        },
        {
            args: [0, 1],
            result: 0,
        },
        {
            args: [12, 4],
            result: 3,
        },
        {
            args: [4, 100],
            result: 0.04,
        },
    ],
    multi: [
        {
            args: [0, 0],
            result: 0,
        },
        {
            args: [1, 0],
            result: 0,
        },
        {
            args: [2, 3],
            result: 6,
        },
    ],
};

const ConsoleColors = {
    white: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
};

function test(set, operation) {
    console.log(ConsoleColors.white, '==================');
    console.log(ConsoleColors.white, 'operation:', operation);
    console.log(ConsoleColors.white, 'args: ', set.args);
    console.log(ConsoleColors.white, 'expected result: ', set.result);

    const res = calc[operation](...set.args);
    console.log(ConsoleColors.white, 'actual result: ', res);

    expect(res).to.equal(set.result);
    // res === set.result
    //     ? console.log(ConsoleColors.green, 'right answer! :)')
    //     : console.log(ConsoleColors.red, 'wrong answer! :(');
}

Object.keys(data).forEach((operation) => {
    data[operation].forEach((set) => {
        test(set, operation);
    });
});
