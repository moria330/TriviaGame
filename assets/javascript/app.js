//let the user select the answers to the questions
//store the users selected answers
//check the users answers to the correct answer
//have a count down timer to end of the game
//do not let the user input more than one answer to a question
//keep track of correct answers
//keep track of incorrect answers
//display count of incorrect and correct answers at the end of the game

var correct = 0;
var incorrect = 0;
var flags = ["../images/Germany.svg","../images/Ivory_Coast.svg","../images/New_Zealand.svg","../images/Greece.svg","../images/Myanmar.svg","../images/Norway.svg","../images/Romania.svg","../images/Sweden.svg","../images/Malaysia.svg","../images/Ireland.svg"];
var countries = ["Germany","Ivory Coast","New Zealand","Greece","Myanmar","Norway","Romania","Sweden","Malaysia","Ireland"];
var answers = [];

$(document).ready(function(){

for (var i = 0; i < flags.length; i++) {
	$("#question").html('<img src="' + flags[i] + '" class= "flags">');

}

if(answers[0] == countries[0])


setTimeout(timeUp, 20000);

function timeUp(){
	alert("Time Up!");
	alert("You answered " + correct + " correct. You answered " + incorrect + " incorrect.");
}

function correct() {
	correct++;
}

function incorrect(){
	incorrect++;
}
});