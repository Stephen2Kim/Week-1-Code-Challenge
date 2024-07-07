function generateStudentGrade() {
    //"Prompt" keyword will prompt the user to input the sudents marks.
    let marks = prompt("Tafadhali ingiza alama za mwanafunzi (0 hadi 100):")

    //Here we aim to convert any input data types to numbers. 
    marks = Number(marks)

    //The code below ensures the input is a valid number between 0 and 100 otherwise it displays an error message prompted by the "alert" keyword
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Ingizo batili. Tafadhali ingiza namba kati ya 0(sufuri) na 100(mia moja).");
        return
    }
 
    //The if and else if statements allow us to provide conditions to check the user input and return the appropriate grades. 
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
 
    //The output message will be shown on the display screed using the code below.
    alert("Daraja la mwanafunzi ni: " + grade);
}
