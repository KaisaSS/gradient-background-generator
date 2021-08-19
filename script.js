let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("random");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

// generate function for random color variables

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function to set random gradient

function setRandomGradient(a, b) {
  body.style.background = "linear-gradient(to right, " + a + "," + b + ")";
  css.textContent = body.style.background + ";";
}

function randomButton() {
  let random1 = getRandomColor();
  let random2 = getRandomColor();
  setRandomGradient(random1, random2);
  // assign random colors to input fields
  color1.value = random1;
  color2.value = random2;
}

// event listeners

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomButton);
