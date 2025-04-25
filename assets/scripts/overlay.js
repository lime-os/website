document.addEventListener("DOMContentLoaded", () => {
  // Create the overlay element.
  let overlayElement = document.createElement("div");
  overlayElement.style.width = "100%";
  overlayElement.style.height = "100%";
  overlayElement.style.background = "white";
  overlayElement.style.position = "absolute";
  overlayElement.style.top = 0;
  overlayElement.style.left = 0;
  overlayElement.style.zIndex = 1000;

  // Create the H1 element.
  let headingElement = document.createElement("h1");
  headingElement.innerText = "Work in progress";
  headingElement.style.position = "absolute";
  headingElement.style.top = "10px";
  headingElement.style.left = "10px";
  headingElement.style.color = "black";
  headingElement.style.margin = 0;
  headingElement.style.fontFamily = "sans-serif";
  headingElement.style.zIndex = 1001;
  headingElement.style.userSelect = "none";

  // Create the paragraph element
  let paragraphElement = document.createElement("p");
  paragraphElement.innerText = "Please come back later...";
  paragraphElement.style.position = "absolute";
  paragraphElement.style.top = "60px";
  paragraphElement.style.left = "10px";
  paragraphElement.style.color = "black";
  paragraphElement.style.margin = 0;
  paragraphElement.style.fontFamily = "sans-serif";
  paragraphElement.style.zIndex = 1001;
  paragraphElement.style.userSelect = "none";

  // Append the heading and paragraph to the overlay.
  overlayElement.appendChild(headingElement);
  overlayElement.appendChild(paragraphElement);

  // Append the overlay to the body.
  document.body.appendChild(overlayElement);
  document.body.style.position = "relative";

  // Track the numbers of clicks and remove the overlay after 10 clicks.
  let clickCount = 0;
  overlayElement.addEventListener("click", (event) => {
    clickCount++;
    if (clickCount === 10) {
      overlayElement.remove();
    }
  });
});
