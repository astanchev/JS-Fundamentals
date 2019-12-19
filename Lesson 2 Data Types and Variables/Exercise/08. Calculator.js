function calculator(firstNumber, operator, secondNumber) {

    let computeObj = {
        '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
        '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
        '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
        '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
        '%': (firstNumber, secondNumber) => firstNumber % secondNumber
    };

    let result = computeObj[operator](firstNumber, secondNumber);
    console.log(result.toFixed(2));
}