function analyzeSpeed() {
    // This will prompt the NTSA Guy to input the speed of the car

    let speed = prompt("Please enter the speed of that car:");

    // To avoid malicious users, we have to convert our data types to number

    speed = Number(speed);

    // We have to check if input is a valid number. In our case a positive number

    if (isNaN(speed) || speed < 0) {
        alert("Invalid input. Please enter a positive number.");
        return;
    }

    // Declare, assign and define the speed limit and the demerit points calculation
    const maxSpeedLimit = 70;
    const kmForEachDemeritPoint = 5;

    // Check the speed and calculate demerit points
    if (speed <= maxSpeedLimit) {
        alert("Ok");
    } else {
        //Math.floor in our case ensures that whatever number is evaluated is rounded down to the nearest whole number. 
        //If we get 3.8 it will display 3
        
        const demeritPoints = Math.floor((speed - maxSpeedLimit) / kmForEachDemeritPoint);
        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert("Points: " + demeritPoints);
        }
    }
}
