function train(input) {
    let wagons = input
                    .shift()
                    .split(' ')
                    .map(Number);

    let maxCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        let passangers = 0;
        
        if (commandArgs[0] === 'Add') {
            passangers = Number(commandArgs[1]);
            wagons.push(passangers);
        } else {
            passangers = Number(commandArgs[0]);
            addPassangersToWagon(passangers);
        }
    }

    console.log(wagons.join(' '));

    function addPassangersToWagon(passangers) {
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + passangers <= maxCapacity) {
                wagons[i] += passangers;
                break;
            }            
        }
    }
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);