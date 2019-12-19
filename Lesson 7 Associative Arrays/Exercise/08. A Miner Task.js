function solve(input) {
    let resources = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!resources.has(resource)) {
            resources.set(resource, 0);
        }

        let resourceAmmount = resources.get(resource) + quantity;

        resources.set(resource, resourceAmmount);
    }

    [...resources.entries()].forEach(r => console.log(`${r[0]} -> ${r[1]}`));
}

solve([ 'gold', '155', 'silver', '10', 'copper', '17' ]);
console.log();
solve([
    'gold',   '155',
    'silver', '10',
    'copper', '17',
    'gold',   '15'
  ]);