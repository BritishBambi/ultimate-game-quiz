//Code to functionally get working high score array from: https://www.youtube.com/watch?v=o3MF_JmQxYg&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9

const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");
const finalScore = localStorage.getItem("finalScore");
const finalScoreText = document.getElementById("final-score");

//Gets the highscores array from the local storage or presents a new empty one
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

//Writes the final score to the page 
finalScoreText.innerText = finalScore;

//Listens out for a keyup before the user is able to click the save button
username.addEventListener("keyup", () =>{
    saveScore.disabled = !username.value;
});

//Saves the score and username and attempts to push it to the highscores array. Will ensure that it is valid enough to be in the top 5 first.
saveHighScore = (e) => {
    console.log("Clicked the save button!");
    e.preventDefault();

    const score = {
        score: finalScore,
        name: username.value
    };

    //Pushes score to the array and sorts into order of highest score
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(5);

    //Converts the array to a string so we can use it on the highscores screen and then returns the user home
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign("index.html");
}; 