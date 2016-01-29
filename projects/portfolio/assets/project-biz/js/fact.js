"use strict";
var facts = ["one", "two", "three", "four", "five"];
var x = 0;
var firstloop = true;

var show = function() {
	/*for the first time through at x=0*/
	if (x == 0 && firstloop) {
		$("#zero p").hide();
		$("#"+facts[x]+" p").show();
	}
	/*for when x=0 after the first time through*/
	else if (x == 0 && !firstloop) {
		$("#"+facts[facts.length - 1]+" p").hide(); 
		$("#"+facts[x]+" p").show();
	}
	/*hide prior fact*/
	else {
		$("#"+facts[x - 1]+" p").hide(); 
		/*show new fact*/
		$("#"+facts[x]+" p").show();
	}

	/*reset to first fact when x gets to end of array*/
	if (x == facts.length - 1) {
		x = 0;
		firstloop = false;
	}
	else {
		x++;
	}
}

$(document).ready( function() {
	$("#fact").click(show);
});