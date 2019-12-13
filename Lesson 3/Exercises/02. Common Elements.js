function commonElements(firstArr, secondArr) {
    firstArr
        .filter(v => secondArr.indexOf(v) !== -1)
        .forEach(v => console.log(v));
}