function solve(input) {
    let string = input[0].split('');
    let command = input[1];
    let sum = 0;

    function isLower(symb) {
        let index = symb.charCodeAt(0);

        if (index > 96 && index < 123) {
            return true;
        } else {
            return false;
        }
    }

    function isUpper(symb) {
        let index = symb.charCodeAt(0);

        if (index > 64 && index < 91) {
            return true;
        } else {
            return false;
        }
    }

    if (command === 'LOWERCASE') {
        string.forEach(s => isLower(s) ? 
                        sum += s.charCodeAt(0) : 
                        sum += 0);
    } else {
        string.forEach(s => isUpper(s) ? 
                        sum += s.charCodeAt(0) : 
                        sum += 0);
    }

    console.log(`The total sum is: ${sum}`);
}

solve([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ]);
solve([ 'AC/DC', 'UPPERCASE', '' ]);