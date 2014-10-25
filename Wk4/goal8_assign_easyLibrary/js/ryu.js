/*
	PWA1: Goal8:  Simple Library
*/

var fabulousLibrary = function(libWideParem){

    return new fabulousLibrary.prototype.init(libWideParem);

};

fabulousLibrary.prototype = {

    init: function(elements){
	    
    },

    elements: [],

    each: function(elements) {
	    for(var i=0;i < elements.length;i++) {
	    	console.log(this.elements);
	    	elements[i].style.backgroundColor = "gray";
	    }
    }

}; // end prototype

fabulousLibrary.prototype.init.prototype = fabulousLibrary.prototype;