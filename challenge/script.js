let students = ["Martin", "Ben", "Max", "Sascha"];
// array for names 

let MathGrades = [80, 67, 76, 98, ];
// array for grades 

let student = prompt("Insert your name");
// insert own name 

let student_grade = document.getElementById("grades");

if (students.includes(student) === true) {
    // checks if the name from the prompt is included in the array 

    var search = students.indexOf(student);
    // searches the name 

    document.getElementById("grades").innerHTML = (`${students[search]} has reached ${MathGrades[students.indexOf(student)]} points in Math this season`);
    // outputs the name and the grade for that student 

} else
    document.getElementById("grades").innerHTML = (`${student} is not in the System`);
// outputs an error message if the name is not in the array