let div = document.createElement("div");
div.style.width = "100%";
div.style.height = "100%";
div.style.background = "white";
div.style.position = "absolute";

document.getElementById("overlay").appendChild(div);

let clickCount = 0;

div.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 5) {
    div.remove();
  }
});
