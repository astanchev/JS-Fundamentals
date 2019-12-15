function arrayManipulator(array, commandsArray) {

    for (let i = 0; i < commandsArray.length; i++) {

        let commandArgs = commandsArray[i].split(/ /);
        let command = commandArgs.shift();

        let [index, element, positions] = [0, 0, 0];
        let elements = [];

        if (command === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
            break;
        }            

        switch (command) {
            case 'add':
                index = Number(commandArgs[0]);
                element = Number(commandArgs[1]);
                addNumber(index, element);
                break;

            case 'addMany':
                index = Number(commandArgs.shift());
                elements = commandArgs.map(Number);
                addMany(index, elements);
                break;

            case 'contains':
                element = Number(commandArgs[0]);
                contains(element);
                break;

            case 'remove':
                index = Number(commandArgs[0]);
                removeNumber(index);
                break;

            case 'shift':
                positions = Number(commandArgs[0]);
                shift(positions);
                break;

            case 'sumPairs':
                sumPairs();
                break;

            default:
                break;
        }
    }

    function addNumber(index, element) {
        array.splice(index, 0, element);
    }

    function addMany(index, elements) {
        array.splice(index, 0, ...elements);
    }

    function contains(element) {
        console.log(array.indexOf(element));
    }

    function removeNumber(index) {
        array.splice(index, 1);
    }

    function shift(positions) {
        for (let i = 0; i < positions; i++) {
            let el = array.shift();
            array.push(el);
        }
    }

    function sumPairs() {
        let resultArray = array
                            .reduce((acc, num, idx) => { 
                                idx % 2 === 0 ? 
                                acc.push(num) : 
                                acc[acc.length - 1] += num;
                                
                                return acc;
                            }, []);

        array = resultArray.slice(0);
    }
}

//arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);