function towns(input) {
    let townsToPrint = [];

    for (const t of input) {
        let [town, latitude, longitude] = t.split(' | ');

        let townToAdd = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        townsToPrint.push(townToAdd);
    }

    townsToPrint.forEach(t => console.log(t));
}

towns(['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']);