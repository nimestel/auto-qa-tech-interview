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

//fizzbuzz1();
//fizzbuzz2();
//invert1();
//invert2();