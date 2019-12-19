function tseamAccount(inputArr) {
    let games = inputArr.shift().split(' ');

    for (let i = 0; i < inputArr.length - 1; i++) {
        let [action, game] = inputArr[i].split(' ');

        switch (action) {
            case 'Install':
                if (!games.includes(game)) {

                    games.push(game);
                }
                break;

            case 'Uninstall':
                if (games.includes(game)) {

                    let uninstallIndex = games.indexOf(game);
                    games.splice(uninstallIndex, 1);
                }
                break;

            case 'Update':
                if (games.includes(game)) {

                    let updateIndex = games.indexOf(game);
                    let updateGame = games[updateIndex];
                    games.splice(updateIndex, 1);
                    games.push(updateGame);
                }
                break;

            case 'Expansion':
                let [neededGame, expansionGame] = game.split('-');

                if (games.includes(neededGame)) {

                    let expansionIndex = games.indexOf(neededGame);
                    games.splice(expansionIndex + 1, 0, `${neededGame}:${expansionGame}`);
                }
                break;
                
            default:
                break;
        }
    }

    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);