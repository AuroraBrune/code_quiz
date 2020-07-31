//create score variable
var scoreText = 0;
let score = document.getElementById("score");
score.innerHTML = scoreText;
var userName = "";

//setting my questions array, could have also built using JSON object
let myQuestions = [];
const question1 = ["1. What does NaN mean in code?", "Not a number.", "Not a name.", "Name and number.", "1"];
const question2 = ["2. Which HTML element do we use for JavaScript?", "< scripting >", "< js >", "script", "3"]; //added spaces in answers to prevent script tags in our answers. 
const question3 = ["3. The statement a === b refers to ", "Both a and b are equal in value, type and reference address.", "Both a and b are equal in value.",
    "Both a and b are equal in value and type.", "3"];
const question4 = ["4. Which of the following best describes JavaScript?", "a compiled scripting language.",
    " an object-oriented scripting language.",
    " a scripting language precompiled in the browser.", "2"];
const question5 = ["5. Which of the following is the structure of an if statement?", "if (conditional expression is true) then execute this codeend if",
    "if (conditional expression is true) execute this codeend if",
    "if (conditional expression is true)   {then execute this code>->}", "3"];

myQuestions.push(question1);
myQuestions.push(question2);
myQuestions.push(question3);
myQuestions.push(question4);
myQuestions.push(question5);
let currentIndex = 0;

//timer with setInterval to count down the time in the game. 
const countdownTimer = document.getElementById("countdownTimer");
let question = [];
let secondsLeft = 75;
const timer = setInterval(function () {
    secondsLeft--;

    countdownTimer.innerHTML = secondsLeft;
    if (secondsLeft <= 0) {
        clearInterval(timer);
        //code here to end game and give score
    }
}, 1000);
//initiallizing first question on page, and continue through each question until each has been displayed. 
showMyQuestions();

function showMyQuestions() {
    question = myQuestions[currentIndex];

    document.getElementById("question_text").innerHTML = question[0];
    document.getElementById("btna").innerHTML = question[1];
    document.getElementById("btnb").innerHTML = question[2];
    document.getElementById("btnc").innerHTML = question[3];
}

function userScore() {

    var answer = question[4]; //for each quesiton array, the answer at at index 4
    var choice;
    if (document.getElementById("a").checked == true) {
        choice = 1;
        document.getElementById("a").checked = false;  //this resets the buttons to off for next question, otherwise the radio button selected on last question stays lit
    }
    if (document.getElementById("b").checked == true) {
        choice = 2;
        document.getElementById("b").checked = false;
    }
    if (document.getElementById("c").checked == true) {
        choice = 3;
        document.getElementById("c").checked = false;
    }

    //test for correct answer
    if (choice == answer) {
        scoreText++;
        score.innerHTML = scoreText;

    } else {
        secondsLeft = secondsLeft - 15;
    }
    //increase question index by one, loads the next question each time it loops until last question
    currentIndex++;
    //test to see if end of questions array
    if (currentIndex > myQuestions.length - 1) {
        //game over
        clearInterval(timer);
        document.getElementById("answer-window").style.display = "none"; //This will remove the questions from the page so score can be displayed in the same place on the DOM. 
        userName = prompt("What is your name?")
        displayScore();

    } else {
        showMyQuestions();
    }

}
//The winner element in my html page will be used to display the user name and score after the end of game. 
function displayScore() {
    if (userName) {
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerHTML = "Player: " + userName + "   Score: " + scoreText;
    }
}
