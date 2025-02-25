let overlayElement = document.createElement("div");
overlayElement.style.width = "100%";
overlayElement.style.height = "100%";
overlayElement.style.background = "white";
overlayElement.style.position = "absolute";
overlayElement.style.top = 0;

document.body.style.position = "relative";
document.body.appendChild(overlayElement);

let clickCount = 0;
overlayElement.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 5) {
    overlayElement.remove();
  }
});
