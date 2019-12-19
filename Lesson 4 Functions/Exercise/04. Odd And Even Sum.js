function oddAndEvenSum(inputNum) {
    let digits = inputNum.toString().split('').map(Number);

    let oddSum = digits
                    .filter((num) => num % 2 === 1)
                    .reduce((acc, num) => acc + num, 0);

    let evenSum = digits
                    .filter((num) => num % 2 === 0)
                    .reduce((acc, num) => acc + num, 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);