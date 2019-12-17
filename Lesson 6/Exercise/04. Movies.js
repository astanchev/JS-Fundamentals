function storeMovies(input) {
    let movies = [];

    for (const command of input) {
        let commandArgs = command.split(' ');

        if (commandArgs.includes('addMovie')) {

            let filmName = commandArgs.slice(1).join(' ');
            movies.push({name: filmName});

        } else if (commandArgs.includes('directedBy')) {

            let nameToFind = commandArgs
                                .slice(0, commandArgs.indexOf('directedBy'))
                                .join(' ');

            const film = movies.find(f => f.name === nameToFind);

            if (film !== undefined) {
                let director = commandArgs
                                .slice(commandArgs.indexOf('directedBy') + 1)
                                .join(' ');

                film.director = director;                
            }

        } else if (commandArgs.includes('onDate')) {

            let nameToFind = commandArgs
                                .slice(0, commandArgs.indexOf('onDate'))
                                .join(' ');

            const film = movies.find(f => f.name === nameToFind);

            if (film !== undefined) {
                let date = commandArgs
                                .slice(commandArgs.indexOf('onDate') + 1)
                                .join(' ');

                film.date = date;                
            }
        }
    }

    let filmsToPrint = movies.filter(f => Object.keys(f).length === 3);

    filmsToPrint.forEach(f => console.log(JSON.stringify(f)));
}

storeMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);