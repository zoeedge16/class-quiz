// variables for switching between screens
var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('#question');
var submitBtn = document.querySelector('.submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
// Should i put let or var?
// variables for timer
let remainingTimeEL = document.querySelector('#remainingTime');
var secondsLeft = 100;

// variables for questions
// var questionOne = document.querySelector('.question-one')
// var questionTwo = document.querySelector('.question-two')
// var questionThree = document.querySelector('.question-three')
// var questionFour = document.querySelector('.question-four')
// var questionOneEl = document.querySelector('#one')
// var questionTwoEl = document.querySelector('#two')
// var questionThreeEl = document.querySelector('#three')
// var questionFourEl = document.querySelector('#four')
var currentIndexQuestion = 0;
// score will probably = time
var score = 0;

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

// the eventListeners that take you from question to question
// score will probably = time

var questions = [
    {
        question: ' What is an API? ',
        answers: [
            {text: 'Set of methods, properties, events, and urls that developers use to interact with components of a users web browser.', correcrt: true},
            {text: 'When we open a webpage the browser creates a tree of objects that represent the opened page.', correcrt: false},
            {text: 'Saves new versions of a file thats being worked on.', correcrt: false},
            {text: 'A folder for projects.', correcrt: false},
        ]
    },
    {
        question: ' What is a DOM? ',
        answers: [
            {text: 'Indicates how much space we want around the outside of an element.', correcrt: false},
            {text: 'When we open a webpage the browser creates a tree of objects that represent the opened page.', correcrt: true},
            {text: 'Adds spacing around the content inside an element.', correcrt: false},
            {text: 'Specifies the location of the external source.', correcrt: false},
        ]
    },
    {
        question: ' What is an API? ',
        answers: [
            {text: 'Set of methods, properties, events, and urls that developers use to interact with components of a users web browser.', correcrt: true},
            {text: 'When we open a webpage the browser creates a tree of objects that represent the opened page.', correcrt: false},
            {text: 'Saves new versions of a file thats being worked on.', correcrt: false},
            {text: 'A folder for projects.', correcrt: false},
        ]
    },
    {
        question: ' What is an API? ',
        answers: [
            {text: 'Set of methods, properties, events, and urls that developers use to interact with components of a users web browser.', correcrt: true},
            {text: 'When we open a webpage the browser creates a tree of objects that represent the opened page.', correcrt: false},
            {text: 'Saves new versions of a file thats being worked on.', correcrt: false},
            {text: 'A folder for projects.', correcrt: false},
        ]
    }
];

function startQuiz(){
    currentIndexQuestion = 0;
    score = 0;
    submitButton.innerHTML = "Submit";
    showQuestion();
};

function showQuestion(){
    var currentQuestion = questions
}