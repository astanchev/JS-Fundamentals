function rotateArray(inputArr) {
    let counter = Number(inputArr.pop());

    for (let i = 0; i < counter % inputArr.length; i++) {
        let lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }

    console.log(inputArr.join(' '));
}