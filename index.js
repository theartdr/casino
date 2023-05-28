const numForm = document.querySelector("#num-form");
const max = document.querySelector("#max");
const guessNum = document.querySelector("#guess-num");
const button = document.querySelector("#play")

function displayResult(result, msg) {
  const resultOutput = document.querySelector("#num-form h2");
  const mainOutput = document.querySelector("p");
  resultOutput.innerText = result;
  mainOutput.innerText = msg;
}

function mouseClick() {
  const maxValue = max.value;
  const gValue = guessNum.value;
  const rValue = Math.floor(Math.random() * maxValue);
  let displayMsg =`Max = ${maxValue}, Guess = ${gValue}, Random = ${rValue}`;
  choice.innerText = `You chose: ${gValue},the machine chose:${rValue}.`;
  if (gValue === rValue) {
    displayResult("You won!", displayMsg);
  } else {
    displayResult("You lost!", displayMsg);
  }
}

button.addEventListener("submit", mouseClick);