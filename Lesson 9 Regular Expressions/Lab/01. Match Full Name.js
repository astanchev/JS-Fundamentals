function solve(input) {
    let text = input.shift();
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let matches = text.match(regex);

    console.log(matches.join(' '));
}

solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ]);