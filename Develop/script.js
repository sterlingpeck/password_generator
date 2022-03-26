var characterLength = 8;
var choiceArray = [];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+','=','-','[',']',';','<','>'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomNumber = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompt();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();

  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";
  for(var i = 0; < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArray.length);
      password = password + choiceArray + choiceArray[randomIndex];
  }
  return password;
}

function getPrompt() {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be?"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character lenght has to be a number between 8 - 128. Please try again.");
    return false;
  }

  if (confirm(("Would you like lowercase letters in your passowrd?")) ) {
    choiceArray = choiceArray.concat(lowerCase);
  }

  if (confirm(("Would you like uppercase letters in your passowrd?")) ) {
    choiceArray = choiceArray.concat(upperCase);
  }

  if (confirm(("Would you like special letters in your passowrd?")) ) {
    choiceArray = choiceArray.concat(specialChar);
  }

  if (confirm(("Would you like numbers in your passowrd?")) ) {
    choiceArray = choiceArray.concat(randomNumber);
  }
  return true;

}


