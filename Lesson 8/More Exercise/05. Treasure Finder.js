function solve(input){
    let keyValues = input.shift();

    for (const line of input) {

        if (line === 'find') {
            break;
        }    

        let currentKeyValues = keyValues.split(' ');
        let newLine = [];

        for (let i = 0; i < line.length; i++) {
            
            const symbASCII = line[i].charCodeAt(0);
            let key = currentKeyValues.shift();
            let newSymb = String.fromCharCode(symbASCII - key);

            newLine.push(newSymb);
            currentKeyValues.push(key);            
        }

        let text = newLine.join('');

        let firstIndexType = text.indexOf('&') + 1;
        let secondIndexType = text.lastIndexOf('&');
        let firstIndexCoordinates = text.indexOf('<') + 1;
        let secondIndexCoordinates = text.indexOf('>');

        let type = text.substring(firstIndexType, secondIndexType);
        let coordinates = text.substring(firstIndexCoordinates, secondIndexCoordinates);

        console.log(`Found ${type} at ${coordinates}`);
    }
}

solve([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
  ]);

  console.log();

  solve([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
  ]);