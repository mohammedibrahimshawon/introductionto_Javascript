//problem 3
function checkDigitsInName(name) {
   
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

   
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }

   
    return false;
}

// Test 
console.log(checkDigitsInName("Raj123"));     
console.log(checkDigitsInName("n9ayeem"));     
console.log(checkDigitsInName("e1mu3"));       
console.log(checkDigitsInName("Suman"));       
console.log(checkDigitsInName("Name2024")); 
console.log(checkDigitsInName("!@#"));         
console.log(checkDigitsInName(["Raj"]));       
