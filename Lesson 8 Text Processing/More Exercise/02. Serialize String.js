function solve(input) {
    let text = input[0];
    let serializor = {};

    for (let i = 0; i < text.length; i++) {
        const symb = text[i];
        
        if (!serializor.hasOwnProperty(symb)) {
            serializor[symb] = [];
        }

        serializor[symb].push(i);
    }

    Object.entries(serializor).forEach(s => console.log(`${s[0]}:${s[1].join('/')}`));
}

solve([ 'abababa', '' ]);