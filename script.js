
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var countdownTimer = document.getElementById("countdownTimer");

var timeLeft = 75;
var downloadTimer = setInterval(function () {
    timeLeft--;
   
    countdownTimer.textContent = "You have " + timeLeft + " seconds to answer the question."
    if (timeLeft <= 0) {
        clearInterval(downloadTimer);
    }
}, 1000);


//Objects to hold my questions
const myQuestions = [
    {
        question: "What does NaN mean in code?",
        answers: {
            a: "Not a name.",
            b: "Name and number.",
            c: "Not a number."

        },
        correctAnswer: "d"
    },

    {
        question: "Which HTML element do we use for JavaScript?",
        answers: {
            a: "<scripting>",
            b: "<js>",
            c: "java",
            d: "script",
        },
        correctAnswer: "d"
    },

    {
        question: "The statement a === b refers to ",
        answers: {
            a: "Both a and b are equal in value, type and reference address.",
            b: "Both a and b are equal in value.",
            c: "Both a and b are equal in value and type. ",
            d: "None of the above. ",
        },
        correctAnswer: "c"
    },

    {
        question: "  Which of the following best describes JavaScript?",
        answers: {
            a: "a compiled scripting language.",
            b: " an object-oriented scripting language.",
            c: " a scripting language precompiled in the browser.",
            d: " a low-level programming language.",
        },
        correctAnswer: "b"
    },

    {
        question: "Which of the following is the structure of an if statement?",
        answers: {
            a: "if (conditional expression is true) thenexecute this codeend if",
            b: "if (conditional expression is true)execute this codeend if",
            c: "if (conditional expression is true)   {then execute this code>->}",
            d: "if (conditional expression is true) then {execute this code}",
        },
        correctAnswer: "c"
    }
];

function buildQuiz() {
    //var to store output
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                   ` <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                )
            }
    
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join('')} </div>`
            )
            console.log(answers)
        }
    )
    quizContainer.innerHTML = output.join('');





    myQuestions.forEach( (currentQuestion, questionNumber) =>  {
        const answers = [];
        for(letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}" >
                ${letter} :
                ${currentQuestionl.answers[letter]}
                </label>`

            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>`
            `<div class="answers"> ${answers.join('') }</div>`
        );
    }
    );
}

            // submitButton.addEventListener('click', showResults);

