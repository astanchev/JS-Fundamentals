function solve(input) {
    bookShelf = {};

    for (const command of input) {

        if (command.includes(' -> ')) {
            addShelf(command);
        } else {
            addBook(command);
        }
    }

    Object
        .entries(bookShelf)
        .sort((g1, g2) => g2[1].books.length - g1[1].books.length)
        .forEach(g => {
            console.log(`${g[0]} ${g[1].genre}: ${g[1].books.length}`);

            let orderedBooks = g[1].books.sort((b1, b2) => b1.title.localeCompare(b2.title));
            
            orderedBooks.forEach(b => console.log(`--> ${b.title}: ${b.author}`));
        });

    function addShelf(command) {
        let [shelfId, genre] = command.split(' -> ');

        if (!bookShelf.hasOwnProperty(shelfId)) {
            bookShelf[shelfId] = {
                genre,
                books: []
            };
        }
    }

    function addBook(command) {
        let [title, authorArgs] = command.split(': ');
        let [author, genre] = authorArgs.split(', ');

        let shelfs = Object.entries(bookShelf);
        let shelfId;

        for (const shelf of shelfs) {
            let genres = Object.entries(shelf[1]);
            let shelfGenre = genres[0][1];

            if (shelfGenre === genre) {
                shelfId = shelf[0];
            }
        }

        if (shelfId !== undefined) {
            let book = {
                title,
                author
            };

            bookShelf[shelfId].books.push(book);
        }
    }
}

solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);