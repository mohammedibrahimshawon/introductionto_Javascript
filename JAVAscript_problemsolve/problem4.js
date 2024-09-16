//problem 4
function calculateFinalScore(obj) {
    
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

   
    const { name, testScore, schoolGrade, isFFamily } = obj;

    
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    if (testScore > 50 || schoolGrade > 30 || testScore < 0 || schoolGrade < 0) {
        return "Invalid Input";
    }

    
    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    
    return finalScore >= 80;
}

// Test 
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); 
console.log(calculateFinalScore("hello"));                                                           
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));  
