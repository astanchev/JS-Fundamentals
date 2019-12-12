function piramidCalculate(base, increment) {
    let [stone, marble, lazuli, gold, steps] = [0, 0, 0, 0, 0];

    for (let i = 0; i <= base; i += 2) {

        let currentVolume = (base - i) * (base - i) * increment;
        let innerVolume = (base - i - 2) * (base - i - 2) * increment;
        let outerVolume = currentVolume - innerVolume;
        steps++;

        if (i === base - 1 || i === base - 2) {
            gold += currentVolume;
            break;

        } else if (steps % 5 === 0) {
            lazuli += outerVolume;

        } else {
            marble += outerVolume;
        }

        stone += innerVolume;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}

piramidCalculate(11, 1);