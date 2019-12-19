function calculator(a, b, operator) {

    let calculatorObj = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    };

    return calculatorObj[operator](a, b);
}

console.log(calculator(5, 5, 'multiply'));