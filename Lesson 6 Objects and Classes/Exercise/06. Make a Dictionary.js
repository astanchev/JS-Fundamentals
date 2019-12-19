function makeDictionary(inputJson) {
    let terms = [];

    for (const string of inputJson) {
        let result = JSON.parse(string);
        let objectKeys = Object.keys(result);

        for (const key of objectKeys) {
            let term = {
                term: key,
                definition: result[key]
            };

            let termToUpdate = terms.find(t => t.term === key);
            
            if (termToUpdate === undefined) {

                terms.push(term);
            } else {
                termToUpdate.definition = result[key];
            }            
        }
    }

    terms = terms.sort((a, b) => (a.term).localeCompare(b.term));

    for (const term of terms) {
        console.log(`Term: ${term.term} => Definition: ${term.definition}`);
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );