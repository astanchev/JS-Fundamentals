function solve(input) {
    let map = new Map();

    for (const student of input) {
        let [name, ...grades] = student.split(' ');

        if (!map.has(name)) {
            map.set(name, []);
        }

        map.set(name, map.get(name).concat(grades.map(Number)));
    }

    let sortedStudents = Array.from(map.entries())
        .sort((s1, s2) => average(s1[1]) - average(s2[1]));

    sortedStudents.forEach(s => console.log(`${s[0]}: ${s[1].join(', ')}`));

    function average(arr) {
        let sum = 0;
        arr.forEach(element => sum += element);

        return sum / arr.length;
    }
}

solve(
    ['Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6'
    ]);