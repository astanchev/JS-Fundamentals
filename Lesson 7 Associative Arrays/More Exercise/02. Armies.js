function solve(input) {
    let leadersMap =  new Map();

    for (const commandArgs of input) {
    
        if (commandArgs.includes('arrives')) {
            let leader = commandArgs.split(/ arrives/g)[0];

            if (!leadersMap.has(leader)) {
                leadersMap.set(leader, new Map());
            }
        } else if (commandArgs.includes(':')) {
            let [leader, armyName, armyCount] = commandArgs.split(/:\s|,\s/);

            if (leadersMap.has(leader)) {
                leadersMap.get(leader).set(armyName, Number(armyCount));
            }
        } else if (commandArgs.includes('+')) {
            let [armyName, armyCount] = commandArgs.split(/\s\+\s/);

            [...leadersMap.entries()].forEach((leaderArr) => {
                let [leader, armyMap] = leaderArr;

                if (armyMap.has(armyName)) {
                    let existingArmy = armyMap.get(armyName);
                    armyMap.set(armyName, existingArmy + Number(armyCount));
                }
            });
        } else if (commandArgs.includes('defeated')) {
            let leader = commandArgs.split(/ defeated/g)[0];

            if (leadersMap.has(leader)) {
                leadersMap.delete(leader);
            }
        }
    }

    function computeArmyCount(armyCount) {
        return armyCount.reduce((a, b) => a + b, 0);
    }

    Array.from(leadersMap.entries())
        .sort((armyMapA, armyMapB) => {
            let armyCountA = Array.from(armyMapB[1].values());
            let armyCountB = Array.from(armyMapA[1].values());
            return computeArmyCount(armyCountA) - computeArmyCount(armyCountB);
        })
        .forEach((leaderArr) => {

            let [leader, armyMap] = leaderArr;
            let armyCount = computeArmyCount([...armyMap.values()]);
            console.log(`${leader}: ${armyCount}`);

            Array.from(armyMap.entries())
                .sort((a, b) => b[1] - a[1])
                .forEach((armyArr) => {

                    let [army, count] = armyArr;
                    console.log(`>>> ${army} - ${count}`);
                });
        });
}

solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
  ]);