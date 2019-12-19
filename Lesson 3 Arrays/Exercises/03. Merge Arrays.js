function mergeArray(firstArr, secondArr) {
    let result = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i%2 == 0) {
            result.push(Number(firstArr[i]) + Number(secondArr[i]));
        } else {
            result.push(firstArr[i] + secondArr[i]);
        }                
    }

    console.log(result.join(' - '));
}

mergeArray(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);