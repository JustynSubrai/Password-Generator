// Assignment code here
//created an variables for characters

var UNInum = ["1", "2", "3", "4", "5","6", "7", "8", "9", "0"];
var UNIupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var UNIlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UNIsym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "<", ">", "/", "?",];


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  // console.log("Hey! You clicked the button!")
// 1. Prompt the user for the password criteria
  function userCriteria () {
    let acceptedChoice = true;
      // a. password length 8 < 128
      var confirmLength = prompt("How many characters(8-128) for your password?");{
        if(confirmLength < 8 || confirmLength > 128){
          alert("Password must contain 8-128 characters.")
          return userCriteria();
        }
        // b. number, uppercase, lowercase, special characters
        else {
          var confirmNum = confirm("Do you want to include numbers?");
          var confirmUpper = confirm("Do you want to include uppercase?");
          var confirmLower = confirm("Do you want to include lowercase?");
          var confirmSym = confirm("Do you want to include special characters?");
        }
      }

      var promptResults = {
        confirmLength: confirmLength,
        confirmNum: confirmNum,
        confirmUpper: confirmUpper,
        confirmLower: confirmLower,
        confirmSym: confirmSym,
      };

      if ((!confirmNum && !confirmUpper && !confirmLower && !confirmSym)){
        alert("You must pick at least one character type.")
      } 
      else{
        console.log(promptResults);
        return promptResults;
      } 
  }
  // 2. Validate the input
  var criteria = userCriteria();
  let passwordResults = [];
  let results = "";

  if(criteria.confirmNum) {
    for (let i of UNInum){
      passwordResults.push(i);
    }
  }
  if(criteria.confirmUpper) {
    for (let i of UNIupper){
      passwordResults.push(i);
    }
  }
  if(criteria.confirmLower) {
    for (let i of UNIlower){
      passwordResults.push(i);
    }
  }
  if(criteria.confirmSym) {
    for (let i of UNIsym){
      passwordResults.push(i);
    }
  }
  // 3. Generate Password based on criteria
  for (let i = 0; i < criteria.confirmLength; i++) {
    results = results + passwordResults[Math.floor(Math.random()*passwordResults.length)];
  }
  // 4. Display password to the page
  return results;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
