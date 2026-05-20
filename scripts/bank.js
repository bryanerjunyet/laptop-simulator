const answer = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const login = document.getElementById("login");
const dashboard = document.getElementById("dashboard");
const hint = document.getElementById("hint");
const input = document.getElementById("guessInput");

document.getElementById("guessForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const guess = Number(input.value);
  attempts += 1;

  if (!guess || guess < 1 || guess > 10) {
    hint.textContent = "Please enter a number from 1 to 10.";
    return;
  }

  if (guess < answer) {
    hint.textContent = "Higher.";
    input.select();
    return;
  }

  if (guess > answer) {
    hint.textContent = "Lower.";
    input.select();
    return;
  }

  hint.textContent = `Verified in ${attempts} attempt${attempts === 1 ? "" : "s"}.`;
  setTimeout(() => {
    login.classList.add("hidden");
    dashboard.classList.remove("hidden");
  }, 420);
});
