function loadingBar(number) {
    let count = number / 10;
    let line = `${number}% [${'%'.repeat(count)}${'.'.repeat(10 - count)}]`;

    console.log(count < 10 ? 
        `${line}\nStill loading...` : 
        `${number}% Complete!\n[${'%'.repeat(count)}]`);
}

loadingBar(30);