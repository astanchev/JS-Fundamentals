function solve(input) {
    let map = new Map();
    let neighborhoods = input
        .shift()
        .split(', ')
        .forEach(n => map.set(n, []));

    for (const neighborhoodArgs of input) {
        let [neighborhood, name] = neighborhoodArgs.split(' - ');

        if (!map.has(neighborhood)) {
            continue;
        }
        let people =map.get(neighborhood);
        people.push(name);
        map.set(neighborhood, people);
    }

    let sorted = Array.from(map.entries())
        .sort((n1, n2) => n2[1].length - n1[1].length);

    for (const neighborhood of sorted) {
        console.log(`${neighborhood[0]}: ${neighborhood[1].length}`);
        neighborhood[1].forEach(e => console.log(`--${e}`));
    }
}

solve(
    ['Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy'
    ]);