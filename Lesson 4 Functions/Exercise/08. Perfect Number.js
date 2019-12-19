function perfectNumber(number) {
    let resultArr = [];

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            resultArr.push(i);
        }
    }

    let sum = resultArr.reduce((x, y) => x + y, 0);

    console.log(sum !== number ? 
        'It\'s not so perfect.' : 
        'We have a perfect number!');
}

perfectNumber(6);
