let playButton = document.getElementById("play-btn")
let question = document.getElementById("question")

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

playButton.addEventListener("click", startGame)

function startGame() {

    let Welcome = document.getElementById("welcome")
    let quizHeading = document.getElementById("quiz-heading")
    let quizContent = document.getElementById("question-area")
    let scores = document.getElementById("score-area")

    console.log("Game Started");
    playButton.classList.add("hidden");
    Welcome.classList.add("hidden");
    quizHeading.classList.remove("hidden");
    quizContent.classList.remove("hidden");
    scores.classList.remove("hidden");
}



