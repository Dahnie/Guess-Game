"use strict";
// Variables
let secretAnswer = Math.trunc(Math.random() * 10) + 1;
let score = 5;
// This variable is called the state variable bcos the 'score' is part of
// the so-called application state(i.e all the data that iss relevant to the application)
let highscore = 0;
const guessText = document.querySelector("#guess-text");
const messageToDo = document.querySelector(".message");
const displayMessage = message => {
  messageToDo.textContent = message;
};

const presentScore = document.querySelector(".score");
const losepage = document.querySelector(".losepage");
const winpage = document.querySelector(".winpage");
const checkButton = document.querySelector(".check");
const numberDisplay = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const highscoreText = document.querySelector(".highscore");
const resetBtn = document.querySelector(".again");

//wrong answer function(if the guess answer is wrong)
const wrongGuess = whatToDo => {
  if (score > 1) {
    messageToDo.textContent = whatToDo;
    score--;
    presentScore.textContent = score;
  } else {
    displayMessage("💥 You lost the game");
    presentScore.textContent = 0;

    losepage.style.visibility = "visible";
  }
};

// On Check or on Enter input
const performFunction = function () {
  const guess = Number(guessInput.value);
  // When there is no input.
  if (!guess) {
    displayMessage("⛔ No number");

    // When guess is lower.
  } else if (guess < secretAnswer) {
    wrongGuess("📈 Guess Higher!");

    // When guess is higher.
  } else if (guess > secretAnswer) {
    wrongGuess("📉 Guess Lower!");

    //When player wins.
  } else {
    displayMessage("🎉 Correct Guess");
    numberDisplay.textContent = secretAnswer;

    numberDisplay.style.transform = "none";
    numberDisplay.style.width = "25%";

    winpage.style.visibility = "visible";
    guessText.style.visibility = "hidden";

    displayMessage("👌🏽 Correct Guess");
    guessInput.style.visibility = "hidden";

    // Removing some elements at the top
    // document.querySelector(".between").classList.add("hidden");
    // document.querySelector("h1").classList.add("hidden");

    // Setting the highscore, the high score won't change on pressing the again because won't reassign or alter it.
    if (score > highscore) {
      highscore = score;
    }
    highscoreText.textContent = highscore;
    console.log(highscore);
  }
};

// On click of the check button
checkButton.addEventListener("click", function () {
  console.log(secretAnswer);
  performFunction();
});

// Using the enter button to enter input
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    performFunction();
  }
});

// Activating the play "Reset" button
resetBtn.addEventListener("click", function () {
  score = 5;
  highscore = score;
  secretAnswer = Math.trunc(Math.random() * 10) + 1;

  numberDisplay.textContent = "?";
  guessInput.value = "";

  displayMessage("💭 Start Guessing...");
  presentScore.textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  guessText.style.visibility = "visible";
  guessInput.style.visibility = "visible";
  winpage.style.visibility = "hidden";
  losepage.style.visibility = "hidden";

  console.log(secretAnswer, "New Answer");
});
