function storeProvision(currentStock, newStock) {

    let storage = {};
    storage = fillProvisions(currentStock, storage);
    storage = fillProvisions(newStock, storage);

    let keys = Object.keys(storage);

    keys.forEach(k => console.log(`${k} -> ${storage[k]}`));

    function fillProvisions(inStock, storage) {

        for (let i = 0; i < inStock.length; i += 2) {
            let productName = inStock[i];
            let quantity = Number(inStock[i + 1]);

            if (!storage.hasOwnProperty(productName)) {
                storage[productName] = 0;
            }

            storage[productName] += quantity;
        }

        return storage;
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);