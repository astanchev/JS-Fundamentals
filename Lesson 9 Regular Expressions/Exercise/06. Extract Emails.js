function solve(text) {
    let pattern = / [a-z0-9]+[.\-_]*[a-z0-9]*@([a-z]+\-*[a-z]*\.)+[a-z]+/gm, result;

    while ((result = pattern.exec(text)) !== null) {

        console.log(result[0].substring(1));        
    }
}

solve(`Please contact us at: support@github.com
end`);