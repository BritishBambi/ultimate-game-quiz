// Sets highscore list as the unordered list created in the html
const highScoreList = document.getElementById("highScore-list");
// Defines Highscores as the highscores saved in the local storage. If there is no array detected then it create then it will bring up an empty array.
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// Prints out tthe array of high scores into an unordered list. The map ensures that the name and score are presented in the correct order
// The join will present the information from the array as a string. 
highScoreList.innerHTML = highScores
.map( score =>{
    return (`<li class="high-score">${score.name} - ${score.score}</li>`);
})
.join("")
;