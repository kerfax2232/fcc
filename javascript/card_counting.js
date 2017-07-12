// card counting app
var count = 0; // starting count for cards

function cc(card) {
  // Only change code below this line
  var recommendation = "";
  // var return = count + recommendation.  this didn't work, but i like it for cleaner (imo) code
  switch (card) {
    case 2: // cards 2-6 have +1 value
    case 3:
    case 4:
    case 5:
    case 6:
      count++; //increments count var by 1
      break;
    case 7: //did nothing here so as to not reset the count.  i *think* this could work without case 7, 8, 9.
    case 8:
    case 9:
      break;
    case 10: //cards 10, j, q, k, a have -1 value
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; // increment count var by -1
      break;
      
  }
  
  if(count > 0) {
    recommendation = " Bet";
  } else if(count === 0) {
    recommendation = " Hold";
  } else {
    recommendation = " Hold";
  }
  
  return count + recommendation; // i originally wanted return response, but it failed.  i think it would work
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(7);