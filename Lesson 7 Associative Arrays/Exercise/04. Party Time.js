function solve(input) {
    let vip = [];
    let regular = [];
    let partyIndex = input.indexOf('PARTY');

    let guestsList = input.slice(0, partyIndex);
    let comingList = input.slice(partyIndex + 1);

    guestsList.forEach(g => {
        if (Number.isInteger(Number(g[0]))) {
            vip.push(g);
        } else {
            regular.push(g);
        }
    });

    comingList.forEach(c => {
        
        if (Number.isInteger(Number(c[0]))) {            
            let index = vip.indexOf(c);
            vip.splice(index, 1);
        } else {
            let index = regular.indexOf(c);
            regular.splice(index, 1);
        }
    });

    let notcamming = [];

    vip.forEach(k => notcamming.push(k));
    regular.forEach(k => notcamming.push(k));

    console.log(notcamming.length);
    console.log(notcamming.join('\n'));

}

solve(
    ['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);