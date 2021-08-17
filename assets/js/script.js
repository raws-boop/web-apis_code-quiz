var starQuizButtonEl = document.querySelector("#start-quiz");
var userInfoSectionEl = document.querySelector(".user-info");
var startContentEl = document.querySelector(".quiz-start-content");
var timerEl = document.querySelector("#timer");
userInfoSectionEl.setAttribute("style", "display: none");
var questionNumber = 0;
var timeInterval;
var timeLeft = 120;

//questions array to pull for quiz
var questionCollection = [
    {
        question: "JavaScript is a ___ -side programming language.",
        options: ["Client", "Server", "Both", "None"],
        answer: "Both",
    },
    {
        question:
            "What is the HTML tag under which one can write the JavaScript code?",
        options: ["<javascript>", "<scripted>er", "<script>", "<js>"],
        answer: "<script>",
    },
    {
        question:
            "Which of the following is the correct syntax to display “Hello World” in an alert box using JavaScript?.",
        options: [
            "alertbox(“Hello World”);",
            "msg(“Hello World”);",
            "msg(“Hello World”);",
            "alert(“Hello World”);",
        ],
        answer: "aalert(“Hello World”);",
    },
    {
        question:
            "What is the syntax for creating a function in JavaScript named as maxfunc? ",
        options: [
            "function = maxfunc() ",
            "function maxfunc()",
            "function := maxfunc()",
            "function : maxfunc()",
        ],
        answer: "function maxfunc()",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["interface", "throws", "program", "short"],
        answer: "program",
    },
    {
        question:
            "How to write an ‘if’ statement for executing some code.If “i” is NOT equal to 5?.",
        options: ["if(i<>5)", "if i<>5", "if(i!=5)", "if i!=5"],
        answer: "if(i!=5)",
    },
    {
        question:
            "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?.",
        options: ["strip()", "trim()", "stripped()", "trimmed()"],
        answer: "trim()",
    },
    {
        question: "Which of the following is an advantage of using JavaScript?",
        options: [
            "Increased interactivity.",
            "Less server interaction.",
            "Immediate feedback from the users.",
            "All of the above.",
        ],
        answer: "All of the above",
    },
    {
        question:
            "Which function of an Array object calls a function for each element in the array?",
        options: ["forEach()", "every()", "forEvery()", "each()"],
        answer: "forEach()",
    },
    {
        question: "How does a FOR loop start?",
        options: [
            "for(i<=5;i++)",
            "for i=1 to 5",
            "for(i=0;i<=5; i++)",
            "for(i=0; i<=5)",
        ],
        answer: "for(i=0; i<5; i++)",
    },
];
//create a timer function
function startTimer() {
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = ":" + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function displayQuestionAnswer() {
    if (questionNumber === 0) {
        startContentEl.remove();
        startTimer();
    }
}