function charactersInRange(firstChar, secondChar) {
    let firstNum = firstChar.charCodeAt(0);
    let secondNum = secondChar.charCodeAt(0);

    let minNum = Math.min(firstNum, secondNum);
    let maxNum = Math.max(firstNum, secondNum);

    let charsArr = [];
    for (let i = minNum + 1; i < maxNum; i++) {
        let charEl = String.fromCharCode(i);
        charsArr.push(charEl);
    }

    console.log(charsArr.join(' '));
}