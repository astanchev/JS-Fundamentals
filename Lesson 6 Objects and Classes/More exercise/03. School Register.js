function registerStudents(input) {
    let register = [];

    for (const studentData of input) {
        let [studentName, studentGrade, studentScore] = studentData.split(', ');

        let name = studentName.split(': ')[1];
        let grade = +studentGrade.split(': ')[1];
        let score = +studentScore.split(': ')[1];

        if (score < 3) {
            continue;
        }

        let student = {
            name,
            grade: grade + 1,
            score
        };

        register.push(student);
    }

    register = register.sort((s1, s2) => s1.grade - s2.grade);
    let registerByGrades = [];

    while (register.length > 0) {
        let gradeToSearch = register[0].grade;

        let filteredStudents = register.filter(s => s.grade === gradeToSearch);

        let filteredNames = filteredStudents.map(s => s.name);
        let averageScore = filteredStudents.reduce((sum, next) => sum + next.score, 0) / filteredStudents.length;

        let grade = {
            grade: gradeToSearch,
            students: filteredNames,
            averageScore
        };

        registerByGrades.push(grade); 
        
        register.splice(0, filteredStudents.length);
    }

    for (const grade of registerByGrades) {
        console.log(`${grade.grade} Grade`);   
        console.log(`List of students: ${grade.students.join(', ')}`);   
        console.log(`Average annual grade from last year: ${grade.averageScore.toFixed(2)}`);   
        console.log();   
    }
}

registerStudents(
    ["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);