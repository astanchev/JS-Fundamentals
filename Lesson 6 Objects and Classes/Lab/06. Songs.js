function songs(input) {
    let numberSongs = Number(input.shift());
    let typeListToDisplay = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let allSongs = [];

    for (let i = 0; i < numberSongs; i++) {
        let [type, name, time] = input[i].split('_');

        let songToAdd = new Song(type, name, time);
        allSongs.push(songToAdd);
    }

    if (typeListToDisplay === 'all') {
        allSongs.forEach(s => console.log(s.name));
    } else {
        let songsToDisplay = allSongs.filter((s) => s.type === typeListToDisplay);
        songsToDisplay.forEach(s => console.log(s.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);