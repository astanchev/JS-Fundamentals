function negativePositiveNumbers(input) {
    let result = [];

    input
        .map(Number)
        .forEach(element => element < 0 ? 
                            result.unshift(element) : 
                            result.push(element));

    console.log(result.join('\n'));
}

negativePositiveNumbers([3, -2, 0, -1]);