// where all my variables are.
var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('.answer');
var submitBtn = document.querySelector('.submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
// Should i put let or var?
let remainingTimeEL = document.querySelector('#remainingTime');
var secondsLeft = 100;

// the eventLiteners that allow the switch between start, quiz, and end.
startBtn.addEventListener ('click', function () {
    startEl.style.display = 'none';
    quizEl.style.display = null;
    endEl.style.display = 'none';
});

answerBtn.addEventListener ('click', function () {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = null;
});

submitBtn.addEventListener ('click', function () {
    startEl.style.display = null;
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
});

// making the timer 

startBtn.addEventListener ('click', function() {
    const downloadTimer = setInterval( 
        () => {
            if (secondsLeft <= 0) {
            clearInterval(downloadTimer);
            };
            remainingTimeEL.value = secondsLeft;
            remainingTimeEL.textContent = secondsLeft;
            secondsLeft -= 1;
    },
    1000);
    
});
