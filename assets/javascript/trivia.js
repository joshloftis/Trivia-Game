//Global variables
//=============================================================================
//var(s) for questions and answers
var questionData = {
  question: ["What is Harry's last name?", "In to which house was Harry placed?", "Who tried to kill Harry in the first book?", "Who is Harry's godfather?", "How many Harry Potter books are there?", "Who is Harry's ancestor?", "Who was Ron's first girlfriend?", "Who killed Sirius Black?"],
  answer: [["Potter", "Dursley", "Weasley", "Granger"],["Slytherin", "Ravenclaw", "Gryffindor", "Hufflepuff"], ["Professor Dumbledore", "Ron Weasley", "Reubeus Hagrid", "Lord Voldemort"], ["James Potter", "Sirius Black", "Peter Pettigrew", "Alastor Moody"], [1, 4, 5, 7], ["Salazar Slytherin", "Godric Gryffindor", "Helga Hufflepuff", "Rowena Ravenclaw"], ["Hermione Graner", "Lavendar Brown", "Parvati Patel", "Milicent Boulstrod"], ["Severus Snape", "Lily Potter", "Narcissa Malfoy", "Belatrix Lestrange"]],
  correctAns: ["Potter", "Gryffindor", "Lord Voldemort", "Sirius Black", 7, "Godric Gryffindor", "Lavendar Brown", "Belatrix Lestrange"]
};
//var for correct count
var correctCount = 0;
//var for incorrect count
var incorrectCount = 0;
//var for current question count
var currentQuestion = 0;
var timePerQuestion = 5;
var remainingTime;
var wrongAnswer;
var intervalId;
var theQuestionTime;
var resultScreen;

//Functions
//=============================================================================
//changing on screen content functions=========================================
function startGame() {
  $('.startGame').on('click', function() {
    initGame();
  });
}

function restartGame() {
  $('.restartGame').on('click', function() {
    $('#timeRemaining, #question, #answers, #answerScreen, #gameOver').empty();
    correctCount = 0;
    incorrectCount = 0;
    currentQuestion = 0;
    initGame();
  });
}

function initGame() {
  count(); displayTime(); questions();
  $('#btnDiv').empty();
  remainingTime = $('#timeRemaining').html(displayTime);
}

function nextQuestion() {
  $('#answerScreen').empty();
  clearTimeOut(resultScreen);
  timePerQuestion = 5;
  currentQuestion++;
  if (currentQuestion == questionData.question.length) {
    evalGame();
  } else {
    displayTime(); count(); timeOutQuestion(); questions();
  }
}

function questions() {
  $('#question').html('<h2 class="questionText">' + questionData.question[currentQuestion] + '<h2>');
  for (var i=0; i < questionData.answer[currentQuestion].length; i++) {
    $('#answers').append('<li class="anAnswer">' + questionData.answer[currentQuestion][i] + '</li>');
  }
}

 function timeRanOut() {
   clearTimeout(theQuestionTime);
   clearInterval(intervalId);
   resultsTimer();
   $('#timeRemaining, #question, #answers').empty();
   $('#answerScreen').html("<div><p class='message'>Oh. Time's up!<p>The correct answer was " + questionData.correctAns[currentQuestion] + '.</p></div>');
 }



//evaluation functions=========================================================
function evalAnswer() {
  clearTimeout(theQuestionTime);
  clearInterval(intervalId);
  resultsTimer();
  if ($(this).html() == questionData.correctAns[currentQuestion]) {
    correctCount++;
    $('#timeRemaining, #question, #answers').empty();
    $('#answerScreen').html("<div><p class='message'>Yes! That's correct!</p><p>" + questionData.correctAns[currentQuestion] + ' was the correct answer! Great job!</p></div>');
  } else {
    incorrectCount++;
    wrongAnswer = $(this).html();
    $('#timeRemaining, #question, #answers').empty();
    $('#answerScreen').html('<div><p class="message">Nope '+ wrongAnswer + ' is not the correct answer!</p><p>The correct answer was ' + questionData.correctAns[currentQuestion] + '.</p></div>');
  }
}

function evalGame() {
  clearInterval(intervalId);
  clearTimeout(theQuestionTime);
  $('#timeRemaining, #question, #answers').empty();
  $('#gameOver').html('<div><p class="message">Game Over</p><p class="endScreenText">You answered ' + correctCount + ' questions correctly!</p></div><div><p class="endScreenText">You answered ' + incorrectCount + ' questions incorrectly!</p></div><div><button class="restartGame" onclick="restartGame()">Restart Game</div>"');
}

//Timing functions=============================================================
function count(){
  intervalId = setInterval(displayTime, 1000);
}

function timeOutQuestion() {
  theQuestionTime = setTimeout(evalAnswer, (timePerQuestion * 1000));
}

function resultsTimer() {
  resultScreen = setTimeout(nextQuestion, 4000);
}

function displayTime() {
  timePerQuestion--;
  $('#timeRemaining').html('<h3>' + timePerQuestion + '</h3>');
}

//Game Start
//=============================================================================
$(document).ready(function() {
  startGame();
});
