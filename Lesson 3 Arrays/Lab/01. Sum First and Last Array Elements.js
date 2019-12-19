function sumFirstLast(input) {
    console.log(Number(input.shift()) + Number(input.pop()));
}

sumFirstLast(['10', '17', '22', '33']);