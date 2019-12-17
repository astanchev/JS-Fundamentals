function heroRegister(input) {
    let heroes = [];
    
    for (const command of input) {
        let [heroName, heroLevel, itemList] = command.split(' / ');
        let items = itemList.split(', ');

        let hero = {
            heroName,
            heroLevel: Number(heroLevel),
            items: items.sort((a, b) => a.localeCompare(b))
        };

        heroes.push(hero);
    }

    heroes = heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.heroName}\nlevel => ${hero.heroLevel}\nitems => ${hero.items.join(', ')}`);
    }
}

heroRegister([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);