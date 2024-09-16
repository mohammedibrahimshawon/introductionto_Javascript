function calculateTax(income, expense) {

    if (income < 0 || expense < 0 || income < expense) {
    
    return "Invalid Input";
    
    }
    
    let difference = income - expense;
    
    let tax = difference * 0.20;
    
    return tax;
    
    }
    
    function sendNotification(email) {
    
    if (email.indexOf('@') === -1) {
    
    return "Invalid Email";
    
    }
    
    let parts = email.split('@');
    
    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
    
    return "Invalid Email";
    
    }
    
    let username = parts[0];
    
    let domain = parts[1];
    
    return `${username} sent you an email from ${domain}`;
    
    }
    
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