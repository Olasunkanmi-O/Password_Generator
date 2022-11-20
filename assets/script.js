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
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var passLength = prompt("Enter your password length between 10 and 64");
    var wantsNumber = confirm("Do you want numbers in your password?")
    var wantsUppercase = confirm("Do you want capital letters in your password?")
    var wantsLowercase = confirm("Do you want small letters in your password?")
    var wantsSpecial = confirm("Do you want special characters in your password?")
   
    // confirm the length is between 10 and 64 
    if(!passLength){
      alert("Cannot be empty")
    }else if (passLength < 10 || passLength > 64){
      alert("Plese enter a value between 10 and 64")
    }else {
      wantsNumber;
      wantsUppercase;
      wantsLowercase;
      wantsSpecial
    };
  
    if(!(wantsNumber && wantsUppercase && wantsLowercase && wantsSpecial)){
      password = alert("Please choose a criterium");
    }else if (wantsNumber&&wantsNumber){
      password = alert
    }
  
    return [passLength, wantsNumber, wantsUppercase, wantsLowercase, wantsSpecial]
  
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
   
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