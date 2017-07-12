
/*// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.
*/

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Math.floor rounds downn.  myMax-myMin+1 will NOT include Max range.  Adding myMin puts max within range of possible outcomes
  // see: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-generate-random-whole-numbers-within-a-range/18187 for explanation

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
console.log(myRandom);
