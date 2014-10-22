/*
     Developed by the JavaScript team at Full Sail University
     Date: 1306     
*/

/*  Alexander Rhett Crammer
    Wednesday, 22 October, 2014
    Practice! Form Validation  */

(function(){
	var mainForm = document.getElementById("mainForm");
    mainForm.onsubmit = function(e) { // I have no idea what the event is passing to this function

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        // Dynamically fetching the value of the 'name' attrubutes based on DOM tree then passing them as a parameter to the function 'validateField()' defined after 'mainForm.onsubmit()'
        validateField(mainForm.childNodes[1].childNodes[1].childNodes[3].name); // Executes all of the code after this block
        validateField(mainForm.childNodes[1].childNodes[3].childNodes[3].name); // Executes all of the code after this block
        validateField(mainForm.childNodes[1].childNodes[5].childNodes[3].name); // Executes all of the code after this block
        validateField(mainForm.childNodes[1].childNodes[7].childNodes[3].name); // Executes all of the code after this block
        validateField(mainForm.childNodes[1].childNodes[9].childNodes[3].name); // Executes all of the code after this block

        e.preventDefault();
        return false;
    };

    var validateField = function(inputName) {

        // Wouldn't a switch() be more efficient here?
        if (inputName === 'f_username'){
            pattern = /^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*/; // Regular expression to compare to the input provided for 'f_username'
        } else if(inputName === 'f_email') {
        	pattern = /^\w*\@\w*\.\w{2,4}/; // Regular expression to compare to the input provided for 'f_email'
        } else if(inputName === 'f_phone') {
        	pattern = /\(\d{3}\)\d{3}\-\d{4}/; // Regular expression to compare to the input provided for 'f_phone'
        } else if(inputName === 'f_ssn') {
        	pattern = /\d{3}\-\d{2}\-\d{4}/; // Regular expression to compare to the input provided for 'f_ssn'
        } else if(inputName === 'f_password') {
        	pattern = /^\w{4,15}$/; // Regular expression to compare to the input provided for 'f_password'
        } else {
        	console.log("Something went tragically wrong! (One of the elements likely doesn't have an acceptable name attribute value.)");
        	pattern = null;
        }

    // By this point, the variable 'pattern' should have a value and exist. Now we'll use its' .test() method passing the input value

    var pass = pattern.test(inputName.value); // ...then assign the returned Boolean result to the variable 'pass'
    var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

    if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        }
    };

})();  // end wrapper