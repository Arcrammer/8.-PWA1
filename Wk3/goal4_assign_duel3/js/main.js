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

    function fight(){ // Declaring a named function known as 'fight()' to be called at the end of this script in order to begin the fight
        alert(fighter[0].name + ":" + fighter[0].health + "	*START*	" + fighter[1].name + ":" + playerTwo[2]); // This is the first alert which the user will see after 'fight()' is called
        for (var i = 0;i < 10; i++) { // Declaring a for() to loop once for each of the 10 rounds of the fight
        //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter[0].damage * .5; // Multiplies the amount the first player may lose during the fight with '.5' then stores the result in the local variable 'minDamage1'
            var minDamage2 = playerTwo[1] * .5; // Multiplies the amount the second player may lose during the fight with '.5' then stores the result in the local variable 'minDamage2'
            var f1 = Math.floor(Math.random()*(fighter[0].damage-minDamage1)+minDamage1); // Generates a random outcome which will be taken from the first players health then stores that amount in the variable 'f1'
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2); // Generates a random outcome which will be taken from the second players health then stores that amount in the variable 'f2'

            //inflict damage
            fighter[0].health -= f1; // Takes the amount stored in the 'f1' variable from the first players' health amount
            playerTwo[2] -= f2; // Takes the amount stored in the 'f2' variable from the second players' health amount

            console.log(fighter[0].name + ": " + fighter[0].health + "\n" + fighter[1].name + ":" + playerTwo[2]); // Outputs the current players names and health amounts to the console

            //check for victory
            var result = winnerCheck(); // Returns 'winnerCheck()' result to the variable 'result'
            console.log(result); // Calls winnerCheck() when the 'result' variable is called, which outputs the result of the fight to the console (who's won or lost, both have lost, or there's no winner)
            if (result === "no winner") // Either alert()'s the user of the current players' health and the current round or alert()'s the user of the result of the fight
            {
                round++; // Increments the 'round' variables' value each time this particular if() is executed
                alert(fighter[0].name+":"+fighter[0].health+" *ROUND "+round+" OVER"+"*  "+fighter[1].name+":"+playerTwo[2]); // Alert()'s the user of the current round and health amounts of both players

            } else{ // Calls another block if the above if() isn't applicable
                alert(result); // Alert()'s the user of the result of the fight
                break; // Ends the else statement (Why does this need to be here?)
            }; // Ends the if-else of lines 48 and 53

          }; // Ends the for() of line 31
    }; // Ends fight() of line 29

    function winnerCheck(){ // Declared a function named 'winnerCheck()' which will check to see which player has won the fight after fight() has executed
        var result="no winner"; // Declared the default output of 'no winner' for the case that none of the following conditions are met and a winner couldn't be determined then stores the value in the variable 'result' for later use
        if (fighter[0].health<1 && playerTwo[2]<1) // if() to be executed when the first and second players both have health less than the amount of 1
        { // Gross coding style which is understandable and respectable but still tacky in my new-generation opinion
            result = "You Both Die"; // Reassigns the value of the 'result' variable if both players have health amounts below 1
        } else if(fighter[0].health<1){ // Else() to execute if the first player has health lower than the amount of 1
            result =fighter[1].name+" WINS!!!" // Reassigns the value of the 'result' variable if the first player has health lower than 1 to declare that the second player has won the fight
        } else if (playerTwo[2]<1)// Else() to execute if the second player has health lower than the amount of 1
        {
            result = fighter[0].name+" WINS!!!" // Reassigns the value of the 'result' variable if the second player has health lower than 1 to declare that the second player has won the fight
            if(fighter[0].name.toLowerCase() == "gaga") {
            	result = fighter[0].name+" WINS!!!\n\nYYYYYAAAAAAAAAAAASSSSSSSSS GAGA SLAAAAAY MAMA" // Reassigns the 'result' value if the first player is named 'Gaga' by comparing the value to "gaga" after being converted to lower case, that way the first players' name could be any case of the word 'Gaga' and the condition for this if() would still be true and reassign the value
            	} // Ends the if() declared at line 71
        }; // Ends the if-elseif-elseif's declared on lines 63, 66, and 68
       return result; // Returns the value of this functions' 'result' variable to the 'result' variable declared within the fight() function. This variable is declared for the fight() function to locally use in its' for() loop on line 46
    }; // Ends the 'winnerCheck()' function

    /*******  The program gets started below *******/
    fight(); // Executes after all of the above functions and algorithms have been declared to initiate the game

})(); // Ends the self-executing function() declared on line 10

// That was a lot of typing. I need more caffeine.
// Commented with <3 by Alexander Rhett Crammer
// Copyright 2014 don't use this or I'll open a law suit and make you PAAAAAAYYYYYYYYYY