function solve(input) {

    let junkMaterials = new Map();
    let keyMaterials = new Map([
        ['fragments', 0],
        ['motes', 0],
        ['shards', 0]
    ]);

    let data = input.split(' ');
    for (let i = 0; i < data.length; i += 2) {

        let quantity = Number(data[i]);
        let material = data[i + 1].toLowerCase();

        if (keyMaterials.has(material)) {

            let existingQuantity = keyMaterials.get(material) + quantity;

            keyMaterials.set(material, existingQuantity);

        } else {

            if (!junkMaterials.has(material)) {
                junkMaterials.set(material, 0);
            }

            let existingQuantity = junkMaterials.get(material) + quantity;

            junkMaterials.set(material, existingQuantity);
        }

        if (keyMaterials.get(material) >= 250) {
            let existingQuantity = keyMaterials.get(material);
            keyMaterials.set(material, existingQuantity - 250);

            let itemsMap = new Map([
                ['fragments', 'Valanyr'],
                ['motes', 'Dragonwrath'],
                ['shards', 'Shadowmourne']
            ]);

            console.log(`${itemsMap.get(material)} obtained!`);
            break;
        }
    }

    [...keyMaterials.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((elements) => {
            let [material, quantity] = elements;
            console.log(`${material}: ${quantity}`);
        });

    [...junkMaterials.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((elements) => {
            let [material, quantity] = elements;
            console.log(`${material}: ${quantity}`);
        });
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log();
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');