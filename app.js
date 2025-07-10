let focus = document.getElementById("focus");
let short = document.getElementById("short");
let long = document.getElementById("long");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let time = document.getElementById("time");

let timer;
let count = 59;
let mincount = 24;
let paused = true;

time.textContent = `${mincount + 1}:00`;

const appendZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const updateDisplay = () => {
  time.textContent = `${appendZero(mincount)}:${appendZero(count)}`;
};

const startTimer = () => {
  if (paused) {
    paused = false;
    timer = setInterval(() => {
      if (count === 0) {
        if (mincount === 0) {
          clearInterval(timer);
          alert("⏰ Time's up!");
          showButton(start);
          hideButton(pause);
          hideButton(reset);
          resetTime();
          return;
        } else {
          mincount--;
          count = 59;
        }
      } else {
        count--;
      }
      updateDisplay();
    }, 1000);
    hideButton(start);
    showButton(pause);
    showButton(reset);
  }
};

const pauseTimer = () => {
  paused = true;
  clearInterval(timer);
  showButton(start);
  hideButton(pause);
};

const resetTime = () => {
  pauseTimer();
  mincount = 24;
  count = 59;
  updateDisplay();
  hideButton(reset);
};

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTime);

focus.addEventListener("click", () => {
  pauseTimer();
  mincount = 24;
  count = 59;
  updateDisplay();
});

short.addEventListener("click", () => {
  pauseTimer();
  mincount = 4;
  count = 59;
  updateDisplay();
});

long.addEventListener("click", () => {
  pauseTimer();
  mincount = 14;
  count = 59;
  updateDisplay();
});

const showButton = (btn) => {
  btn.classList.remove("hide");
  btn.classList.add("show");
};

const hideButton = (btn) => {
  btn.classList.remove("show");
  btn.classList.add("hide");
};
