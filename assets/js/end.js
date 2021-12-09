const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");
username.addEventListener("keyup", () =>{
    saveScore.disabled = !username.value;
})

saveHighScore = (e) => {
    console.log("Clicked the save button!");
    e.preventDefault();
}