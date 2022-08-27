// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {

  // ask the user how long is the password
  const length = Number(prompt("How long?"));

  console.log(length);

  // if user type in random rubbish-- handle
  if(isNaN(length)){
    alert("Please type in something sensible")
    return;
  }

  // if user didnt type anything -- handle
  if(length < 8 || length > 128){
    alert("Please enter a length between 8 - 128");
    return;
  }

  // ask if want to include
  // uppercase
  const includeUppercase = confirm("Do you want uppercase?");
  // lowercase
  const includeLowercase = confirm("Do you want lowercase?");
  // number
  const includeNumber = confirm("Do you want Number?");
  // special symbols
  const includeSymbol = confirm("Do you want Symbol?");

  // we want to make sure at least 1 criteria is selected
  // detect if all of them are false
  if(!includeLowercase && !includeNumber && !includeUppercase && !includeSymbol){
    alert("Please select at least one criteria.");
    return;
  }

  // generate the pw based on the criterias selected and length

  let charset = "";

  // 1. create the charset based on the criterias
  if(includeUppercase){
    charset = charset + "ABCDEFG";
  }

  if(includeLowercase){
    charset = charset + "abcde";
  }

  if(includeNumber){
    charset = charset + "123456";
  }

  if(includeSymbol){
    charset = charset + "!@#$%^";
  }

  let password = "";
  // 1. init
  // 2. check the looping condition
  // 3. if passed, then run the code, otherwise exit the loop
  // 4. run the third part  
  // 5. repeat step 2
  for (let ii = 0; ii < length; ii++){
    // 2. loop for the 'length' times, for each iteration, 
    // grab a random char and append to an accumulator
    const randomChar = charset[ Math.floor( Math.random() * charset.length ) ]
    password = password + randomChar;
  
  }
  // return the password
  return password;

}

// Write password to the #password input
function writePassword(event) {
  const password = generatePassword();

  if(password === undefined){
    return;
  }

  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// when we click on generateBtn, then we will exec writePassword
generateBtn.addEventListener("click", writePassword);

