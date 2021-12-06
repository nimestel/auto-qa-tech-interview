function fizzbuzz1() {
    console.log('fizzbuzz 1:');
    for (let i = 0; i < 20; i++) {
        console.log(
            !(i % 5) && !(i % 3) ? 'fizzbuzz' : !(i % 5) ? 'fizz' : !(i % 3) ? 'buzz' : `${i}`
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

//fizzbuzz1();
//fizzbuzz2();
//invert1();
//invert2();
//bubbleSort();
//nativeSort();
