function airPollution(inputMat, commandsArr) {

    let commandsObj = {
        'breeze': function breezeIt(index, matrix) {
            for (let col = 0; col < matrix.length; col++) {
                matrix[index][col] = Math.max(matrix[index][col] - 15, 0);
            }
        },
        'gale': function galeIt(index, matrix) {
            for (let row = 0; row < matrix.length; row++) {
                matrix[row][index] = Math.max(matrix[row][index] - 20, 0);
            }
        },
        'smog': function smogIt(value, matrix) {
            for (let row = 0; row < matrix.length; row++) {

                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] += value;
                }
            }
        }
    };

    let matrix = inputMat
                    .map((row) => row
                                    .split(' ')
                                    .map(Number));

    commandsArr.forEach((tokens) => {
        let [command, quantity] = tokens.split(' ');
        commandsObj[command](Number(quantity), matrix);
    });

    let outputArr = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] >= 50) {
                outputArr.push(`[${row}-${col}]`);
            }
        }
    }

    console.log(outputArr.length > 0 ? 
        `Polluted areas: ${outputArr.join(', ')}` : 
        'No polluted areas');
}

airPollution(["5 7 72 14 4",
              "41 35 37 27 33",
              "23 16 27 42 12",
              "2 20 28 39 14",
              "16 34 31 10 24"],
            ["breeze 1", "gale 2", "smog 25"]);