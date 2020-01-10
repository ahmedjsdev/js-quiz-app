/**
 * class Quiz
 *  1- display questions
 *  2- collect answers
 *  3- display result
 * 
 * class Question
 *  1- data
 *  2- filter
 *  3- getQuestionByType
 * 
 */

import '../css/bootstrap.min.css';
import '../css/style.css';


import Quiz from './Quiz';
import Questions from "./Questions";

const questionsCls = new Questions();
const quiz = new Quiz({
  questions: questionsCls.questions,
  questionsContainer: document.querySelector("#questionsContainer"),
  resultContainer: document.querySelector("#result")
});

const sumbitEl = document.querySelector("#submit");
const startEl = document.querySelector("#start");

startEl.addEventListener('click', (event) => {
    quiz.init();
    event.target.classList.add('hide');
    sumbitEl.classList.remove("hide");
})

sumbitEl.addEventListener("click", (event) => {
    quiz.collectUserAnswers();
    event.target.classList.add('hide');
    startEl.classList.remove("hide");


});

