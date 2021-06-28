const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = [
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ?",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
  "What is the minimum crew size for the ISS?"
];
let correctAnswers = ["Sally Ride","True",40,"Trajectory",3];
let candidateAnswers = [];

function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question ("What is your name? ");
  // TODO 1.1c: Say Hello to the candidate //
  console.log("Hello", candidateName,", welcome to the cosmic quiz! Make sure all written answers are capitalized and all numbers are numbers (not words). Good luck! ")
}
//I DID IT!
console.log("~*~*~*~*~*~*~\n")

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  // 1) Who was the first American woman in space?
  // Correct Answer: Sally Ride
console.log("~*~*~*~*~*~*~\n")
  candidateAnswer = input.question("Who was the first American woman in space? ");
  correctAnswer = correctAnswers[0];
  candidateAnswers = [candidateAnswer];

  console.log(`Your answer was: ${candidateAnswer}\nThe correct answer: ${correctAnswer}`);

console.log("~*~*~*~*~*~*~\n")

  // 2) True or false: 5 kilometer == 5000 meters?
  // Correct Answer: True
  candidateAnswer = input.question("True or false: 5 kilometer == 5000 meters? ");
  correctAnswer = correctAnswers[1];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);

  console.log(`Your answer was: ${candidateAnswer}\nThe correct answer: ${correctAnswer}`);

console.log("~*~*~*~*~*~*~\n")

// 3) (5 + 3)/2 * 10 = ?
// Correct Answer: 40
  candidateAnswer = input.question("(5 + 3)/2 * 10 = ? ");
  correctAnswer = correctAnswers[2];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);

  console.log(`Your answer was: ${candidateAnswer}\nThe correct answer: ${correctAnswer}`);

console.log("~*~*~*~*~*~*~\n")

// 4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?
// Correct Answer: Trajectory
 candidateAnswer = input.question("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
  correctAnswer = correctAnswers[3];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);

  console.log(`Your answer was: ${candidateAnswer}\nThe correct answer: ${correctAnswer}`);

console.log("~*~*~*~*~*~*~\n")

// 5) What is the minimum crew size for the ISS?
// Correct Answer: 3
 candidateAnswer = input.question("What is the minimum crew size for the ISS? ");
  correctAnswer = correctAnswers[4];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);

  console.log(`Your answer was: ${candidateAnswer}\nThe correct answer: ${correctAnswer}`);

console.log("~*~*~*~*~*~*~\n")

}



function gradeQuiz(candidateAnswers) {
  
let grade = Number((candidateAnswers / questions.length) * 100);
if (candidateAnswers == correctAnswers && grade >= 80){
  console.log(`CONGRATS you passed! Your score is ${grade}%`)
}else{
  console.log(`Whomp waahhhh. You did not pass. Your score is ${grade}%`)
}

  return grade;
}



function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
 gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};