"use strict";

const timer = document.getElementById("timer");
const startBttn = document.getElementById("start");
const stopBttn = document.getElementById("stop");
const resetBttn = document.getElementById("reset");

let hours = "00";
let minutes = "00";
let seconds = "00";

let currentTime = ``;
let start = false;
let runAgainAt = Date.now();
function startTimer(event) {
  if (!start) {
    if (Date.now() > runAgainAt) {
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

      runAgainAt = Date.now() + 900;
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

startBttn.addEventListener("click", function (event) {
  startTimer(event);
});
stopBttn.addEventListener("click", function (event) {
  stopTimer(event);
});
resetBttn.addEventListener("click", function (event) {
  resetTimer(event);
});
