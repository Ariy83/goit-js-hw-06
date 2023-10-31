const inputElem = document.querySelector("#validation-input");

inputElem.addEventListener("blur", onInputElemBlur);
inputElem.addEventListener("focus", onInputElemFocus);

function onInputElemBlur(event) {
  const inputLength = event.target.value.length;
  const dataLength = event.target.dataset.length;

  if (inputLength === +dataLength) {
    inputElem.classList.add("valid");
  } else {
    inputElem.classList.add("invalid");
  }
}

function onInputElemFocus(event) {
  event.target.classList.remove("valid");
  event.target.classList.remove("invalid");
}
