//1.  I Prompted the user or the password criteria
//    a. Password length between 8 < 128
//    b. Lowercase, uppercase, special charcaters
//2.  Validate the input
//3.  Display the password to the page. 


// Assignment Code + adding the event listener when the button is pressed. // 
 document.querySelector("#generate").addEventListener("click", writePassword);

// Const the object to hold the numerious versions of arrays. //
const charcaters = {
  lowerAlphabet: "abcdefghijklmnopqrstuvwxyz",
  upperAlphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  specialCharacter: "%$#@!+-=?/*^.,<>{}[}()|",
};

// This is the function that the #password is inputed. //
function generatePassword() {
  var passwordCharacters = "";

  var passwordLength = prompt("Password must be\n(8-128 characters long)");

// This is the validation for the password length
while (passwordLength <= 7 || passwordLength >=129 || isNaN (passwordLength)) {
  alert("The password you entered must be between 8 and 128 characters long ✋");
  var passwordLength = prompt("Password must be\n(8-128 characters long)");
}

// This is the repeated back to the length for the password generator. //
alert(`You've chosen a password that has ${passwordLength} characters`)

// Below is the prompt criteria for uppercase, lowercase, special characters, and number values. //
var lowercaseSelect = confirm("needs to include lowercase letters!")
if (lowercaseSelect) {passwordCharacters += charcaters.lowerAlphabet}
console.log(passwordCharacters)

var uppercaseSelect = confirm("needs to include uppercase letters!")
if (uppercaseSelect) {passwordCharacters += charcaters.upperAlphabet}
console.log(passwordCharacters)

var specialSelect = confirm("needs to include special characters!")
if (specialSelect) {passwordCharacters += charcaters.specialSelect}
console.log(passwordCharacters)

var numberSelect = confirm("needs to include numbers!")
if (numberSelect) {passwordCharacters += charcaters.number}

console.log(passwordCharacters)
console.log("My password characters are just above")
// Below is the validation it needs for at least one of the characters in their respective type selection. // 
while (passwordCharacters.length == 0) { 
  alert ("at least one character type must be selected!");
  var lowercaseSelect = confirm("needs to include lowercase letters!");
  if (lowercaseSelect) {passwordCharacters += charcaters.lowerAlphabet};
  var uppercaseSelect = confirm("needs to include uppercase letters!");
  if (uppercaseSelect) {passwordCharacters += charcaters.upperAlphabet};
  var specialSelect = confirm("needs to include special characters!");
  if (specialSelect) {passwordCharacters += charcaters.specialSelect};
  var numberSelect = confirm("needs to include numbers!");
  if (numberSelect) {passwordCharacters += charcaters.number};
};

// Below is the repeated values for the characters type in the list. // 
alert(`The password you entered needs to include characters from this list: \n${passwordCharacters}`)

// Below is the empty string in order for it be pushed to. // 
var randomPassword = "";

//This the actual password gernation below. // 
for (i = 0; i < passwordLength; i++) {
  randomPassword += passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)];
};
return randomPassword;
}

// Write password to the #password input
console.log(window.location.href.substring(50))
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}