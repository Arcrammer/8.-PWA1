/*	Duel #2
	
	Alexander Rhett Crammer
	Wednesday, 15 October, 2014
	
	Assignment 1
	Part 3/3 of series	*/

// self-executing function
(function(){

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

    console.log("FIGHT!!!"); // Outputs a string to the console

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

    function winnerCheck(){ // Declared a function named 'winnerCheck()' which will check to see which player has won the fight after fight() has executed
        var result="no winner"; // Declared the default output of 'no winner' for the case that none of the following conditions are met and a winner couldn't be determined then stores the value in the variable 'result' for later use
        if (fighter[0].health<1 && fighter[1].health<1) // if() to be executed when the first and second players both have health less than the amount of 1
        { // Gross coding style which is understandable and respectable but still tacky in my new-generation opinion
            result = "You Both Die"; // Reassigns the value of the 'result' variable if both players have health amounts below 1
        } else if(fighter[0].health<1){ // Else() to execute if the first player has health lower than the amount of 1
            result =fighter[1].name+" WINS!!!" // Reassigns the value of the 'result' variable if the first player has health lower than 1 to declare that the second player has won the fight
        } else if (fighter[1].health<1)// Else() to execute if the second player has health lower than the amount of 1
        {
            result = fighter[0].name+" WINS!!!" // Reassigns the value of the 'result' variable if the second player has health lower than 1 to declare that the first player has won the fight
            if(fighter[0].name.toLowerCase() == "gaga") {
            	result = fighter[0].name +" WINS!!!\n\nYYYYYAAAAAAAAAAAASSSSSSSSS GAGA SLAAAAAY MAMA" // Reassigns the 'result' value if the first player is named 'Gaga' by comparing the value to "gaga" after being converted to lower case, that way the first players' name could be any case of the word 'Gaga' and the condition for this if() would still be true and reassign the value
            	} // Ends the if()
        }; // Ends the if-elseif-elseif's

       return result; // Returns the value of this functions' 'result' variable to the 'result' variable declared within the fight() function. This variable is declared for the fight() function to locally use in its' for() loop on line 46
    }; // Ends the 'winnerCheck()' function

})(); // Ends the self-executing function() declared on line 10

// Debugged and developed with <3 by Alexander Rhett Crammer