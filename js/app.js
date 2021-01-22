import answers from "./answers.js";

//  References to DOM elements
const containerRef = document.querySelector(".container");
const answerRef = document.querySelector(".answer");
const startMessage = "Ask me a yes/no question and press here.";

answerRef.textContent = startMessage;

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
  if (answerRef.textContent == "ASK LATER!") {
    answerRef.textContent = "LIKE REALLY LATER. I AM SERIOUS!";
  } else {
    answerRef.textContent = getAnswer(answers);
  }
});
