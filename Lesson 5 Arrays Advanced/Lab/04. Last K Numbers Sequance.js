function lastKNumSequence(n, k) {

    let result = [1];
    
    for (let i = 1; i < n; i++) {

        let startIndex = Math.max(0, i - k);

        let sum = result
                    .slice(startIndex, i)
                    .reduce((a, b) => a + b, 0);

        result.push(sum);
    }

    console.log(result.join(' '));
}

lastKNumSequence(8, 2);