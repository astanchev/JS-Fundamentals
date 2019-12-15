function bunnyKill(inputMat) {

    let indexesArr = inputMat
                        .pop()
                        .split(' ');

    let matrix = inputMat
                    .map((row) => row
                                    .split(' ')
                                    .map((x) => +x));

    let [snowballDamage, killedBunnies] = [0, 0];

    for (let tokens of indexesArr) {

        let [bombRow, bombCol] = tokens
                                    .split(',')
                                    .map((x) => +x);
                                    
        let bombValue = matrix[bombRow][bombCol];

        if (bombValue <= 0) {
            continue;
        }

        killedBunnies++;
        snowballDamage += bombValue;

        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(matrix.length - 1, bombRow + 1);

        for (let row = startRow; row <= endRow; row++) {
            let startCol = Math.max(0, bombCol - 1);
            let endCol = Math.min(matrix[row].length - 1, bombCol + 1);

            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] = Math.max(matrix[row][col] - bombValue, 0);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] > 0) {
                killedBunnies++;
                snowballDamage += matrix[row][col];
            }
        }
    }

    console.log(`${snowballDamage}\n${killedBunnies}`);
}

bunnyKill(['5 10 15 20',
           '10 10 10 10',
           '10 15 10 10',
           '10 10 10 10',
           '2,2 0,1']);