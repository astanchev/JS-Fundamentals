function solve(input) {
    let facesMap = new Map([['2', 2], ['3', 3], ['4', 4],
    ['5', 5], ['6', 6], ['7', 7], ['8', 8], ['9', 9],
    ['10', 10], ['J', 11], ['Q', 12], ['K', 13], ['A', 14]]);

    let suitsMap = new Map([['S', 4], ['H', 3], ['D', 2], ['C', 1]]);

    let calculateSum = function (cardsArr) {
        
        let sum = 0;

        cardsArr.forEach((card) => {
            let firstPart = card.substring(0, card.length - 1);
            let secondPart = card.substring(card.length - 1);

            let firstPartValue = facesMap.get(firstPart);
            let secondPartValue = suitsMap.get(secondPart);

            sum += firstPartValue * secondPartValue;
        });

        return sum;
    };

    let players = new Map();

    for (const playerArgs of input) {
        let [player, cardArgs] = playerArgs.split(': ');
        let newCards = new Set(cardArgs.split(', ')); 

        if (!players.has(player)) {
            players.set(player, newCards);
        } else {
            let oldCards = players.get(player);
            newCards.forEach(c => oldCards.add(c));
            players.set(player, oldCards);
        }
    }

    Array.from(players.entries()).forEach(p => {
        let name = p[0];
        let sumCards = calculateSum(Array.from(p[1]));

        return console.log(`${name}: ${sumCards}`);
    });
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);