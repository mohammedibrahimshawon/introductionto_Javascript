//problem 2
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

// Test 
console.log(sendNotification("zihad@gmail.com")); 
console.log(sendNotification("farhan34@yahoo.com")); 
console.log(sendNotification("nadim.naem5@outlook.com")); 
console.log(sendNotification("fahim234.hotmail.com")); 
console.log(sendNotification("sadia8icloud.com")); 
