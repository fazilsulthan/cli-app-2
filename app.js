var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Enter your Name? ");

console.log("Welcome!!! " + userName + " It's a QUIZ about Clash Of Clans? ");

var clashOfClansQuestions = [
  {
    question: "Which company developed the clash of clans? ",
    answer: "supercell",
  },
  {
    question: "What was the premium currency in the game? ",
    answer: "gems",
  },
  {
    question: "What is needed to upgrade something in-game? ",
    answer: "builder",
  },
  {
    question: "What town hall level is eagle artillery unlocked? ",
    answer: "11",
  },
  {
    question: "Which resource is used to train new troops? ",
    answer: "elixer",
  },
];

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You were Right!!");
    score = score + 1;
    console.log("Your Current score: " + score);
  } else {
    console.log("You were Wrong!!");
  }
  console.log("------------------------");
}

for (var i = 0; i < clashOfClansQuestions.length; i++) {
  var currentQuestions = clashOfClansQuestions[i];
  quiz(currentQuestions.question, currentQuestions.answer);
}
console.log("Your overall Score: " + score);
