 function spiceMustFlow(initialYield) {

    let [dailyConsume, dailyYield, daysCounter, totalAmount] = [26, 10, 0, 0];

    while (initialYield >= 100) {
        daysCounter++;
        totalAmount += initialYield;
        initialYield -= dailyYield;
        totalAmount = Math.max(totalAmount - dailyConsume, 0);
    }

    totalAmount = Math.max(totalAmount - dailyConsume, 0);
    console.log([daysCounter, totalAmount].join('\n'));
}

spiceMustFlow(111);
