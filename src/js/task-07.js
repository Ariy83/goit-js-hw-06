const resizeControlElem = document.querySelector("input#font-size-control");
const textToResize = document.querySelector("span#text");

resizeControlElem.addEventListener("input", onResizeControlElemInput);

function onResizeControlElemInput(event) {
  const fontSize = event.target.value;
  textToResize.style.fontSize = `${fontSize}px`;
}
