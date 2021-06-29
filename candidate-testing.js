const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers = [];

function askForName(name) {
  // TODO 1.1b: Ask for candidate's name //
 const candidateName = input.question ("What is your name? ");
  // TODO 1.1c: Say Hello to the candidate //
  console.log("Hello", candidateName,", welcome to the cosmic quiz! Make sure all written answers are capitalized and all numbers are numbers (not words). Good luck! ")
}
//I DID IT!
console.log("~*~*~*~*~*~*~\n")

function askQuestion() {
   for (let i = 0; i < questions.length; i++){
    let collectedAnswers = input.question(questions[i]);
     candidateAnswers.push(collectedAnswers);
   }

}



function gradeQuiz(candidateAnswers) {
  

let totalCorrect = 0;
//Number((candidateAnswers / questions.length) * 100)
for (let i = 0; i < questions.length; i++){
  if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
   
    totalCorrect = totalCorrect + 1;
  }
}
let grade = totalCorrect/5 * 100;
let candidateStatus="";
console.log(grade)
   if (grade >= 80){
  candidateStatus = "passed";
 } else {
  candidateStatus = "failed";
 }
console.log(`Candidate Name: ${candidateName}
1) Who was the first American woman in space?
Your Answer: ${candidateAnswers[0]}
Correct Answer: Sally Ride

2) True or false: 5000 meters = 5 kilometers.
Your Answer: ${candidateAnswers[1]}
Correct Answer: true

3) (5 + 3)/2 * 10 = ?
Your Answer: ${candidateAnswers[2]}
Correct Answer: 40

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${candidateAnswers[3]}
Correct Answer: Trajectory

5) What is the minimum crew size for the ISS?
Your Answer: ${candidateAnswers[4]}
Correct Answer: 3

>>> Overall Grade: ${grade}% (${totalCorrect} of 5 responses correct) <<<
>>> Status: ${candidateStatus} <<<")`)

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