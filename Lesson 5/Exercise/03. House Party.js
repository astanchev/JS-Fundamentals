function houseParty(inputArr) {
    let guestsArr = [];

    inputArr.forEach((inputCmd) => {
        let name = inputCmd.split(' ')[0];

        if (inputCmd.includes('not')) {

            if (guestsArr.includes(name)) {

                let index = guestsArr.indexOf(name);
                guestsArr.splice(index, 1);

            } else if (!guestsArr.includes(name)) {

                console.log(`${name} is not in the list!`);
            }
        } else {

            if (!guestsArr.includes(name)) {

                guestsArr.push(name);

            } else if (guestsArr.includes(name)) {

                console.log(`${name} is already in the list!`);

            }
        }
    });

    guestsArr.forEach((guest) => console.log(guest));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);