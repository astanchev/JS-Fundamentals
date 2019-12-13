function ladybugs(inputArr) {

    let fieldSize = Number(inputArr.shift());
    let initialIndexes = inputArr
                            .shift()
                            .split(' ')
                            .map(Number)
                            .filter(x => x >= 0 && x < fieldSize);
    let ladybugField = [];

    for (let i = 0; i < fieldSize; i++) {
        
        if (initialIndexes.includes(i)) {
            ladybugField[i] = 1;

        } else if (!initialIndexes.includes(i)) {
            ladybugField[i] = 0;
        }
    }

    for (let i = 0; i < inputArr.length; i++) {

        let tokens = inputArr[i].split(' ');
        let index = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (ladybugField[index] === 1) {
            ladybugField[index] = 0;

            while (index >= 0 && index < fieldSize) {

                if (direction === 'right') {
                    index += flyLength;
    
                } else if (direction === 'left') {
                    index -= flyLength;
                }
    
                if (ladybugField[index] === 0) {
                    ladybugField[index] = 1;
                    break;
                }
            }
        }
    }

    console.log(ladybugField.join(' '));
}

ladybugs([ 5, '3', '3 left 2', '1 left -2']);