function sumEven(input) {
    let arr = input.map(Number).filter(x => x % 2 === 0);
    let sum = arr.reduce((a,b) => a + b, 0);
    
    console.log(sum);
}

sumEven(['1', '2', '3', '4', '5', '6']);