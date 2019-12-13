function maxEqualElSeq(array) {
    let number = 0;
    let currentLenght = 1;
    let maxLenght = 1;

    for (let i = 0; i < array.length - 1; i++) {
        
        if (array[i] === array[i + 1]) {
            currentLenght++;
        } else {
            currentLenght = 1;
        }

        if (currentLenght > maxLenght) {            
            maxLenght = currentLenght;
            number = array[i];
        }
    }

    let result = Array(maxLenght);
    result.fill(number, 0, maxLenght);

    console.log(result.join(' '));
}

maxEqualElSeq([0, 1, 1, 5, 2, 2, 6, 3, 3]);