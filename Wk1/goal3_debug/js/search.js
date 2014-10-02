/*	Alexander Rhett Crammer
	Thursday, 2 October, 2014
	Debug #1	*/

// Create privatized scope using a self-executing function
(function(){ // Beginning a self-executing function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), // Captures the HTML div with the id attribute of 'results' which will hold the results of the search then stores the reference to the 'resultsDIV' variable
		searchInput = document.forms[0].search, // Fetches the first (and only) <form> of 'index.html' then searches for something (Honestly unsure)
		currentSearch = '' // Assigns an empty string value to the variable 'currentSearch'
	;
	
	// Validates search query
	var validqte == function(query){ // Assigning an anonymous function to a local variable named 'validqte'
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ // Begins a while() loop which will be executed as long as the first character of the provided search query is a space, in order to provide the most desirable results for the user regardless of extra spaces
			query = query.substring(1, query.length); // Reassigns the value of the input search query to the 'query' variable then passes it through the loop again for further trimming
		}; // Ends the while() loop beginning at line 18
		while(query.charAt(query.length-1) === ""){ // Begins another while() loop which will be executed as long as the last character of the provided search query is an empty string /* POSSIBLE BUG FIX: THIS CONDITION SHOULD EVALUATE AGAINST A SPACE AS IN " " (Maybe I just don't understand how this is working but it seems like that should be the case) */
			query = query.substring(0, query.length-1); // Reassigns the value of the variable 'query' to a new string with one character removed then passes through the loop again
		; /* DEFINITE BUG FIX: CURLY BRACKET NEEDED TO CLOSE THIS WHILE LOOP'S BLOCK */ // Ends the while() loop beginning at line 21
		
		// Check search length, must have 3 characters
		if(query.length < 3){ // Begins an if() to check that the provided search query is greater than 2 characters in length
			alert("Your search query is too small, try again.); // Alert()'s the user if the provided string is longer than 3 characters
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); // Moves focus (the text of the search box will be highlighted prompting the user to try another query) to the 'searchInput' variable declared on line 10
			return; // Empty return but I have no idea what it's for. If() statements don't return things, do they? =|
		}; // Ends the if() beginning at line 26
		
		search(query); // Calls the search() function (which I've never heard of) on something (I have no idea what, exactly) and passes the trimmed and validated search query from the 'query' variable has been modified between lines 15 and 32 by calling the 'validqte' variable holding the anonymous function to begin it (the validation)
	}; // Ends the anonymous function under the variable 'validqte' beginning at line 15
	
	// Finds search matches
	var search = function(query) /* DEFINITE BUG FIX: NEED AN OPENING CURLY BRACKET FOR THIS FUNCTION */ // Begins an anonymous function under the local variable named 'search'
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); // Joins the query elements from an array to a string then assigns the result to the variable 'queryArray' (Could this be a bug or a misused method? Am I missing something here?)
		
		// array to store matched results from database.js
		var results = []; // Creates an empty array then assigns it to the variable 'results'

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ 
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				}; // Ends the for() loop beginning at line 56
			; /* DEFINITE BUG FIX: ADD A CLOSING CURLY BRACKET */ // Ends the for() loop beginning at line 47
		; /* DEFINITE BUG FIX: ADD A CLOSING CURLY BRACKET */ // Ends the anonymous function declared under the variable 'search' on line 38
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ // Begins an anonymous function which is assigned to the variable 'noMatch'
		var html = ''+ // Declares a local variable named 'html' then assigns it the value of an empty string and concatenation to include what's on line 81 below
			'<p>No Results found.</p>'+ // Adds more text to the string of the variable 'html' declared on line 80
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' // Again, adds more text to the string of the variable 'html' declared on line 80
		; // Ends the statement declaring the value of the variable 'html'
		resultsDIV.innerHTML = html; // Sets the 'innerHTML' of the 'resultsDIV' variable (declared on line 9) to the value of the variable 'html' declared at line 80
	}; // Ends the anonymous function assigned to the variable 'noMatch' which can be found at line 79
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ // Begins an anonymous function and stores it in the local variable 'showMatches'
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', // Reassigns the value of the 'html' variable declared on line 80
			title, // Declares a local variable named 'title' with no value
			url // Declares another local variable named 'url' with no value
		; // Ends the statement beginning on line 91 declaring the variables
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ // Begins a for() loop which will execute once for each result returned
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); // Assigns the location of the pipe character within each result then stores the value as an integer to the variable 'titleEnd'
			title = results[i].subString(0, titleEnd); // Returns the titles of each video from the first character to the pipe (definded in 'titleEnd') to the variable 'title'
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); // Finds the name of each video file then assigns the value to the variable 'url'
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; // Reassigns the value of the 'html' variable to a string holding a paragraph element holding an anchor to the video
		}; // Ends the for() loop beginning at line 97
		resultsDIV.innerHTML = html; // Pushes the value of the variable 'html' to the <div> with the id of 'resultsDIV'
	}; // Ends the anonymous function declared under the variable 'showMatches' defined on line 88
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ // Begins a function to execute each time the first (and only) form element of 'index.html' is submitted using the 'submit' button with id 'ssubmit'
		var query = searchInput.value; // Assigns the value of the 'searchInput' variable declared on line 10 to a local variable named 'query'
		validqte(query); // Calls the 'validqte()' function defined on line 15 passing the value query most recently redefined on line 116

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; // Returns a value of 'false' after the function beginning on line 115 is executed
	; // Ends the function beginning on line 115

})(); // Ends the self-executing function defined on line 6