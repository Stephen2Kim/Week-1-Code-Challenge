# Week-1-Code-Challenge
# Week 1 Code Challenge "Toy Problems"

This repository includes basic JavaScript solutions for three fun problems: a salary tax calculator, a speed detector for cars, and a student grade calculator based on marks. The first challenge (grades) is designed to output in swahili assuming this code got to Tanzania.

## What is contained

### 1. Grades generated for students

- **Documents**:
   - {`gradegenerator.html`}: An HTML file with a button to start calculating grades.
   - The JavaScript file with the function to compute and display the grade is called {`gradegenerator.js`}.

 - **Explanation of the anticipated outcome**:
 - The user of this program is prompted to enter student marks in the range of 0 to 100. It calculates and shows the appropriate grade based on the marks. The following will be the grading criteria:
 - A: More than 79 points - B: Between 60 and 79 points - C: Between 50 and 59 points - D: Between 40 and 49 points - E: Less than 40 points

- **Illustration on how to Use**:
  1. Start by opening {`gradegenerator.html`} in your browser using the Go Live button on VS Code
  2. Press the button marked "Ingiza Alama za Mwanafunzi".
  3. When asked, enter the student's marks.
  4. An alert box with the grade will appear.
  5. In the case the user doesnt follow instructions and inputs a number without the specified range and or a data type that is not a number and can not be converted, an alert message saying "Ingizo batili. Tafadhali ingiza namba kati ya 0(sufuri) na 100(mia moja)." will appear

### 2. speed detector

- **Documents**:
- The HTML file named {`speedDetector.html`} has a button that initiates the speed check.
- {`speedDetector.js`}: The JavaScript file that has the function to compute demerit points and check speed.

- **Description**:
 An vehicle's speed is entered into this software. "Ok" message is printed if the speed is less than 70 km/h. Otherwise, it prints the total amount of demerit points and awards one demerit point to the driver for each 5 km/s over the speed limit (70). The message "License suspended" appears if the driver receives more than 12 points. Honest opinion this needs to be implemented in Kenya.

- **Illustration on how to Use**:
  1. Go Live on VS Code while on {`speedDetector.html`}.
  2. Click on the button "Analyze Speed" on the screen.
  3. When asked, enter the car's speed.
  4. An alert box displaying the outcome will show "Ok," the total number of demerit points, or "License suspended."
  5. Note that if you input a number that is not divisible by 5 the function does not round it up rather assumes you have not reached the next 5km/h so returns for the last number divisible by 5.

## Example

- **Student Grades**:
  The message "Daraja la mwanafunzi ni: A" will appear if you enter a mark of 89.

- **Speed Detector**:
  The alert will read "Points: 3" if you input a speed of 89. "License suspended" is the message that appears if you input a speed of 150.

### 3. Tax Calculator

- **Documents**:
- The HTML file named {`taxcalculator.html`} has a bsubmission forms that allow users to input the salaries and benefits.
- {`taxcalculator.js`}: The JavaScript file that has the function to compute the net tax

- **Description**:
A gross salary and benefits for an individual are input into the provided forms and the javascript file is able to calculate all deductions including NHIF, NSSF and PAYE taxed and deduct them from a sum of the basic salary and the banefits which is the gross salary. 

- **Illustration on how to Use**:
  1. Go Live on VS Code while on {`taxcalculator.html`}.
  2. Input your basic salary in numbers
  3. Input your benefits in numbers
  4. Click on the button written calculate
  5. You should be able to find the results on the screen showing what was the gross salary, the deductions and the net salary.


## Example

- **Student Grades**:
  The message "Daraja la mwanafunzi ni: A" will appear if you enter a mark of 89.

- **Speed Detector**:
  The alert will read "Points: 3" if you input a speed of 89. "License suspended" is the message that appears if you input a speed of 150.

- **Tax Calculator**:
If you input Basic Salary 50,000 with benefits of 12,000, you will receive the following upon hitting calculate
Gross Salary: Ksh 62000
NSSF Deduction: Ksh 200
NHIF Deduction: Ksh 1300
PAYE (Tax): Ksh 15648.1
Net Salary: Ksh 44851.9