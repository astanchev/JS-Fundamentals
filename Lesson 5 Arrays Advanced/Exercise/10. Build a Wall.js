function buildAWall(milesArr) {
    let concrateArr = [];
    let min = Math.min(...milesArr);

    for (let i = min; i < 30; i++) {

        let currentDay = 0;
        for (let j = 0; j < milesArr.length; j++) {
            let currentMile = milesArr[j];

            if (currentMile < 30) {
                currentDay += 195;
                milesArr[j]++;
            }
        }

        concrateArr.push(currentDay);
    }

    console.log(concrateArr.join(', '));
    let pesosSpent = concrateArr.reduce((x, y) => x + y, 0) * 1900;
    console.log(`${pesosSpent} pesos`);
}

buildAWall([17, 22, 17, 19, 17]);