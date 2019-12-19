function bombNumbers(numbersArr, bombPower) {

    let [bomb, power] = bombPower;

    for (let i = 0; i < numbersArr.length; i++) {

        let element = numbersArr[i];

        if (element === bomb) {

            let start = Math.max(i - power, 0);
            let end = Math.min(i + power, numbersArr.length - 1);

            numbersArr.splice(start, end - start + 1);

            i = -1;
        }
    }

    let sum = numbersArr.reduce((a, b) => a + b, 0);

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);