// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var passLength
// Function to prompt user for password options
function getPasswordOptions() {
  passLength = parseInt(prompt("Enter your password length between 10 and 64"));
  if (passLength < 10 || passLength > 64) {
    alert('Password must be between 10 and 64 characters');
    return null;
  }

  var wantsNumber = confirm("Do you want numbers in your password?")
  var wantsUppercase = confirm("Do you want capital letters in your password?")
  var wantsLowercase = confirm("Do you want small letters in your password?")
  var wantsSpecial = confirm("Do you want special characters in your password?")


  if (
    wantsNumber === false &&
    wantsUppercase === false &&
    wantsLowercase === false &&
    wantsSpecial === false
  ) {
    alert('Please choose an option');
    return null;
  }

  var optionsObj = {
    length: passLength,
    number: wantsNumber,
    upper: wantsUppercase,
    lower: wantsLowercase,
    special: wantsSpecial,
  };

  return optionsObj
}




// Function for getting a random element from an array
function getRandom(arr) {

  var myRandom = Math.floor(Math.random() * arr.length);
  var randomElement = arr[myRandom]

  return randomElement;
}



// Function to generate password with user input
function generatePassword() {
  var choices = getPasswordOptions()




  var userChoice = [];
  var possibleUserChoice = [];
  var passwordResult = []

  

  if (choices.number) {
    possibleUserChoice = possibleUserChoice.concat(numericCharacters)
    userChoice.push(getRandom(numericCharacters));
  }
  if (choices.upper) {
    possibleUserChoice = possibleUserChoice.concat(upperCasedCharacters)
    userChoice.push(getRandom(upperCasedCharacters))
  }
  if (choices.lower) {
    possibleUserChoice = possibleUserChoice.concat(lowerCasedCharacters)
    userChoice.push(getRandom(lowerCasedCharacters))
  }
  if (choices.special) {
    possibleUserChoice = possibleUserChoice.concat(specialCharacters)
    userChoice.push(getRandom(specialCharacters))
  }

  for (var i = 0; i < choices.length; i++) {
    var userCh = getRandom(possibleUserChoice)
    passwordResult.push(userCh)

  }

  var joint = passwordResult.join("")


  return joint;


}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
