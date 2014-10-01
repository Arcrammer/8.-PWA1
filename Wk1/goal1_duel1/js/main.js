/*	Duel #1
	
	Alexander Rhett Crammer
	Wednesday, 1 October, 2014
	
	Assignment 1
	Part 1/3 of series	*/

// self-executing function
function(){

    console.log("FIGHT!!!"); // Outputs to the console

    //player name
    var playerOneName = "Gaga"; // Stores the name of the first player in the variable 'playerOneName' for later use
    var playerTwoName = "Katy"; // Stores the name of the second player in the variable 'playerTwoName' for later use

    //player damage
    var player1Damage = 20; // Stores the maximum amount the first player will be able to lose during the fight
    var player2Damage = 20; // Stores the maximum amount the second player will be able to lose during the fight

    //player health
    var playerOneHealth = 100; // Stores the amount the first player will have to lose at the beginning of the fight
    var playerTwoHealth = 100; // Stores the amount the second player will have to lose at the beginning of the fight

    //initiate round
    var round=0; // Stores the value of the round number which will be incremented (with 'round++') in the if-else which will alert the user of the current round and how many points both players currently have

    function fight(){ // Declaring a named function known as 'fight()' to be called at the end of this script in order to begin the fight
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // This is the first alert which the user will see after 'fight()' is called
        for (var i = 0; i < 10; i++) // Declaring a for() to loop once for each of the 10 rounds of the fight
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // Multiplies the amount the first player may lose during the fight with '.5' then stores the result in the local variable 'minDamage1'
            var minDamage2 = player2Damage * .5; // Multiplies the amount the second player may lose during the fight with '.5' then stores the result in the local variable 'minDamage2'
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // Generates a random outcome which will be taken from the first players health then stores that amount in the variable 'f1'
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // Generates a random outcome which will be taken from the second players health then stores that amount in the variable 'f2'

            //inflict damage
            playerOneHealth-=f1; // Takes the amount stored in the 'f1' variable from the first players' health amount
            playerTwoHealth-=f2; // Takes the amount stored in the 'f2' variable from the second players' health amount

            console.log(playerOneName+": "+playerOneHealth + "\n" + playerTwoName+":"+playerTwoHealth); // Outputs the current players names and health amounts to the console

            //check for victory
            var result = winnerCheck(); // Returns 'winnerCheck()' result to the variable 'result'
            console.log(result); // Calls winnerCheck() when the 'result' variable is called, which outputs the result of the fight to the console (who's won or lost, both have lost, or there's no winner)
            if (result==="no winner") // Either alert()'s the user of the current players' health and the current round or alert()'s the user of the result of the fight
            {
                round++; // Increments the 'round' variables' value each time this particular if() is executed
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // Alert()'s the user of the current round and health amounts of both players

            } else{ // Calls another block if the above if() isn't applicable
                alert(result); // Alert()'s the user of the result of the fight
                break; // Ends the else statement (Why does this need to be here?)
            }; // Ends the if-else of lines 48 and 53

          }; // Ends the for() of line 31
    }; // Ends fight() of line 29

    function winnerCheck(){ // Declared a function named 'winnerCheck()' which will check to see which player has won the fight after fight() has executed
        var result="no winner"; // Declared the default output of 'no winner' for the case that none of the following conditions are met and a winner couldn't be determined then stores the value in the variable 'result' for later use
        if (playerOneHealth<1 && playerTwoHealth<1) // if() to be executed when the first and second players both have health less than the amount of 1
        { // Gross coding style which is understandable and respectable but still tacky in my new-generation opinion
            result = "You Both Die"; // Reassigns the value of the 'result' variable if both players have health amounts below 1
        } else if(playerOneHealth<1){ // Else() to execute if the first player has health lower than the amount of 1
            result =playerTwoName+" WINS!!!" // Reassigns the value of the 'result' variable if the first player has health lower than 1 to declare that the second player has won the fight
        } else if (playerTwoHealth<1)// Else() to execute if the second player has health lower than the amount of 1
        {
            result = playerOneName+" WINS!!!" // Reassigns the value of the 'result' variable if the second player has health lower than 1 to declare that the second player has won the fight
        }; // Ends the if-elseif-elseif's declared on lines 63, 66, and 68
       return result; // Returns the value of this functions' 'result' variable to the 'result' variable declared within the fight() function. This variable is declared for the fight() function to locally use in its' for() loop on line 46
    }; // Ends the 'winnerCheck()' function

    /*******  The program gets started below *******/
    fight(); // Executes after all of the above functions and algorithms have been declared to initiate the game

}; // Ends the self-executing function() declared on line 10 (I don't know if those extra parentheses were for anything important but I've removed them because they seemed pointless and I had no idea what they were for)

// That was a lot of typing. I need more caffeine.
// Commented with <3 by Alexander Rhett Crammer
// Copyright 2014 don't use this or I'll open a law suit and make you PAAAAAAYYYYYYYYYY