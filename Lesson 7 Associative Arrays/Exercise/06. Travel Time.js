function solve(input) {
    let countries = new Map();

    for (const countryArgs of input) {
        let [country, town, cost] = countryArgs.split(' > ');

        if (!countries.has(country)) {
            countries.set(country, new Map());
        }

        let oldTowns = countries.get(country);

        if (!oldTowns.has(town)) {
            oldTowns.set(town, Number(cost));
        }

        let newCosts = Number(oldTowns.get(town)) < Number(cost) ?
            Number(oldTowns.get(town)) :
            Number(cost);

        oldTowns.set(town, newCosts);


        countries.set(country, oldTowns);
    }

    let sortedCountries = Array
        .from(countries.entries())
        .sort((c1, c2) => c1[0].localeCompare(c2[0]));

    sortedCountries.forEach(c => {
        let output = `${c[0]} -> `;
        let sortedTowns = Array
            .from(c[1].entries())
            .sort((t1, t2) => t1[1] - t2[1]);

        sortedTowns.forEach(t => output += `${t[0]} -> ${t[1]} `);

        console.log(output.trimEnd());
    });
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);