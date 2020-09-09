let startButton = document.querySelector(".start-button");
let gameButton = document.querySelectorAll(".game-button");
let computer = document.querySelectorAll(".computer-div")
let computerButton = document.querySelectorAll(".computer-button")
let message = document.querySelector(".message");
let score  = document.querySelector(".score");

let userScore = 0;
let computerScore = 0;

startButton.addEventListener("click",function(){
    console.log(this.innerHTML);
    let status = this.innerHTML;
    message.innerHTML = "Select a choice"
    startButton.disabled = true;
    enableGameButtons();
});

for(let i = 0;i < gameButton.length;i++){
    gameButton[i].addEventListener("click",function(){
        // console.log(this.innerHTML);
        let userChoice = this.innerHTML;
        let index = Math.floor(Math.random()*3); 
        // console.log(computerButton[index].innerHTML);
        let computerChoice = computerButton[index].innerHTML;
        let compchoice = ".computer"+computerChoice;
        document.querySelector(compchoice).style.background = "rgb(175, 199, 255)"
        if( (userChoice==='Rock' && computerChoice==='Scissors') || 
            (userChoice==='Paper' && computerChoice==='Rock') || 
            (userChoice==='Scissors' && computerChoice==='Paper') )
            {
            message.innerHTML = "Hurray!! You won this round"
            userScore = userScore + 1;
            }
        else if(userChoice===computerChoice)
        {
            message.innerHTML = "It's a Draw"
        }
        else
        {
            message.innerHTML = "Oh No!! Computer won this round"
            computerScore = computerScore + 1;
        }
        disableGameButtons();
        startButton.innerHTML = "Play Again"
        startButton.disabled = false;
        score.innerHTML = userScore+":"+computerScore;
        setTimeout(function(){
            document.querySelector(compchoice).style.background = "none"
        },1500);
        
    });
};


function enableGameButtons(){
    document.querySelector(".rock-btn").disabled = false;
    document.querySelector(".paper-btn").disabled = false;
    document.querySelector(".scissors-btn").disabled = false;
}
function disableGameButtons(){
    document.querySelector(".rock-btn").disabled = true;
    document.querySelector(".paper-btn").disabled = true;
    document.querySelector(".scissors-btn").disabled = true;
}