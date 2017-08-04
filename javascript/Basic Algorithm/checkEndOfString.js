
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");

/*

Original incorrect/not as concise code/answer:

if (str.substr(-target.length) === target) {
return true;
} else {
return false;
}
*/
