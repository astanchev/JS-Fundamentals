function solve(input) {
    let garagesMap =  new Map();
    
    for (const info of input) {

        let carArgs = info.split(' - ');
        let garageNum = +carArgs[0];
        let carInfo = carArgs[1].replace(/:/g, ' -');

        if (!garagesMap.has(garageNum)) {
            garagesMap.set(garageNum, []);
        }

        let existingCarInfo = garagesMap.get(garageNum);
        existingCarInfo.push(carInfo);

        garagesMap.set(garageNum, existingCarInfo);
    }

    Array.from(garagesMap.entries()).forEach((garagesArr) => {
        let [garage, cars] = garagesArr;
        console.log(`Garage № ${garage}`);
        cars.forEach((car) => console.log(`--- ${car}`));
    });
}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
  ]);