const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    const length = document.getElementById('length').value;  
    const includeUppercase = document.getElementById('includeUppercase').checked; 
    const includeLowercase = document.getElementById('includeLowercase').checked; 
    const includeNumbers = document.getElementById('includeNumbers').checked; 
    const includeSpecial = document.getElementById('includeSpecial').checked; 
    let charSet = "";

   
    if (includeUppercase) charSet += uppercase;
    if (includeLowercase) charSet += lowercase;
    if (includeNumbers) charSet += numbers;
    if (includeSpecial) charSet += specialChars;
 
    if (charSet === "") {
        alert("Please select at least one character set.");
        return;
    }

    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex]; 
    }

    document.getElementById('box1').value = password; 
}


document.getElementById('generate').addEventListener('click', generatePassword);


