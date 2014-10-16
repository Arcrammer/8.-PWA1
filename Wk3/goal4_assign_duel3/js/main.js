/*	Duel #2
	
	Alexander Rhett Crammer
	Tuesday, 7 October, 2014
	
	Assignment 1
	Part 2/3 of series	*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); // Outputs a string to the console

	// Player statistics
	var fighter = [{ // Declaring array of objects which will contian information about the fighters
		name: "Gaga", // Declaring the name of the first fighter
		damage: 20, // Declaring the damage the first player would be able to take
		health: 100 // Declaring the first players health
	},{ // Declaring the next fighter object in the array
		name: "Katy", // Declaring the name of the second fighter
		damage: 20, // Declaring the damage the second player would be able to take
		health: 100 // Declaring the second players health
	}]; // Ending fighter array of objects declaration

    //initiate round
    var round = 0; // Stores the value of the round number which will be incremented (with 'round++') in the if-else which will alert the user of the current round and how many points both players currently have
    //initiate round
    var round = 0; // Stores the value of the round number which will be incremented (with 'round++')
    var kabalHealthHUD = document.querySelector("#kabal").childNodes[1]; // Declaring a variable to hold the paragraph node under the div with id "kabal"
    var kratosHealthHUD = document.querySelector("#kratos").childNodes[1]; // Declaring another variable to hold the paragraph node under the div with id "kratos"
    var roundHUD = document.querySelector("#round"); // Declaring a variable to return the h4 node which will display the current round
    var mainButton = document.querySelector(".buttonblue"); // Declaring a variable to return the button node

    kabalHealthHUD.innerHTML = "Gaga: " + fighter[0].health; // These two lines will be at the top of the page which means...
    kratosHealthHUD.innerHTML = "Katy: " + fighter[1].health; // ...the top bar will show before the fight button is clicked

    mainButton.onclick = function() { // Declaring an anoymous function previously known as 'fight()' to be called upon click of the button

        	//random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter[0].damage * .5; // Multiplies the amount the first player may lose during the fight with '.5' then stores the result in the local variable 'minDamage1'
            var minDamage2 = fighter[1].damage * .5; // Multiplies the amount the second player may lose during the fight with '.5' then stores the result in the local variable 'minDamage2'
            var f1 = Math.floor(Math.random()*(fighter[0].damage-minDamage1)+minDamage1); // Generates a random outcome which will be taken from the first players health then stores that amount in the variable 'f1'
            var f2 = Math.floor(Math.random()*(fighter[1].damage-minDamage2)+minDamage2); // Generates a random outcome which will be taken from the second players health then stores that amount in the variable 'f2'

            //inflict damage
            fighter[0].health -= f1; // Takes the amount stored in the 'f1' variable from the first players' health amount
            fighter[1].health -= f2; // Takes the amount stored in the 'f2' variable from the second players' health amount

	        kabalHealthHUD.innerHTML = "Gaga: " + fighter[0].health; // These are the health outputs for the top bar of the page...
	        kratosHealthHUD.innerHTML = "Katy: " + fighter[1].health; // ...to update its' text upon the players' healths change

            console.log("\n" + fighter[0].name + ": " + fighter[0].health + "\t" + fighter[1].name + ":" + fighter[1].health); // Outputs the players names and current health amounts to the console

            //check for victory
            var result = winnerCheck(); // Returns 'winnerCheck()' return to the variable 'result'
            console.log(result); // Calls winnerCheck() by calling the 'result' variable, which provides the result of the fight to the console (who's won or lost, both have lost, or that there's no winner)
            if (result === "no winner") /* If() to execute in the case that there's no winner */ {
                round++; // Increments the 'round' variables' value each time this particular if() is executed
                roundHUD.innerHTML = "ROUND " + round; // 
            } else { // Calls another block if the above if() isn't applicable
                roundHUD.innerHTML = result; // Displays the user of the result of the fight
                document.querySelector("#scores").innerHTML = result;
                mainButton.style.display="none"; // Disables the button by removing it
            }; // Ends the if-else of lines 48 and 53
        }; // Ends the fight() function executed upon button click


    /*******  The program gets started below *******/
    fight(); // Executes after all of the above functions and algorithms have been declared to initiate the game

})(); // Ends the self-executing function() declared on line 10

// That was a lot of typing. I need more caffeine.
// Commented with <3 by Alexander Rhett Crammer
// Copyright 2014 don't use this or I'll open a law suit and make you PAAAAAAYYYYYYYYYY