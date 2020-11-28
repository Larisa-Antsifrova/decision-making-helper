import answers from "./answers.js";

//  References to DOM elements
const containerRef = document.querySelector(".container");
const answerRef = document.querySelector(".answer");
let message = "Ask me a question and press here.";
answerRef.textContent = message;

// Functions
function randomIndex(array) {
  const index = Math.round(Math.random() * (array.length - 1));
  return index;
}

function getAnswer(array) {
  return array[randomIndex(array)];
}

// Adding event listeners
// Adding event listener on the contaner
containerRef.addEventListener("click", () => {
  answerRef.textContent = getAnswer(answers);
});
