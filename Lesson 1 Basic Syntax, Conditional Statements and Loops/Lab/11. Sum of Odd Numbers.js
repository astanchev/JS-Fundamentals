function solve(num) {
    let sum = 0;

    for (let index = 1; index <= 2 * num; index++) {
        if (index % 2 != 0) {
            console.log(index);
            sum += num;
        }
    }

    console.log(`Sum: ${sum}`);
}

solve(5);