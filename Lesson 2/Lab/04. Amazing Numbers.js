function solve(num) {

    num = num.toString();

    let sum = 0;

    for(let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    } 

    let result = sum.toString().includes('9');
    let output = result ? `${num} Amazing? True` : `${num} Amazing? False`;

    console.log(output);
  }
  