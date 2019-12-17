function systemsRegister(inputMat) {
    let systemsObj = inputMat.reduce((accObj, tokens) => {
        let [system, component, subcomponent] = tokens.split(' | ');

        if (!accObj[system]) {
            accObj[system] = {};
        }

        if (!accObj[system][component]) {
            accObj[system][component] = [];
        }

        accObj[system][component].push(subcomponent);
        return accObj;
    }, {});

    let computeLength = function (obj) {
        return Object.entries(obj).length;
    };

    Object.entries(systemsObj)
        .sort((systemA, systemB) => {
            return computeLength(systemB[1]) - computeLength(systemA[1])
                || systemA[0].localeCompare(systemB[0]);
        })
        .forEach((systemsArr) => {
            let [system, componentsObj] = systemsArr;
            console.log(system);

            Object.entries(componentsObj)
                .sort((componentA, componentB) => {
                    return computeLength(componentB[1]) - computeLength(componentA[1]);
                })
                .forEach((componentsArr) => {
                    let [component, subcomponentsArr] = componentsArr;
                    console.log(`|||${component}`);

                    subcomponentsArr.forEach((subcomponent) => {
                        console.log(`||||||${subcomponent}`);
                    });
                });
        });
}