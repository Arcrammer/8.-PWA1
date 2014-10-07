// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

        //CODE GOES HERE
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE
        
        function fullName(firstName,lastName) { // Creating a new function
        	return firstName + " " + lastName; // Pretty straightforward
        }; // Ends fullName defined on line 60

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

        //PUT FUNCTION HERE
        
        function wordCount(wordsToCount) { // Declaring the 'wordCount()' function
        	var count = 0; // Setting the count variable now instead of later
        	for (var i = 0; i <= wordsToCount.length; i++) { // For() to execute for each character of the string provided
			   if (wordsToCount.charAt(i) == " ") { // If to increment the value of the 'count' variable once for each space
			        count++; // Increases the value of the 'count' variable
			    }; // Ends the if() of line 75
			}; // Ends for() of line 74
			return count;
        }; // Ends wordCount() of line 72

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE
        
        function charCount(charactersToCount) { // Defining the 'charCount()' function
        	return charactersToCount.length; // That was much more simple than I almost tried to make it
        }; // Ends 'charCount()' defined on line 89

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
        
        function vowelsInWord(string) { // Defining the 'vowelsInWord()' function
        	var vowels = 0; // Declaring the value of the 'vowels' variable now rather than later
        	for(var i = 0; i <= string.length; i++) { // Creating a for() to loop through each character of input
        		if(string.charAt(i) == "a" || string.charAt(i) == "e" // Checking for a's and e's
        		|| string.charAt(i) == "i" || string.charAt(i) == "o" // Checking for i's and o's
        		|| string.charAt(i) == "u") /* Checking for u's */ {
        			vowels++; // Adding one integer value to the 'vowels' variable
        		}; // Ends the 'if()' defined on line 103
        	}; // Ends the 'for()' defined on line 102
        	return vowels; // Returns the final value of the 'vowels' variable
        }; // Ends 'vowelsInWord()' defined on line 100
        
    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
        
        function findNum(integers,booleans) {
        	var outputArray = [];
        	if(booleans == false || booleans == null) {
        		for(var i = 0; i <= integers.length; i++) /* for() to loop once for each item */ {
        			if(integers[i] % 2 == 0) {
        				outputArray.push(integers[i]);
        			};
        		};
        	} else {
        		// create an array with all of the even numbers from the array
        		for(var i = 0; i <= integers.length; i++) /* for() to loop once for each item */ {
        			if(integers[i] % 2 != 0) {
        				outputArray.push(integers[i]);
        			};
        		};
        	};
        	return outputArray;
        }; // Ends 'findNum()' defined on line 119

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();