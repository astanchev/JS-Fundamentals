function triangle(number) {
    let result = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            result += i + " ";
        }
        console.log(result.trimEnd());
        result = "";
    }
}

triangle(6);