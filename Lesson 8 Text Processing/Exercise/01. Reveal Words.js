function solve(wordsArgs, text) {
    let words = wordsArgs.split(', ');

    for (const word of words) {
        text = text.replace('*'.repeat(word.length), word);
    }

    console.log(text);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages');