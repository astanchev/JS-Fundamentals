function nonDecreasingSubSeq(arr) {
    let result = arr.filter((a, b) => a >= Math.max(...arr.slice(0, b)));

    console.log(result.join(' '));
}

nonDecreasingSubSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);