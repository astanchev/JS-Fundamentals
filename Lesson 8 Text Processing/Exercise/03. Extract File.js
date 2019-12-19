function solve(input) {
    let index = input.lastIndexOf('\\');

    let result = input.substring(index+1);
    let fileName = result.substring(0, result.lastIndexOf('.'));
    let extension = result.substring(result.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');