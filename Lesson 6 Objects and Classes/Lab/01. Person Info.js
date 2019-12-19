function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    };

    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

personInfo("Peter", "Pan", "20");