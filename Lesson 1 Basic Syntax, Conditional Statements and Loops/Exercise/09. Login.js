function login(params) {
    let username = params.shift();
    let password = username.split('').reverse().join('');
    let tries = 1;

    while (true) {
        let input = params.shift();

        if (input === password) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (tries === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        else {
            console.log("Incorrect password. Try again.");
            tries++;
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
