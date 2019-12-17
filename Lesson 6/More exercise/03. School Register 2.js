function schoolRegister(paramsArr) {
    let schoolObj = {};

    for (let tokens of paramsArr) {
        let [name, grade, average] = tokens
            .split(/Student name: |, Grade: |, Graduated with an average score: /g)
            .filter((x) => x !== '').map((x) => x.trim()).map((x) => isNaN(x) ? x : +x);

        if (average < 3) {
            continue;
        }

        grade += 1;
        if (!schoolObj[grade]) {
            schoolObj[grade] = { students: [], average: [] };
        }

        schoolObj[grade].students.push(name);
        schoolObj[grade].average.push(average);
    }

    for (let grade in schoolObj) {
        console.log(`${grade} Grade`);

        let students = Object.values(schoolObj[grade].students);
        console.log(`List of students: ${students.join(', ')}`);

        let averageSum = Object.values(schoolObj[grade].average).reduce((a, b) => a + b, 0);
        let averageGrade = (averageSum / students.length).toFixed(2);
        console.log(`Average annual grade from last year: ${averageGrade}`);
        console.log();
    }
}