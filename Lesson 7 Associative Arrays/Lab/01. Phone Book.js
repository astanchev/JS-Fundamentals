function phoneBook(input) {
    let pBook = {};

    for (const nameArgs of input) {
        let [name, phone] = nameArgs.split(' ');

        pBook[name] = phone;
    }

    Object.keys(pBook).forEach(k => console.log(`${k} -> ${pBook[k]}`));
}

phoneBook(
    ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);