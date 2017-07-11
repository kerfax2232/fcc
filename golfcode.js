// This code is to return results for various strokes on a hole in golf
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (par-strokes >= 2) {
    return  "Eagle";
  } else if (par-strokes == 1) {
    return "Birdie";
  } else if (par === strokes) {
    return "Par";
  } else if (strokes-par == 1) {
    return "Bogey";
  } else if ( strokes-par == 2) {
    return "Double Bogey";
  } else if (strokes-par >= 3) {
    return "Go Home!";
  } else {
    return "Change Me";    
  }
  
  // Only change code above this line
}

// Change these values to test
golfScore(6, 4);