function lastDigit(number) {

    let digitsObj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    let lastDigit = number % 10;
    console.log(digitsObj[lastDigit]);
}

lastDigit(2598);