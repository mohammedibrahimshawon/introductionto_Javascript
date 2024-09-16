//problem 5
function waitingTime(waitingTimes, serialNumber) {
   
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') 
        {
        return "Invalid Input";
    }
    
    
    if (serialNumber <= waitingTimes.length) {
        return "Invalid Input";
    }

    
    let totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    let averageTime = Math.round(totalTime / waitingTimes.length);

   
    let remainingPeople = serialNumber - waitingTimes.length - 1;

    
    let waitingTime = remainingPeople * averageTime;

    return waitingTime;
}

// Test cases
console.log(waitingTime([3, 5, 7, 11, 6], 10));        // 24
console.log(waitingTime([13, 2], 6));                  // 24
console.log(waitingTime([13, 2, 6, 7, 10], 6));        // 0
console.log(waitingTime([6], 4));                      // 12
console.log(waitingTime(7, 10));                       // Invalid Input
console.log(waitingTime("[6,2]", 9));                  // Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9"));        // Invalid Input
