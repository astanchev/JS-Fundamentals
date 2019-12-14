function radioCrystals(inputArr) {
    let target = inputArr.shift();

    for (let microns of inputArr) {
        console.log(`Processing chunk ${microns} microns`);

        while (microns > target) {
            let counter = 0;

            if (microns / 4 >= target) {

                while (microns / 4 >= target) {

                    microns /= 4;
                    counter++;
                }

                console.log(`Cut x${counter}`);

            } else if (microns - microns * 0.20 >= target) {

                while (microns - microns * 0.20 >= target) {

                    microns -= microns * 0.20;
                    counter++;
                }

                console.log(`Lap x${counter}`);

            } else if (microns - 20 >= target) {

                while (microns - 20 >= target) {

                    microns -= 20;
                    counter++;
                }

                console.log(`Grind x${counter}`);

            } else if (microns - 2 >= target - 1) {

                while (microns - 2 >= target - 1) {

                    microns -= 2;
                    counter++;
                }

                console.log(`Etch x${counter}`);
                
            }

            if (counter !== 0) {
                
                microns = Math.trunc(microns);
                console.log('Transporting and washing');
            }
        }

        if (microns + 1 === target) {

            microns++;
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${microns} microns`);
    }
}