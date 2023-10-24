// Timer
let timer;
let timerRunning = false;
let timerSeconds = 0;

document.getElementById("startTimer").addEventListener("click", function () {
    if (!timerRunning) {
        timer = setInterval(function () {
            timerSeconds++;
            const hours = Math.floor(timerSeconds / 3600);
            const minutes = Math.floor((timerSeconds % 3600) / 60);
            const seconds = timerSeconds % 60;
            document.getElementById("timerDisplay").innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
        timerRunning = true;
    }
});

document.getElementById("stopTimer").addEventListener("click", function () {
    clearInterval(timer);
    timerRunning = false;
});

document.getElementById("resetTimer").addEventListener("click", function () {
    clearInterval(timer);
    timerRunning = false;
    timerSeconds = 0;
    document.getElementById("timerDisplay").innerHTML = "00:00:00";
});

// Stopwatch
let stopwatch;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

document.getElementById("startStopwatch").addEventListener("click", function () {
    if (!stopwatchRunning) {
        stopwatch = setInterval(function () {
            stopwatchSeconds++;
            const hours = Math.floor(stopwatchSeconds / 3600);
            const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
            const seconds = stopwatchSeconds % 60;
            document.getElementById("stopwatchDisplay").innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
        stopwatchRunning = true;
    }
});

document.getElementById("stopStopwatch").addEventListener("click", function () {
    clearInterval(stopwatch);
    stopwatchRunning = false;
});

document.getElementById("resetStopwatch").addEventListener("click", function () {
    clearInterval(stopwatch);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    document.getElementById("stopwatchDisplay").innerHTML = "00:00:00";
});
