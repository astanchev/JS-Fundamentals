function solve(text, word) {
    let count = text
                    .split(' ')
                    .filter(x => x === word)
                    .length;
                    
    console.log(count);
}

solve("This is a word and it also is a sentence", "is");