// The code for this quiz was inspired by https://www.youtube.com/watch?v=riDzcEQbX6k&t however I personalised it and only took the functionality of it into my own quiiz.

let playButton = document.getElementById("play-btn")
let question = document.getElementById("question")
let choices = Array.from(document.getElementsByClassName("option-text"))

let shuffledQuestions, currentQuestionIndex

let acceptingAnswers = false
let availableQuestions = []
let questionCounter = 0
let currentQuestion = {}

const maxQuestions = 10


// Array of questions that will be shuffled through and displayed after a question is answered.
let questions = [{
        question: "In what year was Nintendo founded?",
        option1: "1889",
        option2: "1989",
        option3: "1934",
        option4: "1963",
        answer: 1
    },

    {
        question: "What is the best selling videogame of all time?",
        option1: "Tetris",
        option2: "Call of Duty",
        option3: "Minecraft",
        option4: "Fortnite",
        answer: 3

    },

    {
        question: "What is the most expensive video game made to date?",
        option1: "God of War",
        option2: "GTA V",
        option3: "Call of Duty: Modern Warfare",
        option4: "Skyrim",
        answer: 2
    },

    {
        question: "How much did a virtual reality device cost in 1980?",
        option1: "$49,000",
        option2: "$17,000",
        option3: "$62,000",
        option4: "$32,000",
        answer: 1

    },

    {

        question: "What position did the creator of the Game Boy have at Nintendo?",
        option1: "CFO",
        option2: "Intern",
        option3: "Video Game Designer",
        option4: "Janitor",
        answer: 4
    },

    {

        question: "Mario first appeared in what video game?",
        option1: "Mario Kart",
        option2: "Super Mario Brothers",
        option3: "Donkey Kong",
        option4: "Super Mario Baseball",
        answer: 3
    },

    {

        question: "What was the first video game to be played in outer space?",
        option1: "StarCraft ",
        option2: "Pong",
        option3: "World of Warcraft",
        option4: "Tetris",
        answer: 1
    },

    {

        question: "What world market generates the most revenue in the video game industry?",
        option1: "England",
        option2: "China",
        option3: "Japan",
        option4: "United States",
        answer: 2
    },

    {

        question: "What is the highest-grossing movie based on a video game?",
        option1: "Doom",
        option2: "Resident Evil: Afterlife",
        option3: "Tomb Raider",
        option4: "Detective Pikachu",
        answer: 4
    },

    {

        question: "What is the highest-selling gaming console to date?",
        option1: "Nintendo Switch",
        option2: "Playstation 2",
        option3: "Xbox 360",
        option4: "Nintendo Wii",
        answer: 2
    },
]

// When the play button is clicked it will initiate the game and hide elements to "load" the quiz
playButton.addEventListener("click", startGame)

/**
 * Hides welcome screen elements and unhides the quiz content including the heading, questions, and choices
 */
function startGame() {

    let homeButton = document.getElementById("home-btn")
    let Welcome = document.getElementById("welcome")
    let description = document.getElementById("description")
    let quizHeading = document.getElementById("quiz-heading")
    let quizContent = document.getElementById("question-area")
    let scores = document.getElementById("score-area")

    console.log("Game Started")
    playButton.classList.add("hidden")
    Welcome.classList.add("hidden")
    description.classList.add("hidden")
    homeButton.classList.remove("hidden")
    quizHeading.classList.remove("hidden")
    quizContent.classList.remove("hidden")
    scores.classList.remove("hidden")
    availableQuestions = [...questions]

    nextQuestion();

}

/**
 * Displays the next question via the shuffled array of questions
 */
function nextQuestion() {
    
    questionCounter++;
    let currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[currentQuestionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    })

    availableQuestions.splice(currentQuestionIndex, 1);

    acceptingAnswers = true;
}
choices.forEach(option =>  {
    option.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        nextQuestion();
    })
})