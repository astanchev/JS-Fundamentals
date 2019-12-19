function systemRegister(input) {
    let resultSystems = {};

    for (const line of input) {
        let [systemName, componentName, subcomponentName] = line.split(' | ');

        if (!resultSystems.hasOwnProperty(systemName)) {
            resultSystems[systemName] = {};
        }

        if (!resultSystems[systemName].hasOwnProperty(componentName)) {
            resultSystems[systemName][componentName] = [];
        }

        if (!resultSystems[systemName][componentName].hasOwnProperty(subcomponentName)) {
            resultSystems[systemName][componentName].push(subcomponentName);
        }
    }

    let systems = Object.entries(resultSystems);

    systems = systems
        .sort((s1, s2) => Object.keys(s2[1]).length - Object.keys(s1[1]).length || 
                            s1[0].localeCompare(s2[0]));
    
    for (const system of systems) {
        console.log(system[0]);

        let orderedComponenets = Object
                                    .entries(system[1])
                                    .sort((c1, c2) => Object.keys(c2[1]).length - Object.keys(c1[1]).length);
    
        for (const component of orderedComponenets) {
            console.log(`|||${component[0]}`);

            for (const subComponent of component[1]) {
                console.log(`||||||${subComponent}`);
            }
        }  
    }
}

systemRegister(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
]);