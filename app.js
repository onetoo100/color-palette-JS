/* Get elements */
const btnColors = document.querySelector(".btnColors"),
  btnHex = document.querySelector(".btnHex"),
  divColor = document.querySelector(".change-color"),
  divHeader = document.querySelector(".header-color"),
  // created new element by DOM
  texAreaColor = document.createElement("textArea"),
  nameColor = document.createElement("p");

/* Added some properties */
texAreaColor.rows = 25;
texAreaColor.style.width = "60rem";
texAreaColor.style.border = "none";
texAreaColor.disabled = true;
divColor.appendChild(texAreaColor);

nameColor.disabled = true;
nameColor.style.border = "none";
nameColor.style.textTransform = "uppercase";
divColor.insertBefore(nameColor, texAreaColor);

const colors = [
    "yellow",
    "red",
    "black",
    "blue",
    "green",
    "brow",
    "grey",
    "beige",
    "aliceblue",
    "darkblue",
    "darkred",
    "darkgreen",
  ],
  hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorsLength = colors.length,
  hexLength = hexColors.length - 1;

/* Events */
btnColors.addEventListener("click", () => {
  changeColor("normal");
});

btnHex.addEventListener("click", function () {
  changeColor("hex");
});

/* Functions */
function changeColor(type) {
  if (type === "normal") {
    let color = getRandom("normal");
    texAreaColor.style.backgroundColor = colors[color];
    nameColor.textContent = colors[color];
  } else {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexColors[getRandom("hex")];
    }
    texAreaColor.style.backgroundColor = hexColor;
    nameColor.textContent = hexColor;
  }
}

function getRandom(type) {
  if (type === "normal") {
    return Math.round(Math.random() * colorsLength);
  } else {
    return Math.round(Math.random() * hexLength);
  }
}
