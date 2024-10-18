// const button = document.getElementById("randomButton");

// function randomPosition() {
//   const x = Math.random() * (window.innerWidth - 100);
//   const y = Math.random() * (window.innerHeight - 50);
//   button.style.position = "absolute";
//   button.style.left = `${x}px`;
//   button.style.top = `${y}px`;
// }

// button.addEventListener("mouseenter", () => {
//   if (Math.random() < 0.5) {
//     randomPosition();
//   }
// });

// button.addEventListener("click", () => {
//   randomPosition();
// });

// -----------------------------------------------------------------
let stopwatchInterval;
let stopwatchSeconds = 0;

function updateStopwatchDisplay() {
  const hours = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );

  const seconds = String(stopwatchSeconds % 60).padStart(2, "0");

  document.getElementById(
    "stopwatchDisplay"
  ).innerText = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("startStopwatch").addEventListener("click", () => {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      updateStopwatchDisplay();
    }, 1000);
  }
});

document.getElementById("stopStopwatch").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
});

document.getElementById("resetStopwatch").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
});

// Timer
let timerInterval;
let timerSeconds = 0;

document.getElementById("setTimer").addEventListener("click", () => {
  const inputTime = parseInt(document.getElementById("timerInput").value);
  
  if (!isNaN(inputTime)) {
    timerSeconds = inputTime;
    updateTimerDisplay();
  }
});

function updateTimerDisplay() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  document.getElementById("timerDisplay").innerText = `${minutes}:${seconds}`;
}

document.getElementById("startTimer").addEventListener("click", () => {
  if (!timerInterval && timerSeconds > 0) {
    timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("Timer finished!");
      }
    }, 1000);
  }
});

document.getElementById("stopTimer").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});
