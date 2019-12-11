function printSum(start, end) {
    let sum = 0;
    let result = "";

    for (let index = start; index <= end; index++) {
        result += index + " ";
        sum += index;
    }

    console.log(result.trimEnd());
    console.log(`Sum: ${sum}`);
}

printSum(5, 10);