function sorting(input) {

    input.sort((a, b) => b - a);

    let result = [];

    while (input.length > 0) {

        let maxNum = input.shift();
        let minNum = input.pop();

        result.push(maxNum, minNum);
    }

    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
