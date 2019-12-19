function palindromeIntegers(inputArr) {

    inputArr.forEach((num) => {
        let number = num.toString();
        let reversedNumber = number.split('').reverse().join('');
        console.log(number === reversedNumber);
    });
}

palindromeIntegers([123,323,421,121]);