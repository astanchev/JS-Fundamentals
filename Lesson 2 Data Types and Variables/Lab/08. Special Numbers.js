function solve(num) {
    for (let index = 1; index <= num; index++) {
        let sum = 0;
        let temp = index;
        
        while (temp !== 0) {
            sum += temp % 10;
            temp = parseInt(temp / 10);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${index} -> True`);
        } else {
            console.log(`${index} -> False`);
        }
    }
}

solve(15);