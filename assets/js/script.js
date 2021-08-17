//get handlers for start button,user info section,quiz main content section,
// timer,que and ans display area,final score,submitscore button,user inital input,
var starQuizButtonEl = document.querySelector("#start-quiz");
var userInfoSectionEl = document.querySelector(".user-info");
var startContentEl = document.querySelector(".quiz-start-content");
var timerEl = document.querySelector("#timer");
var questionAnswerDisplayEl = document.querySelector(
  ".question-answer-display"
);
var showScoreEl = document.querySelector("#final-score");
var submitFormEl = document.querySelector("#submit-score");
var userInitialEl = document.querySelector("#user-initial");
// var highScoreEl = document.querySelector("#high-scorelist");
//console.log(highScoreEl);

//set user info section to none
userInfoSectionEl.setAttribute("style", "display: none");

//set variables
var questionNumber = 0;
var timeInterval;
var timeLeft = 120;
var score = 0;

//questions ,options and ans in array of object
var questionCollection = [
  {
    question: "JavaScript is a ___ -side programming language.",
    options: ["Client", "Server", "Both", "None"],
    answer: "Both",
  },
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    options: ["<javascript>", "<scripted>", "<script>", "<js>"],
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

//to set a timer for every 1sec so this function will be excuted every 1sec or 1000 ms
function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    //display timer value
    timerEl.textContent = ":" + timeLeft;

    if (timeLeft === 0) {
      //if  user not able to finish all que and time is up
      questionAnswerDisplayEl.remove();
      gotoAlldone();
      clearInterval(timeInterval);
    }
  }, 1000);
}

// functions to to be done after user is done with all ques or timer is up
function gotoAlldone() {
  //display alldone section
  userInfoSectionEl.setAttribute("style", "display: flex");
  //display your score
  showScoreEl.textContent = score;
  //clear time interval as user is done with all questions
  clearInterval(timeInterval);
  timerEl.textContent = "";
  //get user initials and put in local strage
}

//check user input
function checkUserInput() {
  // create a horizontal line
  var horizontalLineEl = document.createElement("hr");
  //create wrong and right elements
  var correctEl = document.createElement("h3");
  var wrongEl = document.createElement("h3");
  //put data into it
  correctEl.textContent = "Correct";
  wrongEl.textContent = "Wrong";

  //will diable  button after selection
  // this.disabled = true;

  // console.log("answer right");
  //set attributes for horizontal line added
  horizontalLineEl.setAttribute(
    "style",
    " margin-top:1rem;border: 0;height: 3px; background: #095484; background-image: linear-gradient(to right,#8bc062, #6ca342, #8bc062);"
  );

  //check this one out horizontalLineEl.setAttribute(
  //   "style",
  //   "height: 50px;  background-image: url(../images/horizontalline.png);    border: none;"
  // );
  //check user input -:option button textcontext with ans in questioncollection

  if (this.textContent === questionCollection[questionNumber].answer) {
    console.log("answer right");
    // for right ans 10 points
    score = score + 10;

    //append horizontalline and ans
    questionAnswerDisplayEl.lastChild.appendChild(horizontalLineEl);
    questionAnswerDisplayEl.lastChild.appendChild(correctEl);

    //add logic to move to next ques
    // if last question || timer up -> display alldone section
  } else {
    //console.log("in wrong ");
    questionAnswerDisplayEl.lastChild.appendChild(horizontalLineEl);
    questionAnswerDisplayEl.lastChild.appendChild(wrongEl);
    //wrong answer  subtract 10s time from timer
    if (timeLeft >= 10) {
      timeLeft = timeLeft - 10;
      // display that time on screen
      timerEl.textContent = timeLeft;
    }
  }

  // increment que no and remove inner html and if done with all que got to alldone
  setTimeout(function () {
    // console.log("inside settime");
    questionNumber++;
    questionAnswerDisplayEl.innerHTML = "";
    if (questionNumber === questionCollection.length) {
      // console.log("inside settime");
      gotoAlldone();
    } else {
      displayQuestionAnswer();
    }
  }, 1000);
}

