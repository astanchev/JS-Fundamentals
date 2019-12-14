function wrongResult(x, y, z) {
    let isPositive = false;

    if (x > 0) {
        isPositive = !isPositive;
    }

    if (y > 0) {
        isPositive = !isPositive;
    }

    if (z > 0) {
        isPositive = !isPositive;
    }

    if (x === 0 || y === 0 || z === 0) {
        isPositive = true;
    }

    console.log(isPositive ? 'Positive' : 'Negative');
}