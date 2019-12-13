function addSubtract(arr) {
    let modifiedArr = arr.map(x => x % 2 === 0 ?
        x + arr.indexOf(x) :
        x - arr.indexOf(x));

    console.log(modifiedArr);

    console.log(arr.reduce((a, b) => a+b, 0));
    console.log(modifiedArr.reduce((a, b) => a+b, 0));
}

addSubtract([5, 15, 23, 56, 35]);