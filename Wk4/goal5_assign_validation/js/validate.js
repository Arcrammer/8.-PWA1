/*
     Developed by the JavaScript team at Full Sail University
     Date: 1306     
*/

/*  Alexander Rhett Crammer
    Wednesday, 22 October, 2014
    Practice! Form Validation  */

(function(){
    myform.onsubmit = function(e) { // I have no idea what the event is passing to this function

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        // Dynamically fetching the value of the 'name' attrubutes based on DOM tree then passing them as a parameter to the function 'validateField()' defined after 'myform.onsubmit()'
        validateField(myform.childNodes[1].childNodes[1].childNodes[3].name); // Executes all of the code after this block
        validateField(myform.childNodes[1].childNodes[3].childNodes[3].name); // Executes all of the code after this block
        validateField(myform.childNodes[1].childNodes[5].childNodes[3].name); // Executes all of the code after this block
        validateField(myform.childNodes[1].childNodes[7].childNodes[3].name); // Executes all of the code after this block
        validateField(myform.childNodes[1].childNodes[9].childNodes[3].name); // Executes all of the code after this block

        e.preventDefault();
        return false;
    };

    var validateField = function(inputName){

	    // Wouldn't a switch() be more efficient here?
        if (inputName.name === 'f_username'){
            var pattern = /^[A-Z]\w*[\s*[A-Z]\w*]*/; // Regular expression to compare to the input provided for 'f_username'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.
        } else if(inputName.name === 'f_email') {
        	var pattern = /^\w*\@\w*\.\w{2,4}/; // Regular expression to compare to the input provided for 'f_email'
        } else if(inputName.name === 'f_phone') {
        	var pattern = /\(\d{3,3}\)\d{3,3}\-\d{4,4}/; // Regular expression to compare to the input provided for 'f_phone'
        } else if(inputName.name === 'f_ssn') {
        	var pattern = /\d{3,3}\-\d{2,2}\-\d{4,4}/; // Regular expression to compare to the input provided for 'f_ssn'
        } else if(inputName.name === 'f_password') {
        	var pattern = /^\w{4,15}/; // Regular expression to compare to the input provided for 'f_password'
        }

    var pass = pattern.test(inputName.value);
    var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

    if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'yello';
        };
    };

})();  // end wrapper



