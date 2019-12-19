function gladiatorExpenses(arg1, arg2, arg3, arg4, arg5) {
    
    let [gamesCount, headsetPrice, mousePrice, keyboardPrice, displayPrice] =
        [arg1, arg2, arg3, arg4, arg5];

    let headsetSum = Math.trunc(gamesCount / 2) * headsetPrice;
    let mouseSum = Math.trunc(gamesCount / 3) * mousePrice;
    let keyboardSum = Math.trunc(gamesCount / 6) * keyboardPrice;
    let displaySum = Math.trunc(gamesCount / 12) * displayPrice;
    let cost = headsetSum + mouseSum + keyboardSum + displaySum;

    console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);