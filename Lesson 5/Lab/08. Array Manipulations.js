function arrayManipulation(input) {
    var array = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        let commandArgs = input[i].split(' ');

        let command = commandArgs[0];
        let [number, index] = [0, 0];

        switch (command) {
            case 'Add':
                number = Number(commandArgs[1]);
                addNumber(number);
                break;

            case 'Remove':
                number = Number(commandArgs[1]);
                removeNumber(number);
                break;

            case 'RemoveAt':
                index = Number(commandArgs[1]);
                removeAtIndex(index);
                break;

            case 'Insert':
                number = Number(commandArgs[1]);
                index = Number(commandArgs[2]);
                insertNumberAtIndex(number, index);
                break;

            default:
                break;
        }
    }

    console.log(array.join(' '));

    function addNumber(number) {
        array.push(number);
    }

    function removeNumber(number) {
        array = array.filter(x => x !== number);
    }

    function removeAtIndex(index) {
        array.splice(index, 1);
    }

    function insertNumberAtIndex(number, index) {
        array.splice(index, 0, number);
    }
}

arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);