function sequences(inputArr) {
    let colectionSet = inputArr
                .reduce((accSet, element) => {
                    let arr = JSON.parse(element)
                                  .sort((a, b) => b - a);
                    let str = JSON.stringify(arr);

                    accSet.add(str);
                    return accSet;
                }, new Set());

    Array.from(colectionSet)
         .map((x) => JSON.parse(x))
         .sort((a, b) => a.length - b.length)
         .forEach((x) => console.log(`[${x.join(', ')}]`));
}

sequences(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
     "[10, 1, -17, 0, 2, 13]",
     "[4, -3, 3, -2, 2, -1, 1, 0]"]);