const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");


const finalScore = localStorage.getItem("finalScore")
const finalScoreText = document.getElementById("final-score")
finalScoreText.innerText = finalScore;

username.addEventListener("keyup", () =>{
    saveScore.disabled = !username.value;
})

saveHighScore = (e) => {
    console.log("Clicked the save button!");
    e.preventDefault();
}