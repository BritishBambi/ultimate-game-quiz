const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");
const finalScore = localStorage.getItem("finalScore");
const finalScoreText = document.getElementById("final-score");

const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highScores);
finalScoreText.innerText = finalScore;

username.addEventListener("keyup", () =>{
    saveScore.disabled = !username.value;
})

saveHighScore = (e) => {
    console.log("Clicked the save button!");
    e.preventDefault();

    const score = {
        score: finalScore,
        name: username.value
    };
    highScores.push(score);
    console.log(highScores)
} 