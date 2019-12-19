function solve(input) {
    let first = input[0].charCodeAt(0);
    let second = input[1].charCodeAt(0);
    let line = input[2];

    let bottom = first < second ? first : second;
    let up = first > second ? first : second;
    let sum = 0;

    for (let i = 0; i < line.length; i++) {
        const symbASCII = line[i].charCodeAt(0);
        
        if (symbASCII > bottom && symbASCII < up) {
            sum += symbASCII;
        }
    }

    console.log(sum);
}

solve([ '.', '@', 'dsg12gr5653feee5' ]);
solve([ '?', 'E', '@ABCEF' ]);
solve([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]);