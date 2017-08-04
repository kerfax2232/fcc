
function palindrome(str) {
  // Good luck!
  
  // remove non-alphanumeric
  var nonAlpha = /[^a-zA-Z0-9]/gi; // regexp removing ann non-alpha characters
  var nonAlphaStr = str.replace(nonAlpha, ""); // replaces non-alpha with nothing (combines into 1 string)
  console.log(nonAlphaStr); // test console.log for this
  
  
  // conver to lowercase
  
  var toLwrCase = nonAlphaStr.toLowerCase(); // is there a way to combine this with above code (combine two methods?)
  console.log(toLwrCase); //test for console.log
  
  var backwards = toLwrCase.split("").reverse().join("");
  
  if (toLwrCase === backwards) {
    return true;
  } else {
    return false;
  }
  
}



palindrome("_eye");