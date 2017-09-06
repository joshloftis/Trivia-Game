//Global variables
//=============================================================================
//var(s) for questions and answers
var questionData = {
  question: ["What is Harry's last name?", "In to which house was Harry placed?", "Who tried to kill Harry in the first book?", "Who is Harry's godfather?", "How many Harry Potter books are there?", "Who is Harry's ancestor?", "Who was Ron's first girlfriend?", "Who killed Sirius Black?"],
  answerList: [["Potter", "Dursley", "Weasley", "Granger"],["Slytherin", "Ravenclaw", "Gryffindor", "Hufflepuff"], ["Professor Dumbledore", "Ron Weasley", "Reubeus Hagrid", "Lord Voldemort"], ["James Potter", "Sirius Black", "Peter Pettigrew", "Alastor Moody"], [1, 4, 5, 7], ["Salazar Slytherin", "Godric Gryffindor", "Helga Hufflepuff", "Rowena Ravenclaw"], ["Hermione Graner", "Lavendar Brown", "Parvati Patel", "Milicent Boulstrod"], ["Severus Snape", "Lily Potter", "Narcissa Malfoy", "Belatrix Lestrange"]],
  correctAns: ["Potter", "Gryffindor", "Lord Voldemort", "Sirius Black", 7, "Godric Gryffindor", "Lavendar Brown", "Belatrix Lestrange"]
};
//var for correct count
var correctCount = 0;
//var for incorrect count
var incorrectCount = 0;
//var for no answer
var blank = 0;
//var for current question count
var questionIndex = 0;
var timePerQuestion = 5;
var remainingTime;
var intervalId;
var nextQuestion;


//Functions
//=============================================================================

//function to start game
function startGame() {
  //on click of start game button, game loads
  $('.startGame').on('click', function() {
    //clear start button
    $('#btnDiv').empty();
    //add question and list of answers
    return gameDisplay();
  });
}

// function to display time, questions, and answers on screen
function gameDisplay() {
  //display timer
  remainingTime = setTimeout(evalAnswer, (timePerQuestion * 1000));
  questionTimer(); count(); evalAnswer();
  clearTimeout(nextQuestion);
  $('#answerScreen').empty();
  //display questions=
  $('#question').html('<div><p class="questionText">' + questionData.question[questionIndex] + '</p></div>');
  //display answers
  for (var i=0; i<questionData.answerList[questionIndex].length; i++) {
    $('#answers').append('<li class="anAnswer">' + questionData.answerList[questionIndex][i] + '</li>');
  }
}

//function to evaluate user answer (correct, incorrect, no answer)
function evalAnswer() {
  //if the question times out, store answer as undefined
  if (timePerQuestion < 1) {
    //show screen telling the user the correct answer
    clearTimeout(remainingTime);
    clearInterval(intervalId);
    blank++;
    $('#timeRemaining, #question, #answers').empty();
    $('#answerScreen').html('<div><p class="message">Ooh, time\'s up!</p></div><div><p>The correct answer was ' + questionData.correctAns[questionIndex] + '.</p></div>');
    questionIndex++;
    nextQuestion = setTimeout(gameDisplay, 4000);
  }
  $(document).on('click', '.anAnswer', function() {
      //if the user clicks the correct answer, store answer as correct answer
    if ($(this).html() == questionData.correctAns[questionIndex]) {
      //show screen congratulating the user
      clearTimeout(remainingTime);
      clearInterval(intervalId);
      correctCount++;
      $('#timeRemaining, #question, #answers').empty();
      $('#answerScreen').html('<div><p class="message">Yes! That was correct.</p></div><div><p>' + questionData.correctAns[questionIndex] + ' was the correct answer! Great job!</p></div>');
      questionIndex++;
      nextQuestion = setTimeout(gameDisplay, 4000);
    } //if the user clicks the incorrect answer, store answer as incorrect answer
    else {
      //show screen telling the user their answer was wrong and what the correct answer was
      clearTimeout(remainingTime);
      clearInterval(intervalId);
      $('#timeRemaining, #question, #answers').empty();
      $('#answerScreen').html('<div><p class="message">Nope! Wrong answer!</p></div><div><p>The correct answer was ' + questionData.correctAns[questionIndex] + '.</p></div>');
      questionIndex++;
      nextQuestion = setTimeout(gameDisplay, 4000);
    }
  });
}

//evaluate game
function endGame() {
  //when no questions are left, empty the screen
  if (questionIndex == questionData.question.length) {
  //clear out all screens
  $('#answerScreen').empty();
  //show number of correct answers
  //show number of incorrect answers
  //show number of non-answered questions
  $('#gameOver').html('<div><p class="message">Game Over!</p></div><div><p>You answered ' + correctCount + ' questions correctly.</p></div><div><p>You answered ' + incorrectCount + ' questions incorrect.</p></div><div><p>You did not answer ' + blank + ' questions.</p></div><div><button class="restartGame" onclick="restartGame()>Restart Game</button></div>"');
  //show restart game button
  }
}

function count() {
  intervalId = setInterval(questionTimer, 1000);
}
function questionTimer() {
  timePerQuestion--;
  $('#timeRemaining').html(timePerQuestion);
}

$(document).ready(function() {
  startGame();
});
