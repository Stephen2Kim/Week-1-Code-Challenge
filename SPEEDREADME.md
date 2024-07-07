# Week-1-Code-Challenge
# Week 1 Code Challenge "Toy Problems"

This repository includes basic JavaScript solutions for three fun problems: a salary tax calculator, a speed detector for cars, and a student grade calculator based on marks. The first challenge (grades) is designed to output in swahili assuming this code got to Tanzania.

## https://github.com/Stephen2Kim/Week-1-Code-Challenge

### speed detector

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

- **Speed Detector**:
  The alert will read "Points: 3" if you input a speed of 89. "License suspended" is the message that appears if you input a speed of 150.

