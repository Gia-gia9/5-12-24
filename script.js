let timeRemaining = 10;

const timerDisplay = document.getElementById('timer-value');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

function startTimer() {
  timerInterval = setInterval(() => {
  if (timeRemaining > 0 ) {
    timeRemaining--;
    timerDisplay.textContent = `remaining time ${timeRemaining}`
  } else {
    (timeRemaining === 0) 
      timerDisplay.textContent = "Time’s up!";
    setTimeout(() => {
    clearInterval(timerInterval)
  }, 1000);
    
  }
}, 1000);
}
function stopTimer() {
  if (timerInterval) {
      clearInterval(timerInterval); 
      timerDisplay.textContent = `Timer stopped at ${timeRemaining}s`;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timeRemaining = 10; 
  timerDisplay.textContent = `Remaining time: ${timeRemaining}s`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);