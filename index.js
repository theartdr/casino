const numForm = document.querySelector("#num-form");
const numInput = document.querySelector("#num-form input");
const comNum = document.querySelector("#com-num");

function onNumSubmit(event) {
  event.preventDefault();
  const num = comNum.value;
  const validInput = numInput.value;
  choice.innerText = `You chose: ${validInput},the machine chose:${num}.`;
  if (num === numInput) {
    return "You won!";
  } else {
    return "You lost!";
  }
}

numForm.addEventListener("submit", onNumSubmit);