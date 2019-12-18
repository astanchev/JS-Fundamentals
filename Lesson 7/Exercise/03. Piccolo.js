function solve(input) {
    let parking = new Set();

    for (const carArgs of input) {
        let [direction, number] = carArgs.split(', ');

        if (direction === 'IN') {
            parking.add(number);
        } else if (direction === 'OUT' && parking.has(number)) {
            parking.delete(number);
        }
    }

    Array.from(parking.keys()).sort().forEach(k => console.log(k));
}

solve(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);