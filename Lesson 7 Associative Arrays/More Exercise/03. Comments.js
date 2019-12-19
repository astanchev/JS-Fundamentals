function solve(input) {
    let [usersArr, articlesArr, articlesObj] = [[], [], {}];

    for (let inputElement of input) {

        if (inputElement.indexOf('user') !== -1) {
            let user = inputElement.match(/user (.+)/)[1];
            usersArr.push(user);

        } else if (inputElement.indexOf('article') !== -1) {
            let article = inputElement.match(/article (.+)/)[1];
            articlesArr.push(article);

        } else {
            let [user, article, commentTitle, commentContent] =
                inputElement.split(/ posts on |: |, /);

            if (!usersArr.includes(user) || !articlesArr.includes(article)) {
                continue;
            }

            if (!articlesObj[article]) {
                articlesObj[article] = {};
            }

            if (!articlesObj[article][user]) {
                articlesObj[article][user] = [];
            }

            articlesObj[article][user].push(commentTitle + ' - ' + commentContent);
        }
    }

    Object.entries(articlesObj)
        .sort((a, b) => {
            return Object.values(b[1]).length - Object.values(a[1]).length;
        })
        .forEach((articleArr) => {
            let [article, userObj] = articleArr;
            console.log(`Comments on ${article}`);

            Object.entries(userObj)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach((userArr) => {

                    let [user, commentsArr] = userArr;
                    commentsArr.forEach((comment) => {
                        console.log(`--- From user ${user}: ${comment}`);
                    });
                });
        });
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
  ]);