//will display all ques and ans
function displayQuestionAnswer() {
  //if user has just started the quiz  then : Remove the start-content and start timer
  if (questionNumber === 0) {
    startContentEl.remove();
    startTimer();
    score = 0;
  }

  // start to display question
  if (questionNumber < questionCollection.length) {
    //add question
    var questionEl = document.createElement("h3");
    questionEl.textContent = questionCollection[questionNumber].question;
    // Create ordered list element
    var listEl = document.createElement("ul");
    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    //create button
    btnOption1El = document.createElement("button");
    btnOption2El = document.createElement("button");
    btnOption3El = document.createElement("button");
    btnOption4El = document.createElement("button");

    //adding que options to button
    btnOption1El.textContent = questionCollection[questionNumber].options[0];
    btnOption2El.textContent = questionCollection[questionNumber].options[1];
    btnOption3El.textContent = questionCollection[questionNumber].options[2];
    btnOption4El.textContent = questionCollection[questionNumber].options[3];

    //adding btn to a link
    li1.appendChild(btnOption1El);
    li2.appendChild(btnOption2El);
    li3.appendChild(btnOption3El);
    li4.appendChild(btnOption4El);

    //adding link to unordered list
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    //appending question and answers
    questionAnswerDisplayEl.appendChild(questionEl);
    questionAnswerDisplayEl.appendChild(listEl);

    //set attributes
    questionAnswerDisplayEl.setAttribute(
      "style",
      "margin:auto; display: flex; flex-direction: column; flex-wrap: wrap;  width: 35rem; "
    );
    questionEl.setAttribute(
      "style",
      "font-weight:bold; font-size:1.5rem;  font-family:Arial, Helvetica, sans-serif;"
    );

    //add event listener on option clicked
    btnOption1El.addEventListener("click", checkUserInput);
    btnOption2El.addEventListener("click", checkUserInput);
    btnOption3El.addEventListener("click", checkUserInput);
    btnOption4El.addEventListener("click", checkUserInput);
  }
}

// function displayHighScores() {
//   //take data from storage
//   var storageData = JSON.parse(localStorage.getItem("userScores")) || [];
//   console.log(storageData);

//   //sort it a. -b. () in ascending order b. -a. in descending order
//   storageData.sort(function (a, b) {
//     return b.userScore - a.userScore;
//   });
//   console.log(storageData);
//   //create lis for each entry and append it to //highScoreEl;

//   storageData.forEach(function (item) {
//     var liList = document.createElement("li");
//     liList.textContent = item.initials + " - " + item.userScore;
//     console.log(liList.textContent);
//     highScoreEl.appendChild(liList);
//   });
//   //display it on page
// }

var scoreList = [];
//to save user info
function saveUserInformation(event) {
  // Prevent default action
  event.preventDefault();

  var userInitial = userInitialEl.value;
  var userscores = score;
  // console.log(userInitial);
  //console.log(userscores);
  //check user initial input is empty
  if (userInitial == "" || userInitial == null) {
    alert("You can not have initial empty.");
    return;
  } else {
    //create an object for user name and data
    var userData = {
      initials: userInitial,
      userScore: userscores,
    };

    //take the item from storage and add data to it
    scoreList = JSON.parse(localStorage.getItem("userScores")) || [];
    scoreList.push(userData);
    // console.log(scoreList);
    localStorage.setItem("userScores", JSON.stringify(scoreList));
    // displayHighScores();

    // move to highscore page
    window.location.href = "highscore.html";
  }
}

//add event listener on submit form
submitFormEl.addEventListener("click", saveUserInformation);

//add event listener on start button
starQuizButtonEl.addEventListener("click", function () {
  displayQuestionAnswer();
});