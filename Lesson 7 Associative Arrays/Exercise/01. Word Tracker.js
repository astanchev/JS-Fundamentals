function solve(input) {
    let words = input.shift().split(' ');

    let result = {};

    words.forEach(w => result[w] = 0);

    input.forEach(w => {
        if (result.hasOwnProperty(w)) {
            result[w]++;
        }
    });

    Object
        .keys(result)
        .sort((k1, k2) => result[k2] - result[k1])
        .forEach(k => console.log(`${k} - ${result[k]}`));
}

solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the','words','this','and','sentence','because','this','is','your','task'
    ]);