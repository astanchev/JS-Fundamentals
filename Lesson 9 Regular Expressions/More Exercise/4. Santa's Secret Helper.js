function solve(kids) {

    let key = kids[0];

    for (let kidInfo of kids.slice(1, -1)) {

        if (kidInfo === 'end') {
            return;
        }

        kidInfo = kidInfo.split('');
        let kid = '';

        for (let char of kidInfo) {

            kid += String.fromCharCode(char.charCodeAt(0) - +key);
        }

        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<behaviour>G|N){1}!/;
        let matches = pattern.exec(kid);

        if (matches && matches[2] === 'G') {

            console.log(matches[1]);
        }
    }
}

solve([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
]);