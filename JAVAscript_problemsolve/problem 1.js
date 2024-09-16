
//problem 1 
function calculateTax(income, expense) {
    
    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }

    
    let difference = income - expense;

   
    let tax = difference * 0.20;

    return tax;
}

// Test
console.log(calculateTax(10000, 3000)); 
console.log(calculateTax(34000, 1753)); 
console.log(calculateTax(5000, 1500));  
console.log(calculateTax(7000, 7000));  
console.log(calculateTax(-5000, 2000)); 
console.log(calculateTax(6000, -1500)); 


