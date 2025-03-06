let currentCategory = '';
let currentDifficulty = '';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 15;
let timerInterval;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startGameBtn = document.getElementById('start-game-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const timerText = document.getElementById('timer-text');
const timerCircle = document.getElementById('timer-circle');
const questionDisplay = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const scoreDisplay = document.getElementById('score');
const finalScoreDisplay = document.getElementById('final-score');

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentCategory = btn.dataset.category;
        updateStartGameButton();
    });
});

document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentDifficulty = btn.dataset.difficulty;
        updateStartGameButton();
    });
});

function updateStartGameButton() {
    startGameBtn.disabled = !(currentCategory && currentDifficulty);
}

async function fetchQuestions() {
    const url = `https://opentdb.com/api.php?amount=20&category=${getCategoryId(currentCategory)}&difficulty=${currentDifficulty.toLowerCase()}&type=multiple`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        questions = data.results.map(q => ({
            ...q,
            options: shuffleArray([...q.incorrect_answers, q.correct_answer])
        }));
        startGame();
    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Failed to fetch questions. Please try again.');
    }
}

function getCategoryId(category) {
    const categoryMap = {
        'General Knowledge': 9,
        'Science': 17,
        'History': 23,
        'Geography': 22,
        'Sports': 21,
        'Movies': 11
    };
    return categoryMap[category];
}

function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    updateScoreDisplay();
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;

    questionDisplay.innerHTML = decodeHTMLEntities(question.question);

    answersContainer.innerHTML = '';
    question.options.forEach((option, index) => {
const btn = document.createElement('button');
btn.classList.add('answer-btn');
btn.innerHTML = decodeHTMLEntities(option);
btn.addEventListener('click', () => checkAnswer(option));
answersContainer.appendChild(btn);
});

    startTimer();
}

function startTimer() {
    timeRemaining = 15;
    timerText.textContent = timeRemaining;
    const circumference = 2 * Math.PI * 45; 
    timerCircle.style.strokeDasharray = circumference;
    timerCircle.style.strokeDashoffset = '0';

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerText.textContent = timeRemaining;

        const progress = timeRemaining / 15;
        const offset = circumference * (1 - progress);
        timerCircle.style.strokeDashoffset = offset;

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            showCorrectAnswer();
        }
    }, 1000);
}

function showCorrectAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');

    buttons.forEach(btn => {
        btn.disabled = true;
        if (decodeHTMLEntities(btn.innerHTML) === decodeHTMLEntities(currentQuestion.correct_answer)) {
            btn.classList.add('correct');
        }
    });

    setTimeout(nextQuestion, 2000);
}

function checkAnswer(selectedOption) {
    clearInterval(timerInterval);
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');

    buttons.forEach(btn => {
        btn.disabled = true;
        if (decodeHTMLEntities(btn.innerHTML) === decodeHTMLEntities(currentQuestion.correct_answer)) {
            btn.classList.add('correct');
        }

        if (decodeHTMLEntities(btn.innerHTML) === decodeHTMLEntities(selectedOption) &&
            selectedOption !== currentQuestion.correct_answer) {
            btn.classList.add('incorrect');
        }
    });

    if (selectedOption === currentQuestion.correct_answer) {
        score++;
        updateScoreDisplay();
    }

    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    gameScreen.style.display = 'none';
    endScreen.style.display = 'block';
    finalScoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function decodeHTMLEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}

startGameBtn.addEventListener('click', fetchQuestions);
playAgainBtn.addEventListener('click', () => {
    endScreen.style.display = 'none';
    startScreen.style.display = 'block';
    currentCategory = '';
    currentDifficulty = '';
    document.querySelectorAll('.category-btn, .difficulty-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    startGameBtn.disabled = true;
});