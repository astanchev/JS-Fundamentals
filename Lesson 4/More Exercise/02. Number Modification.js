function printModifiedAverage(number) {

    let getAvg = (numString) => numString
                                .split('')
                                .map(Number)
                                .reduce((a, b) => a + b, 0) / numString.length;

    let avg = getAvg(number.toString());

    if (avg >= 5) {
        console.log(number);
    } else {
        number += '9';
        //Recursion
        printModifiedAverage(number);
    }
}

printModifiedAverage(101);
printModifiedAverage(5835);