function solve(input) {
    let map = new Map();

    let words = input.toLowerCase().split(' ');

    for (const word of words) {
        if (!map.has(word)) {
            map.set(word, 0);
        }

        map.set(word, map.get(word) + 1);
    }

    let keys = Array
        .from(map.keys())
        .filter(k => map.get(k) % 2 === 1);

   console.log(keys.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');