"use-strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (messageString) {
  document.querySelector(".message").textContent = messageString;
};

const btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("🛑 No number");
  }
  // When player wins
  else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  // When the guess is not correct
  else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💣 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

const btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
