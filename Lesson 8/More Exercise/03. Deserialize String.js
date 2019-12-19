function solve(input) {
    let result = [];
    input.pop();

    for (const symbArgs of input) {
        let [symb, indexArgs] = symbArgs.split(':');
        let indexes = indexArgs.split('/').map(Number);

        indexes.forEach(i => result[i] = symb);
    }

    console.log(result.join(''));
}

solve([
    'a:0/3/5/11', 
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
  ]);