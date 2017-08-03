
function reverseString(str) {
  return str.split("").reverse().join(""); // split splits each character with "" and puts into array, reverse reverses the array, join joins array together as a string
}

reverseString("hello");