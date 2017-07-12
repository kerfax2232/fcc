// this checks for existense of objects.  if object is found
// returns name of object (i.e. check for gift, pony is returned)
// if not found, checks for it to not be true, returns not found

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  
  if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else if(myObj.hasOwnProperty(checkProp) !== true) {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
