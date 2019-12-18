function solve(input) {
    let result = [];

    input.split(' ').forEach(w => {
        let isLetters = true;
        
        w
            .toLowerCase()
            .split('')
            .slice(1)
            .forEach(s => {
                if (s.charCodeAt(0) < 97 ||
                    s.charCodeAt(0) > 122) {
                    isLetters = false;
                }
            });

        if (w.startsWith('#') &&
            w.length > 1 &&
            isLetters) {
            result.push(w);
        }
    });

    result.forEach(w => console.log(w.substring(1)));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');