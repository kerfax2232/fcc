
function repeatStringNumTimes(str, num) {
  // repeat after me
  
  if (num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);

/*

Advanced code:
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
*/
