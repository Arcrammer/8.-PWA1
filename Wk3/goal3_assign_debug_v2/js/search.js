	/*	Alexander Rhett Crammer
		Wednesday, 8 October 2014
		Buggy Search Engine #3	*/
	// Create privatized scope using a self-executing function
(function(){ // Self-executing function to execute when this document is loaded
	
		// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
		var resultsDIV = document.getElementById("results"), // Fetches the HTML element with the id of 'results'
			searchInput = document.forms[0].search, // Fetches the search box object (along with its' methods and properties, of course)
			currentSearch = ''; // Possibly unused variable with no apparent purpose (Found nowhere else in this document)
	
		// Validates search query
		var validate = function(query) { // Function to be called upon query submission to trim the query of spaces and check its' length
			// Trim whitespace from start and end of search query
			while(query.charAt(query[0]) === " ") { // While() to execute as long as the first character of the query is a space
			query = query.substring(1, query.length); // Trims the first character from the query then assigns the new value to the variable
		} // While() 17
			while(query.charAt(query.length-1) === " ") { // While() to execute as long as the last character of the query is a space
			query = query.substring(0, query.length-1); // Trims the last character from the query then assigns the new value to the variable
		} // While() 16
			
			// Check search length, must have 3 characters
			if(query.length < 3) { // If() to execute if the length of the (now trimmed) query is less than 3 characters long
			alert("Your search query is too small, try again."); // Alerts the user they've provided a query too short

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); // Highlights the search box text alerting the user to search another query
		} // If() 21
			search(query); // Calls 'search()' after trimming the query and ensuring it's not less than 3 characters
		}; // validate() 10
	
		// Finds search matches
		var search = function(query) {
			// split the user's search query string into an array
			var queryArray = query.split(" "); // Split()'s the query (instead of trying to join the string)
	
			// array to store matched results from database.js
			var results = []; // Creates an empty array under the variable 'results' to be filled later
	
			// loop through each index of db array
			for(var i = 0, j = db.length; i < j; i++) { // For() to execute once for each database dbitem
			
				// each db[i] is a single video dbitem, each title ends with a pipe "|"
				// save a lowercase variable of the video title
				var dbTitleEnd = db[i].indexOf('|'); // Assigns the integer value of the character position of the vertical bar to 'dbTitleEnd'
				var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); // Assigns the values of each database dbitem to 'dbitem'
				
				// loop through the user's search query words
				// save a lowercase variable of the search keyword
				for(var ii=0, jj=queryArray.length; ii<jj; ii++) { // For() to loop once for each word in 'queryArray' defined on line 36
					var qitem = queryArray[ii].toLowerCase(); // Converts the query array (created on line 36) to lower case for comparison
	
					// is the keyword anywhere in the video title?
					// If a match is found, push full db[i] into results array
					var compare = dbitem.indexOf(qitem); // Returns the position as an integer of the matching words
					if(compare !== -1) { // If() to execute if 'compare' exists (meaning a matching word was found)
						results.push(db[i]); // Adds the matching result to the 'db' array for later output
					} // If() 57
				} // For() 51
			} // For() 42
			
			results.sort(); // Sorts the dbitems compiled in the 'results' array alphabetically ascending
			
			// Check that matches were found, and run output functions
			if(results.length === 0) { // If() to execute if no results were pushed to the 'results' array
				noMatch(); // Calls 'noMatch()' defined on line 74
			} else { // Executes if results were pushed to the 'results' array
				showMatches(results); // Calls 'showMatches()' if the array 'results' contains dbitems
			} // If() 66
		}; // Search() 33
	
		// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
		var noMatch = function() { // Delaring a function under the variable 'noMatch'
		var html = '' + // Assigning an empty string value to the variable 'html'
			'<p>No Results found.</p>' + // Adding more output for the 'html' variable
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'; // Completing output for the 'html' variable
		resultsDIV.innerHTML = html; // Calls the 'resultsDIV' variable declared on line 5 to fetch the <div> which will contain the results then assigns its' innerHTML the values of the 'html' variable declared on line 75
		console.log("No matches were found.");
	}; // noMatch() 73
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results) { // Declaring a function under the variable 'showMatches'

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', // Assigning the value of a paragraph element with the text 'Results' to the html variable
			title, // Adding the value of the variable 'title' defined on line 95 to the variable 'html'
			url; // Adding the value of the variable 'url' defined on line 98 to the variable 'html'

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++) { // For() to execute once for every dbitem in the array 'results'

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); // Defining a variable to hold the position of the vertical bar character within the title of the returned dbitem as an integer value
			title = results[i].substring(0, titleEnd); // Defining a variable to hold the title of the returned title from the first character to the vertical bar as defined in 'titleEnd' declared on line 94
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); // Defining the variable 'URL' to hold the returned link to the dbitem from the database
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; // Appending the value of the variable 'URL' to the variable 'html' for later output to the user
		} // For() 90
		resultsDIV.innerHTML = html; // Fetches the designated <div> for the results then assigns the innerHTML of the results found
		console.log("Matches were found and displayed.");
	}; // showMatches() 82

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() { // Beginning a function to execute upon form submission
		var query = searchInput.value; // Creates a variable to hold the search query
		console.log("Input: " + query);
		validate(query); // Passes the query provided to the 'validate()' function for trimming and length check

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; // Returns a boolean value of 'false' from the function 
	}; // document.forms[0].onsubmit() 108

})(); // Self-executing function() line 2