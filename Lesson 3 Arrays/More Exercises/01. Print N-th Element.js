function printNthElement(input) {
    let step = Number(input.pop());
    let result = [];

    for (let i = 0; i < input.length; i += step) {
        result.push(input[i]);
    }

    console.log(result.join(' '));
}

printNthElement(['dsa', 'asd', 'test', 'test', '2']);

function printNthElement2(inputArr) {
    let step = Number(inputArr.pop());

    let outputArr = inputArr.reduce((acc, el, idx) => {
        if (idx % step === 0) {
            acc.push(el);
        }

        return acc;
    }, []);

    console.log(outputArr.join(' '));
}

printNthElement2(['dsa', 'asd', 'test', 'test', '2']);