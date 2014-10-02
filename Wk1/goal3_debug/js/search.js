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
	}; // Ends something which is not the function at line 6
	
	// Finds search matches
	var search = function(query)
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

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
				};
			;
		;
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();