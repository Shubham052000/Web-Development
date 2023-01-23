"use-strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🛑 No number";
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  // When the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = " Too high!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💣 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  // When the guess is too low
  else {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = " Too Low!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💣 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

const btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
