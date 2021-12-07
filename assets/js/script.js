let playButton = document.getElementById("play-btn")
let question = document.getElementById("question")

let shuffledQuestions, currentQuestionIndex

let availableQuestions = []
let questionCounter = 0

// Array of questions that will be shuffled through and displayed after a question is answered.
let questions = [{

        question: "In what year was Nintendo founded?",
        answer: {
            1: "1889 -",
            2: "1989",
            3: "1934",
            4: "1962"
        }
    },

    {
        question: "What is the best selling videogame of all time?",
        answer: {
            1: "Tetris",
            2: "Call of Duty",
            3: "Minecraft -",
            4: "Fortnite"
        }
    },

    {
        question: "What is the most expensive video game made to date?",
        answer: {
            1: "God of War",
            2: "GTA V -",
            3: "Call of Duty: Modern Warfare",
            4: "Skyrim"
        }
    },

    {

        question: "How much did a virtual reality device cost in 1980?",
        answer: {
            1: "$49,000 -",
            2: "$17,000",
            3: "$62,000",
            4: "$32,000"
        }
    },

    {

        question: "What position did the creator of the Game Boy have at Nintendo?",
        answer: {
            1: "CFO",
            2: "Intern",
            3: "Video Game Designer",
            4: "Janitor-"
        }
    },

    {

        question: "Mario first appeared in what video game?",
        answer: {
            1: "Mario Kart",
            2: "Super Mario Brothers",
            3: "Donkey Kong -",
            4: "Super Mario Baseball"
        }
    },

    {

        question: "What was the first video game to be played in outer space?",
        answer: {
            1: "StarCraft -",
            2: "Pong",
            3: "World of Warcraft",
            4: "Tetris"
        }
    },

    {

        question: "What world market generates the most revenue in the video game industry?",
        answer: {
            1: "England",
            2: "China -",
            3: "Japan",
            4: "United States"
        }
    },

    {

        question: "What is the highest-grossing movie based on a video game?",
        answer: {
            1: "Doom",
            2: "Resident Evil: Afterlife",
            3: "Tomb Raider",
            4: "Detective Pikachu -"
        }
    },

    {

        question: "What is the highest-selling gaming console to date?",
        answer: {
            1: "Nintendo Switch",
            2: "Playstation 2 -",
            3: "Xbox 360",
            4: "Nintendo Wii"
        }
    },
]

// When the play button is clicked it will initiate the game and hide elements to "load" the quiz
playButton.addEventListener("click", startGame)

/**
 * Hides welcome screen elements and unhides the quiz content including the heading, questions, and choices
 */
function startGame() {

    let Welcome = document.getElementById("welcome")
    let quizHeading = document.getElementById("quiz-heading")
    let quizContent = document.getElementById("question-area")
    let scores = document.getElementById("score-area")

    console.log("Game Started")
    playButton.classList.add("hidden")
    Welcome.classList.add("hidden")
    quizHeading.classList.remove("hidden")
    quizContent.classList.remove("hidden")
    scores.classList.remove("hidden")
    availableQuestions = [...questions]

    nextQuestion();
}

/**
 * Displays the next question via the shuffled array of questions
 */
function nextQuestion(){
    questionCounter++
    let currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[currentQuestionIndex]
    question.innerText = currentQuestion.question
}


