function solve(number) {
    for (let i = 0; i < number; i++) {
        let x = String.fromCharCode(i + 97);

        for (let j = 0; j < number; j++) {
            let y = String.fromCharCode(j + 97);

            for (let k = 0; k < number; k++) {
                let z = String.fromCharCode(k + 97);

                console.log(x + y + z);
            }
        }
    }
}

solve(3);