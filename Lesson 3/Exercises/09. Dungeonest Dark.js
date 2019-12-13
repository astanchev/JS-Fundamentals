function dungeonestDark(inputArr) {

    let roomsArr = inputArr.toString().split('|');
    let [health, coins] = [100, 0];

    for (let room = 0; room < roomsArr.length; room++) {
        let [itemMonster, points] = roomsArr[room]
                                        .split(' ')
                                        .map((x) => isNaN(x) ? x : Number(x));

        switch (itemMonster) {
            case 'potion':
                let gained = Math.min(points, 100 - health);
                health += gained;
                console.log(`You healed for ${gained} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                coins += points;
                console.log(`You found ${points} coins.`);
                break;

            default:
                health -= points;
                if (health > 0) {
                    console.log(`You slayed ${itemMonster}.`);
                } else if (health <= 0) {
                    console.log(`You died! Killed by ${itemMonster}.`);
                    return console.log(`Best room: ${room + 1}`);
                }
                break;
        }
    }
 
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
}

dungeonestDark('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');