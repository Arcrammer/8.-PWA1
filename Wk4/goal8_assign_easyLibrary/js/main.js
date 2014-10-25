/*
	PWA1: Goal8: Simple Library App
*/

(function(){
var anchors = document.querySelectorAll("a"); // Fetch all anchor elements
var resultsFromFabulousLibrary = new fabulousLibrary.prototype.init(anchors); // Storing the value returned by 'init()' to the 'resultsFromFabulousLibrary' variable
console.log(resultsFromFabulousLibrary); // Outputting the results of the 'fabulousLibrary.prototype.init()' call to the console log
fabulousLibrary(resultsFromFabulousLibrary).each(anchors); // Passing 'resultsFromFabulousLibrary' variable value to 'fabulousLibrary' library

})();  // end wrapper