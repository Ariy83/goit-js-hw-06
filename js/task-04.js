let counterValue = document.querySelector("#counter>#value").textContent;
counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", onBtnDecrementClick);
btnIncrement.addEventListener("click", onBtnIncrementClick);

function onBtnDecrementClick(event) {
  counterValue -= 1;
  document.querySelector("#counter>#value").textContent = counterValue;
}
function onBtnIncrementClick(event) {
  counterValue += 1;
  document.querySelector("#counter>#value").textContent = counterValue;
}
