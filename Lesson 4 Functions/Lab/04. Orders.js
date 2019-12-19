function order(product, quantity) {

    let productObj = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    };

    return (productObj[product] * quantity).toFixed(2);
}

console.log(order('water', 5));