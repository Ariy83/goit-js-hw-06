function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const inputNumber = document.querySelector("#controls").firstElementChild;
  const btnDestroy = document.querySelector("#controls").lastElementChild;
  const btnCreate = btnDestroy.previousElementSibling;
  const divBoxes = document.querySelector("div#boxes");

  inputNumber.addEventListener("input", onInputNumberChange);
  btnCreate.addEventListener("click", onbtnCreateClick);
  btnDestroy.addEventListener("click", onBtnDestroyClick);

  function onInputNumberChange(event) {
    amount = event.target.value;
  }

  function onbtnCreateClick(event) {
    let size = 20;
    let boxesArr = [];
    for (let i = 0; i < amount; i++) {
      let colorBox = getRandomHexColor();
      size += 10;
      let oneBox = `<div style="width: ${size}px; height: ${size}px; background-color: ${colorBox};"></div>`;
      boxesArr.push(oneBox);
    }
    divBoxes.insertAdjacentHTML("afterbegin", boxesArr.join(""));
  }

  function onBtnDestroyClick(event) {
    divBoxes.innerHTML = "";
  }
}
createBoxes();
