function arrayRotation(arr, n) {
    for (let i = 0; i < n; i++) {
        let el = arr.shift();
        arr.push(el);
    }

    console.log(arr.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);