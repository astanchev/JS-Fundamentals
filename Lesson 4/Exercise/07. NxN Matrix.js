function printMatrix(number) {

    let row = Array(number);
    row.fill(number); 

    for (let i = 0; i < number; i++) {
        console.log(row.join(' '));
    }
}

printMatrix(3);