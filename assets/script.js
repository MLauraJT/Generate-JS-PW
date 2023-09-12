// Assignment Code
var generateBtn = document.querySelector("#generate");
// Added all necessary charas to generate password
var passwordLength = 8-128;
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var specialChar = ['!','@','#','$','%','&','(',')','_','-','*','>','~',]
var number = ['1','2','3','4','5','6','7','8','9','0',]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Creating what will be prompts asking what type of password needs to be made
function generatePassword() {
  console.log('generatePassword')
  var lowerCase = confirm('You want lowercase letters?')
  var upperCase = confirm('You want uppercase letters?')
  var specialChar = confirm('You want any special characters?')
  var number = confirm('You want any numbers?')
}

function passwordLength() {
  // console.log('passwordLength')
  // Could not get this to work, I'll work on it more later
  passwordLength = parseInt(prompt('How long do you want this password? (8 - 128 characters'))
  
if(passwordLength < 8 || passwordLength > 128){
  console.log('bad password input');
  alert('Choose between 8 and 128.');
}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
