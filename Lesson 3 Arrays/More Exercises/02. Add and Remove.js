function addAndRemove(input) {
    let number = 1;
    let outputArr = [];

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === 'add') {
            outputArr.push(number);
        } else {
            if (outputArr.length > 0) {
                outputArr.pop();
            }
        }

        number++;
    }

    console.log(outputArr.length > 0 ? outputArr.join(' ') : 'Empty');
}

function addAndRemoveElementsFromArray2(commandsArr) {
    let outputArr = commandsArr.reduce((acc, el, idx) => {
        if (el === 'add') {
            acc.push(idx + 1);

        } else if (el === 'remove') {
            acc.pop();
        }

        return acc;
    }, []);

    console.log(outputArr.length > 0 ? outputArr.join(' ') : 'Empty');
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
