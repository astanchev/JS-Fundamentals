function storageMap(input) {
    let storage = new Map();

    for (const productArgs of input) {
        let [product, quantity] = productArgs.split(' ');
        quantity = +quantity;

        if (!storage.has(product)) {
            storage.set(product, 0);
        }

        storage.set(product, storage.get(product) + quantity);
    }

    Array.from(storage.keys()).forEach(p => 
                                console.log(`${p} -> ${storage.get(p)}`));
}

storageMap(['tomatoes 10',
            'coffee 5',
            'olives 100',
            'coffee 40']);