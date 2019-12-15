function jansNotation(inputArr) {

    let [operandsArr, operatorsArr] = [
        [],
        []
    ];

    let operatorsObj = {
        '+': (firstEl, secondEl) => firstEl + secondEl,
        '-': (firstEl, secondEl) => firstEl - secondEl,
        '*': (firstEl, secondEl) => firstEl * secondEl,
        '/': (firstEl, secondEl) => firstEl / secondEl
    };

    inputArr.forEach(el => {
        if (Number.isInteger(el)) {

            operandsArr.push(el);
            
        } else {

            operatorsArr.push(el);
        }

        if (operandsArr.length >= 2 && operatorsArr.length >= 1) {
            let secondEl = operandsArr.pop();
            let firstEl = operandsArr.pop();
            let operator = operatorsArr.pop();

            let result = operatorsObj[operator](firstEl, secondEl);

            operandsArr.push(result);
        }
    });

    if (operandsArr.length > 1) {
        console.log('Error: too many operands!');

    } else if (operatorsArr.length > 0) {
        console.log('Error: not enough operands!');

    } else {
        console.log(operandsArr.toString());
    }
}

jansNotation([5, 3, 4, '*', '-']);