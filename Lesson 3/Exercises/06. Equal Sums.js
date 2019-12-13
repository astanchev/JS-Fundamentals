function equalSums(arr) {
    let index = -1;
    let hasElement = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            leftSum += arr[leftIndex];
        }

        for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
            rightSum += arr[rightIndex];
        }

        if (leftSum == rightSum) {
            
            hasElement = true;
            index = i;
            break;
        }
    }

    if (hasElement) {
        console.log(index);
    } else {
        console.log('no');
    }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([1, 2]);
