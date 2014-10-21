/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/*	Alexander Rhett Crammer
	Tuesday, 21 October, 2014	*/

var Person = {
	jobs:["Web Developer","Surgeon","Cocoa Developer","Neurologist","Broker"],
	actions:["Engaging in Conversation","Dining Out","Studying","Reading","Taking the train to Midtown"],
	generate: function(name,job,action,row) {
		
		console.log("Name passed to someFunction(): " + name);
		console.log("Job passed to someFunction(): " + job);
		console.log("Action passed to someFunction(): " + action);
		console.log("Row passed to someFunction(): " + row);
	}
};

window.Person = Person; // Appending the 'Person' object as a method of the 'window' object in order to allow 'main.js' access

console.log("Person.js has been completely interpreted -- Nothing has broken yet."); // Reassuring console log to state that this file has completely executed without breaking