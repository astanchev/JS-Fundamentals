function reverseArray(n, arr) {
    arr.length = n;

    console.log(arr.reverse().join(' '));
}

reverseArray(2, [66, 43, 75, 89, 47]);