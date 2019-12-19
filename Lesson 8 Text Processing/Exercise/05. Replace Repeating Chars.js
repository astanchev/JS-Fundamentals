function solve(input) {
    let text = [];
    let char = input[0];
    text.push(char);

    for (let i = 1; i < input.length; i++) {
        const symb = input[i];
        
        if (symb !== char) {
            text.push(symb);
            char = symb;
        }
    }

    console.log(text.join(''));
}

solve('aaaaabbbbbcdddeeeedssaa');