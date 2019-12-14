function pointsValidation(inputArr) {

    function checkDistance(numbersArr) {
        let [x1, y1, x2, y2] = numbersArr;
        let x = x1 - x2;
        let y = y1 - y2;

        let number = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        let isValid = Number.isInteger(number) ? 'valid' : 'invalid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
    }

    let [x1, y1, x2, y2] = inputArr;

    checkDistance([x1, y1, 0, 0]);
    checkDistance([x2, y2, 0, 0]);
    checkDistance([x1, y1, x2, y2]);
}

pointsValidation([2, 1, 1, 1]);