function bitcoinMining(shiftsYields) {
    let [bitcoinPrice, goldPrice] = [11949.16, 67.51];
    let [day, sum] = [0, 0];

    for (let i = 0; i < shiftsYields.length; i++) {

        let currentGold = shiftsYields[i];
        if ((i+1) % 3 === 0) {
            currentGold *= 0.70;
        }

        sum += currentGold * goldPrice;
        if (sum >= bitcoinPrice && day === 0) {
            day = i+1;
        }
    }

    let bitcoinsCount = Math.trunc(sum / bitcoinPrice);
    console.log(`Bought bitcoins: ${bitcoinsCount}`);

    if (day !== 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }

    let leftSum = sum - bitcoinsCount * bitcoinPrice;
    console.log(`Left money: ${leftSum.toFixed(2)} lv.`);
}

bitcoinMining([100,200,300]);