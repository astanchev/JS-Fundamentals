function distinctArray(input) {
    let distinctValues = [...new Set(input)];

    console.log(distinctValues.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);