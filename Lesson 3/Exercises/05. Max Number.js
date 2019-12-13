function maxNumber(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let isMax = true;

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];

            if (element <= nextElement) {
                isMax = false;
            }
        }

        if (isMax) {
            result.push(element);
        }
    }

    console.log(result.join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);
maxNumber([14, 24, 3, 19, 15, 17]);