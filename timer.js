let time = 5;
let countdown; // Declare a variable to hold the countdown interval
let isTimerRunning = false; // Flag to track whether the timer is running
const timerDisplay = document.getElementById('timer');

// Function to start the timer
function startTimer(seconds) {
    countdown = setInterval(() => {
        seconds--;

        updateTimerDisplay(seconds);

        if (seconds <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Time's up!";
            alert("Ohh, You Lose!!");
        }
    }, 1000);
}

// Function to reset the timer
function resetTimer(seconds) {
    clearInterval(countdown);
    startTimer(seconds);
}

function updateTimerDisplay(seconds) {
  timerDisplay.innerText = "Time Left: " + seconds;
}

const setTime = function (t) {
  time = t;
};