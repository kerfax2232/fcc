
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line

  for (var i = 0; i<contacts.length; i++) { // initiates iteration
    if (contacts[i].firstName === firstName) { // if firstName is found in array
      if (contacts[i].hasOwnProperty(prop)) { // AND if that array also has the prop value
        return contacts[i][prop]; // return array iteration and prop value
      } else {
        return "No such property"; // else return no property (firstName found, prop is not)
      }
    }
  }
  return "No such contact"; // return no contact if contact not found.  unclear on why this wouldn't be else if
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
