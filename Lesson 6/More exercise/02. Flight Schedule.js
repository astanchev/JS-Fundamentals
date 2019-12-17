function flightSchedule(input) {

    let [flights, corrections, status] = input;

    let sector = [];

    for (const flightCmd of flights) {
        let [flightNumber, flightDestination] = flightCmd.split(' ');

        let flight = {
            flightNumber,
            flightDestination,
            flightStatus: 'Ready to fly'
        };

        sector.push(flight);
    }

    for (let i = 0; i < corrections.length; i++) {
        const [flightNumber, flightStatus] = corrections[i].split(' ');

        let flightToChange = sector.find(f => f.flightNumber === flightNumber);

        if (flightToChange != undefined) {

            flightToChange.flightStatus = flightStatus;
        }
    }

    let filteredFlights = sector.filter(f => f.flightStatus === status[0]);

    for (const flight of filteredFlights) {
        console.log(`{ Destination: '${flight.flightDestination}', Status: '${flight.flightStatus}' }`);
    }
}

flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],

    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],

    ['Cancelled']
]);