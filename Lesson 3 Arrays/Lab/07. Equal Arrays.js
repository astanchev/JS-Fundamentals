function equalArrays(input1, input2) {
    let firstArr = input1.map(Number);
    let secondArr = input2.map(Number);

    let sum = 0;
    let areEqual = true;

    for (let index = 0; index < firstArr.length; index++) {
        if (firstArr[index] !== secondArr[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            areEqual = false;
            break;
        }

        sum += firstArr[index];
    } 

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }    
}

equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['10','20','30'], ['10','20','30']);
