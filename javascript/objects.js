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
