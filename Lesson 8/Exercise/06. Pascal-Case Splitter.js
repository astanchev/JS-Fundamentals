function solve(input) {
    let text = input;
    let result = [];
    let start = 0;

    for (let i = 1; i < text.length; i++) {
        const symb = text[i];
        
        let ascii = symb.charCodeAt(0);

        if ( ascii > 64 && ascii < 91) {
            let word = text.substring(start, i);
            result.push(word);
            start = i;
        }

        if (i === text.length - 1) {
            let word = text.substring(start);
            result.push(word);
        }
    }

    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');