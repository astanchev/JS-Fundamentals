function rosettaStone(inputArr) {

    let stone = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let length = Number(inputArr.shift());
    let templateMatrix = [];

    for (let index = 0; index < length; index++) {

        let arrayEl = inputArr
                        .shift()
                        .split(' ')
                        .map((x) => Number(x));

        templateMatrix.push(arrayEl);
    }

    let encodedMatrix = inputArr
                            .map((row => row
                                            .split(' ')
                                            .map((x) => +x)));

    let decodedMatrix = [];

    for (let row = 0; row < encodedMatrix.length; row++) {
        for (let col = 0; col < encodedMatrix[row].length; col++) {

            let encodedNumber = encodedMatrix[row][col];
            let rowIndex = row % templateMatrix.length;
            let colIndex = col % templateMatrix[0].length;

            let templateNumber = templateMatrix[rowIndex][colIndex];
            let stoneIndex = (encodedNumber + templateNumber) % stone.length;
            decodedMatrix.push(stone[stoneIndex]);
        }
    }

    console.log(decodedMatrix.join('').trim());
}

rosettaStone([ '2',
               '59 36',
               '82 52',
               '4 18 25 19 8',
               '4 2 8 2 18',
               '23 14 22 0 22',
               '2 17 13 19 20',
               '0 9 0 22 22' ]);