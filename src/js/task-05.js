let inputValue = document.querySelector("input#name-input");
let outputValue = document.querySelector("span#name-output");
const defaultOutputValue = outputValue.textContent;

inputValue.addEventListener("input", onInputValueChange);

function onInputValueChange(event) {
  outputValue.textContent = event.target.value || defaultOutputValue;
}
