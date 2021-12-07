let playButton = document.getElementById("play-btn")
let question = document.getElementById("question")

let shuffledQuestions, currentQuestionIndex

// Array of questions that will be shuffled through and displayed after a question is answered.
let questions = [{

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {
        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {
        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
        }
    },

    {

        question: "Question Text",
        answer: {
            1: "Answer1",
            2: "Answer2",
            3: "Answer3",
            4: "Answer4"
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

    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0

    nextQuestion();
}

/**
 * Displays the next question via the shuffled array of questions
 */
function nextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * Writes the question text to be replaced with the question from the array
 */
function showQuestion(questions){
    question.innerText = questions.question
}

