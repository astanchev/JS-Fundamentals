function employees(input) {
    let emps = [];

    for (const name of input) {
        let employee = {
            employeeName: name,
            personalNum: name.length
        };

        emps.push(employee);
    }

    emps.forEach(e => console.log(`Name: ${e.employeeName} -- Personal Number: ${e.personalNum}`));
}

employees([
            'Silas Butler',
            'Adnaan Buckley',
            'Juan Peterson',
            'Brendan Villarreal'
        ]);