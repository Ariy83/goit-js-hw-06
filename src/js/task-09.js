function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector("button.change-color");
const nameColor = document.querySelector("span.color");

btnChangeColor.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  const bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  nameColor.textContent = bodyColor;
}
