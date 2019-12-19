function passwordValidator(password) {

    let checkFullLength = password.length >= 6 && password.length <= 10;

    if (!checkFullLength) {
        console.log('Password must be between 6 and 10 characters');
    }


    let checkLettersDigits = /^[A-Za-z0-9]+$/.test(password);

    if (!checkLettersDigits) {
        console.log('Password must consist only of letters and digits');
    }


    let checkDigitsLength = password.split('').filter((x) => !isNaN(x)).length >= 2;

    if (!checkDigitsLength) {
        console.log('Password must have at least 2 digits');
    }


    if (checkFullLength && checkLettersDigits && checkDigitsLength) {
        console.log('Password is valid');
    }
}

passwordValidator('Pa$s$s')