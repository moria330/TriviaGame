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
var questions = ["For extreamly large values of 2. Does 2 + 2 = 5 ?", "3^2 + 4^2 = 5^2?", "In Javascript does 3 + '3' = 33?", "log(10) = 1", "e"];
var answers = [true, true, true, true, true];
var userChoice = [];



$(document).ready(function() {
    for (var i = 0; i < questions.length; i++) {
        var trivia = $(".trivia .card");
        var cardHead = $("<div>");
        cardHead.addClass("card-header");
        cardHead.attr("id", "q" + i);
        cardHead.text(questions[i]);
        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        cardBody.attr("id", "a" + i);
        cardBody.text("lorem ipsum");
        cardHead.append(cardBody);
        trivia.append(cardHead);

    }


    //setTimeout(timeUp, 20000);

    function timeUp() {
        alert("Time Up!");
        for (var i = 0; i < answers.length; i++) {
            if (answers[i] == userChoice[i]) {
                corr();
            } else {
                incorr();
            }

        }
        alert("You answered " + correct + " correct. You answered " + incorrect + " incorrect.");
    }

    function corr() {
        correct++;
    }

    function incorr() {
        incorrect++;
    }
});