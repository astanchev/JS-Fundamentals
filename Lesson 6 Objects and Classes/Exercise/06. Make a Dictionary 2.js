function makeADictionary(inputArr) {
    let dictionaryObj = {};

    for (let productInfo of inputArr) {
        let tokens = JSON.parse(productInfo);

        for (let key in tokens) {
            let term = key;
            let definition = tokens[key];
            dictionaryObj[term] = definition;
        }
    }

    Object.entries(dictionaryObj)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((x) => console.log(`Term: ${x[0]} => Definition: ${x[1]}`));
}