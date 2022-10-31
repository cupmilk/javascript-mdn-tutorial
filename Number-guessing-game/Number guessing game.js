let randomNumber = Math.floor(Math.random() * 100 + 1);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessFeild = document.querySelector(".guessFeild");

let guessesCount = 1;
let resetButton;

function resetGame() {
  guessesCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = ""; //오탄가?
  }

  resetButton.parentNode.removeChild(resetButton);

  guessFeild.disable = false;
  guessSubmit.disable = false;
  guessFeild.value = "";
  guessFeild.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100 + 1);
}

function setGameOver() {
  guessFeild.disable = true;
  guessSubmit.disable = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "start new Game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

//숫자판단
function checkGuess() {
  const userGuess = Number(guessFeild.value);

  if (guessesCount === 1) {
    guesses.textContent = "Previous guesses :";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "축하합니다, 정답입니다";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessesCount === 10) {
    lastResult.textContent = "!!GameOver!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last Guess was low";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last Guess was high";
    }
  }

  guessesCount++;
  guessFeild.value = "";
  guessFeild.focus();
}

guessSubmit.addEventListener("click", checkGuess);
