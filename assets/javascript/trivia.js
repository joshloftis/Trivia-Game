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
//var for current question count
var questionIndex = 0;
var timePerQuestion = 5;


//Functions
//=============================================================================

//function to start game
  //on click of start game button, game loads
  //clear start button
  //add question and list of answers

// function to display time, questions, and answers on screen
  //display timer
  //display questions
  //display answers

//function to evaluate user answer (correct, incorrect, no answer)
  //if the page times out, store answer as undefined
    //show screen telling the user the correct answer
  //if the user clicks the correct answer, store answer as correct answer
    //show screen congratulating the user
  //if the user clicks the incorrect answer, store answer as incorrect answer
    //show screen telling the user their answer was wrong and what the correct answer was

//evaluate game
  //when no questions are left, empty the screen
  //show number of correct answers
  //show number of incorrect answers
  //show number of non-answered questions
  //show restart game button
  
