// variables for switching between screens
var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('.submit-all');
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

startBtn.addEventListener ('click', function timer() {
    var downloadTimer = setInterval( 
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
 
// quiz questions
const questions = [
    {
        question: ' What is an API? ',
        answers: [
            {text: 'Set of methods, properties, events, and urls that developers use to interact with components of a users web browser.', correct: true},
            {text: 'When we open a webpage the browser creates a tree of objects that represent the opened page.', correct: false},
            {text: 'Saves new versions of a file thats being worked on.', correct: false},
            {text: 'A folder for projects.', correct: false},
        ]
    },
    {
        question: ' What is a DOM? ',
        answers: [
            {text: 'Indicates how much space we want around the outside of an element.', correct: false},
            {text: 'When we open a webpage the browser creates a tree of objects that represent the opened page.', correct: true},
            {text: 'Adds spacing around the content inside an element.', correct: false},
            {text: 'Specifies the location of the external source.', correct: false},
        ]
    },
    {
        question: ' True or False: An "if" statement allows you to efficently write a loop that needs to be executed a specific number of times. ',
        answers: [
            {text: 'True', correct: false},
            {text: 'False', correct: true},
        ]
    },
    {
        question: ' What kind of response cycle do we typically use on a webpage? ',
        answers: [
            {text: 'Recommend response cycle', correct: false},
            {text: 'Relate response cycle', correct: false},
            {text: 'Request response cycle', correct: true},
            {text: 'Click response cycle', correct: false},
        ]
    }
];

// quiz section variables
var questionEl = document.querySelector('.question')
var answerBtn = document.querySelector('#answer');
var nextBtn = document.querySelector('#next-btn');
let currentIndexQuestion = 0;
// score will probably = time
let score = 0;


// this function allows us to add the questions and answers to the webpage
function startQuiz(){
    currentIndexQuestion = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
};


// this function calls on the var questions and answers in order to have them show when we call start quiz.
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentIndexQuestion];
    // do + time maybe?
    let questionNum = currentIndexQuestion + 1;
    questionEl.innerHTML = questionNum + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
};

// this function removes the answer 1 - 4 buttons on the html sheet
function resetState() {
    nextBtn.style.display = 'none';
    while (answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

// this function allows for the selection of the correct answer.
function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = 'true'
    });
    nextBtn.style.display = 'block';
};

// this function will show the score 
function showScore() {
    resetState();
    submitBtn.innerHTML = "Highscores";
}

// this function allows you to click from question to question 
function handleNextButton() {
    currentIndexQuestion++;
    if (currentIndexQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener( 'click', () => {
    if(currentIndexQuestion < questions.length) {
        handleNextButton()
    }
})
startQuiz();