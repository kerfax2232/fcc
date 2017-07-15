// Objects


var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {

  "wheels":2,
  "engines":1,
  "seats":5
  // Only change code below this line.

};

// Can also use constructor  functions for objects:

var Car = function() {
	wheels = 4;
	seats = 4;
	engines = 1;
}

// Can also create instances via new [Constructor]
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var myCar = new Car(); {
  myCar.nickname = "Raper"; // this gives myCar wheels = 4, engines = 1, seats = 5 and nickname = Raper.  Nickname is specific only to the variable
}

// Can shorten this by giving a constructor function parameters and passing those as args.  note constructor and var below:

var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels; // assigns this.wheels to wheels parm
  this.seats = seats; // assigns this.seats to seats parm
  this.engines = engines; // assignes this.engines to engines parm
};

//Try it out here
var myCar = new Car(3, 1, 2); // now calling Car constructor and passing in args creates myCar with these attributes

// Private variables for objects
// use these for variables that you want changed by other things, but not necessarily changed permanently changed

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.

  var gear = ""; // empty gear string, but this can be set to a specific gear and changed like in car example
  
  this.setGear = function(change) {
    gear = change; // changes gear variable to whatever argument is passed in setGear variable
  };
  
  this.getGear = function() {
    return gear; // returns gear as set by setGear
  };
};

var myCar = new Car();

var myBike = new Bike(); // creates variable to create new Bike constructor
myBike.setGear(4); // sets gear var at 4
console.log(myBike.getGear); // returns gear as 4

// Iterate over Arrays -- using map function
// map allows for iteration across entire set of array

var oldArray = [1,2,3,4,5];

// Only change code below this line.

// creates variable newArray that uses oldArray values and adds 3 to each value
var newArray = oldArray.map(function(val) {
  return val + 3;
});

console.log(oldArray);
console.log(newArray);

// Reduce method to condense arrays
var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

// Reduce cycles through reducing elements of an array to a single number
singleVal = array.reduce(function(previousVal, currentVal) {
 return previousVal + currentVal; // previousVal is prior value, currentVal can be specified but is sent to second array element
}, 0);
console.log(singleVal);


// Sorting arrays

var array = [1, 12, 21, 2];

// Only change code below this line.

// This sorts from biggest to smallest numbers.  To get smallest to biggest do a-b
array.sort(function(a,b) {
  return b - a;
});