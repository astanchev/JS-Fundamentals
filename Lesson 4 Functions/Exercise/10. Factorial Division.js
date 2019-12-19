  
function factorialDivision(firstNumber, secondNumber) {

    let getFactorial = function factorialFunc(number, factorial) {

        if (number === 1) {
            return factorial;
        }

        factorial *= number;
        
        return factorialFunc(--number, factorial);
    };

    let firstFactorial = getFactorial(firstNumber, 1);
    let secondFactorial = getFactorial(secondNumber, 1);

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

factorialDivision(5, 2);