const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");
const finalScore = localStorage.getItem("finalScore");
const finalScoreText = document.getElementById("final-score");

const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

const maxHighScores = 5;

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
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign("/index.html");

    
} 