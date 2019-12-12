function sumEvenOdd(input) {
    let arr = input.map(Number);

    let evenSum = arr.filter(x => x % 2 === 0).reduce((prev, curr) => prev + curr, 0);
    let oddSum = arr.filter(x => x % 2 !== 0).reduce((prev, curr) => prev + curr, 0);

    console.log(evenSum - oddSum);
}

sumEvenOdd([3,5,7,9]);
sumEvenOdd([1,2,3,4,5,6]);
