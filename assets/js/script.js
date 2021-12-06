let playButton = document.getElementById("play-btn")

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