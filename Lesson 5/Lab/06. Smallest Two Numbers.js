function smallest2Numbers(input) {
    console.log(input.sort((a, b) => a - b).slice(0, 2).join(' '));
}

smallest2Numbers([3, 0, 10, 4, 7, 3]);