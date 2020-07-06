//create score variable
var scoreText = 0;
let score = document.getElementById("score");
score.innerHTML = scoreText;

//setting my questions array, could build using JSON object
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
//initiallizing first question on page
showMyQuestions();

function showMyQuestions() {
    question = myQuestions[currentIndex];

    document.getElementById("question_text").innerHTML = question[0];
    document.getElementById("btna").innerHTML = question[1];
    document.getElementById("btnb").innerHTML = question[2];
    document.getElementById("btnc").innerHTML = question[3];

}

     

function userScore() {
   
    var answer = question[4]; //this is the index of the correct answer for a question
    var choice;
    if (document.getElementById("a").checked == true) {
        choice = 1;
        document.getElementById("a").checked = false;
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
        // alert("choice equals answer ");  
    } else {
        secondsLeft = secondsLeft - 15;
    }
    //increase question index by one
    currentIndex++;
    //test to see if end of questions array
    if (currentIndex > myQuestions.length - 1) {
        //game over
        clearInterval(timer);
        alert("game over");
    } else {
        showMyQuestions();
    }

}

//Object containing my questions
const myQuestionsJson = [
    {

        question: "1. What does NaN mean in code?",
        choices: [
            "Not a name.",
            "Name and number.",
            "Not a number."
        ],
        answer: "Not a number."
    },

    {
        question: "2. Which HTML element do we use for JavaScript?",
        choices: [
            "<scripting>",
            "<js>",
            "script"
        ],
        answer: "script"
    },

    {
        question: "3. The statement a === b refers to ",
        choices: [
            "Both a and b are equal in value, type and reference address.",
            "Both a and b are equal in value.",
            "Both a and b are equal in value and type."
        ],
        answer: "Both a and b are equal in value and type."
    },

    {
        question: "4. Which of the following best describes JavaScript?",
        choices: [
            "a compiled scripting language.",
            " an object-oriented scripting language.",
            " a scripting language precompiled in the browser."
        ],
        answer: " an object-oriented scripting language."
    },

    {
        question: "5. Which of the following is the structure of an if statement?",
        choices: [
            "if (conditional expression is true) thenexecute this codeend if",
            "if (conditional expression is true)execute this codeend if",
            "if (conditional expression is true)   {then execute this code>->}"
        ],
        answer: "if (conditional expression is true)   {then execute this code>->}"
    }
];