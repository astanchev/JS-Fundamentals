function gradeText(grade) {
    let textGrade;

    if (grade >= 2.00 && grade <= 2.99) {
        textGrade = 'Fail';
      } else if (grade >= 3.00 && grade <= 3.49) {
        textGrade = 'Poor';
      } else if (grade >= 3.50 && grade <= 4.49) {
        textGrade = 'Good';
      } else if (grade >= 4.50 && grade <= 5.49) {
        textGrade = 'Very good';
      } else if (grade >= 5.50 && grade <= 6.00) {
        textGrade = 'Excellent';
      } 
  
      return textGrade;    
}

console.log(gradeText(4.50));