const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let hours = "00";
let minutes = "00";
let seconds = "00";

let currentTime = ``;
let start = false;
let runAgain = Date.now();
function startTimer(event) {
  if (!start) {
    if (Date.now() > runAgain) {
      timer.innerText = `${hours}:${minutes}:${seconds}`;
      seconds++;
      if (parseInt(seconds) < 10) {
        seconds = "0" + seconds;
      }
      if (seconds == 60) {
        seconds = "00";
        minutes++;
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
      }
      if (minutes == 60) {
        seconds = "00";
        minutes = "00";
        hours++;
        if (hours < 10) {
          hours = `0${hours}`;
        }
      }

      runAgain = Date.now() + 900;
    }
  }
  requestAnimationFrame(startTimer);
}
function setStartFalse() {
  start = false;
}

function resetTimer(event) {
  seconds = "00";
  minutes = "00";
  hours = "00";
  timer.innerText = `${hours}:${minutes}:${seconds}`;
  start = true;
}
function stopTimer(event) {
  let currentTime = timer.innerText;
  timer.innerText = currentTime;
  start = true;
}

startBtn.addEventListener("click", function (event) {
  startTimer(event);
  //Disabled
  startDisabled();
});
stopBtn.addEventListener("click", function (event) {
  stopTimer(event);
  // Disabled
  stopDisabled();
});
resetBtn.addEventListener("click", function (event) {
  resetTimer(event);
  stopDisabled();
});

function stopDisabled() {
  startBtn.disabled = false;
  startBtn.style.opacity = 1;
  stopBtn.disabled = true;
  stopBtn.style.opacity = 0.3;
}

function startDisabled() {
  startBtn.disabled = true;
  startBtn.style.opacity = 0.3;
  stopBtn.disabled = false;
  stopBtn.style.opacity = 1;
}
