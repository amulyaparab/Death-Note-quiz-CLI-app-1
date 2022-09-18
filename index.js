var score = 0;
var readlineSync = require('readline-sync');
const chalk = require('chalk');

// High scores
var highScore = [
  {
    name: "Amulya",
    score: "10",
  },
  {
    name: "Gloriya",
    score: "9",
  }
]

// Welcome
function welcomeMessage() {
  var userName = readlineSync.question(chalk.cyanBright("What's your name? "));
  var welcomeMessage = chalk.hex("#93c5fd")("Welcome to the 'Death-note' quiz app ");
  console.log(welcomeMessage + userName + " ! ");
  console.log(chalk.hex("#312e81")("--------------"));
}

// function to play
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.hex("#fda4af")(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong!");
    score = score - 1;
    console.log(chalk.hex("#93c5fd")("The correct answer is: " + answer))
  }

  console.log(chalk.cyanBright("Your current score is: " + score));
  console.log(chalk.hex("#312e81")("--------------"));
}

// Array of questions
var questions = [
  {
    question: "What is the main character's full name? (name surname) ",
    answer: "Light Yagami"
  },
  {
    question: "Which shinigami's death note did Light find? ",
    answer: "Ryuk"
  },
  {
    question: "What is the favorite food of Light's Shinigami, Ryuk? ",
    answer: "Apples"
  },
  {
    question: "Who is second Kira? ",
    answer: "Misa"
  },
  {
    question: "What name did L tell the Japanese police to refer him to? ",
    answer: "Ryuzaki"
  },
  {
    question: "What is L Lawliet's servant's name? ",
    answer: "Watari"
  },
  {
    question: "What colour is usually associated with the Shinigami Eyes? ",
    answer: "Red"
  },
  {
    question: "What color shirt did L wear? ",
    answer: "White"
  },
  {
    question: "Who killed L? ",
    answer: "Rem"
  },
  {
    question: "What is L's real name? ",
    answer: "Lawliet"
  },
]



// for loop to play
function game() {
  for (var i = 0; i < questions.length; i = i + 1) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer);
  }
}

// showing high scores
function showScores() {
  console.log(chalk.hex("#a5f3fc")("Yippeee! You scored: " + score));
  console.log(chalk.hex("#312e81")("--------------"));
  console.log(chalk.hex("#93c5fd")("See how well you fared against others! Tell me your score and I shall update it! "));
  for (var i = 0; i < highScore.length; i++) {
    var highScorer = highScore[i]
    console.log(chalk.hex("#a5f3fc")(highScorer.name + ": " + highScorer.score))
  }

}


welcomeMessage();
game();
showScores();
