function catalogueProducts(input) {
    const catalogue = [];

    for (const productArgs of input) {
        let productName = productArgs.split(' : ')[0];
        let productPrice = Number(productArgs.split(' : ')[1]);
        let firstLetter = productName[0];

        const product = {
            productName,
            productPrice,
            firstLetter
        };

        catalogue.push(product);
    }

    let sortedCatalogue = catalogue
        .sort((p1, p2) => (p1.productName).localeCompare(p2.productName));

    orderedCatalogue = [];

    while (sortedCatalogue.length > 0) {
        let letterToCompare = sortedCatalogue[0].firstLetter;

        let productsWithLetter = sortedCatalogue
            .filter(p => p.firstLetter === letterToCompare);

        orderedCatalogue.push({
            letter: letterToCompare,
            products: productsWithLetter
        });

       sortedCatalogue.splice(0, productsWithLetter.length);
    }

    for (const productGroup of orderedCatalogue) {

        console.log(productGroup.letter);
        
        for (const product of productGroup.products) {
            console.log(`  ${product.productName}: ${product.productPrice}`);
        }
    }
}

catalogueProducts(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);