function solve(input) {
    let map = new Map();

    for (const word of input) {

        if (!map.has(word)) {
            map.set(word, 0);
        }

        map.set(word, map.get(word) + 1);
    }

    let sorted = Array.from(map).sort((w1, w2) => w2[1] - w1[1]);

    sorted.forEach(w => console.log(`${w[0]} -> ${w[1]} times`));
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);