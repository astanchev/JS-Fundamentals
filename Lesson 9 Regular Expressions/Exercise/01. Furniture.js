function solve(input) {
    input.pop();
    let sum = 0;
    let result = [];

    for (const line of input) {
        const pattern = />>(?<name>.+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
        const matches = pattern.exec(line);

        if (matches) {
            const furnitureName = matches.groups.name;
            const price = matches.groups.price;
            const quantity = matches.groups.quantity;

            result.push(furnitureName.toString());
            sum += Number(price) * Number(quantity);
        }

    }

    console.log('Bought furniture:');
    if (result.length > 0) {
        console.log(result.join('\n'));
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);