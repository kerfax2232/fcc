
function truncateString(str, num) {
  
  if (num > 3 & num < str.length) {
    return str.slice(0, num-3).concat("...");
  } else if (num <= 3) {
    return str.slice(0, num).concat("...");
  } else if (str.length >= num) {
    return str;
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

/*
Advanced code solution
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

*/