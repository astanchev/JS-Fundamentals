function digitsWithWords(digitAsWord) {
    
    let wordsObj = {
        'nine': 9,
        'eight': 8,
        'seven': 7,
        'six': 6,
        'five': 5,
        'four': 4,
        'three': 3,
        'two': 2,
        'one': 1,
        'zero': 0
    };

    let digitAsNumber = wordsObj[digitAsWord];
    console.log(digitAsNumber);
}