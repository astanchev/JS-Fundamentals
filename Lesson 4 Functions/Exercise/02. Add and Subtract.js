function addSubtract(a, b, c) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    let result = subtract(sum(a, b), c);

    console.log(result);
}

addSubtract(23, 6, 10);