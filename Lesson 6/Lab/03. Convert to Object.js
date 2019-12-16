function convertToObject(inputJson) {
    let person = JSON.parse(inputJson);

    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');