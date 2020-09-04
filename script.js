
function generatePassword(){

  var length = prompt("How long would you like your password to be?")
  
  var chars = confirm("Do you want more than just letters?")
  // var upperChar = confirm("Would you like to use Upper case letters, as well as lower case?");
  // var numChar = confirm("Would you like random numbers used to generate it?");
  // var specChar = confirm("Would you like random special characters used to generate it?");
  // console.log(length + upperChar + numChar + specChar);
  console.log(length + " " + chars)
  if(length >= 8 && length <= 128)
  {
    var randPass = "";
    var letters = "abcdefghijklmnopqrstuvwxyz"
    var bigLetters = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
    var Nums = "1234567890"
    var specials = ",./[]!@#$%^&*()<>?+=-";

    if(chars === true){
      var allChars = ",./[]!@#$%^&*()<>?+=-aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890"
      for (var i = 0; i < length; i++){
        var randNum = Math.floor(Math.random() * allChars.length)
        randPass = randPass + allChars.substring(randNum, randNum + 1);
      }


    }else{
      for (var i = 0; i < length; i++){
        var randNum = Math.floor(Math.random() * letters.length)
        randPass = randPass + letters.substring(randNum, randNum + 1);
      }
    }
    console.log(randPass);

  }else if (length < 8){
    alert("Passwords of less than 8 characters aren't secure. Try again");
  } else {
    alert("That's a lot of characters. Let's try again with a smaller password.");
  }
}

// function letterTest () {
//   var lettArr = ['a', 'b', 'c', 'd'];
//   var myWord = "";
//   for(var i = 0; i < lettArr.length; i++){
//     myWord = myWord + lettArr[i]
//   }
//   console.log(myWord);
// }
// letterTest();

// // Assignment Code

// function criteria(){
//     var criteria = [length, specialChar, capitalChar, numChar];
//     criteria[0] = prompt("How long do you need your Password to be?");
//     criterio[1] = prompt("");
// }

var generateBtn = document.body.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

