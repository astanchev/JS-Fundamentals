function lowerOrUpper(symbol) {
    
    let symbolCode = symbol.charCodeAt(0);

    if (symbolCode >= 65 && symbolCode <= 90) {
        console.log('upper-case');

    } else if (symbolCode >= 97 && symbolCode <= 122) {
        console.log('lower-case');
    }
}

lowerOrUpper('L');