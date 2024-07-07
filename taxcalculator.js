function calculatingOurNetSalary(event) {
    event.preventDefault()

    // Collect your user's inputs
    const ourBasicSalary= parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value)

    // check if the inputs are numbers
    if (isNaN(ourBasicSalary) || isNaN(benefits) || ourBasicSalary< 0 || benefits < 0) {
        alert("Can you please enter valid numbers for Basic Salary and Benefits.")
        return
    }

    // Our gross salary
    const ourGrossSalary = ourBasicSalary + benefits

    // Our NSSF Deductions using the 200 bob rate
    const nssfDeduction = 200

    //NHIF Deduction based on gross salary
    const nhifDeduction = calculateNHIF(ourGrossSalary)

    //Total accumulated deductions
    const totalDeductions = nhifDeduction + nssfDeduction

    // Calculating our taxable
    const taxableIncome = ourGrossSalary - nssfDeduction - nhifDeduction

    // Calculate PAYE (Tax)
    const payee = calculatePAYE(taxableIncome)

    // Calculate Net Salary
    const netSalary = ourGrossSalary - totalDeductions - payee

    // Display the results
    document.getElementById('results').innerText = `
        Gross Salary: Ksh ${ourGrossSalary}
        NSSF Deduction: Ksh ${nssfDeduction}
        NHIF Deduction: Ksh ${nhifDeduction}
        PAYE (Tax): Ksh ${payee}
        Net Salary: Ksh ${netSalary}
    `
}

function calculateNHIF(ourGrossSalary) {
   
    if (ourGrossSalary <= 5999) return 150
    if (ourGrossSalary <= 7999) return 300
    if (ourGrossSalary <= 11999) return 400
    if (ourGrossSalary <= 14999) return 500
    if (ourGrossSalary <= 19999) return 600
    if (ourGrossSalary <= 24999) return 750
    if (ourGrossSalary <= 29999) return 850
    if (ourGrossSalary <= 34999) return 900
    if (ourGrossSalary <= 39999) return 950
    if (ourGrossSalary <= 44999) return 1000
    if (ourGrossSalary <= 49999) return 1100
    if (ourGrossSalary <= 59999) return 1200
    if (ourGrossSalary <= 69999) return 1300
    if (ourGrossSalary <= 79999) return 1400
    if (ourGrossSalary <= 89999) return 1500
    if (ourGrossSalary <= 99999) return 1600
    return 1700; // this will apply to anything above 100,000
}

//Function that lets us calculate the payee tax
function calculatePAYE(taxableIncome) {

    let payee = 0

    if (taxableIncome <= 24000) {
        payee = taxableIncome * 0.1
    } else if (taxableIncome <= 32333) {
        payee = (taxableIncome - 24000) * 0.25 + 2400
    } else if (taxableIncome <= 500000) {
        payee = (taxableIncome - 32333) * 0.3 + 7198
    } else if (taxableIncome <= 800000) {
        payee = (taxableIncome - 500000) * 0.325 + 79458
    } else {
        payee = (taxableIncome - 800000) * 0.35 + 209458
    }

    return payee
}
