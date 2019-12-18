function solve(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let first = input[0].toLowerCase();
    let second = input[1].toLowerCase();
    let generator = input[2].toUpperCase().split('');

    let result = first.concat(second).split('');

    for (let i = 0; i < result.length; i++) {
        const symb = result[i];
        
        if (vowels.includes(symb)) {
            let replacement = generator.shift();
            result[i] = replacement;
            generator.push(replacement);
        }
    }

    let password = result.reverse().join('');

    console.log(`Your generated password is ${password}`);
}

solve([
    'ilovepizza', 
    'ihatevegetables',
    'orange'
    ]);