function sortNumbers(firstNum, secondNum, thirdNum) {

    let input = [firstNum, secondNum, thirdNum];
    let result = input.sort((a, b) => b - a).join('\n');

    console.log(result);
}

sortNumbers(2, 1, 3);