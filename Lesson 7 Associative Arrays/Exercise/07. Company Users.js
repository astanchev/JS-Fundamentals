function solve(input) {
    let companies = new Map();

    for (const companyArgs of input) {
        let [company, id] = companyArgs.split(' -> ');

        if (!companies.has(company)) {
            companies.set(company, new Set());            
        }

        let ids = companies.get(company);
        ids.add(id);

        companies.set(company, ids);
    }

    let sortedCompanies = Array
                            .from(companies.entries())
                            .sort((c1, c2) => c1[0].localeCompare(c2[0]));

    sortedCompanies.forEach(c => {
        console.log(c[0]);
        [...c[1]].forEach(id => console.log(`-- ${id}`))
    });                            
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);