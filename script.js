const colorBox = document.getElementById("colorBox");
const colorOptionsContainer = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let score = 0;
let targetColor = "";

// Predefined colors
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

// Start a new game
function startGame() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  gameStatus.textContent = "Pick the correct color!";
  gameStatus.style.color = "#444";

  generateColorButtons();
}

// Generate color buttons
function generateColorButtons() {
  colorOptionsContainer.innerHTML = "";

  colors.forEach(color => {
    const button = document.createElement("button");
    button.classList.add("color-button");
    button.style.backgroundColor = color;
    button.dataset.testid = "colorOption";
    button.addEventListener("click", () => checkGuess(color));
    colorOptionsContainer.appendChild(button);
  });
}

// Check user's guess
function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "🎉 Correct!";
    gameStatus.style.color = "green";
    score++;
    colorBox.classList.add("correct");

    setTimeout(() => {
      colorBox.classList.remove("correct");
      startGame();
    }, 800);
  } else {
    gameStatus.textContent = "❌ Wrong! Try again.";
    gameStatus.style.color = "red";
    colorBox.classList.add("wrong");

    setTimeout(() => {
      colorBox.classList.remove("wrong");
    }, 500);
  }
  scoreDisplay.textContent = score;
}

// Reset the game
newGameButton.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = score;
  startGame();
});

startGame();
