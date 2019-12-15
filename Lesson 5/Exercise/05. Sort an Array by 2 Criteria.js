function sortBy2Criteria(input) {
    let sortFunction = (a, b) => a.length - b.length || 
                                    a.localeCompare(b);

    let result = input.sort(sortFunction);

    console.log(result.join('\n'));
}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);