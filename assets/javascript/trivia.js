//Global variables
//=============================================================================
//var(s) for questions and answers
var questionData = {
  question: ["What is Harry's last name?", "In to which house was Harry placed?", "Who tried to kill Harry in the first book?", "Who is Harry's godfather?", "How many Harry Potter books are there?", "Who is Harry's ancestor?", "Who was Ron's first girlfriend?", "Who killed Sirius Black?"],
  answer: [["Potter", "Dursley", "Weasley", "Granger"],["Slytherin", "Ravenclaw", "Gryffndor", "Hufflepuff"], ["Professor Dumbledore", "Ron Weasley", "Reubeus Hagrid", "Lord Voldemort"], ["James Potter", "Sirius Black", "Peter Pettigrew", "Alastor Moody"], [1, 4, 5, 7], ["Salazar Slytherin", "Godric Gryffndor", "Helga Hufflepuff", "Rowena Ravenclaw"], ["Hermione Graner", "Lavendar Brown", "Parvati Patel", "Milicent Boulstrod"], ["Severus Snape", "Lily Potter", "Narcissa Malfoy", "Belatrix Lestrange"]],
  correctAns: ["Potter", "Gryffndor", "Lord Voldemort", "Sirius Black", 7, "Godric Gryffndor", "Lavendar Brown", "Belatrix Lestrange"]
};
//var for correct count
var correctCount = 0;
//var for incorrect count
var incorrectCount = 0;
//var for current question count
var currentQuestion = 0;
var wrongAnswer;
var questions = function() {
  $('#question').html('<h2 class="questionText">' + questionData.question[currentQuestion] + '<h2>');
};
var answers = function() {
  for (var i=0; i < questionData.answer[currentQuestion].length; i++) {
    $('#answers').append('<li class="anAnswer">' + questionData.answer[currentQuestion][i] + '</li>');
  }
};
var intervalId;
var timePerQuestion = 10;
var remainingTime = $('#timeRemaining').html(displayTime);

console.log(questionData.question.length);

//Functions
//=============================================================================
//changing on screen content functions=========================================
function initGame() {
  currentQuestion = 0;
  return count(), timeOutQuestion(), questions(), answers();
}

function nextQuestion() {
  $('#answerScreen').empty();
  timePerQuestion = 10;
  currentQuestion++;
  if (currentQuestion == questionData.question.length) {
    evalGame();
  } else {
    return displayTime(), count(), timeOutQuestion(), questions(), answers();
  }
}

function answerRight() {
  clearInterval(intervalId);
  $('#timeRemaining, #question, #answers').empty();
  $('#answerScreen').html('<div><p>Yes! ' + questionData.correctAns[currentQuestion] + ' is the correct answer! Great job!</p></div>');
  setTimeout(nextQuestion, 5000);
}

function answerWrong() {
  clearInterval(intervalId);
  $('#timeRemaining, #question, #answers').empty();
  $('#answerScreen').html('<div><p>Nope '+ wrongAnswer + ' is not the correct answer!</p><p>The correct answer was ' + questionData.correctAns[currentQuestion] + '.</p></div>');
  setTimeout(nextQuestion, 5000);
}

function timeRanOut() {
  clearInterval(intervalId);
  $('#timeRemaining, #question, #answers').empty();
  $('#answerScreen').html("<div><p>Oh. Time's up!<p>The correct answer was " + questionData.correctAns[currentQuestion] + '.</p></div>');
  setTimeout(nextQuestion, 5000);
}

//evaluation functions=========================================================
function evalAnswer() {
    if ($(this).html() == questionData.correctAns[currentQuestion]) {
      correctCount++;
      answerRight();
    } else {
      incorrectCount++;
      wrongAnswer = $(this).html();
      answerWrong();
    }
}

function evalGame() {
  clearInterval(intervalId);
  $('#timeRemaining, #question, #answers').empty();
  $('#gameOver').html('<div><p class="endScreenText">You answered ' + correctCount + ' questions correctly!</p></div><div><p class="endScreenText">You answered ' + incorrectCount + ' questions incorrectly!</p></div>');
}

//Timing functions=============================================================
function count(){
  intervalId = setInterval(displayTime, 1000);
}

function timeOutQuestion() {
  setTimeout(timeRanOut, (timePerQuestion * 1000));
}

function displayTime() {
  timePerQuestion--;
  $('#timeRemaining').html('<h3>' + timePerQuestion + '</h3>');
}

//Game Logic
//=============================================================================
$(document).ready(function() {
  initGame();
  $(document).on('click', '.anAnswer', evalAnswer);
});
