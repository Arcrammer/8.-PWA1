/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/*  Alexander Rhett Crammer
    Tuesday, 21 October, 2014  */

var names = ["Lázaro", "Aviram", "Samuel", "Miles", "Felix"]; // Defining an array of random names
var people = []; // Declaring the array to hold each instance of the 'Person' object

// For() to create one new instance thrice for three names of the 'names' array in the 'Person' object defined in 'person.js'
for (var i=0;i < 3;i++) {
	var randomNumberBetween0and5 = Math.floor((Math.random() * 5) + 0); // Randomly choosing a number for the arrays to be passed to the 'Person()' object's methods defined in 'person.js'
	var newInstance = new Person.generate(names[randomNumberBetween0and5],Person.actions[randomNumberBetween0and5],Person.jobs[randomNumberBetween0and5],); // Creating a new instance of the 'Person()' object
	//people.push(newInstance); // Adding the new instance to the 'people' array of instances
	people.push(newInstance); // Adding the newly created instance of 'Person' to the variable 'people'
}; // Ending the for()

console.log(people); // Logging the 'people' array for debugging
console.log("Main.js has been completely interpreted -- Nothing has broken yet."); // Reassuring console log to state that this file has completely executed without breaking