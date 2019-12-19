function carWash(commandsArr) {
    let value = 0;
    
    commandsArr.forEach((command) => {

        let commandsObj = {
            'soap': 10,
            'water': value * 0.20,
            'vacuum cleaner': value * 0.25,
            'mud': -value * 0.10
        };

        value += commandsObj[command];
    });

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);